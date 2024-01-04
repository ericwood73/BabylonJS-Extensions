import { AbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { Behavior } from "@babylonjs/core/Behaviors/behavior";
import { Scene } from "@babylonjs/core/scene";
import {
    requestCapture,
    requestRelease,
    releaseCurrent,
    getCapturingId,
} from "./pointer-events-capture";
import { getCanvasRectOrNull } from "./util";

// Module level variable for holding the current scene
let _scene: Scene | null = null;

// Module level variable to hold the count of behavior instances that are currently capturing pointer events
// on entry.  This is used to determine if we need to start or stop observing pointer movement.
let captureOnEnterCount = 0;

// Map used to store instance of the PointerEventsCaptureBehavior for a mesh
// We do this because this gets checked on pointer move and we don't want to
// use getBehaviorByName() because that is a linear search
const meshToBehaviorMap = new WeakMap<
    AbstractMesh,
    PointerEventsCaptureBehavior
>();

const startCaptureOnEnter = (scene: Scene) => {
    // If we are not in a browser, do nothing
    if (typeof document === "undefined") {
        return;
    }
    if (captureOnEnterCount === 0) {
        document.addEventListener("pointermove", onPointerMove);
        _scene = _scene ?? scene;
        console.log(
            "PointerEventsCaptureBehavior: Starting observation of pointer move events."
        );
        _scene.onDisposeObservable.add(doStopCaptureOnEnter);
    }
    captureOnEnterCount++;
};

const doStopCaptureOnEnter = () => {
    document.removeEventListener("pointermove", onPointerMove);
    _scene = null;
    console.log(
        "PointerEventsCaptureBehavior: Stopping observation of pointer move events."
    );
    captureOnEnterCount = 0;
};

const stopCaptureOnEnter = () => {
    // If we are not in a browser, do nothing
    if (typeof document === "undefined") {
        return;
    }

    // If we are not observing pointer movement, do nothing
    if (!_scene) {
        return;
    }

    captureOnEnterCount--;
    if (captureOnEnterCount <= 0) {
        doStopCaptureOnEnter();
    }
};

// Module level function used to determine if an entered mesh should capture pointer events
const onPointerMove = (evt: PointerEvent) => {
    if (!_scene) {
        return;
    }

    const canvasRect = getCanvasRectOrNull(_scene);
    if (!canvasRect) {
        return;
    }

    // get the picked mesh, if any
    const pointerScreenX = evt.clientX - canvasRect.left;
    const pointerScreenY = evt.clientY - canvasRect.top;

    let pointerCaptureBehavior: PointerEventsCaptureBehavior | undefined;
    const pickResult = _scene.pick(pointerScreenX, pointerScreenY, (mesh) => {
        // If the mesh has an instance of PointerEventsCaptureBehavior attached to it,
        // then we want to pick it
        return (
            (pointerCaptureBehavior = meshToBehaviorMap.get(mesh)) !== undefined
        );
    });

    let pickedMesh: AbstractMesh | null;
    if (pickResult.hit) {
        pickedMesh = pickResult.pickedMesh;
    } else {
        pickedMesh = null;
    }

    let capturingIdAsInt = parseInt(getCapturingId() || "");

    // if the picked mesh is the current capturing mesh, do nothing
    if (pickedMesh && pickedMesh.uniqueId === capturingIdAsInt) {
        return;
    }

    // If there is a capturing mesh and it is not the current picked mesh, or no
    // mesh is picked, release the capturing mesh
    if (
        capturingIdAsInt &&
        (!pickedMesh || pickedMesh.uniqueId !== capturingIdAsInt)
    ) {
        releaseCurrent();
    }

    // If there is a picked mesh and it is not the current capturing mesh, capture 
    // the pointer events.  Note that the current capturing mesh has already been 
    // released above
    if (pickedMesh) {
        pointerCaptureBehavior!.capturePointerEvents();
    }
};

/**
 * Behavior for any content that can capture pointer events, i.e. bypass the Babylon pointer event handling
 * and receive pointer events directly.  It will register the capture triggers and negotiate the capture and
 * release of pointer events.  Curerntly this applies only to HtmlMesh
 */
export class PointerEventsCaptureBehavior implements Behavior<AbstractMesh> {
    name = "PointerEventsCaptureBehavior";

    attachedMesh: AbstractMesh | null;
    _captureOnPointerEnter: boolean;

    constructor(
        private captureCallback: () => void,
        private releaseCallback: () => void,
        { captureOnPointerEnter = true } = {}
    ) {
        this.attachedMesh = null;
        this._captureOnPointerEnter = captureOnPointerEnter;

        // Warn if we are not in a browser
        if (typeof document === "undefined") {
            console.warn(
                `Creating an instance of PointerEventsCaptureBehavior outside of a browser.  The behavior will not work.`
            );
        }
    }

    set captureOnPointerEnter(captureOnPointerEnter: boolean) {
        if (this._captureOnPointerEnter === captureOnPointerEnter) {
            return;
        }
        this._captureOnPointerEnter = captureOnPointerEnter;
        if (this.attachedMesh) {
            if (this._captureOnPointerEnter) {
                startCaptureOnEnter(this.attachedMesh.getScene()!);
            } else {
                stopCaptureOnEnter();
            }
        }
    }

    init() {}

    attach(mesh: AbstractMesh) {
        // Add a reference to this behavior on the mesh.  We do this so we can get a
        // reference to the behavior in the onPointerMove function without relying on
        // getBehaviorByName(), which does a linear search of the behaviors array.
        this.attachedMesh = mesh;
        meshToBehaviorMap.set(mesh, this);
        if (this._captureOnPointerEnter) {
            startCaptureOnEnter(mesh.getScene()!);
        }
    }

    detach() {
        if (!this.attachedMesh) {
            return;
        }
        // Remove the reference to this behavior from the mesh
        meshToBehaviorMap.delete(this.attachedMesh);
        if (this.captureOnPointerEnter) {
            stopCaptureOnEnter();
        }
        this.attachedMesh = null;
    }

    dispose() {
        this.detach();
    }

    // Release pointer events
    releasePointerEvents() {
        if (!this.attachedMesh) {
            return;
        }
        requestRelease(this.attachedMesh.uniqueId.toString());
    }

    // Capture pointer events
    capturePointerEvents() {
        if (!this.attachedMesh) {
            return;
        }
        requestCapture(
            this.attachedMesh.uniqueId.toString(),
            this.captureCallback,
            this.releaseCallback
        );
    }
}

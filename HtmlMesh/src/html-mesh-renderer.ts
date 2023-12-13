import { Scene } from '@babylonjs/core/scene';
import { Matrix, Vector3 } from '@babylonjs/core/Maths/math';
import { Viewport } from '@babylonjs/core/Maths/math.viewport';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

import { HtmlMesh } from './html-mesh';
import { Camera } from '@babylonjs/core/Cameras/camera';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import { RenderingManager } from '@babylonjs/core/Rendering/renderingManager';
import { RenderingGroup } from '@babylonjs/core/Rendering/renderingGroup';

const fullZoomMinCameraRadius = 1;

// Not sure what this is.  It suspect it is a shortcut for converting world units to screen units
// and it is okay as long as the scale is the same for all three axes.
const cssTranslationScaleFactor = 100;

// Returns a function that ensures that HtmlMeshes are rendered before all other meshes.
// Note this will only be applied to group 0.  
// If neither mesh is an HtmlMesh, then the default render order is used
// This prevents HtmlMeshes from appearing in front of other meshes when they are behind them
type RenderOrderFunction = (subMeshA: SubMesh, subMeshB: SubMesh) => number;
const renderOrderFunc = (defaultRenderOrder: RenderOrderFunction): RenderOrderFunction => {
    return (subMeshA: SubMesh, subMeshB: SubMesh) => {
        const meshA = subMeshA.getMesh();
        const meshB = subMeshB.getMesh();

        // Use property check instead of instanceof since it is less expensive and
        // this will be called many times per frame
        const meshAIsHtmlMesh = meshA['isHtmlMesh'];
        const meshBIsHtmlMesh = meshB['isHtmlMesh'];
        if (meshAIsHtmlMesh) {
            return meshBIsHtmlMesh ?
                meshA.absolutePosition.z <= meshB.absolutePosition.z ? 1 : -1 :
                -1;
        }
        else {
            return meshBIsHtmlMesh ?
            1 :
            defaultRenderOrder(subMeshA, subMeshB);
        }
    }
};

/**
 * An instance of this is required to render HtmlMeshes in the scene.
 * if using HtmlMeshes, you must not set render order for group 0 using 
 * scene.setRenderingOrder.  You must instead pass the compare functions
 * to the HtmlMeshRenderer constructor.  If you do not, then your render
 * order will be overwritten if the HtmlMeshRenderer is created after and 
 * the HtmlMeshes will not render correctly (they will appear in front of
 * meshes that are actually in front of them) if the HtmlMeshRenderer is
 * created before.
 */
export class HtmlMeshRenderer {
    _maskRootNode?: TransformNode;
    _container?: HTMLElement;
    _containerId = 'css-container';
    _domElement?: HTMLElement;
    _cameraElement?: HTMLElement;
    _cache = {
        cameraData: { fov: 0, position: new Vector3(), style: '' },
        htmlMeshData: new WeakMap<object, { baseScaleFactor: number, style: string }>()
    };
    _width = 0;
    _height = 0;
    _widthHalf = 0;
    _heightHalf = 0;

    _cameraViewMatrix?: Matrix;
    _projectionMatrix?: Matrix;
    _cameraWorldMatrix?: Matrix;
    _viewport?: Viewport;

    // Create some refs to avoid creating new objects every frame
    _temp = {
        v0: new Vector3(),
        v1: new Vector3(),
        worldMin: new Vector3(),
        worldMax: new Vector3(),
        objectMatrix: Matrix.Identity(),
        viewportMatrix: Matrix.Identity(),
        maxZoomScreenSpaceTransform: Matrix.Identity(),
        maxZoomClipSpaceTransform: Matrix.Identity(),
        screenSpaceTransform: Matrix.Identity(),
        cameraViewMatrix: Matrix.Identity(),
        cameraWorldMatrix: Matrix.Identity(),
        cameraRotationMatrix: Matrix.Identity(),
        cameraWorldMatrixAsArray: new Array(16),
        vp: new Viewport(0, 0, 0, 0),
    };

    // Keep track of DPR so we can resize if DPR changes
    // Otherwise the DOM content will scale, but the mesh won't
    _lastDevicePixelRatio = window.devicePixelRatio;

    // Keep track of camera matrix changes so we only update the
    // DOM element styles when necessary
    _cameraMatrixUpdated = true;

    constructor(scene: Scene, {
        parentContainerId = null,
        defaultOpaqueRenderOrder = RenderingGroup.PainterSortCompare,
        defaultAlphaTestRenderOrder = RenderingGroup.PainterSortCompare,
        defaultTransparentRenderOrder = RenderingGroup.defaultTransparentSortCompare,
    }: {
        parentContainerId?: string | null,
        defaultOpaqueRenderOrder?: RenderOrderFunction,
        defaultAlphaTestRenderOrder?: RenderOrderFunction,
        defaultTransparentRenderOrder?: RenderOrderFunction,
    } = {}) {
        this.init(scene, parentContainerId, defaultOpaqueRenderOrder, defaultAlphaTestRenderOrder, defaultTransparentRenderOrder);
    }

    protected init(scene: Scene, parentContainerId: string | null, 
                   defaultOpaqueRenderOrder: RenderOrderFunction, 
                   defaultAlphaTestRenderOrder: RenderOrderFunction, 
                   defaultTransparentRenderOrder: RenderOrderFunction): void {
        // Create the DOM containers
        this._container = document.createElement('div');
        this._container.id = this._containerId;
        this._container.style.position = 'absolute';
        this._container.style.width = '100%';
        this._container.style.height = '100%';
        this._container.style.zIndex = '-1';

        let parentContainer = parentContainerId ?
            document.getElementById(parentContainerId) :
            document.body;

        if (!parentContainer) {
            parentContainer = document.body;
        }

        parentContainer.insertBefore(this._container, parentContainer.firstChild);

        this._domElement = document.createElement( 'div' );
        this._domElement.style.overflow = 'hidden';

        this._cameraElement = document.createElement( 'div' );

        this._cameraElement.style.webkitTransformStyle = 'preserve-3d';
        this._cameraElement.style.transformStyle = 'preserve-3d';
        
        this._cameraElement.style.pointerEvents = 'none';

        this._domElement.appendChild(this._cameraElement);
        this._container.appendChild(this._domElement);

        // Set the size and resize behavior
        this.setSize(scene.getEngine().getRenderWidth(), scene.getEngine().getRenderHeight());
        window.addEventListener('resize', e => {
            const engine = scene.getEngine();
            engine.resize();
            this.setSize(engine.getRenderWidth(), engine.getRenderHeight());
        });

        // Setup the maskRoot, the parent of all the masking meshes
        this._maskRootNode = new TransformNode("html-mesh-mask-root", scene);

        const boundCameraMatrixChanged = this.onCameraMatrixChanged.bind(this);
        
        const observeCamera = () => {
            const camera = scene.activeCamera;
            if (camera) {
                camera.onProjectionMatrixChangedObservable.add(boundCameraMatrixChanged);
                camera.onViewMatrixChangedObservable.add(boundCameraMatrixChanged);
            }
        }
        
        if (scene.activeCamera) {
            observeCamera();
        } else {
            scene.onActiveCameraChanged.add(observeCamera);
        };

        // We need to make sure that HtmlMeshes are rendered before all other meshes
        // so that they don't appear in front of meshes that are actually in front of them
        // Updating the render order isn't ideal, but it is the only way to acheive this
        // The implication is that an app using the HtmlMeshRendered must set the scene render order
        // via the HtmlMeshRendered constructor
        const opaqueRenderOrder = renderOrderFunc(defaultOpaqueRenderOrder);
        const alphaTestRenderOrder = renderOrderFunc(defaultAlphaTestRenderOrder);
        const transparentRenderOrder = renderOrderFunc(defaultTransparentRenderOrder);
        scene.setRenderingOrder(0, opaqueRenderOrder, alphaTestRenderOrder, transparentRenderOrder);

        scene.onAfterRenderObservable.add(() => {
            this.render(scene, scene.activeCamera as Camera);
        });

    }

    protected getSize(): { width: number, height: number } {
        return {
            width: this._width,
            height: this._height
        };
    }

    protected setSize(width: number, height: number): void {
        console.log("In setSize: ", width, height);
        this._width = width;
        this._height = height;
        this._widthHalf = this._width / 2;
        this._heightHalf = this._height / 2;

        (this._domElement as HTMLElement).style.width = width + 'px';
        (this._domElement as HTMLElement).style.height = height + 'px';

        (this._cameraElement as HTMLElement).style.width = width + 'px';
        (this._cameraElement as HTMLElement).style.height = height + 'px';
    }

    protected getCameraCSSMatrix(matrix: Matrix): string {
        const elements = matrix.m;

        return 'matrix3d(' +
            this.epsilon( elements[ 0 ] ) + ',' +
            this.epsilon( - elements[ 1 ] ) + ',' +
            this.epsilon( elements[ 2 ] ) + ',' +
            this.epsilon( elements[ 3 ] ) + ',' +
            this.epsilon( elements[ 4 ] ) + ',' +
            this.epsilon( - elements[ 5 ] ) + ',' +
            this.epsilon( elements[ 6 ] ) + ',' +
            this.epsilon( elements[ 7 ] ) + ',' +
            this.epsilon( elements[ 8 ] ) + ',' +
            this.epsilon( - elements[ 9 ] ) + ',' +
            this.epsilon( elements[ 10 ] ) + ',' +
            this.epsilon( elements[ 11 ] ) + ',' +
            this.epsilon( elements[ 12 ] ) + ',' +
            this.epsilon( - elements[ 13 ] ) + ',' +
            this.epsilon( elements[ 14 ] ) + ',' +
            this.epsilon( elements[ 15 ] ) +
        ')';
    }   

    protected getHtmlContentCSSMatrix(matrix: Matrix): string{
        const elements = matrix.m;
        const matrix3d = 'matrix3d(' +
            this.epsilon( elements[ 0 ] ) + ',' +
            this.epsilon( elements[ 1 ] ) + ',' +
            this.epsilon( elements[ 2 ] ) + ',' +
            this.epsilon( elements[ 3 ] ) + ',' +
            this.epsilon( - elements[ 4 ] ) + ',' +
            this.epsilon( - elements[ 5 ] ) + ',' +
            this.epsilon( - elements[ 6 ] ) + ',' +
            this.epsilon( - elements[ 7 ] ) + ',' +
            this.epsilon( elements[ 8 ] ) + ',' +
            this.epsilon( elements[ 9 ] ) + ',' +
            this.epsilon( elements[ 10 ] ) + ',' +
            this.epsilon( elements[ 11 ] ) + ',' +
            this.epsilon( elements[ 12 ] ) + ',' +
            this.epsilon( elements[ 13 ] ) + ',' +
            this.epsilon( elements[ 14 ] ) + ',' +
            this.epsilon( elements[ 15 ] ) +
        ')';

        return matrix3d;
    }  
    
    /**
     *
     * @param {HtmlMesh} htmlMesh
     * @param {BABYLON.Matrix} maxZoomTransform Screen space transform matrix when the camera is at max zoom
     * @param {BABYLON.Matrix} currentZoomTransform Screen space transform matrix when the camera is at its current zoom
     */
    protected renderHtmlMesh(htmlMesh: HtmlMesh) {
        if (!htmlMesh.element) {
            // nothing to render, so bail
            return;
        }

        let htmlMeshData = this._cache.htmlMeshData.get(htmlMesh);
        if (!htmlMeshData) {
            htmlMeshData = { baseScaleFactor: 1, style: '' };
            this._cache.htmlMeshData.set(htmlMesh, htmlMeshData);
        } 

        // If the htmlMesh content has changed, update the base scale factor
        if (htmlMesh.requiresUpdate) {   
            this.updateBaseScaleFactor(htmlMesh);
        }  

        // Now transform the element using the scale, the html mesh's world matrix, and the camera's world matrix
        // Make sure the camera world matrix is up to date
        if (!this._cameraWorldMatrix) {
            this._cameraWorldMatrix = htmlMesh.getScene().activeCamera?.getWorldMatrix();
        }
        if (!this._cameraWorldMatrix) {
            return;
        }

		const objectWorldMatrix = htmlMesh.getWorldMatrix();
        const scaledAndTranslatedObjectMatrix = this._temp.objectMatrix;
        scaledAndTranslatedObjectMatrix.copyFrom(objectWorldMatrix);

        // I didn't write the code this is based on, so it's not clear to me
        // why it is neccessary, but basically we are going to scale the entire 
        // matrix by 100, but we don't want the x and y scales to be affected so we 
        // multiply them by 1/100.  I think maybe this is just a shortcut for converting
        // the translation values from world units to screen units and it doesn't matter
        // what the scale is as long as it is the same for all three axes.
        scaledAndTranslatedObjectMatrix.multiplyAtIndex(0, 1 / cssTranslationScaleFactor * 
                htmlMeshData.baseScaleFactor);
        scaledAndTranslatedObjectMatrix.multiplyAtIndex(5, 1 / cssTranslationScaleFactor * 
                htmlMeshData.baseScaleFactor);
        
        scaledAndTranslatedObjectMatrix.setRowFromFloats(3, 
                -this._cameraWorldMatrix.m[12] + htmlMesh.position.x,
                -this._cameraWorldMatrix.m[13] + htmlMesh.position.y,
                this._cameraWorldMatrix.m[14] - htmlMesh.position.z,
                this._cameraWorldMatrix.m[15] * 0.00001);

        scaledAndTranslatedObjectMatrix.scaleToRef(cssTranslationScaleFactor, 
                scaledAndTranslatedObjectMatrix);

        const style = `translate(-50%, -50%) ${this.getHtmlContentCSSMatrix(
                scaledAndTranslatedObjectMatrix)}`;

        if ( htmlMeshData.style !== style ) {
            htmlMesh.element.style.webkitTransform = style;
            htmlMesh.element.style.transform = style;
        }

        if ( htmlMesh.element.parentNode !== this._cameraElement ) {
            this._cameraElement!.appendChild( htmlMesh.element );
        }
    }  

    /**
     *
     * @param {BABYLON.Scene} scene
     * @param {BABYLON.Camera} camera
     */
    protected render = (scene: Scene, camera: Camera) => {
        let needsUpdate = false;

        // Check for a camera change
        if (this._cameraMatrixUpdated) {
            this._cameraMatrixUpdated = false;
            needsUpdate = true;
        }

        // If the camera position has changed, then we also need to update
        if (camera.position.x !== this._cache.cameraData.position.x ||
            camera.position.y !== this._cache.cameraData.position.y ||
            camera.position.z !== this._cache.cameraData.position.z) {
            this._cache.cameraData.position.copyFrom(camera.position);
            needsUpdate = true;
        }

        // Check for a dpr change
        if (window.devicePixelRatio !== this._lastDevicePixelRatio) {
            this._lastDevicePixelRatio = window.devicePixelRatio;
            console.log("In render - dpr changed: ", this._lastDevicePixelRatio);
            needsUpdate = true;
        }

        // Check if any meshes need to be updated
        const meshesNeedingUpdate = scene.meshes.filter(mesh => mesh['isHtmlMesh'] && 
                (needsUpdate || (mesh as HtmlMesh).requiresUpdate));
        needsUpdate = needsUpdate || meshesNeedingUpdate.length > 0;

        if (!needsUpdate) {
            return;
        }

        // Get a projection matrix for the camera
        const projectionMatrix = camera.getProjectionMatrix();
        const fov = projectionMatrix.m[5] * this._heightHalf;

        if (this._cache.cameraData.fov !== fov) {
			if (camera.mode == Camera.PERSPECTIVE_CAMERA ) {
				this._domElement!.style.webkitPerspective = fov + 'px';
				this._domElement!.style.perspective = fov + 'px';
			} else {
				this._domElement!.style.webkitPerspective = '';
				this._domElement!.style.perspective = '';
			}
			this._cache.cameraData.fov = fov;
		}

        // Get the CSS matrix for the camera (which will include any camera rotation)
        if ( camera.parent === null ) {
            camera.computeWorldMatrix();
        }

        const cameraMatrixWorld = this._temp.cameraWorldMatrix;
        cameraMatrixWorld.copyFrom(camera.getWorldMatrix());
        const cameraRotationMatrix = this._temp.cameraRotationMatrix;
        cameraMatrixWorld.getRotationMatrix().transposeToRef(cameraRotationMatrix);

		const cameraMatrixWorldAsArray = this._temp.cameraWorldMatrixAsArray;
        cameraMatrixWorld.copyToArray(cameraMatrixWorldAsArray);

        cameraMatrixWorldAsArray[1] = cameraRotationMatrix.m[1];
		cameraMatrixWorldAsArray[2] = -cameraRotationMatrix.m[2];
		cameraMatrixWorldAsArray[4] = -cameraRotationMatrix.m[4];
		cameraMatrixWorldAsArray[6] = -cameraRotationMatrix.m[6];
		cameraMatrixWorldAsArray[8] = -cameraRotationMatrix.m[8];
		cameraMatrixWorldAsArray[9] = -cameraRotationMatrix.m[9];

        Matrix.FromArrayToRef(cameraMatrixWorldAsArray, 0, cameraMatrixWorld);

		const cameraCSSMatrix = 'translateZ(' + fov + 'px)' + this.getCameraCSSMatrix(cameraMatrixWorld);
        const style = cameraCSSMatrix + 'translate(' + this._widthHalf + 'px,' + this._heightHalf + 'px)';

		if (this._cache.cameraData.style !== style) {
			this._cameraElement!.style.webkitTransform = style;
			this._cameraElement!.style.transform = style;
			this._cache.cameraData.style = style;
		}

        // _Render objects if necessary
        meshesNeedingUpdate.forEach(mesh => {
            this.renderHtmlMesh(mesh as HtmlMesh/*, maxZoomScreenSpaceTransform, screenSpaceTransform*/);
        });
    }

    /**
     * Computes a a scale factor that is the ratio of the screen width in pixels to the projected
     * mesh width in pixels at current zoom
     * @param htmlMesh 
     *                 
     * @param maxZoomTransform 
     * @param currentZoomTransform 
     */
    protected updateBaseScaleFactor(htmlMesh: HtmlMesh/*, maxZoomTransform: Matrix, 
                                    currentZoomTransform: Matrix*/) {
        // Get the scene and camera
        const scene = htmlMesh.getScene();
        const camera = scene.activeCamera!;

        // Get the viewport
        const viewport = this._temp.vp;
        camera.viewport.toGlobalToRef(this._width, this._height, viewport);

        // Get the mesh width in pixels at current zoom
        const boundingInfo = htmlMesh.getBoundingInfo();

        // Get the html mesh's world min and max
        const worldMin = boundingInfo.boundingBox.minimumWorld;
        const worldMax = boundingInfo.boundingBox.maximumWorld;

        // Transfrom to screen coords
        const transform = scene.getTransformMatrix();
        const worldMinScreen = this._temp.worldMin;
        const worldMaxScreen = this._temp.worldMax;

        const world = Matrix.IdentityReadOnly;

        // project the world min and max to screen coords
        Vector3.ProjectToRef(worldMin, world, transform, viewport, worldMinScreen);
        Vector3.ProjectToRef(worldMax, world, transform, viewport, worldMaxScreen);
        
        // Get htmlMesh world width and height in pixels
        const htmlMeshWorldWidth = Math.abs(worldMaxScreen.x - worldMinScreen.x);
        const htmlMeshWorldHeight = Math.abs(worldMaxScreen.y - worldMinScreen.y);

        // Get screen width and height
        let screenWidth = this._width;
        let screenHeight = this._height;

        // Calculate aspect ratios
        const htmlMeshAspectRatio = htmlMeshWorldWidth / htmlMeshWorldHeight;
        const screenAspectRatio = screenWidth / screenHeight;

        // Adjust screen dimensions based on aspect ratios
        if (htmlMeshAspectRatio > screenAspectRatio) {
            // If the HTML mesh is wider relative to its height than the screen, adjust the screen width
            screenWidth = screenHeight * htmlMeshAspectRatio;
        } else {
            // If the HTML mesh is taller relative to its width than the screen, adjust the screen height
            screenHeight = screenWidth / htmlMeshAspectRatio;
        }

        // Set content to fill screen so we get max resolution when it is shrunk to fit the mesh
        htmlMesh.setContentSizePx(screenWidth, screenHeight);

        // Calculate scale factor
        let scale = Math.min(htmlMeshWorldWidth / screenWidth, htmlMeshWorldHeight / screenHeight);

        // Cap scale at 1
        if (scale > 0.99) {
            scale = 1.0;
        }

        // We need to back out the scale due to the distance from the camera
        const fov = this._cache.cameraData.fov;
        // Do this instead of radius in case the camera is not an ArcRotateCamera
        // The z translation value in the html mesh is the camera distance in world units * 100
        const distance = camera.position.subtract(htmlMesh.position).length() * cssTranslationScaleFactor;
        const cameraDistanceScale = distance / (fov * 0.5);
        // I don't know why we have to divide the camera distance scale by 2 here, but it produces the 
        // correct scale with every initial camera distance, mesh and content aspect ratio I have tried.
        scale = scale * cameraDistanceScale / 2;

        // we ensured that the html mesh data existed before this function was called
        let htmlMeshData = this._cache.htmlMeshData.get(htmlMesh);
        if (htmlMeshData) {
            htmlMeshData.baseScaleFactor = scale;
        }
    }

    protected onCameraMatrixChanged = (camera: Camera) => {
        this._cameraViewMatrix = camera.getViewMatrix();
        this._projectionMatrix = camera.getProjectionMatrix();
        this._cameraWorldMatrix = camera.getWorldMatrix();
        this._viewport = camera.viewport;
        this._cameraMatrixUpdated = true;
    }

    private epsilon(value: number) {
        return Math.abs(value) < 1e-10 ? 0 : value;
    }
}

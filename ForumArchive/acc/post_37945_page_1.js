[{"Owner":"Bladetrick","Date":"2018-05-30T20:34:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis model I_t_m working with has been through several life changes. heh.  It started out as an AutoCAD drawing of a 3d cylinder._lt_br /_gt_\n\tI then saved it as the default .dwg file.  From there I opened it up in 3ds MAX and exported it to an OBJ file. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried loading this model up a couple ways (the babylon viewer_co_ using  babylon.scene.loader) but I end up getting the same error.  So now i_t_m thinking its the model export that is the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have attached the OBJ file for your perusal and here is the error I receive in the JS console_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHTML1300_dd_ Navigation occurred._lt_br /_gt_\n\tViewer.html_lt_br /_gt_\n\tBabylon.js viewer (v3.3.0-alpha.3)_lt_br /_gt_\n\tBabylon.js engine (v3.3.0-alpha.3) launched_lt_br /_gt_\n\tBJS - [15_dd_23_dd_05]_dd_ Load Error_dd_ There was an error loading the model. Unable to import meshes from Assets/models/TestCylinder3DS.obj_dd_ Failed to load scene._lt_br /_gt_\n\t[object Object]_lt_br /_gt_\n\t   {_lt_br /_gt_\n\t      [functions]_dd_ _co__lt_br /_gt_\n\t      __proto___dd_ {_lt_br /_gt_\n\t         [functions]_dd_ _co__lt_br /_gt_\n\t         __proto___dd_ null_lt_br /_gt_\n\t      }_co__lt_br /_gt_\n\t      exception_dd_ {_lt_br /_gt_\n\t         [functions]_dd_ _co__lt_br /_gt_\n\t         __proto___dd_ { }_co__lt_br /_gt_\n\t         description_dd_ _qt_Error status_dd_ 404 Not Found - Unable to load Assets/models/TestCylinder3DS.obj_qt__co__lt_br /_gt_\n\t         message_dd_ _qt_Error status_dd_ 404 Not Found - Unable to load Assets/models/TestCylinder3DS.obj_qt__co__lt_br /_gt_\n\t         name_dd_ _qt_LoadFileError_qt__co__lt_br /_gt_\n\t         request_dd_ { }_lt_br /_gt_\n\t      }_co__lt_br /_gt_\n\t      message_dd_ _qt_Unable to import meshes from Assets/models/TestCylinder3DS.obj_dd_ Failed to load scene._qt__lt_br /_gt_\n\t   }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAppreciate your time in this!\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_18473_qt__gt_TestCylinder3DS.obj_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-30T21:16:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMake sure you have the obj importer included_lt_br /_gt_\n\thttps_dd_//doc.babylonjs.com/how_to/obj\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-05-30T21:22:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIts included.  Here_t_s what I have_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_!DOCTYPE html&gt_sm__lt_br /_gt_\n\t&lt_sm_html&gt_sm__lt_br /_gt_\n\t&lt_sm_head&gt_sm__lt_br /_gt_\n\t    &lt_sm_title&gt_sm_&lt_sm_/title&gt_sm__lt_br /_gt_\n\t    &lt_sm_meta charset_eq__qt_utf-8_qt_ /&gt_sm__lt_br /_gt_\n\t    &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_br /_gt_\n\t    &lt_sm_script src_eq__qt_Assets/scripts/Babylon/_lt_code_gt__lt_span_gt__lt_span_gt_babylon.objFileLoader.js_lt_/span_gt__lt_/span_gt__lt_/code_gt__qt_&gt_sm_&lt_sm_/script&gt_sm__lt_br /_gt_\n\t    &lt_sm_style&gt_sm__lt_br /_gt_\n\t        html_co_ body {_lt_br /_gt_\n\t            overflow_dd_ hidden_sm__lt_br /_gt_\n\t            width_dd_ 100%_sm__lt_br /_gt_\n\t            height_dd_ 100%_sm__lt_br /_gt_\n\t            margin_dd_ 0_sm__lt_br /_gt_\n\t            padding_dd_ 0_sm__lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        #renderCanvas {_lt_br /_gt_\n\t            width_dd_ 100%_sm__lt_br /_gt_\n\t            height_dd_ 100%_sm__lt_br /_gt_\n\t            touch-action_dd_ none_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t    &lt_sm_/style&gt_sm__lt_br /_gt_\n\t&lt_sm_/head&gt_sm__lt_br /_gt_\n\t&lt_sm_body&gt_sm__lt_br /_gt_\n\t    &lt_sm_script type_eq__qt_text/javascript_qt_&gt_sm__lt_br /_gt_\n\t        var canvas _eq_ document.createElement(_t_Canvas_t_)_sm__lt_br /_gt_\n\t        canvas.id _eq_ _t_renderCanvas_t__sm__lt_br /_gt_\n\t        document.body.appendChild(canvas)_sm_                _lt_br /_gt_\n\t        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm__lt_br /_gt_\n\t        engine.enableOfflineSupport _eq_ false_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        var createScene _eq_ function () {_lt_br /_gt_\n\t            var scene _eq_ new BABYLON.Scene(engine)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            //Adding a light_lt_br /_gt_\n\t            var light _eq_ new BABYLON.PointLight(_qt_Omni_qt__co_ new BABYLON.Vector3(20_co_ 20_co_ 100)_co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            //Adding an Arc Rotate Camera_lt_br /_gt_\n\t            var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 0.8_co_ 100_co_ BABYLON.Vector3.Zero()_co_ scene)_sm__lt_br /_gt_\n\t            camera.attachControl(canvas_co_ false)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            // Move the light with the camera_lt_br /_gt_\n\t            scene.registerBeforeRender(function () {_lt_br /_gt_\n\t                light.position _eq_ camera.position_sm__lt_br /_gt_\n\t            })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            return scene_sm__lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        BABYLON.SceneLoader.Load(_qt_/Assets/models/_qt__co_ _qt_TestCylinder3DS.obj_qt__co_ engine_co_ function (createScene) {_lt_br /_gt_\n\t            // ..._lt_br /_gt_\n\t        })_sm__lt_br /_gt_\n\t    &lt_sm_/script&gt_sm__lt_br /_gt_\n\t&lt_sm_/body&gt_sm__lt_br /_gt_\n\t&lt_sm_/html&gt_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-30T21:23:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEDIT* my bad let me review 1 second._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/load_from_any_file_type_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/load_from_any_file_type_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tCheck your console network report_co_ is the file 404ing?_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_use_assetsmanager_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_use_assetsmanager_lt_/a_gt_ &lt_sm_- prehaps_lt_br /_gt_\n\t_lt_br /_gt_\n\tI like the asset manager personally.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-05-30T21:35:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti_t_ll give this a whirl in the morning and let you know.  thanks for the help so far!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-05-30T21:45:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\teh_co_ i couldn_t_t wait till morning.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried it and received_co_ on the console_co_ a message about not being able to find a plugin to load OBJ files and_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\terror while loading OBJ Loading task \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s my HTML_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_!DOCTYPE html&gt_sm_\n&lt_sm_html&gt_sm_\n&lt_sm_head&gt_sm_\n    &lt_sm_title&gt_sm_BabylonJS - Assets manager demo&lt_sm_/title&gt_sm_\n    &lt_sm_script src_eq__qt_//preview.babylonjs.com/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_Assets/scripts/Babylon/AssetsManager.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_Assets/scripts/Babylon/babylon.objFileLoader.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_style&gt_sm_\n        html_co_ body {\n            width_dd_ 100%_sm_\n            height_dd_ 100%_sm_\n            padding_dd_ 0_sm_\n            margin_dd_ 0_sm_\n            overflow_dd_ hidden_sm_\n        }\n\n        #renderCanvas {\n            width_dd_ 100%_sm_\n            height_dd_ 100%_sm_\n            touch-action_dd_ none_sm_\n            -ms-touch-action_dd_ none_sm_\n        }\n    &lt_sm_/style&gt_sm_\n&lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n    &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand my AssetsManager.js code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt__qt_use strict_qt__sm_\n\ndocument.addEventListener(_qt_DOMContentLoaded_qt__co_ run_co_ false)_sm_\n\nfunction run() {\n    if (BABYLON.Engine.isSupported()) {\n\n        BABYLON.Engine.ShadersRepository _eq_ _qt_/Babylon/Shaders/_qt__sm_\n\n        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n        var engine _eq_ new BABYLON.Engine(canvas_co_ false)_sm_\n\n        // Resize\n        window.addEventListener(_qt_resize_qt__co_ function () {\n            engine.resize()_sm_\n        })_sm_\n\n        // Scene_co_ light and camera\n        var scene _eq_ new BABYLON.Scene(engine)_sm_\n        var light _eq_ new BABYLON.HemisphericLight(_qt_light_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\n        var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ Math.PI / 2_co_ 100_co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_\n        camera.attachControl(canvas)_sm_\n\n        // Assets manager\n        var assetsManager _eq_ new BABYLON.AssetsManager(scene)_sm_\n\n        var meshTask _eq_ assetsManager.addMeshTask(_qt_OBJ Loading task_qt__co_ _qt__qt__co_ _qt_./Assets/models/AH-64_qt__co_ _qt_TestCylinder.obj_qt_)_sm_\n\n        // You can handle success and error on a per-task basis (onSuccess_co_ onError)\n        meshTask.onSuccess _eq_ function (task) {\n            task.loadedMeshes[0].position _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)_sm_\n        }\n\n        // But you can also do it on the assets manager itself (onTaskSuccess_co_ onTaskError)\n        assetsManager.onTaskError _eq_ function (task) {\n            console.log(_qt_error while loading _qt_ + task.name)_sm_\n        }\n\n        assetsManager.onFinish _eq_ function (tasks) {\n            engine.runRenderLoop(function () {\n                scene.render()_sm_\n            })_sm_\n        }_sm_\n\n\n        // Can now change loading background color_dd_\n        engine.loadingUIBackgroundColor _eq_ _qt_Purple_qt__sm_\n\n        // Just call load to initiate the loading sequence\n        assetsManager.load()_sm_\n    }\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-05-31T12:39:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI switched testing browsers from IE to chrome.  Interestingly_co_ i got more info on the console when trying to run the code.  Here_t_s what I found_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBabylon.js engine (v3.3.0-alpha.3) launched_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_!DOCTYPE html PUBLIC _qt_-//W3C//DTD XHTML 1.0 Strict//EN_qt_ _qt_http_dd_//www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_html xmlns_eq__qt_http_dd_//www.w3.org/1999/xhtml_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_head&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_title&gt_sm_IIS 10.0 Detailed Error - 404.0 - Not Found&lt_sm_/title&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_style type_eq__qt_text/css_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_!--_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ body{margin_dd_0_sm_font-size_dd_.7em_sm_font-family_dd_Verdana_co_Arial_co_Helvetica_co_sans-serif_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ code{margin_dd_0_sm_color_dd_#006600_sm_font-size_dd_1.1em_sm_font-weight_dd_bold_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ .config_source code{font-size_dd_.8em_sm_color_dd_#000000_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ pre{margin_dd_0_sm_font-size_dd_1.4em_sm_word-wrap_dd_break-word_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ ul_co_ol{margin_dd_10px 0 10px 5px_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ ul.first_co_ol.first{margin-top_dd_5px_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ fieldset{padding_dd_0 15px 10px 15px_sm_word-break_dd_break-all_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ .summary-container fieldset{padding-bottom_dd_5px_sm_margin-top_dd_4px_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ legend.no-expand-all{padding_dd_2px 15px 4px 10px_sm_margin_dd_0 0 0 -12px_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ legend{color_dd_#333333_sm__sm_margin_dd_4px 0 8px -12px_sm__margin-top_dd_0px_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ font-weight_dd_bold_sm_font-size_dd_1em_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ a_dd_link_co_a_dd_visited{color_dd_#007EFF_sm_font-weight_dd_bold_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ a_dd_hover{text-decoration_dd_none_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ h1{font-size_dd_2.4em_sm_margin_dd_0_sm_color_dd_#FFF_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ h2{font-size_dd_1.7em_sm_margin_dd_0_sm_color_dd_#CC0000_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ h3{font-size_dd_1.4em_sm_margin_dd_10px 0 0 0_sm_color_dd_#CC0000_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ h4{font-size_dd_1.2em_sm_margin_dd_10px 0 5px 0_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ }#header{width_dd_96%_sm_margin_dd_0 0 0 0_sm_padding_dd_6px 2% 6px 2%_sm_font-family_dd__qt_trebuchet MS_qt__co_Verdana_co_sans-serif_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ color_dd_#FFF_sm_background-color_dd_#5C87B2_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ }#content{margin_dd_0 0 0 2%_sm_position_dd_relative_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ .summary-container_co_.content-container{background_dd_#FFF_sm_width_dd_96%_sm_margin-top_dd_8px_sm_padding_dd_10px_sm_position_dd_relative_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ .content-container p{margin_dd_0 0 10px 0_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ }#details-left{width_dd_35%_sm_float_dd_left_sm_margin-right_dd_2%_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ }#details-right{width_dd_63%_sm_float_dd_left_sm_overflow_dd_hidden_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ }#server_version{width_dd_96%_sm__height_dd_1px_sm_min-height_dd_1px_sm_margin_dd_0 0 5px 0_sm_padding_dd_11px 2% 8px 2%_sm_color_dd_#FFFFFF_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ background-color_dd_#5A7FA5_sm_border-bottom_dd_1px solid #C1CFDD_sm_border-top_dd_1px solid #4A6C8E_sm_font-weight_dd_normal_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ font-size_dd_1em_sm_color_dd_#FFF_sm_text-align_dd_right_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ }#server_version p{margin_dd_5px 0_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ table{margin_dd_4px 0 4px 0_sm_width_dd_100%_sm_border_dd_none_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ td_co_th{vertical-align_dd_top_sm_padding_dd_3px 0_sm_text-align_dd_left_sm_font-weight_dd_normal_sm_border_dd_none_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ th{width_dd_30%_sm_text-align_dd_right_sm_padding-right_dd_2%_sm_font-weight_dd_bold_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ thead th{background-color_dd_#ebebeb_sm_width_dd_25%_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ }#details-right th{width_dd_20%_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ table tr.alt td_co_table tr.alt th{}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ .highlight-code{color_dd_#CC0000_sm_font-weight_dd_bold_sm_font-style_dd_italic_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ .clear{clear_dd_both_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ .preferred{padding_dd_0 5px 2px 5px_sm_font-weight_dd_normal_sm_background_dd_#006633_sm_color_dd_#FFF_sm_font-size_dd_.8em_sm_}_lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ --&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/style&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/head&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_body&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_div id_eq__qt_content_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_div class_eq__qt_content-container_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_h3&gt_sm_HTTP Error 404.0 - Not Found&lt_sm_/h3&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_h4&gt_sm_The resource you are looking for has been removed_co_ had its name changed_co_ or is temporarily unavailable.&lt_sm_/h4&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/div&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_div class_eq__qt_content-container_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_fieldset&gt_sm_&lt_sm_h4&gt_sm_Most likely causes_dd_&lt_sm_/h4&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_ul&gt_sm_     &lt_sm_li&gt_sm_The directory or file specified does not exist on the Web server.&lt_sm_/li&gt_sm_     &lt_sm_li&gt_sm_The URL contains a typographical error.&lt_sm_/li&gt_sm_     &lt_sm_li&gt_sm_A custom filter or module_co_ such as URLScan_co_ restricts access to the file.&lt_sm_/li&gt_sm_ &lt_sm_/ul&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/fieldset&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/div&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_div class_eq__qt_content-container_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_fieldset&gt_sm_&lt_sm_h4&gt_sm_Things you can try_dd_&lt_sm_/h4&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_ul&gt_sm_     &lt_sm_li&gt_sm_Create the content on the Web server.&lt_sm_/li&gt_sm_     &lt_sm_li&gt_sm_Review the browser URL.&lt_sm_/li&gt_sm_     &lt_sm_li&gt_sm_Check the failed request tracing log and see which module is calling SetStatus. For more information_co_ click &lt_sm_a href_eq__qt_http_dd_//go.microsoft.com/fwlink/?LinkID_eq_66439_qt_&gt_sm_here&lt_sm_/a&gt_sm_. &lt_sm_/li&gt_sm_ &lt_sm_/ul&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/fieldset&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/div&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_div class_eq__qt_content-container_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_fieldset&gt_sm_&lt_sm_h4&gt_sm_Detailed Error Information_dd_&lt_sm_/h4&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_div id_eq__qt_details-left_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_table border_eq__qt_0_qt_ cellpadding_eq__qt_0_qt_ cellspacing_eq__qt_0_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_tr class_eq__qt_alt_qt_&gt_sm_&lt_sm_th&gt_sm_Module&lt_sm_/th&gt_sm_&lt_sm_td&gt_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_IIS Web Core&lt_sm_/td&gt_sm_&lt_sm_/tr&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_tr&gt_sm_&lt_sm_th&gt_sm_Notification&lt_sm_/th&gt_sm_&lt_sm_td&gt_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_MapRequestHandler&lt_sm_/td&gt_sm_&lt_sm_/tr&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_tr class_eq__qt_alt_qt_&gt_sm_&lt_sm_th&gt_sm_Handler&lt_sm_/th&gt_sm_&lt_sm_td&gt_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_StaticFile&lt_sm_/td&gt_sm_&lt_sm_/tr&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_tr&gt_sm_&lt_sm_th&gt_sm_Error Code&lt_sm_/th&gt_sm_&lt_sm_td&gt_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_0x80070002&lt_sm_/td&gt_sm_&lt_sm_/tr&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/table&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/div&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_div id_eq__qt_details-right_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_table border_eq__qt_0_qt_ cellpadding_eq__qt_0_qt_ cellspacing_eq__qt_0_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_tr class_eq__qt_alt_qt_&gt_sm_&lt_sm_th&gt_sm_Requested URL&lt_sm_/th&gt_sm_&lt_sm_td&gt_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_http_dd_//localhost_dd_57289/Assets/models/TestCylinder.obj&lt_sm_/td&gt_sm_&lt_sm_/tr&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_tr&gt_sm_&lt_sm_th&gt_sm_Physical Path&lt_sm_/th&gt_sm_&lt_sm_td&gt_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_C_dd_\\TEMP\\Test Projects\\BabylonTestingGround\\BabylonTestingGround\\Assets\\models\\TestCylinder.obj&lt_sm_/td&gt_sm_&lt_sm_/tr&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_tr class_eq__qt_alt_qt_&gt_sm_&lt_sm_th&gt_sm_Logon Method&lt_sm_/th&gt_sm_&lt_sm_td&gt_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_Anonymous&lt_sm_/td&gt_sm_&lt_sm_/tr&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_tr&gt_sm_&lt_sm_th&gt_sm_Logon User&lt_sm_/th&gt_sm_&lt_sm_td&gt_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_Anonymous&lt_sm_/td&gt_sm_&lt_sm_/tr&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_tr class_eq__qt_alt_qt_&gt_sm_&lt_sm_th&gt_sm_Request Tracing Directory&lt_sm_/th&gt_sm_&lt_sm_td&gt_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_&amp_sm_nbsp_sm_C_dd_\\Users\\MendietaCM\\Documents\\IISExpress\\TraceLogFiles\\BABYLONTESTINGGROUND&lt_sm_/td&gt_sm_&lt_sm_/tr&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/table&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_div class_eq__qt_clear_qt_&gt_sm_&lt_sm_/div&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/div&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/fieldset&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/div&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_div class_eq__qt_content-container_qt_&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_fieldset&gt_sm_&lt_sm_h4&gt_sm_More Information_dd_&lt_sm_/h4&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ This error means that the file or directory does not exist on the server. Create the file or directory and try the request again._lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_p&gt_sm_&lt_sm_a href_eq__qt_http_dd_//go.microsoft.com/fwlink/?LinkID_eq_62293&amp_sm_amp_sm_IIS70Error_eq_404_co_0_co_0x80070002_co_15063_qt_&gt_sm_View more information &amp_sm_raquo_sm_&lt_sm_/a&gt_sm_&lt_sm_/p&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/fieldset&gt_sm__lt_br /_gt_\n\t2babylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/div&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/body&gt_sm__lt_br /_gt_\n\tbabylon.objFileLoader.js_dd_682 Unhandled expression at line _dd_ &lt_sm_/html&gt_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-05-31T13:39:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually_co_ would someone mind trying to load the OBJ file I attached before?  I_t_m getting the feeling it might not be right.   I tried it as is and also opened it up and removed the .mtl dependency it calls up.  Either way it has the same results\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-05-31T14:20:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLooks like its a web config issue.   my IIS doesn_t_t like OBJ files_co_ i guess_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHTTP Error 404.3 - Not Found\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_h4_gt_\n\t\tThe page you are requesting cannot be served because of the extension configuration. If the page is a script_co_ add a handler. If the file should be downloaded_co_ add a MIME map.\n\t_lt_/h4_gt_\n\n\t_lt_p_gt_\n\t\t \n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-05-31T14:57:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ I fixed it and can now see my model load up. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just added this to the web.config\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    &lt_sm_staticContent&gt_sm_\n      &lt_sm_mimeMap fileExtension_eq__qt_.obj_qt_ mimeType_eq__qt_application/octet-stream_qt_ /&gt_sm_\n    &lt_sm_/staticContent&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThank you for the help Pryme8\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-31T15:19:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood job!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-31T19:18:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry just saw the new stuff_co_ been a busy day glad you figured it out!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
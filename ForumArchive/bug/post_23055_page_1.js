[{"Owner":"manu225","Date":"2016-06-08T09:12:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m writing a plugin for Wordpress that use Babylon JS and I got a little problem._lt_br /_gt_\n\tI try to load a mesh _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var obj _eq_ loader.addMeshTask(_qt_tortue_qt__co_ _qt__qt__co_ WPURLS.plugin_dir+_t_/models/turtle/_t__co_ _qt_turtle-lowpoly.obj_qt_)_sm_\nobj.onSuccess _eq_ function(task){\n\tconsole.log(_t_ok_t_)_sm_\n}\t_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe model is loaded (I see it in Firebug) but the _lt_em_gt_onSuccess_lt_/em_gt_ function is never triggered._lt_br /_gt_\n\tIf I put the code as standalone it works well..._lt_br /_gt__lt_br /_gt_\n\tYou can see here the problem _dd_ _lt_a href_eq__qt_http_dd_//www.info-d-74.com/test-3d-object/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.info-d-74.com/test-3d-object/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tURL of the script is _dd_ _lt_span_gt__lt_a href_eq__qt_http_dd_//www.info-d-74.com/wp-content/plugins/3d-objects/js/3d_object.js?ver_eq_4.5.2_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.info-d-74.com/wp-content/plugins/3d-objects/js/3d_object.js?ver_eq_4.5.2_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny idea to fix it ? Thanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-08T16:46:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tTry adding an onError callback.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-08T16:53:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_11px_sm_text-align_dd_left_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_word-spacing_dd_0px_sm_float_dd_none_sm__qt__gt__qt_Unexpected token # in JSON at position 0_qt__lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-08T17:07:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tShouldn_t_t this onError function_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/7317ed822e3e2d52a44966fa4d2fdc3b0a91291a/src/Tools/babylon.assetsManager.ts#L100_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/7317ed822e3e2d52a44966fa4d2fdc3b0a91291a/src/Tools/babylon.assetsManager.ts#L100_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbe passing on the error message that is passed to it here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/069da0144a4eb915e2e9b1043f91df7f776b7470/src/Loading/babylon.sceneLoader.ts#L133_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/069da0144a4eb915e2e9b1043f91df7f776b7470/src/Loading/babylon.sceneLoader.ts#L133_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"manu225","Date":"2016-06-09T09:14:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks adam for your help._lt_br /_gt_\n\tI add these followinh lines _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_obj.onError _eq_ function(error){\t\n\tconsole.log(_t_error_t_)_sm_\n}_sm_\n\nloader.onTaskError _eq_ function(tasks) {\n\tconsole.log(_t_Error loading_dd_ _t_+tasks.name)_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe two error callbacks are triggered_co_ but I don_t_t know how to get the error message..._lt_br /_gt__lt_br /_gt_\n\tWhere did you get _lt_span style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_11px_sm_text-align_dd_left_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_word-spacing_dd_0px_sm_float_dd_none_sm__qt__gt__qt_Unexpected token # in JSON at position 0_qt_ error ?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-09T14:24:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI used the Chrome debugger.  The error message was here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/9eecc40cacb41b117cf6d229a87ab63e8182108b/src/Loading/babylon.sceneLoader.js#L137_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/9eecc40cacb41b117cf6d229a87ab63e8182108b/src/Loading/babylon.sceneLoader.js#L137_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhich is at line 16089 of the prettified babylon.js file on your site. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"manu225","Date":"2016-06-13T07:46:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt_t_s so strange_co_ I don_t_t understand what is going wrong..._lt_br /_gt__lt_br /_gt_\n\tIt try to change Wordpress theme but still the issue _dd_/_lt_br /_gt__lt_br /_gt_\n\tThe obj file is correctly loaded (see screenshot below). May be a problem with the charset and/or break lines ?\n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/babylon.js.png.653b9a89661b49e03030d00712409068.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8119_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/babylon.js.png.653b9a89661b49e03030d00712409068.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_babylon.js.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-06-14T19:04:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWorks correctly here _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#NZLJD%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#NZLJD#1_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe the problem is on your server ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"manu225","Date":"2016-06-15T13:47:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt work correctly too when it put the code has standalone on the same server.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe bug appear only when I used it in the Wordpress plugin. Maybe a conflict with another javascript library...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
[{"Owner":"Hersir","Date":"2018-04-25T07:59:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfound issue with PBR on android device_co_ that have webgl 2.0 support_co_ probably its chrome issue but thought to post it here as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Device_dd_ _lt_/strong_gt_Galaxy S8+\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_OS_dd_ _lt_/strong_gt_Android 7.0\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Chrome_dd_ _lt_/strong_gt_65.0.3325.109\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Babylon_dd__lt_/strong_gt_ v3.2.0-rc.2\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_GPU_dd__lt_/strong_gt_ {vendor_dd_ _qt_ARM_qt__co_ renderer_dd_ _qt_Mali-G71_qt__co_ version_dd_ _qt_WebGL 2.0 (OpenGL ES 3.0 Chromium)_qt_}\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_How to reproduce_dd_ _lt_/strong_gt_any pbr playground will go_co_ as all of them show black meshes instead of pbr materials. _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2FDQT5%2313_qt_ rel_eq__qt_external nofollow_qt__gt_PG_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt fails without any error or even warning in console.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWorks fine in native browser (Internet) as it has webgl 1.0_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Internet_dd__lt_/strong_gt_ 6.4.10.5\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_GPU_dd__lt_/strong_gt_ {vendor_dd_ _qt_ARM_qt__co_ renderer_dd_ _qt_Mali-G71_qt__co_ version_dd_ _qt_WebGL 1.0 (OpenGL ES 2.0 Chromium)_qt_}\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_04/5ae03561a0c54_ScreenShot2018-04-25at10_59_07.png.d2d77110406de363c7969d68e09fc86e.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_17996_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_04/5ae03561a0c54_ScreenShot2018-04-25at10_59_07.png.d2d77110406de363c7969d68e09fc86e.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screen Shot 2018-04-25 at 10.59.07.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-04-25T14:49:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for letting me know_co_ i will fix it this morning.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-04-25T16:12:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately all the S8 devices I can test on are using android 8.0.0 and using the current version of the pg it all works as expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26231_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/_qt_ rel_eq__qt__qt__gt_@Hersir_lt_/a_gt_ Would be amazing if you could update to test ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-04-26T06:14:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ unfortunallely its test device and it should remain with specific OS/browser combination for QA to test our products_co_ but I will try to find other device_co_ maybe there is some with Android 8.0. But that makes my probelm even harder_co_ as right now I disabled webgl 2.0 on all mobile devices_co_ but if it works on andorid 8 probabbly will  need to block just andorid 7 or so _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_. Can I debug it somehow to get better understanding what causes it _co_ to have possibility to block just devices that are impacted ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-04-26T06:48:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis looks like the environment texture does not load cause if the shader was fully not compiling it would even not render in black so I would dig around this part by putting other textures in the environment texture.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
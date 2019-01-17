[{"Owner":"Nesh108","Date":"2017-06-29T05:08:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am working on a little project and I have been using the standard _t_BABYLON.FreeCamera_t_ as a smoothCamera following the player. All easy and good.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ I would like to add VR support for people using their phones and a VR headset.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI looked around and found this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_camera _eq_ new BABYLON.DeviceOrientationCamera(_t_camera_t__co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_\ncamera.setCameraRigMode(BABYLON.Camera.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL_co_ {interaxialDistance_dd_ 0.0637})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis works as in splitting the screen in half (VR-style) but it doesn_t_t follow the player anymore. How comes? Is there a way to just have the exact same behaviour of my smooth camera but just having the possibility to look around with the headset instead of using the mouse?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ I noticed that I had to enable WebVR on my Chrome flags to get it to work. Is there a way to avoid that? Having to tell people to go and do that is just ugly and probably they won_t_t do it_co_ especially on mobile.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2017-06-29T12:23:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou should use directly our VR camera instead such as the WebVRFreeCamera or VRDeviceOrientationFreeCamera based on feature detection.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a basic sample_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#IHY77X%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#IHY77X#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding browsers support_co_ on desktop_co_ only MS Edge has WebVR enabled by default today on Windows 10 Creators Update_co_ Firefox 55 will also soon (august) and Chrome should by the end of the year. On mobile_co_ only Android &amp_sm_ Chrome has it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s why you should fallback to the Device Orientation camera most of the time. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDavid\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nesh108","Date":"2017-06-30T03:49:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have checked the PG and it worked on my phone. Now I am trying to add it to my project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe WebVRFreeCamera doesn_t_t seem to work at all (probably that requires an actual headset which I don_t_t have) but the VRDeviceOrientation looks right. The main problem is that it doesn_t_t seem to follow my player anymore.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI set the parent of the camera but it looks like it is disregarded_co_ so I can kind of look around but the camera won_t_t follow the player anymore. Is that normal? The code is exactly the same_co_ I am just changing the camera.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nesh108","Date":"2017-06-30T04:12:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_s_gt_Actually_co_ I realized that chrome has the _t_chrome_dd_//flags_t_ feature in the mobile version as well and WebVR wasn_t_t enabled. Thanks for the help! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ Still the same problem though.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
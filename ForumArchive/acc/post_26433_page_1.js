[{"Owner":"re_evolutn","Date":"2016-11-16T22:13:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey there_co_ I noticed that the DeviceOrientationCamera start direction is different when the users device is in portrait vs landscape mode._lt_br /_gt_\n\tPortrait is correct_co_ where as Landscape is off to the right when compared to other cameras. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any way I can sync these two up without moving objects in my scene?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe same issue occurs with VRDeviceOrientationFreeCamera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSidenote_dd_ I did see resetToCurrentRotation() in babylon 2.5 but it doesnt resolve this issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-11-17T10:15:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thiya _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24311-re_evolutn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24311_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24311-re_evolutn/_qt_ rel_eq__qt__qt__gt_@re_evolutn_lt_/a_gt_!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am pretty sure the rotation is accurate_co_ as it is used in production and works. But! I have been known to make mistakes. Often than I would have hoped.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe thing with the resetToCurrentRotation is_co_ that it first needs to get some information from the device (the first rotation) in order for it to work correctly. Otherwise_co_ you are resetting nothing to nothing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA quick test would be - calling resetToCurrentRotation() 1 second after the scene already renders. See if it helps_co_ and let me know if it doesn_t_t. Would be great to see some code as well!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"re_evolutn","Date":"2016-11-17T21:13:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey RaananW_co_ strange... i could have sworn that this issue was present in my project a day ago._lt_br /_gt_\n\tI just tried to capture some screenshots but the issue seems to have resolved its self. I have re-ordered some code so it was probably my fault.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tApologies!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-11-17T22:19:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI love self-resolving issues!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-18T17:08:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tME TOO!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
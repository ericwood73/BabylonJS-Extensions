[{"Owner":"DezOnlyOne","Date":"2015-11-12T03:50:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The issue does not appear with a single bone. I have a similar test to the one from before with objects in the 440k vert range. They swap fine with no noticeable issue. I cannot do a heap snapshot without it crashing_co_ but my end users won_t_t need to do that. I am still confused as to why it does not work with the rigged characters. Still leads me back to some type of threshold issue. The problem is that I cannot limit this to one bone or even a few bones. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-11-12T09:29:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Dunno_co_ to me it still seems like the skeletons are not being disposed. I tried your zip file. In index.html you have a commented line _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_//skeletons.forEach(function(s){ s.dispose()})_sm__lt_/pre_gt__lt_p_gt_Running this actually disposes the skeletons correctly. Could that be the problem?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-11-12T13:07:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I agree that the skeletons are not being disposed. There is no dispose function on the skeletons or the bones. That_t_s why I commented out that line. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think I might have fixed it after looking around. I just use_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_scene.skeletons _eq_ []_sm__lt_/span_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_in my removePatient function_co_ and that seems to have cleaned it up. I can get dozens of swaps with no OOM error_co_ when I could not get more then 4 before. _lt_/p_gt__lt_p_gt_Just reached 100 swaps. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am going to test this today_co_ but I think this issue might be fixed. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-11-12T13:14:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_There is now a dispose function (in babylon 2.3). Using this line_co_ the skeletons are disposed correctly (tested using your scene)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2015-11-12T15:20:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you. I will update to the newest version. Is that still in preview _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-11-12T15:40:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_still in preview_co_ but very much functional._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-12T16:24:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sounds like Raanan found the cause _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-11-12T21:07:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ you implemented it _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-12T21:11:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_team work!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
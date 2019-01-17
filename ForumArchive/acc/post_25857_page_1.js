[{"Owner":"steven_EXC","Date":"2016-10-19T20:41:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey guys_co_ just wondering if there_t_s a way to set the transparency of a Text2D object (or a ScreenSpaceCanvas2D object) after it has been created?  I_t_m assuming this functionality is somewhere but I can_t_t find it or figure it out.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Steffen","Date":"2016-10-20T15:18:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20070-steven_exc/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20070-steven_exc/_qt_ rel_eq__qt__qt__gt_@steven_EXC_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthere is a _lt_em_gt_ScreenSpaceCanvas2D.opacity_lt_/em_gt_ property. A value of 0.5 equals to 50% transparency. The Text2D object has this property too. But I don_t_t know whether you can change the Text2D opacity after it has been used inside a ScreenSpaceCanvas2D object. I think it_t_s internally baked or something... Then use simply the canvas.opacity property.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-10-21T00:26:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tcan you create a playground ?_lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#TQFJR%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#TQFJR#1_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Steffen","Date":"2016-10-21T09:42:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ Thanks_co_ I did not know you can simply change the content after all. I really can use it for one of my projects. But I have a some questions_dd__lt_br /_gt__lt_br /_gt_\n\t1. Is there any reason for the rect2D? Why not setting the text2D directly as a child of the canvas2D? -&gt_sm_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#TQFJR%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#TQFJR#2_lt_/a_gt__lt_/span_gt__lt_br /_gt__lt_br /_gt_\n\t2. Why did you use onAfterCameraRenderObservable and not registerBeforeRender?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"steven_EXC","Date":"2016-10-21T18:06:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo this is a little embarrassing.  Here_t_s basically what I was doing in my code before I posted_dd_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#TQFJR%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#TQFJR#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see_co_ it works.  I should_t_ve just created a playground with my issue and I would_t_ve seen that it was working fine.  My issue was that I wasn_t_t using the right version of babylon.  As soon as I grabbed an updated version_co_ it all worked fine.  There must_t_ve been something wonky in the version I was using before.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry for the mix-up.  Thanks for your help guys!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-10-21T18:53:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_Hey Steffen_co__lt_br /_gt__lt_br /_gt_\n\tGreetings to Hanover_co_ i remember we started here in the Forum at the same time! _lt_br /_gt__lt_br /_gt_\n\t_qt_Why did you use onAfterCameraRenderObservable and not registerBeforeRender?_lt_/span_gt_ _qt__lt_br /_gt__lt_br /_gt_\n\tI use Scene Optimization and sometimes_co_ it happens my models wont load when Babylon don_t_t CompileAndRun after(CameraRender) - so the 1Frame is ready_co_ this way i never facing problems. _lt_br /_gt_\n\tI_t_m also an experimental nature_co_ i have to keep a basic work set from witch i expect a working behavior when turning the knobs all the way up in other areas. _lt_br /_gt_\n\tYou also see at my post count i have contribute some of playgrounds here_co_ so_co_ basically i copy paste stuff that i already got few month ago._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#TQFJR%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#TQFJR#5_lt_/a_gt_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/25803-iterate-through-blender-exported-scene-to-freeze-all-materials/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
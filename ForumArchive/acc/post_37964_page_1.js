[{"Owner":"alexoy","Date":"2018-05-31T20:20:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a flag in a BJS GUI system to automatically disable rendering of the GUI labels when the mesh they are attached to is not visible?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSimple use case_dd_ you use labels to show user_t_s names_co_ and you shouldn_t_t see the labels of the enemies which are not visible at the moment. Well.. because you shouldn_t_t know where they are (behind the wall) _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-01T01:32:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya A.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23535_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#535_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s no simple boolean flag_co_ AFAIK.  Lines 53-60 is a renderLoop wedge... that _lt_em_gt_should _lt_/em_gt_work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA smarter person might create a custom Observer/Notify thing... where label is observing _linkedMesh.isVisible.   When _linkedMesh.isVisible onValueChange triggers_co_ handler sets the label.isVisible _eq__eq_ _linkedMesh.isVisible.  BJS built-in observer polling system (is that what it is called?)  _lt_span_gt__dd_) _lt_/span_gt_ ...would be doing the same work as that renderLoop thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t*shrug*.  Hope this helps.  Stay tuned... others may have more/better comments.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-01T15:11:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI like the idea!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ mentioned_co_ we could add an observable that you can observe and react accordingly. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut just to make sure_dd_ do you want something about mesh.isVisible or something about mesh not being in the camera frustum?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"alexoy","Date":"2018-06-01T16:05:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI mean whether I_t_m able to see the enemy directly_co_ whether he is literally visible in front of my camera. While moving sometimes he is in front of me - then the label should be visible. If he goes behind the wall/house/etc - the label should disappear.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTesting shows_co_ that being behind the second mesh doesn_t_t make the first one _qt_isVisible _eq_ false_qt__co_ so probably the answer to you question is using frustum.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-01T21:34:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\teven frustum won_t_t give you support for occlusion unfortunately\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"alexoy","Date":"2018-06-02T09:00:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ you mean even if in front of camera there is a small mesh behind the second bigger mesh_co_ so not visible to the viewer_co_ frustum calculations will state that both meshes are in the same visibility state just because mathematically they are in front of camera?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf Yes_co_ what can I do then? I hope you agree that seeing the nickname of not visible enemy is bad\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"alexoy","Date":"2018-06-02T11:44:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve found out you have a thing named _qt_Occlusion Queries_qt_ - is it good for my task or too expensive (there could be many players around)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDemo - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#QDAZ80%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#QDAZ80#14_lt_/a_gt_ (2_t_nd sphere is always on top to make it easier to see what_t_s happening)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-03T06:04:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would avoid the above approach. But you should find the answer to your question in the following post_dd_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed3623046443_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/36722-getting-distance-of-mesh-in-front-of-camera/?do_eq_embed_qt_ style_eq__qt_height_dd_221px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tThis doesn_t_t specifically answer your question_co_ but with a little effort to apply to your specific needs_co_ I believe the answer is there. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"alexoy","Date":"2018-06-03T10:31:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI remember this post. Actually some answers are mine. What method do you suggest as a base? Because rays calculations could be even more expensive - you need to cast them on every frame for every label/enemy_co_ then find whether there is another mesh in between. Also going through all frustum meshes and finding the closest or comparing the distances doesn_t_t make any sense in my case.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut why you would avoid a _qt_Occlusion Queries_qt_ method?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-04T19:51:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30699-alexoy/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30699_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30699-alexoy/_qt_ rel_eq__qt__qt__gt_@alexoy_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps we_t_re speaking of different methods when talking about _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__qt_Occlusion Queries_qt__sm_ which I was also worried about firing too many rays. However_co_ what I was eluding to as a possible solution is not to fire a ray every frame_co_ but to fire a ray at intervals from the camera to a null which is a child of each enemy mesh - perhaps once every 60 frames. And if that ray collides with another object (not every mesh but perhaps defined as a member of a specific group)_co_ then the # of rays is minimal and I can_t_t see any significant resources which would be used._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_This is what I_t_ve done in the past on projects with different needs_co_ but it worked well. Otherwise_co_ it would be great to have a tools which makes this simpler as a function in the framework with parameters which could simply be set. That_t_s the best I could think of for past projects._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_DB_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"alexoy","Date":"2018-06-04T20:06:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt__co_ and what can you say about _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#QDAZ80%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#QDAZ80#14_lt_/a_gt_ ? With _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__qt_Occlusion Queries_qt_ I mean official docs with this topic._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_In this demo check also happens on every frame_co_ but could be done once every 60 frames too_co_ like in your example. In your opinion this way is much slower or why you don_t_t like it?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-04T20:40:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30699-alexoy/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30699_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30699-alexoy/_qt_ rel_eq__qt__qt__gt_@alexoy_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI misunderstood - this method from the PG scene should work efficiently. _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
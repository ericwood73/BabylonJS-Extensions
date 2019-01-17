[{"Owner":"massile","Date":"2017-10-27T16:11:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi guys_co__lt_br /_gt__lt_br /_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#242729_sm_font-size_dd_15px_sm_text-align_dd_left_sm__qt__gt_I_t_m looking for a technique to render planar section cuts through arbitrary geometry in realtime._lt_br /_gt__lt_br /_gt_\n\tFor now_co_ I have tested BABYLON.CSG  but I found it to be perhaps a bit of a overkill for my case_co_ where all I need is a planar cut (also_co_ I suppose it is not intended to be used in realtime_co_ since it is very slow)_lt_br /_gt_\n\tI have also used `scene.clipPlane` which is much more efficient but the clip edges are missing._lt_br /_gt__lt_br /_gt_\n\tI have found a technique that uses stencil buffers to retrieve the missing clip edges _lt_a href_eq__qt_http_dd_//glbook.gamedev.net/GLBOOK/glbook.gamedev.net/moglgp/advclip.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//glbook.gamedev.net/GLBOOK/glbook.gamedev.net/moglgp/advclip.html_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tIt seems possible to use stencil buffers with the BABYLON.JS engine (_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/3.0/engine#setstencilfunction-stencilfunc-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/classes/3.0/engine#setstencilfunction-stencilfunc-rarr-void_lt_/a_gt_)_co_ but I_t_m not sure how to use it to solve my issue _dd_/._lt_br /_gt__lt_br /_gt_\n\tHere is my playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UCFKM%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UCFKM#23_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-10-27T16:41:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26036-massile/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26036_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26036-massile/_qt_ rel_eq__qt__qt__gt_@massile_lt_/a_gt_ and welcome.\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed7084935142_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/33497-how-to-implement-clipping-planes-as-with-threejs/?tab_eq_comments&amp_sm_do_eq_embed&amp_sm_comment_eq_192305&amp_sm_embedComment_eq_192305&amp_sm_embedDo_eq_findComment#comment-192305_qt_ style_eq__qt_height_dd_238px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#AFRP1L_qt_ rel_eq__qt_external nofollow_qt__gt_PG_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this what you looking for?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2017-10-30T05:51:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_193256_qt_ data-ipsquote-contentid_eq__qt_33681_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1509122516_qt_ data-ipsquote-userid_eq__qt_27658_qt_ data-ipsquote-username_eq__qt_Arte_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 10/28/2017 at 12_dd_41 AM_co_ Arte said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26036-massile/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26036_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26036-massile/_qt_ rel_eq__qt__qt__gt_@massile_lt_/a_gt_ and welcome.\n\t\t_lt_/p_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed8552643345_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/33497-how-to-implement-clipping-planes-as-with-threejs/?tab_eq_comments&amp_sm_do_eq_embed&amp_sm_comment_eq_192305&amp_sm_embedComment_eq_192305&amp_sm_embedDo_eq_findComment#comment-192305_qt_ style_eq__qt_height_dd_238px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#AFRP1L_qt_ rel_eq__qt_external nofollow_qt__gt_PG_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIs this what you looking for?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi Arte_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI admit that the method listed in my original post can work with StandardMaterial. However_co_ if I would like to work with PBR materials_co_ there is no easy way. I am wondering if it is possible to customize the PBR material classes and Scene (which holds a single clipplane) so that they can work with multiple planes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-10-30T09:18:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28947-xuchen_shadow/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28947_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28947-xuchen_shadow/_qt_ rel_eq__qt__qt__gt_@xuchen_shadow_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have never worked with PBR materials. _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI think _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_  right person to ask?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-10-31T17:43:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ is the PBR master._lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-10-31T20:15:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ was working on making pbr a custom mat as well ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf not agree this will be tougher and in this case using a stencil buffer where you draw your planes to discard some regions might be the easiest.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-10-31T20:48:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyes dear _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_  wait for this tools\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthat is so useful i almost have result but wanna fix custom material bugs and add pbr tools  in to custom material\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-11-13T10:10:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7AIII8%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#7AIII8#10_lt_/a_gt_ glass material\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7AIII8%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#7AIII8#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7AIII8%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#7AIII8#11_lt_/a_gt_ metal+roughness\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7AIII8%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#7AIII8#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7AIII8%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#7AIII8#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t i start make it in custom material too ( but need fix some problem first )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-13T18:30:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDon_t_t forget to add https to your cdn.rawgit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tglass_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#7AIII8%2317_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#7AIII8#17_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMR_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#7AIII8%2318_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#7AIII8#18_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
[{"Owner":"chicagobob123","Date":"2018-03-15T15:47:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI read this  thread\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed5358175372_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/18914-instances-vs-merging-and-merging-instances/?do_eq_embed_qt_ style_eq__qt_height_dd_205px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tand looked at this example. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2EGQ6C%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2EGQ6C#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am getting what styxxx explained. The browser is blowing up. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I am doing is looks like this \n_lt_/p_gt_\n\n_lt_p_gt_\n\t                 l1_co_ l2 and l3 are arrays of instanced meshes. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t                var newsidenumbers_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                var sidenumberarray _eq_[]_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                   ml1_eq_BABYLON.Mesh.MergeMeshes(l1)_sm_       _lt_br /_gt_\n\t                   ml2_eq_BABYLON.Mesh.MergeMeshes(l2)_sm__lt_br /_gt_\n\t                   ml3_eq_BABYLON.Mesh.MergeMeshes(l3)_sm__lt_br /_gt_\n\t                   newsidenumbers_eq_BABYLON.Mesh.MergeMeshes([ml1_co_ml2_co_ml3])_sm__lt_br /_gt_\n\t                   newsidenumbers.makeGeometryUnique()_sm__lt_br /_gt_\n\t                   sidenumberarray.push(newsidenumbers)_sm_ // column and numbers 1_co_2_co_3_lt_br /_gt_\n\t                   l1 _eq_ l2 _eq_ l3 _eq_ ml1 _eq_ ml2 _eq_ ml3 _eq_ null_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLater I want to do this. newsidenumbers_eq_BABYLON.Mesh.MergeMeshes(sidenumberarray)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand instance it. Basically make one and repurpose for performance. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-16T08:57:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi CB!  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_q_eq_merge%20instances&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_16_co_28_co_29_co_30_co_31_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_q_eq_merge instances&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_16_co_28_co_29_co_30_co_31_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAccording to the 4th post (Dad72) and 6th post (Deltakosh)... instances cannot be merged.  Sorry.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not real knowledgeable as-to WHY... but... I believe it is because instances carry no geometry data of their own.  They must reference their _lt_em_gt_master_t_s_lt_/em_gt_ geometry.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInstances are lightweight because of this feature.  Party on. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2018-03-16T16:10:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlways love an answer.  While I waited I determined to do more optimizations. I cloned some base objects made them unique and then instanced that which worked very well. The performance was great and load time improvement was about 500%.  Went from 40 some seconds down to ~7 seconds. So it was worth the redo. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I work on is so dry and uninteresting but it does push the boundaries of things. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd here for me its Friday/Payday and Saint Pats weekend. So the Party is ON \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
[{"Owner":"3Dlove","Date":"2015-06-24T15:05:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I try to import a mesh and clone it and change diffuseColor of each clone but all mesh have the same color._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is a code _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var meh _eq_ newMeshes[0]_sm_for (var i _eq_ 0_sm_ i &lt_sm_ 10_sm_ i++) {     var clone _eq_ mesh.clone(_qt_clone_qt_+i)     //new material for each clone     clone.material _eq_ mesh.material.clone(_t_newMat_t_+i)_sm_     clone.material.diffuseColor _eq_ new BABYLON.Color3(Math.random()_co_ Math.random()_co_ Math.random())_sm_}_lt_/pre_gt__lt_p_gt_(mesh.material is a MultiMaterial I think because there are subMaterials[0] and subMaterials[1])_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your help_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-06-24T15:25:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__lt_/pre_gt__lt_p_gt_\nvar color _eq_ new BABYLON.Color3(Math.random()_co_ Math.random()_co_ Math.random())_sm__lt_/p_gt__lt_p_gt_\nclone.material.subMaterials[0].diffuseColor _eq_ color_sm__lt_/p_gt__lt_p_gt_\nclone.material.subMaterials[1].diffuseColor _eq_ color_sm__lt_/p_gt__lt_p_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"3Dlove","Date":"2015-06-25T07:25:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your correction with subMaterials_lt_/p_gt__lt_p_gt__lt_em_gt_but that is not the problem _dd__lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_ _lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_when I clone _dd__lt_/em_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var mat _eq_ scene.getMeshByName(_t_clone1_t_).material.clone(_t_mat_t_)_sm_mat.subMaterials[0].diffuseColor _eq_ BABYLON.Color3.Black()_sm__lt_/pre_gt__lt_p_gt__lt_em_gt_all cloned meshes change their color_co_ like if mat was a link of the material and not a clone_co_ any ideas ?_lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_ _lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_Thank you _lt_/em_gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"3Dlove","Date":"2015-06-25T07:37:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think there is a _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/699045fb3f0dae7feaae917345605e706f11bc9a/src/Materials/babylon.multiMaterial.js_qt_ rel_eq__qt_external nofollow_qt__gt_problem with the clone function_lt_/a_gt_ _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I found the error _dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_ subMaterial _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(237_co_106_co_67)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_.subMaterials[index]_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_should be _dd__lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_ subMaterial _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(237_co_106_co_67)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_.subMaterials[index].clone(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(237_co_106_co_67)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_.subMaterials[index].name)_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt__sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt__eq_)_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_11.9999990463257px_sm__qt__gt_How to report a bug for doing the correction ?_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-06-25T07:38:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When cloning a multimaterial_co_ it doesn_t_t clone each submaterial _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/babylon.multiMaterial.ts#L39_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/babylon.multiMaterial.ts#L39_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In your case_co_ you are updating the color of a submaterial that is affected on all multimaterial._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"3Dlove","Date":"2015-06-25T08:20:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay_co_ I answered just before you at 8_dd_37 _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thanks _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-06-29T15:46:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I fail to see how not cloning each submaterial of a multimaterial is an expected behavior.  The only member multimaterial has is the submaterial array.  Seems to me that this is a bug.  Otherwise_co_ why not just copy the reference_co_ it would do the same thing_co_ e.g._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var myCloneMulti _eq_ originalMulti_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-06-30T14:19:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can clone it in order to add new submaterials that the original does not have_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2017-09-25T21:39:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI had the same issue and to solve it I had to clone every material and submaterial of every mesh._lt_br /_gt__lt_br /_gt_\n\tSo it works but I am worried it will really slow down the performance?_lt_br /_gt__lt_br /_gt_\n\tRegards_co_ Pichou\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-25T21:44:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNot really but it always depend on your scene\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
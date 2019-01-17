[{"Owner":"binyan","Date":"2015-05-04T16:50:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey guys_co__lt_/p_gt__lt_p_gt_I_t_ve just noticed that the bounding box of a plane in the debug layer and the bounding box which is taken into account when computing mesh intersection with a point are inconsistent._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JLKCH_qt_ rel_eq__qt_external nofollow_qt__gt_Here_lt_/a_gt_ is the playground example (just check the bounding boxes checkbox). So one of them should be fixed... _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Upd_dd__lt_/p_gt__lt_p_gt_Another problem is when the plane_t_s bounding box does fit the bounding box of debug layer_co_ there is no intersection at all (that_t_s an obvious problem because of plane thickness I think)._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JLKCH%231_qt_ rel_eq__qt_external nofollow_qt__gt_Here_lt_/a_gt_ is the playground sample._lt_/p_gt__lt_p_gt_Maybe the solution is to give a minimal bounding box thickness of BABYLON.Epsilon._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-05T15:43:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_More info here_dd_)_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?10_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/?10_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"binyan","Date":"2015-05-05T16:25:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I_t_m a new but not that new  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I_t_ve seen this tutorial dozens of times._lt_/p_gt__lt_p_gt_See_co_ the cases are a bit different. The tutorial covers an intersection of a sphere with a plane (both precise and not) and an intersection of a sphere with a point._lt_/p_gt__lt_p_gt_In both cases there is no any problem - the bounding box of a sphere is always the same._lt_/p_gt__lt_p_gt_In my case there is an intersection of a plane with a point. And here is the thing_dd_ the intersection of a mesh with a point is always non precise (with a non-scaled bounding box). However in debug layer still appears the precise (scaled) bounding box. Which_co_ in turn_co_ may be very confusing. It took me a couple of hours to understand why do I get an intersection when in the debug layer there is a huge distance between my point and the bounding box of the plane._lt_/p_gt__lt_p_gt_Also_co_ there is still the second problem I_t_ve described in the first post._lt_/p_gt__lt_p_gt_So_co_ please re-read my first post. I hope now it_t_s clearer  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-05T16:38:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I find both of your examples very interesting _dd_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The first one - I believe you are right_co_ the debug layer actually shows the precise bounding box but the boundries are different during the intersectsPoint inspection._lt_/p_gt__lt_p_gt_As the 2nd - I am not sure this is wrong. A plane is just this - very thin_co_ and the y of the point intersected is never 0_co_ due to the cosine calculation. so it never really intersects... _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-05T18:49:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok sorry_co_ I misunderstood your ask _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Actually intersectsPoint use AABB (Axis aligned bounding box) for performance reason and that_t_s why I linked the demo with various version of bounding boxes._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"binyan","Date":"2015-05-07T05:55:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So maybe it worth to add a precise computation as an option? Just like in the case of the mesh intersection? Also_co_ it maybe useful to let the user define the minimal boundaries (thickness) of the bounding box. I_t_m not sure this is a problem (maybe it should be this way) but currently there is no way you can get a plane &amp_sm_ point intersection._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-07T08:38:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ there is a delta _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_BABYLON.Engine.Epsilon_lt_/p_gt__lt_p_gt_I think that the inspection in the intersectsPoint (in the bounding box inspection) is simply other way around. Have a look here - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JLKCH%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JLKCH#2_lt_/a_gt_ _co_ changing the epsilon to negative works. (line 31). _lt_/p_gt__lt_p_gt_@DK_co_ what do you think? var delta in _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Culling/babylon.BoundingBox.ts#L99_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Culling/babylon.BoundingBox.ts#L99_lt_/a_gt_ should be -Epsilon ? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-07T20:16:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Right!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-07T21:30:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_fix coming up for 2.1_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
[{"Owner":"AlbertoBonn","Date":"2014-11-07T15:11:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Babylonier_co__lt_/p_gt__lt_p_gt_need a animated gif as texture. the gif i see on the mesh_co_ but only the first image. the gif start automaticly in the browser_co_ but _lt_/p_gt__lt_p_gt_not on a babylon mesh. No i cant use ogv or mp4 for 3 or 4 images per sequence/file._lt_/p_gt__lt_p_gt_thanks Alberto_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-11-07T17:04:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_dd_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is not supported by webGL unfortunately _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2014-11-15T22:53:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you must use several images as a sequence other than assembling in an mpeg movie_co_ and the geometry is simple - you might try using one object per image and change the alpha channel to 1 and then 0 for each objects material consecutively in a loop or conditionally.  Not the most efficient method_co_ but it should work.  This is the simplest_co_ however you can also use multiple materials and textures on a single object_co_ and do the same - there are examples online_sm_ not for your application_co_ but for more complex shading.  If you cannot find any examples_co_ please let me know._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_David B._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dinkelborg","Date":"2014-11-16T15:54:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wouldn_t_t it be relatively easy to write a custom shader with an image-array attribute so that as soon as you apply the shader to your object you can fill the array with images and it would automatically itterate through the array_co_ switching the texture applied to the object every _qt_n_qt_-seconds?_lt_br_gt__lt_br_gt_//Though I have never written a single shader... so it might as well not ... just an idea _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-11-20T21:17:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can use 4 different texture and use a timeout to switch them to your material_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-11-21T01:30:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Or use a dynamic texture (aka context) and do fancy stuff with that_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
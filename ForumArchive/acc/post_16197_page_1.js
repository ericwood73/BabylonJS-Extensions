[{"Owner":"elkyu","Date":"2015-08-04T01:08:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Hi_co__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt__lt_span_gt_I already created a topic for this but my idea has evolved and I think it is better to create a new topic._lt_/span_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt__lt_span style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd__t_Helvetica Neue_t__co_ Arial_co_ Verdana_co_ sans-serif_sm__qt__gt_For the record _co_ I have an animated plane with several _qt_hole_qt_ (only one in the example) ._lt_/span_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt__lt_span style_eq__qt_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd__t_Helvetica Neue_t__co_ Arial_co_ Verdana_co_ sans-serif_sm__qt__gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#272WDW%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#272WDW#14_lt_/a_gt__lt_/span_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_Currently when we click the image that we see through the hole _co_ it zooms to the picture._lt_/div_gt__lt_div_gt_But that_t_s not what I want ._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_What I want is that we have the impression _qt_ to go inside _qt_ the hole_co_ and that the image is in full page at the end of the animation _co_ so no zoom the image_co_ just in full screen display._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I don_t_t know if this is understandable._lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_div_gt_Maybe when you zoom_co_ it could detect when the image is full screen_co_ and in this case continue the zoom on the plane to be certain _qt_ to enter the hole_qt_ and put the image backward ( reduce ) in the same time to keep the image in full screen and does not zoom to it._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Or maybe assign a different zoom speed between the plane and the image ?_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_/div_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Then when the image is in full screen_co_ I will need an html page to reduce the image and put a description (I know how to do that)._lt_br_gt__lt_br_gt_I thinking of 2 solutions but I don_t_t know how to do for the both _dd__lt_br_gt__lt_br_gt_Solution 1 _dd_ Remove the images from the scene to put it behind the canvas with HTML. The problem is that to put the images I have to calculate the hole center_co_ but I don_t_t know how to transfer this coordinate on the html page to place the image._lt_br_gt__lt_br_gt_Solution 2 _dd_ Keep the images in the canvas_co_ and at the zoom end_co_ _qt_switched_qt_ on the html when the image is in full screen._lt_br_gt__lt_br_gt_In both cases_co_ I think that a kind of parallax effect will be necessary to zoom in the hole_co_ while extending the image to put it in full screen._lt_br_gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_div_gt_Thanks_co_ Do not hesitate to ask questions _co_ I know that what I want to do is perhaps a bit complicated to understand._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elkyu","Date":"2015-08-04T08:17:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_no idea ? _lt_span_gt__lt_span_gt_perhaps too much at once _co__lt_/span_gt_I should go step by step with a topic for each problem _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ alt_eq__qt__dd_huh_dd__qt__gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-08-04T08:48:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I am not sure what exactly you mean with parallax effect in this scenario. You could darken the images while zooming in _lt_strong_gt_all_lt_/strong_gt_ the way. Then you end up with a black Screen and could fade over to you html image or whatever. I think that would look kinda cool if the fading out of the canvas and fading in of the html image happens almost parallel. _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#272WDW%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#272WDW#15_lt_/a_gt_ (no fading in of html yet _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ) _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elkyu","Date":"2015-08-04T08:58:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span_gt_When I say parallax _co_ it_t_s just for assign a different speed zoom between the image and the plane .._lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span_gt__lt_span_gt_Maybe if the zoom of the plane is faster than the zoom image we can get something like what I want _lt_/span_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ alt_eq__qt_^_^_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-08-04T09:11:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Elkyu_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried something_dd_ making the ground plane move forward when we_t_re zooming in on the picture. This way there is a stronger _qt_going in_qt_ impression_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#272WDW%2317_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#272WDW#17_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also the ground is not clickable anymore_co_ the image is. It_t_s just easier this way _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ (you can then zoom in on the image center)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What you want to do is actually quite tricky_co_ it takes a lot of tweaking to get things right and smooth. Also don_t_t forget that users can have any screen resolution possible_co_ so you may need to make some computations to have the camera FOV right._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I understand now why you first used an ortho camera_co_ it would indeed be much easier to align pictures with holes. If you want to have several holes_co_ I_t_d advise you to make it so that holes in the ground are actually created depending on where the images are. Here is an algorith that would do that_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_for each images  create ray between camera position and image position  compute intersection point between ray and ground    if(intersection exists)    retrieve vertices close to the intersection point (arbitrary distance)    swap faces which contain these vertices  end ifend for_lt_/pre_gt__lt_p_gt_Something like that!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-08-04T09:20:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Maybe cast the ray to the center of the image as well as to each of the corners to (and sides?) to see what faces get hit and then remove those? But that sounds like a good solution._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And the new zooming in is pretty cool_co_ too. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-08-04T09:32:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_co_ casting to the image corners too is a good idea. Again_co_ tweaking will be the key here _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elkyu","Date":"2015-08-05T02:01:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt__lt_br_gt__lt_div_gt_Actually this zoom effect is really better !_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_However the problem with the click on the image is that a click on the edge of the hole (outside of the hole_co_ non-returned face) the click work whereas it shouldn_t_t. Any solution ?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I don_t_t know if it_t_s a good idea to create the holes depending on where the images are._lt_/div_gt__lt_br_gt__lt_div_gt_If I do like you said_co_ it will create the hole above the image_co_ but the problem is that with the animation_co_ the hole stretch (especially on the mesh sides_co_ the stretch is less important in the middle). So I have to put the image behind_co_ much larger than the hole to solve this problem._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_EDIT _dd_ Stretch example _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#272WDW%2319_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#272WDW#19_lt_/a_gt__lt_/div_gt__lt_br_gt__lt_div_gt_Wait a few seconds and you should see the stretch effect_co_ in my code it_t_s bigger than in the playground_lt_/div_gt__lt_br_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elkyu","Date":"2015-08-05T08:51:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When we click on the image_co_ can we get with a ray_co_ the faceId of the ground mesh by which one we cross to reach the image (even if we are _qt_ground.isPickable _eq_ false_qt_) ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-08-05T12:25:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I don_t_t think so. But you could make the ground pickable before you pick and disable it after you picked_co_ I guess._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elkyu","Date":"2015-08-07T09:48:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s working _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think it_t_s very simple but_co_ how to make a little image zoom at the mouse over on the hole ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Example_co_ if you don_t_t know what I mean _dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.onextrapixel.com/examples/interactive-background/index2.html%C2%A0_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.onextrapixel.com/examples/interactive-background/index2.html _lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And if we can also do the move on right/left (parallax) like the example .._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-08-07T10:32:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I suggest to do it like it_t_s done in the actions example_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?17_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/?17_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Register an event and an OnPointerOverTrigger and change the scaling or the position of the plane. Reverse with OnPointerOutTrigger._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elkyu","Date":"2015-08-07T12:46:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#272WDW%2321_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#272WDW#21_lt_/a_gt__lt_/p_gt__lt_p_gt_(in the scene.registerBeforeRender code)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried something but .. that doesn_t_t work very well _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ alt_eq__qt__dd_huh_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Where I_t_m wrong ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-08-07T13:20:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmm_co_ I forgot that the wave thing is over it. So I guess the event only gets triggered when you click hand hide the wave for split second or something like that. Hmm... I don_t_t have time at the moment_co_ but I think of something later _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-08-07T17:21:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay_co_ new try. Not super elegant I guess_co_ but seems to work. Hope it helps_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#272WDW%2322_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#272WDW#22_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elkyu","Date":"2015-08-09T23:43:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmm_co_ I see .._lt_/p_gt__lt_p_gt_I do this so that the users know that we can click on the hole._lt_/p_gt__lt_p_gt_I think I can do something not bad with that. I just have to adapt your code to mine because I have several holes so several pictures ..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
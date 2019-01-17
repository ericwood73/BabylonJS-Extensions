[{"Owner":"nicktendo","Date":"2017-06-13T10:31:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am creating a script that will move a box along the vector in front of the center of the camera_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KWD0E1_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KWD0E1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tApart from the textures not loading_co_ why does this script seem to not process the collision of the box falling onto the larger box in BJS Playground? The box upon which the smaller box falls seems to flicker_co_ then disappear entirely after the smaller box lands. It works fine on my server.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ is there a more elegant way to accomplish this in BJS?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-13T23:44:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt__lt_span_gt_ _lt_/span_gt_that will move a box along the vector in front of the center of the camera_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWhy do you need physics for that? You can register the scene.registerAfterRender and move your box manually.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you try to simplify your PG to highlight the issue?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-14T05:06:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  DK... this is the _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/31023-add-physicsimpostor-to-camera/_qt_ rel_eq__qt__qt__gt_same gentleman who wants a physics-active camera_lt_/a_gt_.  He is building a physics-active camera-holding robot/gizmo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNicktendo is working with physics... on purpose.  It is a requirement of his project.  He wants his camera mounted onto a bumper car.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHe IS moving box manually in a beforeRender with lines 128-132.  I have been telling Nick that it is best to move physics-active mesh... with setLinearVelocity and/or applyImpulse.  I told him to avoid force-moving.  But he is having good success with force-moving_co_ so far.  Fun experiments!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNick_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ ... this is a BJS 3.0 problem ONLY.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index2_5.html#KWD0E1%231_qt_ rel_eq__qt_external nofollow_qt__gt_2.5 is fine_lt_/a_gt_. (almost)  (_lt_em_gt_some_lt_/em_gt_ box sinking into floor)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNick might not be using BJS 3.0 alpha on his server.  Perhaps that_t_s why it works_co_ there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s another version_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#KWD0E1%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#KWD0E1#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can alternate between two cameras... using C and V keys. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tA few changes... same problem.  Physics problem_co_ I think (what_t_s new?).  In BJS 3_co_ box is sinking into floor_co_ and there is some kind of spastic movement.  In 2.5_co_ box is still sinking SOMEWHAT_co_ but no spastic collision jitters.  AND... it looks like your W key is indeed working... and moving box in direction of camera.  Nice work there_co_ Nick!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll keep working.  Try not to get frustrated or discouraged_co_ Nick.  Stay with 2.5 until we get this all sorted-out_co_ please.  Thx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-14T05:57:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ here_t_s _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#KWD0E1%235_qt_ rel_eq__qt_external nofollow_qt__gt_another version_lt_/a_gt_.  C/V keys still swap cameras.  W for forward movement on little box... as before.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI removed some stuff... and suddenly_co_ the 3.0 version started working better.  Box is staying atop ground box!  YAY!   Why differences between 2.5 and 3.0?   I dunno.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t remember what I removed/changed... but maybe Nick can figure it out. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNick is still looking for a more-elegant way to derive/move-along camera-forward direction. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTesters_dd_  Press V key to choose the player camera (on the little box). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen press W to move the box/cam forward.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHis system is working well_co_ but he would like a cleaner way... than using forwardbox.  Let_t_s help him out with some apropos playgrounds or magic code.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nicktendo","Date":"2017-06-14T15:45:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you for the great work _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ The main reason I_t_m arranging the scene in this manner is to ultimately implement _qt_artificial gravity_qt_ on a spacecraft relative to the _qt_down_qt_ direction on the ship as the craft moves/rotates throughout space.  The gravity force vector will be constantly translated to directly below the player so they are pushed towards the floor of the spacecraft.  When they exit the spacecraft the gravity force will be turned off.  There will be many other objects floating in space that I can_t_t have affected by the same artificial gravity that is implemented on the player when they are aboard the ship.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe main thing for which I was looking for a more elegant solution is the following_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            _lt_strong_gt_// Calculate Z rotation of _t_forward_t_ vector._lt_br /_gt_\n\t            newX _eq_ .1 * Math.cos((camera.rotation.z) + 3.141592654 / 2)_sm__lt_br /_gt_\n\t            newY _eq_ .1 * Math.sin((camera.rotation.z) + 3.141592654 / 2)_sm__lt_br /_gt_\n\t            forwardbox.position.x _eq_ newX + box.position.x_sm__lt_br /_gt_\n\t            forwardbox.position.y _eq_ newY + box.position.y_sm__lt_br /_gt_\n\t            _lt_br /_gt_\n\t            // Calculate X rotation of _t_forward_t_ vector._lt_br /_gt_\n\t            newY _eq_ .1 * Math.cos((camera.rotation.x) + 3.141592654 / 2)_sm__lt_br /_gt_\n\t            newZ _eq_ .1 * Math.sin((camera.rotation.x) + 3.141592654 / 2)_sm__lt_br /_gt_\n\t            forwardbox.position.y _eq_ newY + box.position.y_sm__lt_br /_gt_\n\t            forwardbox.position.z _eq_ newZ + box.position.z_sm__lt_br /_gt_\n\t            _lt_br /_gt_\n\t            // Calculate Y rotation of _t_forward_t_ vector._lt_br /_gt_\n\t            newX _eq_ .1 * Math.cos(-(camera.rotation.y) + 3.141592654 / 2)_sm__lt_br /_gt_\n\t            newZ _eq_ .1 * Math.sin(-(camera.rotation.y) + 3.141592654 / 2)_sm__lt_br /_gt_\n\t            forwardbox.position.x _eq_ newX + box.position.x_sm__lt_br /_gt_\n\t            forwardbox.position.z _eq_ newZ + box.position.z_sm__lt_br /_gt_\n\t            _lt_br /_gt_\n\t            if(moveForward _eq__eq_ true){_lt_br /_gt_\n\t                box.position.x +_eq_ forwardbox.position.x - box.position.x_sm__lt_br /_gt_\n\t                box.position.y +_eq_ forwardbox.position.y - box.position.y_sm__lt_br /_gt_\n\t                box.position.z +_eq_ forwardbox.position.z - box.position.z_sm__lt_br /_gt_\n\t            }_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI didn_t_t know if BJS had a more efficient way to accomplish the translation for the _qt_forward_qt_ box in front and center of the FreeCamera.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nicktendo","Date":"2017-06-14T15:54:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWould it be more practical and predictable to utilize the linear velocity of the physics imposter of the player to implement the gravitational _qt_force_qt_?  I.e. gravity is implemented by adding the vector of the artificial gravity to the current linear velocity of the player.  I have a feeling that may play more nicely with the physics engine?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nicktendo","Date":"2017-06-14T16:01:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tUpdate using linear velocity to implement gravity_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#KWD0E1%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#KWD0E1#6_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-14T16:17:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk gotcha _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt always tough to help with physics as we are not controlling the simulation (which is done by cannon or oimo).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNevertheless_co_ can you try to summarize in the simpler possible way what is the problem here?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-14T17:28:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tQuick interrupt_dd_  Nick_co_ don_t_t forget about _qt_faking it_qt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  When player is on-ship_co_ turn-off his physics and just keep his footHeight _eq__eq_ shipFloorHeight.  Besides_co_ you don_t_t want him to slide into a spaceship wall... when ship thrusts_co_ right?  heh.  *shrug* \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre _qt_purist tendencies_qt_ in your personality... preventing you from doing sneaky tricks?  If so_co_ I can understand that_co_ too.  Don_t_t forget the physics joint and its springs_co_ too.  If you attached player to inside of ship_co_ with perhaps 6 joints with springs... then player would _qt_skid_qt_ _lt_em_gt_some_lt_/em_gt_ distance with fast ship moves... but not too much.  Adjustable bungee cords_co_ in a way.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_   Perhaps doable with ONE joint... into top of head_co_ or up player_t_s butt... then set fixed rotation (so he can_t_t tip).  He will stay standing upright_co_ but might skid position-wise... a small amount... when ship moves.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ Why worry about gravity calcs?  Just give the impostor some mass_co_ and scene.gravity will automatically be calc_t_d-in by the physics engine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ back to _qt_turning/moving box in same direction as camera view_qt_ thing... if that is the issue.  I think we had TWO issues/challenges happening here. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-17T18:20:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo movement here_co_ huh?  Sorry Nick.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#15U9CT%2321_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#15U9CT#21_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s another playground I found laying in Playground Park.  Besides being _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_-grade power-code (and who knows who else has had their fingers in this)... I wanted to show you something.  Line 290_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgroundBody._lt_strong_gt_quaternion.setFromAxisAngle(new CANNON.Vec3(1_co_0_co_0)_co_-Math.PI/2)_lt_/strong_gt__sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is _qt_native_qt_ Cannon lib code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_.quaternion_lt_/em_gt_ is the NAME of the rotation-setting property on Cannon p-bodies.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYum!  What a nice physicsBody rotater_co_ eh?  I think you could use this.  Now you don_t_t NEED your camera to pan and tilt anymore... because you can pan and tilt the camera-carrying robot_co_ if you like.  (But maybe that is unnecessary)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ that playground there... is full of LOTS of cool (Quaternion) physics crap.  When you_t_re dealing-with physicsBody rotations_co_ you_t_ll ALWAYS be dealing-with Quaternions.  International law_co_ I think.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tScroll down down down... the delicious code just keeps rolling-on-past.  Just a great big pile of demented physics experimentation.  Gotta love it!  Lots to be learned in there.  WASD keys drive the _qt_physics sphere_qt_ around.  Notice the cool little _qt_hop/bounce_qt_ that the camera-carrying robot does... at the top of the ramp.  Fun!  Be well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-06-19T14:04:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe prototyping is strong in that one _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd yeah_co_ I believe it has pieces of code from all around the place _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI would advice against moving the physics body using units_co_ and instead use proper velocities. This was an old test of mine_co_ but I still use pretty much the same way of doing it myself. The reason why is_co_ that it is the only way (At least that I know of_co_ after countless tests) of getting smooth_co_ predictable movement for multiplayer projects. You can_t_t step ahead or instantly reapply inputs using Cannon_co_ and Cannon is not deterministic when it comes to different browsers and architectures. This is far from perfect_co_ but it_t_s the best at least for me. Enough hijacking of the thread _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tUsing velocities instead is trivial and takes seconds to implement. I_t_m not quite sure what he is after_co_ though. I have a hard time wrapping my head around it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-19T14:37:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThx R.  I think Nick is after exactly what you built... camera on a bumper car.  Oh_co_ I guess that was in a different thread by Nick.  This thread just wanted to find more-elegant ways to move the physics impostor/mesh... in the same direction as the camera is aimed.  Your demo does that nicely_co_ too.  Even if we don_t_t exactly understand what Nick wants_co_ everything he could possibly need... is inside that demo... somewhere.  It_t_s good stuff... thanks for making it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSpeaking of physics-active spheres...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    ...we sometimes see them guys in bars/taverns... with the really big beer-belly.  When they walk-up and start talking to you_co_ their belly arrives first_co_ and it knocks the drink out of your hand_co_ and might even bump into YOU_co_ and send you flying across the bar. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBelly-Bumper v1.0.  Physics-active beer belly.  It can actually blaze a trail through a jungle... if you can get ol_t_ beer-belly to run a little... get some momentum going... for knocking-down the BIG trees.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOthers... tilt the camera down... in Raggar_t_s demo.  You_t_ll see the beer belly sticking-out_co_ there.  heh.  Use _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt__t_s fur shader to put some hair on it.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"nicktendo","Date":"2017-06-26T11:44:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Yes_co_ I will summarize my intentions more clearly in a following post with an updated example _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ Thank you for the amazing feedback_co_ incredibly comprehensive and useful!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_ Great advice to use velocities instead of units _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
[{"Owner":"ozRocker","Date":"2015-07-20T14:04:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve been ripping my hair out dealing with the Safari browser address bar on iPhones.  By default if you turn the phone to landscape you have an address bar that sometimes drops down and covers the content.  With normal HTML you can drag page elements upwards which will push the address bar away and take you back to fullscreen mode.  When you have a 3D canvas you can_t_t do that.  Its not an element you can drag around with your finger.  I_t_ve researched and there_t_s no way to determine if the address bar is showing or not.  There_t_s also no way to hide/show it via code (not since iOS 7).  What I_t_ve done is changed _qt_position_qt_ of the canvas to _qt_fixed_qt_ and the canvas will actual get pushed down by the address bar.  So with that I can tell if the address bar is showing by this code_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var canvas _eq_ document.getElementsByTagName(_qt_canvas_qt_)[0]_sm_onResize(canvas)_sm_function onResize(element) {    var elementHeight _eq_ element.height_co_        elementWidth _eq_ element.width_sm_    setInterval(function(){       if (element.height !_eq__eq_ elementHeight || element.width !_eq__eq_ elementWidth) {          oldHeight _eq_ elementHeight_sm_          elementWidth _eq_ element.width_sm_          elementHeight _eq_ element.height_sm_          setTimeout(function() {            engine.resize()_sm_          }_co_ 1000)_sm_       }    }_co_ 300)_sm_}_lt_/pre_gt__lt_/div_gt__lt_div_gt_This is not a great solution.  It just polls the canvas to see if its changed dimension since 300 milliseconds ago.  I searched for ages and this was the only solution that worked.  Also_co_ in order to hide the address bar you need to place an HTML element on top of the canvas and the user needs to push that upwards to hide the bar.  Its not ideal at all.  Basically once the address bar is down its hard and non-intuitive to hide it again.  Its a bigger problem on the iPhone 5S because the addition of the address bar and footer bar reduces the canvas height substantially in landscape mode.  Has anyone dealt with this before?  Any suggestions on how to deal with this?_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"george","Date":"2015-07-21T05:51:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do the same. And many others too. Fix the canvas to the size of the viewport and add some padding to the bottom of the page so that the user is allowed to scroll down. Experienced user will know what to do and you could tell unexperienced users how to hide the address bar and activate the minimal ui. There is no way around this problem without asking the user to add the app to the home screen. I really would save the energy for your real stuff. Settle with it and hope that apple delivers some solution soon that will last longer than a minor iOS version like it happened with the minimal-ui meta tag._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Regards George_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-07-21T08:40:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the advice George.  I_t_ve added a bit of padding to the bottom of the page (I_t_ve noticed others suggest that too) and I_t_ve left it as is.  Its not perfect but at least none of the canvas is getting cut off_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
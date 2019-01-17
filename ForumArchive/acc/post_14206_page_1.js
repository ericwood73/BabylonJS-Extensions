[{"Owner":"JCPalmer","Date":"2015-04-30T21:30:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Tower of Babel is a Blender exporter that generates Typescript / Javascript source code.  This is an alternative to converting the contents of a .blend into data that needs to be loaded by JSON &amp_sm_ constructed into Meshes / Cameras / Lights.  This has the following implications_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_Inline source code loads very fast._lt_/li_gt__lt_li_gt_Permits object oriented programming through subclassing._lt_/li_gt__lt_li_gt_Source code is better handled in a repository than a .babylon._lt_/li_gt__lt_/ul_gt__lt_p_gt_TOB 2.0 is now a top level directory of the Extensions repository _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/TowerOfBabel_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/tree/master/TowerOfBabel_lt_/a_gt_. This has taken a while actually making into the public repository.  Being in the same repository as Dialog_co_ it was held back till that was committed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The major new feature is taking advantage of the changes to cloning in BJS 2.0.  This allowed subclasses of BABYLON.Mesh to also be cloned.  This permitted a mesh factory concept_co_ where you just ask for an instance of a mesh_co_ using the same name as it was in Blender. _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var factory _eq_ new BlenderFileModule.MeshFactory(scene)_sm_var instance1 _eq_ factory.instance(_qt_blenderMeshName_qt_)_sm_var clone1    _eq_ factory.instance(_qt_blenderMeshName_qt_)_sm_var clone2    _eq_ factory.instance(_qt_blenderMeshName_qt_)_sm__lt_/pre_gt__lt_p_gt_The factory returns one_co_ possibly a clone_co_ if you have already asked for it before.  This is turned on using a new checkbox shown when performing the export._lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2015/post-8492-0-55784900-1430425788.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2015/post-8492-0-55784900-1430425788.png_qt_ data-fileid_eq__qt_4182_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8492-0-55784900-1430425788.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_If you have multiple mesh factories you can request your meshes also specifying the module name as parameter.  (Include the very small TOB-runtime.js ).  Here is how Font modules are initialized / called in Dialog_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_public static loadStockTypefaces(scene _dd_ BABYLON.Scene){    if (typeof (Font3D) !_eq__eq_ _t_undefined_t_){        TOWER_OF_BABEL.MeshFactory.MODULES.push(new Font3D.MeshFactory(scene))_sm_        Label.DEFAULT_FONT_MODULE _eq_ _t_Font3D_t__sm_         BABYLON.Tools.Log(_t_Font3D loaded_t_)_sm_    }    if (typeof (Font2D) !_eq__eq_ _t_undefined_t_){        TOWER_OF_BABEL.MeshFactory.MODULES.push(new Font2D.MeshFactory(scene))_sm_       Label.DEFAULT_FONT_MODULE _eq_ _t_Font2D_t__sm_        BABYLON.Tools.Log(_t_Font2D loaded_t_)_sm_    }                // see if an extensions is found    if (typeof (Font3D_EXT) !_eq__eq_ _t_undefined_t_){        TOWER_OF_BABEL.MeshFactory.MODULES.push(new Font3D_EXT.MeshFactory(scene))_sm_        BABYLON.Tools.Log(_t_Font3D_EXT loaded_t_)_sm_    }    if (typeof (Font2D_EXT) !_eq__eq_ _t_undefined_t_){        TOWER_OF_BABEL.MeshFactory.MODULES.push(new Font2D_EXT.MeshFactory(scene))_sm_       BABYLON.Tools.Log(_t_Font2D_EXT loaded_t_)_sm_    }}...var letter_g _eq_ TOWER_OF_BABEL.MeshFactory.instance(_qt_Font2D_qt__co_ _qt_g_qt_)_sm__lt_/pre_gt__lt_p_gt_Each Blender un-parented mesh is generated as a subclass.  Another new feature is being able to specify a base class to inherit from other than the BABYLON.Mesh default.  What is great about this is you can use Blender to design &amp_sm_ maintain your geometry_co_ while seamlessly generating JS or TS source as a subclass of your own writing. (Sooner or later it has to inherit from BABYLON.Mesh_co_ of course).  This is specified in the custom data properties_dd__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2015/post-8492-0-60286500-1430426823.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2015/post-8492-0-60286500-1430426823.png_qt_ data-fileid_eq__qt_4184_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8492-0-60286500-1430426823.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_With source code generated_co_ you simply get an instance_dd_ (meshes in a .blend are generated as a module with name matching exported file)_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var myMesh _eq_ new BlenderFileModule.BlenderMesh(scene)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-04-30T22:23:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow_co_ that_t_s allot to take in.  I_t_m revisiting our entire pipeline for future projects_co_ and it appears that the release of BJS 2.0 and TOB 2.0 is perfect timing for us to take a diffrent approach to working with meshes.  Thank you for all of your work.  I can_t_t believe how quicky this framework is evolving and advancing.  I hope developers who might be questioning whether the BJS framework is where they should be working_co_ can look at this and other recent developments and see the advantages of BJS and this community over other development platforms._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks again. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-30T23:54:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks a lot my friend for this again!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-01T17:03:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Dbawel_co__lt_/p_gt__lt_p_gt_I really would skip 2.0_co_ and go with 2.1.  That version is in Beta_co_ whatever that means_co_ is much faster with _qt_free lunch optimizations_qt__dd__lt_/p_gt__lt_ol_gt__lt_li_gt_SIMD integration.  I am just starting to work with the Morph extension in this regard too._lt_/li_gt_\t_lt_li_gt_Freezing the computing of the world matrix of meshes you know as the developer do not move / scale / rotate very often_co_ or ever.  2.0 did checking to avoid the recompute_co_ but the checking itself was acting as a tax_co_ limiting scalability._lt_/li_gt_\t_lt_li_gt_disabling frustrum clipping for stuff the game developer knows will always be seen._lt_/li_gt_\t_lt_li_gt_disabling meshes completely that you do not want to be seen_co_ but  don_t_t want to get rid of yet_co_ now has nearly 0 overhead cpu._lt_/li_gt_\t_lt_li_gt_computeNormals_co_ if you call it_co_ is much faster._lt_/li_gt__lt_/ol_gt__lt_p_gt_By free lunch_co_ i mean_co_ there is no cost to be absorbed.  Earlier optimizations like mesh simplification lost detail.  Octrees needed like over a hundred meshes_co_ I think_co_ before it paid for its overhead.  This stuff just eliminates cpu cost either by special cpu instructions_co_ developer knowledge_co_ or have just been profiled &amp_sm_ improved.  Also saw today_co_ that textures are reload_co_ when they should be being shared by different meshes in 2.0._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-05-01T19:24:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Jeff_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Those are huge improvements_co_ and I haven_t_t found the BJS beta of previous versions buggy - at least since I_t_ve been using.  Thanks for the advisement_co_ as I haven_t_t looked at the features in 2.1 at all yet.  Things are moving so quickly_co_ it seems like we just moved into using 2.0.  In reviewing the updates that you listed here_co_ I expect a noticable increase in performance of the type of scenes we_t_re building - which are mesh and texture heavy_co_ and am eager to test if there is a recordable improvement._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks again for all of your contributions to this quickly evolving framework._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-03T19:46:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I am starting to actually think about my game again.  The textures specifically.  My philosophy is not _qt_Simple yet powerful_qt__co_ like BabylonJS.  I am more _qt_execution at any cost_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This does not mean that I tolerate over complexity.  I have a tendency to avoid that by writing programs that write programs (technically complex_co_ but the final code is dead simple).  This is effective at annihilating design time_co_ fixed data_co_ while being punishingly fast.  Am sort of thinking out loud_co_ but for TOB 2.1 I am considering in-lining textures directly into source code._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is a static function in babylon.texture.ts_co_ called CreateFromBase64String.  DK_co_ what if the data arg was actually the contents of a compressed nature_co_ a jpg or jpeg2?  Does the data have to be expanded_co_ which would kill this?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Did not want to do a lot with Python trying to write base64_co_ when it forced the expansion first._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-12-15T23:44:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ is Tower of Babel moved or ...? Thx.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-12-16T10:16:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/QueuedInterpolation/Blender_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/tree/master/QueuedInterpolation/Blender_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-12-18T03:38:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tQueuedInterpolation... indeed. Thx!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-12-18T16:54:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ that_t_s where it went.  You can use ToB without the QI animation system.  It writes Blender actions to BJS AnimationRanges_co_ similar to the the JSON exporter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ it does not write Typescript modules since this was published_co_ only Javascript modules.  The minor differences in code generation made the python code more complicated than it needed to be.  Instead it just writes a d.ts file of the couple of external entry points.  Works just as well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-12-18T18:15:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHero _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_. Thank you. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) afalcon interested in formatted big arrays of numbers in objects/modules. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t2) Thank you for non-type-safeness. JavaScript module patterns vastly preferred.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     There are reasons for not wrapping _lt_em_gt_everyone_lt_/em_gt_ in safety blankets. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) Animation Ranges... and QI Animation System... +Like! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDeep-dive pending...(Feb) .babylon current.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDocs look fantastic... +1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFound the QI animation...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_jokes-removed/&gt_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-12-18T18:29:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually_co_ not es6 modules_co_ but what Typescript generates for pre-es6.  Have thought about it_co_ es6_co_ but not yet.  Soon ie11 is just going to have to pound salt.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a site of all my test scenes_co_ but was referencing cdn.babylon.com.  Have not got around to testing for 3.1.  I know I have a problem with how pre-compiling materials was changed_co_ so some scenes do not work.  This is not going to get done prior to my Kinect integration work for Blender.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-12-18T22:53:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLol_co_ pound salt! +1 tomorrow....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll understandable. Can_t_t wait to read details and try things.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
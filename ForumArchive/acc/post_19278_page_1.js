[{"Owner":"hit2501","Date":"2015-12-15T22:23:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I use this code to show a sprite (popup) when mouse is over a mesh(pin01)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Pin01.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger_co_ function () {                        popup01 _eq_ new BABYLON.SpriteManager(_qt_popup_qt__co_ _qt_images/popup.jpg_qt__co_ 2000_co_ 400_co_ scene)_sm_                        popup01 _eq_ new BABYLON.Sprite(_qt_popup01_qt__co_ popup01)_sm_                        popup01.position _eq_ pin01.position_sm_                        popup01.size _eq_ 7_sm_                    }))_sm_   _lt_/pre_gt__lt_p_gt_And works fine but what I want is unload the sprite when mouse is out the mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What is the function to do that?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-12-15T22:45:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you want to delete a sprite from the scene_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Pin01.dispose()_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I may have misunderstood what you mean by _t_unload_t__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hit2501","Date":"2015-12-16T00:04:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank Dad72 that´s what I was looking for but for popup01 nice._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
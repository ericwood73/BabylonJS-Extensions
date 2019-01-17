[{"Owner":"TomaszFurca","Date":"2018-10-13T19:38:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have two types of shadow generator. For static elements and for dynamic. I have problem with shadow generator for dynamic meshes. At the begging of the scene i cannot see my light and shadows instead that I see artifacts_co_ but when i go to specific point in scene everything start working correctly. I attach video to show it in example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//streamable.com/ayukz_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//streamable.com/ayukz_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-15T17:13:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow do you create the light for dynamic objects? Is it set to not auto extends? (_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/shadows#directional-lights_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/babylon101/shadows#directional-lights_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2018-10-15T19:22:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is spot light generated using this code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ const playerLight _eq_ new BABYLON.SpotLight(_qt_playerLightSpot_qt__co_\n                new BABYLON.Vector3(0_co_ 45_co_ 0)_co_\n                new BABYLON.Vector3(0_co_ -1_co_ 0)_co_\n                null_co_\n                null_co_\n                scene)_sm_\n            playerLight.diffuse _eq_ new BABYLON.Color3(1_co_ 0.7_co_ 0.3)_sm_\n            playerLight.angle _eq_ 0.7_sm_\n            playerLight.exponent _eq_ 70_sm_\n            playerLight.intensity _eq_ 0.8_sm_\n            playerLight.parent _eq_ playerMesh_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd then after recive information from socket about monsters I add it using_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_dynamicShadowGenerator.getShadowMap().renderList.push(mesh)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIf I use only player shadow then shadow is OK. But when i add monsters then i saw bugged shadow and light like this in video.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-15T22:36:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes so try with autoExtends _eq_ false. This should help\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2018-10-16T20:04:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately this doesn_t_t help with resolve this problem.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-16T23:41:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI may need a SIMPLE repro to help (I guess you are getting used to that _sm_))\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
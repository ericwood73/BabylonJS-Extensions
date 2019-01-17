[{"Owner":"PixelPush","Date":"2017-09-25T10:05:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow should I go about obtaining the size of mesh in pixels? Is this even possible ? I assume there is away to obtain measurements for the bounding box or something..?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PixelPush","Date":"2017-09-25T10:26:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo I_t_ve managed to get some data by using the following code\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsphere.getBoundingInfo().boundingBox.maximumWorld\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is on a Babylon sphere. The maximumWorld property is returning the x_co_y_co_z values but not sure what the units are at this point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHopefully this will help any other noobs with the same issue. If anyone knows a better method please post it here _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-09-25T11:32:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_189869_qt_ data-ipsquote-contentid_eq__qt_33083_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1506333938_qt_ data-ipsquote-userid_eq__qt_24891_qt_ data-ipsquote-username_eq__qt_PixelPush_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ PixelPush said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHow should I go about obtaining the size of mesh in pixels\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWhat do you call the size of a mesh in pixels ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA mesh is a geometry _dd_ a pool of vertices and edges. These vertices have 3D coordinates in the mesh local space.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe are you talking about the projection of the mesh in the screen space ? This one is depending on the position of the mesh in the World space_co_ on the position of the camera in the World and_co_ of course_co_ on the canvas/windows (viewport) size.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
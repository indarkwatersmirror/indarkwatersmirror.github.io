[_tb_system_call storage=system/_cg.ks]

[tb_ptext_hide  time="1000"  ]
[stop_bgmovie  time="1000"  ]
[jump  storage="cg.ks"  target="*EndhSceneView"  cond="f.CGMode=='true'"  ]
[hidemenubutton]

[tb_eval  exp="sf.Gallery=1"  name="Gallery"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="f.GalleryPage=0"  name="GalleryPage"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[cm  ]
*GalleryView

[bg  storage="bg_gallery.png"  time="100"  ]
[jump  storage="cg.ks"  target="*GalleryPage2"  cond="f.GalleryPage==1"  ]
[button  storage=""  target="*NoImage"  graphic="gallery/noimage2.png"  width="498"  height="147"  x="90"  y="554"  _clickable_img=""  name="img_10"  ]
[jump  storage="cg.ks"  target="*NoHscene01"  cond="sf.hScene01!=1"  ]
[button  storage="cg.ks"  target="*JumpToHScene01"  graphic="gallery/hButton01.png"  width="498"  height="147"  x="90"  y="554"  _clickable_img=""  name="img_12"  ]
*NoHscene01

[button  storage=""  target="*NoImage"  graphic="gallery/noimage2.png"  width="498"  height="147"  x="679"  y="554"  _clickable_img=""  name="img_14"  ]
[jump  storage="cg.ks"  target="*NoHscene02"  cond="sf.hScene02!=1"  ]
[button  storage="cg.ks"  target="*JumpToHScene02"  graphic="gallery/hButton02.png"  width="498"  height="147"  x="679"  y="554"  _clickable_img=""  name="img_16"  ]
*NoHscene02

[jump  storage="cg.ks"  target="*GalleryPage2"  cond="f.GalleryPage==1"  ]
[button  storage="cg.ks"  target="*GoToPage2"  graphic="ArrowRightButton.png"  width="80"  height="80"  x="1186"  y="588"  _clickable_img=""  name="img_19"  ]
[jump  storage="cg.ks"  target="*GalleryPage1"  cond=""  ]
*GalleryPage2

[button  storage="cg.ks"  target="*GoToPage1"  graphic="ArrowLeftButton.png"  width="80"  height="80"  x="10"  y="588"  _clickable_img=""  name="img_22"  ]
[button  storage="cg.ks"  target="*UnusedSceneView"  graphic="gallery/hButton03.png"  width="498"  height="147"  x="364"  y="554"  _clickable_img=""  name="img_23"  ]
*GalleryPage1

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="350"  y="20"  _clickable_img=""  name="img_25"  ]
[jump  storage="cg.ks"  target="*NoCg001"  cond="sf.cg001!=1"  ]
[button  storage="cg.ks"  target="*ShowCG01"  graphic="gallery/cgButton01.png"  width="160"  height="110"  x="350"  y="20"  _clickable_img=""  name="img_27"  ]
*NoCg001

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="570"  y="20"  _clickable_img=""  name="img_29"  ]
[jump  storage="cg.ks"  target="*NoCg002"  cond="sf.cg002!=1"  ]
[button  storage="cg.ks"  target="*ShowCG02"  graphic="gallery/cgButton02.png"  width="160"  height="110"  x="570"  y="20"  _clickable_img=""  name="img_31"  ]
*NoCg002

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="790"  y="20"  _clickable_img=""  name="img_33"  ]
[jump  storage="cg.ks"  target="*NoCg003"  cond="sf.cg003!=1"  ]
[button  storage="cg.ks"  target="*ShowCG03"  graphic="gallery/cgButton03.png"  width="160"  height="110"  x="790"  y="20"  _clickable_img=""  name="img_35"  ]
*NoCg003

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="1010"  y="20"  _clickable_img=""  name="img_37"  ]
[jump  storage="cg.ks"  target="*NoCg004"  cond="sf.cg004!=1"  ]
[button  storage="cg.ks"  target="*ShowCG04"  graphic="gallery/cgButton04.png"  width="160"  height="110"  x="1010"  y="20"  _clickable_img=""  name="img_39"  ]
*NoCg004

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="130"  y="180"  _clickable_img=""  name="img_41"  ]
[jump  storage="cg.ks"  target="*NoCg005"  cond="sf.cg005!=1"  ]
[button  storage="cg.ks"  target="*ShowCG05"  graphic="gallery/cgButton05.png"  width="160"  height="110"  x="130"  y="180"  _clickable_img=""  name="img_43"  ]
*NoCg005

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="350"  y="180"  _clickable_img=""  name="img_45"  ]
[jump  storage="cg.ks"  target="*NoCg006"  cond="sf.cg006!=1"  ]
[button  storage="cg.ks"  target="*ShowCG06"  graphic="gallery/cgButton06.png"  width="160"  height="110"  x="350"  y="180"  _clickable_img=""  name="img_47"  ]
*NoCg006

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="570"  y="180"  _clickable_img=""  name="img_49"  ]
[jump  storage="cg.ks"  target="*NoCg007"  cond="sf.cg007!=1"  ]
[button  storage="cg.ks"  target="*ShowCG07"  graphic="gallery/cgButton07.png"  width="160"  height="110"  x="570"  y="180"  _clickable_img=""  name="img_51"  ]
*NoCg007

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="790"  y="180"  _clickable_img=""  name="img_53"  ]
[jump  storage="cg.ks"  target="*NoCg008"  cond="sf.cg008!=1"  ]
[button  storage="cg.ks"  target="*ShowCG08"  graphic="gallery/cgButton08.png"  width="160"  height="110"  x="790"  y="180"  _clickable_img=""  name="img_55"  ]
*NoCg008

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="1010"  y="180"  _clickable_img=""  name="img_57"  ]
[jump  storage="cg.ks"  target="*NoCg009"  cond="sf.cg009!=1"  ]
[button  storage="cg.ks"  target="*ShowCG09"  graphic="gallery/cgButton09.png"  width="160"  height="110"  x="1010"  y="180"  _clickable_img=""  name="img_59"  ]
*NoCg009

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="130"  y="340"  _clickable_img=""  name="img_61"  ]
[jump  storage="cg.ks"  target="*NoCg010"  cond="sf.cg010!=1"  ]
[button  storage="cg.ks"  target="*ShowCG10"  graphic="gallery/cgButton10.png"  width="160"  height="110"  x="130"  y="340"  _clickable_img=""  name="img_63"  ]
*NoCg010

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="350"  y="340"  _clickable_img=""  name="img_65"  ]
[jump  storage="cg.ks"  target="*NoCg011"  cond="sf.cg011!=1"  ]
[button  storage="cg.ks"  target="*ShowCG11"  graphic="gallery/cgButton11.png"  width="160"  height="110"  x="350"  y="340"  _clickable_img=""  name="img_67"  ]
*NoCg011

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="570"  y="340"  _clickable_img=""  name="img_69"  ]
[jump  storage="cg.ks"  target="*NoCg012"  cond="sf.cg012!=1"  ]
[button  storage="cg.ks"  target="*ShowCG12"  graphic="gallery/cgButton12.png"  width="160"  height="110"  x="570"  y="340"  _clickable_img=""  name="img_71"  ]
*NoCg012

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="790"  y="340"  _clickable_img=""  name="img_73"  ]
[jump  storage="cg.ks"  target="*NoCg013"  cond="sf.cg013!=1"  ]
[button  storage="cg.ks"  target="*ShowCG13"  graphic="gallery/cgButton13.png"  width="160"  height="110"  x="790"  y="340"  _clickable_img=""  name="img_75"  ]
*NoCg013

[button  storage=""  target="*NoImage"  graphic="gallery/noimage.png"  width="160"  height="110"  x="1010"  y="340"  _clickable_img=""  name="img_77"  ]
[jump  storage="cg.ks"  target="*NoCg014"  cond="sf.cg013!=1"  ]
[button  storage="cg.ks"  target="*ShowCG14"  graphic="gallery/cgButton14.png"  width="160"  height="110"  x="1010"  y="340"  _clickable_img=""  name="img_79"  ]
*NoCg014

[button  graphic="config/menu_button_close.png"  enterimg="config/menu_button_close2.png"  target="*BackToTitle"  x="1182"  y="1"  storage="cg.ks"  width=""  height=""  _clickable_img=""  name="img_81"  ]
[s  ]
*BackToTitle

[cm  ]
[awakegame]

[return  ]
[s  ]
*NoImage

[s  ]
*JumpToHScene01

[tb_eval  exp="f.CGMode='true'"  name="CGMode"  cmd="="  op="t"  val="true"  val_2="undefined"  ]
[stopbgm  time="1500"  fadeout="true"  ]
[cm  ]
[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[wait  time="2000"  ]
[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Danse_Morialta.ogg"  fadein="true"  ]
[jump  storage="scene4h.ks"  target="*hScene01Start"  ]
[s  ]
*JumpToHScene02

[tb_eval  exp="f.CGMode='true'"  name="CGMode"  cmd="="  op="t"  val="true"  val_2="undefined"  ]
[stopbgm  time="1500"  fadeout="true"  ]
[cm  ]
[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[wait  time="2000"  ]
[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Danse_Morialta.ogg"  fadein="true"  ]
[tb_show_message_window  ]
[jump  storage="scene4h.ks"  target="*hScene02Start"  ]
[s  ]
*ShowCG01

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/001.jpg"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG02

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/002.jpg"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG03

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/003.jpg"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG04

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/004.jpg"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG05

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/005.jpg"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG06

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/006.png"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG07

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/006_a.png"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG08

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/006_b.png"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG09

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/007.png"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG10

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/008.png"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG11

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/008_a.png"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG12

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/009.png"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG13

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/010.png"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
*ShowCG14

[cm  ]
[bg  time="1000"  method="fadeIn"  storage="cg/011.png"  ]
[tb_start_tyrano_code]
[l]
[_tb_end_tyrano_code]

[jump  storage="cg.ks"  target="*GalleryView"  ]
[s  ]
*EndhSceneView

[bg  time="10"  method="crossfade"  storage="bg/Black.png"  ]
[tb_ptext_show  x="1092"  y="662"  size="30"  color="0xffffff"  time="0"  text="Gallery..."  anim="false"  face="undefined"  edge="undefined"  shadow="undefined"  ]
[stop_bgmovie  time="1000"  ]
[stopbgm  time="1000"  fadeout="true"  ]
[tb_eval  exp="f.CGMode='false'"  name="CGMode"  cmd="="  op="t"  val="false"  val_2="undefined"  ]
[wait  time="1500"  ]
[tb_ptext_hide  time="1000"  ]
[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Heartwarming.ogg"  ]
[cm  ]
[jump  storage="cg.ks"  target="*GalleryView"  ]
[s  ]
*GoToPage2

[tb_eval  exp="f.GalleryPage=1"  name="GalleryPage"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[cm  ]
[jump  storage="cg.ks"  target="*GalleryView"  ]
[s  ]
*GoToPage1

[tb_eval  exp="f.GalleryPage=0"  name="GalleryPage"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[cm  ]
[jump  storage="cg.ks"  target="*GalleryView"  ]
[s  ]
*UnusedSceneView

[tb_eval  exp="f.CGMode='true'"  name="CGMode"  cmd="="  op="t"  val="true"  val_2="undefined"  ]
[stopbgm  time="1500"  fadeout="true"  ]
[cm  ]
[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[wait  time="2000"  ]
[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Danse_Morialta.ogg"  fadein="true"  ]
[jump  storage="unused.ks"  target=""  ]
[s  ]

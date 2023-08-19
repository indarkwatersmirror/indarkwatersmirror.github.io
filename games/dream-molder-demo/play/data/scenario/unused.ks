[_tb_system_call storage=system/_unused.ks]

[tb_eval  exp="f.AniVar=0"  name="AniVar"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[bgmovie  time="1000"  volume="100"  loop="true"  storage="unused/Scene01.webm"  ]
*ShowButtons

[button  storage="cg.ks"  target="*EndhSceneView"  graphic="config/c_btn_back.png"  width="90"  height="90"  x="1188"  y="-57"  _clickable_img=""  name="img_4"  ]
[jump  storage="unused.ks"  target="*ButtonNext"  cond="f.AniVar>6"  ]
[button  storage=""  target="*GoToNext"  graphic="ArrowRightButton.png"  width="80"  height="80"  x="1192"  y="637"  _clickable_img=""  name="img_4"  ]
[jump  storage="unused.ks"  target="*SceneButtons"  ]
*ButtonNext

[button  storage=""  target="*WaitInput"  graphic="ArrowRightButton_2.png"  width="80"  height="80"  x="1192"  y="637"  _clickable_img=""  name="img_7"  ]
*SceneButtons

[button  storage=""  target="*Ani08"  graphic="Marker_2.png"  width="30"  height="30"  x="1158"  y="663"  _clickable_img=""  name="img_9"  ]
[button  storage=""  target="*Ani07"  graphic="Marker_2.png"  width="30"  height="30"  x="1126"  y="663"  _clickable_img=""  name="img_10"  ]
[button  storage=""  target="*Ani06"  graphic="Marker_2.png"  width="30"  height="30"  x="1094"  y="663"  _clickable_img=""  name="img_11"  ]
[button  storage=""  target="*Ani05"  graphic="Marker_2.png"  width="30"  height="30"  x="1062"  y="663"  _clickable_img=""  name="img_12"  ]
[button  storage=""  target="*Ani04"  graphic="Marker_2.png"  width="30"  height="30"  x="1030"  y="663"  _clickable_img=""  name="img_13"  ]
[button  storage=""  target="*Ani03"  graphic="Marker_2.png"  width="30"  height="30"  x="998"  y="663"  _clickable_img=""  name="img_14"  ]
[button  storage=""  target="*Ani02"  graphic="Marker_2.png"  width="30"  height="30"  x="966"  y="663"  _clickable_img=""  name="img_15"  ]
[button  storage=""  target="*Ani01"  graphic="Marker_2.png"  width="30"  height="30"  x="934"  y="663"  _clickable_img=""  name="img_16"  ]
[jump  storage="unused.ks"  target="*NotAni7"  cond="f.AniVar!=7"  ]
[button  storage=""  target="*Ani08"  graphic="Marker_3.png"  width="30"  height="30"  x="1158"  y="663"  _clickable_img=""  name="img_19"  ]
*NotAni7

[jump  storage="unused.ks"  target="*NotAni6"  cond="f.AniVar!=6"  ]
[button  storage=""  target="*Ani07"  graphic="Marker_3.png"  width="30"  height="30"  x="1126"  y="663"  _clickable_img=""  name="img_21"  ]
*NotAni6

[jump  storage="unused.ks"  target="*NotAni5"  cond="f.AniVar!=5"  ]
[button  storage=""  target="*Ani06"  graphic="Marker_3.png"  width="30"  height="30"  x="1094"  y="663"  _clickable_img=""  name="img_24"  ]
*NotAni5

[jump  storage="unused.ks"  target="*NotAni4"  cond="f.AniVar!=4"  ]
[button  storage=""  target="*Ani05"  graphic="Marker.png"  width="30"  height="30"  x="1062"  y="663"  _clickable_img=""  name="img_27"  ]
*NotAni4

[jump  storage="unused.ks"  target="*NotAni3"  cond="f.AniVar!=3"  ]
[button  storage=""  target="*Ani04"  graphic="Marker_3.png"  width="30"  height="30"  x="1030"  y="663"  _clickable_img=""  name="img_30"  ]
*NotAni3

[jump  storage="unused.ks"  target="*NotAni2"  cond="f.AniVar!=2"  ]
[button  storage=""  target="*Ani03"  graphic="Marker.png"  width="30"  height="30"  x="998"  y="663"  _clickable_img=""  name="img_33"  ]
*NotAni2

[jump  storage="unused.ks"  target="*NotAni1"  cond="f.AniVar!=1"  ]
[button  storage=""  target="*Ani02"  graphic="Marker_3.png"  width="30"  height="30"  x="966"  y="663"  _clickable_img=""  name="img_36"  ]
*NotAni1

[jump  storage="unused.ks"  target="*NotAni0"  cond="f.AniVar!=0"  ]
[button  storage=""  target="*Ani01"  graphic="Marker_3.png"  width="30"  height="30"  x="934"  y="663"  _clickable_img=""  name="img_15"  ]
*NotAni0

[jump  storage="unused.ks"  target="*ButtonBack"  cond="f.AniVar<1"  ]
[button  storage=""  target="*GoBackwarts"  graphic="ArrowLeftButton.png"  width="80"  height="80"  x="850"  y="637"  _clickable_img=""  name="img_17"  ]
[jump  storage="unused.ks"  target="*WaitInput"  ]
*ButtonBack

[button  storage=""  target="*WaitInput"  graphic="ArrowLeftButton_2.png"  width="80"  height="80"  x="850"  y="637"  _clickable_img=""  name="img_20"  ]
[jump  storage="unused.ks"  target="*WaitInput"  ]
*Ani01

[cm  ]
[tb_eval  exp="f.AniVar=0"  name="AniVar"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_start_tyrano_code]
[stop_bgmovie time="1000" wait="false"]

[_tb_end_tyrano_code]

[bgmovie  time="1000"  volume="100"  loop="true"  storage="unused/Scene01.webm"  ]
[jump  storage="unused.ks"  target="*ShowButtons"  cond=""  ]
*Ani02

[cm  ]
[tb_eval  exp="f.AniVar=1"  name="AniVar"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_start_tyrano_code]
[stop_bgmovie time="1000" wait="false"]

[_tb_end_tyrano_code]

[bgmovie  time="1000"  volume="100"  loop="true"  storage="unused/Scene02.webm"  ]
[jump  storage="unused.ks"  target="*ShowButtons"  ]
*Ani03

[cm  ]
[tb_eval  exp="f.AniVar=2"  name="AniVar"  cmd="="  op="t"  val="2"  val_2="undefined"  ]
[tb_start_tyrano_code]
[stop_bgmovie time="1000" wait="false"]

[_tb_end_tyrano_code]

[bgmovie  time="1000"  volume="100"  loop="true"  storage="unused/Scene03.webm"  ]
[jump  storage="unused.ks"  target="*ShowButtons"  ]
*Ani04

[cm  ]
[tb_eval  exp="f.AniVar=3"  name="AniVar"  cmd="="  op="t"  val="3"  val_2="undefined"  ]
[tb_start_tyrano_code]
[stop_bgmovie time="1000" wait="false"]

[_tb_end_tyrano_code]

[bgmovie  time="1000"  volume="100"  loop="true"  storage="unused/Scene04.webm"  ]
[jump  storage="unused.ks"  target="*ShowButtons"  ]
*Ani05

[cm  ]
[tb_eval  exp="f.AniVar=4"  name="AniVar"  cmd="="  op="t"  val="4"  val_2="undefined"  ]
[tb_start_tyrano_code]
[stop_bgmovie time="1000" wait="false"]

[_tb_end_tyrano_code]

[bgmovie  time="1000"  volume="100"  loop="true"  storage="unused/Scene05.webm"  ]
[jump  storage="unused.ks"  target="*ShowButtons"  ]
*Ani06

[cm  ]
[tb_eval  exp="f.AniVar=5"  name="AniVar"  cmd="="  op="t"  val="5"  val_2="undefined"  ]
[tb_start_tyrano_code]
[stop_bgmovie time="1000" wait="false"]

[_tb_end_tyrano_code]

[bgmovie  time="1000"  volume="100"  loop="true"  storage="unused/Scene06.webm"  ]
[jump  storage="unused.ks"  target="*ShowButtons"  ]
*Ani07

[cm  ]
[tb_eval  exp="f.AniVar=6"  name="AniVar"  cmd="="  op="t"  val="6"  val_2="undefined"  ]
[tb_start_tyrano_code]
[stop_bgmovie time="1000" wait="false"]

[_tb_end_tyrano_code]

[bgmovie  time="1000"  volume="100"  loop="true"  storage="unused/Scene07.webm"  ]
[jump  storage="unused.ks"  target="*ShowButtons"  ]
*Ani08

[cm  ]
[tb_eval  exp="f.AniVar=7"  name="AniVar"  cmd="="  op="t"  val="7"  val_2="undefined"  ]
[tb_start_tyrano_code]
[stop_bgmovie time="1000" wait="false"]

[_tb_end_tyrano_code]

[bgmovie  time="1000"  volume="100"  loop="true"  storage="unused/Scene08.webm"  ]
[jump  storage="unused.ks"  target="*ShowButtons"  ]
*WaitInput

[jump  storage="unused.ks"  target="*Autoplay"  cond="f.AutoPlayer=='true'"  ]
[s  ]
*GoToNext

[jump  storage="unused.ks"  target="*Ani02"  cond="f.AniVar==0"  ]
[jump  storage="unused.ks"  target="*Ani03"  cond="f.AniVar==1"  ]
[jump  storage="unused.ks"  target="*Ani04"  cond="f.AniVar==2"  ]
[jump  storage="unused.ks"  target="*Ani05"  cond="f.AniVar==3"  ]
[jump  storage="unused.ks"  target="*Ani06"  cond="f.AniVar==4"  ]
[jump  storage="unused.ks"  target="*Ani07"  cond="f.AniVar==5"  ]
[jump  storage="unused.ks"  target="*Ani08"  cond="f.AniVar==6"  ]
[s  ]
*GoBackwarts

[jump  storage="unused.ks"  target="*Ani01"  cond="f.AniVar==1"  ]
[jump  storage="unused.ks"  target="*Ani02"  cond="f.AniVar==2"  ]
[jump  storage="unused.ks"  target="*Ani03"  cond="f.AniVar==3"  ]
[jump  storage="unused.ks"  target="*Ani04"  cond="f.AniVar==4"  ]
[jump  storage="unused.ks"  target="*Ani05"  cond="f.AniVar==5"  ]
[jump  storage="unused.ks"  target="*Ani06"  cond="f.AniVar==6"  ]
[jump  storage="unused.ks"  target="*Ani07"  cond="f.AniVar==7"  ]
[s  ]

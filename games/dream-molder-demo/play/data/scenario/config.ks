[_tb_system_call storage=system/_config.ks]

[jump  storage="config.ks"  target="*NoBackdrop"  cond="f.BackdropActive==0"  ]
[stop_bgmovie  time="0"  ]
*NoBackdrop

[layopt layer=message0 visible=false]

[clearfix]

[free_layermode  time="0"  ]
[reset_camera  time="0"  ]
[iscript]
$(".layer_camera").empty();
[endscript]

[hidemenubutton]

[iscript]
tf.current_bgm_vol=parseInt(TG.config.defaultBgmVolume);
tf.current_se_vol=parseInt(TG.config.defaultSeVolume);
tf.current_ch_speed=parseInt(TG.config.chSpeed);
tf.current_auto_speed=parseInt(TG.config.autoSpeed);
tf.text_skip ="ON";
if(TG.config.unReadTextSkip != true){
tf.text_skip ="OFF";
}
[endscript]

[layopt layer=1 visible=true]

[cm  ]
*ShowButtons

[bg  storage="bg_config.jpg"  time="100"  ]
[button  storage="config.ks"  target="*ResetSavedData"  graphic="config/f_resetButton2.png"  width="230"  height="140"  x="612"  y="512"  _clickable_img=""  name="img_14"  ]
[button  storage="config.ks"  target="*ChangeMusic20"  graphic="config/volume_left.png"  width="116"  height="69"  x="388"  y="155"  _clickable_img=""  name="img_18"  ]
[button  graphic="config/c_btn_back.png"  enterimg="config/c_btn_back2.png"  target="*backtitle"  x="1182"  y="2"  storage=""  width=""  height=""  _clickable_img=""  name="img_16"  ]
[jump  storage="config.ks"  target="*mVolume0"  cond="sf.MusicVolume==0"  ]
[button  storage="config.ks"  target="*ChangeMusic20"  graphic="config/volume_middle.png"  width="117"  height="69"  x="506"  y="155"  _clickable_img=""  name="img_18"  ]
*mVolume0

[clickable  storage="config.ks"  x="506"  y="155"  width="117"  height="69"  target="*ChangeMusic20"  ]
[jump  storage="config.ks"  target="*mVolume20"  cond="sf.MusicVolume<21"  ]
[button  storage="config.ks"  target="*ChangeMusic40"  graphic="config/volume_middle.png"  width="117"  height="69"  x="625"  y="155"  _clickable_img=""  name="img_22"  ]
*mVolume20

[clickable  storage="config.ks"  x="625"  y="155"  width="117"  height="69"  target="*ChangeMusic40"  ]
[jump  storage="config.ks"  target="*mVolume40"  cond="sf.MusicVolume<41"  ]
[button  storage="config.ks"  target="*ChangeMusic60"  graphic="config/volume_middle.png"  width="117"  height="69"  x="744"  y="155"  _clickable_img=""  name="img_26"  ]
*mVolume40

[clickable  storage="config.ks"  x="744"  y="155"  width="117"  height="69"  target="*ChangeMusic60"  ]
[jump  storage="config.ks"  target="*mVolume60"  cond="sf.MusicVolume<61"  ]
[button  storage="config.ks"  target="*ChangeMusic80"  graphic="config/volume_middle.png"  width="117"  height="69"  x="863"  y="155"  _clickable_img=""  name="img_30"  ]
*mVolume60

[clickable  storage="config.ks"  x="863"  y="155"  width="117"  height="69"  target="*ChangeMusic80"  ]
[jump  storage="config.ks"  target="*mVolume80"  cond="sf.MusicVolume<81"  ]
[button  storage="config.ks"  target="*ChangeMusic100"  graphic="config/volume_right.png"  width="116"  height="69"  x="982"  y="155"  _clickable_img=""  name="img_34"  ]
*mVolume80

[clickable  storage="config.ks"  x="982"  y="155"  width="116"  height="69"  target="*ChangeMusic100"  ]
[button  storage="config.ks"  target="*ChangeMusicOff"  graphic="config/NoSound.png"  width="104"  height="67"  x="395"  y="154"  _clickable_img=""  name="img_37"  ]
[button  storage="config.ks"  target="*ChangeSoundOff"  graphic="config/volume_left.png"  width="116"  height="69"  x="388"  y="300"  _clickable_img=""  name="img_38"  ]
[jump  storage="config.ks"  target="*sVolume0"  cond="sf.SoundVolume==0"  ]
[button  storage="config.ks"  target="*ChangeSound20"  graphic="config/volume_middle.png"  width="117"  height="69"  x="506"  y="300"  _clickable_img=""  name="img_40"  ]
*sVolume0

[clickable  storage="config.ks"  x="506"  y="300"  width="117"  height="69"  target="*ChangeSound20"  ]
[jump  storage="config.ks"  target="*sVolume20"  cond="sf.SoundVolume<21"  ]
[button  storage="config.ks"  target="*ChangeSound40"  graphic="config/volume_middle.png"  width="117"  height="69"  x="625"  y="300"  _clickable_img=""  name="img_44"  ]
*sVolume20

[clickable  storage="config.ks"  x="625"  y="300"  width="117"  height="69"  target="*ChangeSound40"  ]
[jump  storage="config.ks"  target="*sVolume40"  cond="sf.SoundVolume<41"  ]
[button  storage="config.ks"  target="*ChangeSound60"  graphic="config/volume_middle.png"  width="117"  height="69"  x="744"  y="300"  _clickable_img=""  name="img_48"  ]
*sVolume40

[clickable  storage="config.ks"  x="744"  y="300"  width="117"  height="69"  target="*ChangeSound60"  ]
[jump  storage="config.ks"  target="*sVolume60"  cond="sf.SoundVolume<61"  ]
[button  storage="config.ks"  target="*ChangeSound80"  graphic="config/volume_middle.png"  width="117"  height="69"  x="863"  y="300"  _clickable_img=""  name="img_52"  ]
*sVolume60

[clickable  storage="config.ks"  x="863"  y="300"  width="117"  height="69"  target="*ChangeSound80"  ]
[jump  storage="config.ks"  target="*sVolume80"  cond="sf.SoundVolume<81"  ]
[button  storage="config.ks"  target="*ChangeSound100"  graphic="config/volume_right.png"  width="116"  height="69"  x="982"  y="300"  _clickable_img=""  name="img_56"  ]
*sVolume80

[clickable  storage="config.ks"  x="982"  y="300"  width="116"  height="69"  target="*ChangeSound100"  ]
[button  storage="config.ks"  target="*ChangeSoundOff"  graphic="config/NoSound.png"  width="104"  height="67"  x="395"  y="299"  _clickable_img=""  name="img_59"  ]
[button  storage="config.ks"  target="*SwapScreenMode"  graphic="config/w_ScreenButton.png"  width="230"  height="140"  x="171"  y="512"  _clickable_img=""  name="img_60"  ]
[jump  storage="config.ks"  target="*WindowActive"  cond="sf.FullScreen=='true'"  ]
[button  storage="config.ks"  target="*SwapScreenMode"  graphic="config/f_ScreenButton.png"  width="230"  height="140"  x="171"  y="512"  _clickable_img=""  name="img_62"  ]
*WindowActive

[s  ]
*SwapScreenMode

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[if exp='sf.FullScreen=="true"']
[eval exp='sf.FullScreen="false"']
[iscript]
document.body.style.zoom=1;
[endscript]
[else]
[eval exp='sf.FullScreen="true"']
[iscript]
widthScreen = screen.width / 1280;
heightScreen = screen.height/ 720;
if(widthScreen >= heightScreen ){
document.body.style.zoom=heightScreen ;
}else{
document.body.style.zoom=widthScreen ;
}
[endscript]
[endif]
[screen_full]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
[s  ]
*ChangeMusicOff

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.MusicVolume=0']
[bgmopt volume=0]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
*ChangeMusic20

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.MusicVolume=20']
[bgmopt volume=20]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
*ChangeMusic40

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.MusicVolume=40']
[bgmopt volume=40]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
*ChangeMusic60

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.MusicVolume=60']
[bgmopt volume=60]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
*ChangeMusic80

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.MusicVolume=80']
[bgmopt volume=80]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
*ChangeMusic100

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.MusicVolume=100']
[bgmopt volume=100]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
*ChangeSoundOff

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.SoundVolume=0']
[seopt volume=0]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
*ChangeSound20

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.SoundVolume=20']
[seopt volume=20]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
*ChangeSound40

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.SoundVolume=40']
[seopt volume=40]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
*ChangeSound60

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.SoundVolume=60']
[seopt volume=60]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
*ChangeSound80

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.SoundVolume=80']
[seopt volume=80]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
*ChangeSound100

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_start_tyrano_code]
[eval exp='sf.SoundVolume=100']
[seopt volume=100]
[_tb_end_tyrano_code]

[cm  ]
[jump  storage="config.ks"  target="*ShowButtons"  ]
[s  ]
*ResetSavedData

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[button  storage="config.ks"  target="*DeleteProgress"  graphic="config/f_resetButton3.png"  width="230"  height="140"  x="612"  y="512"  _clickable_img=""  name="img_13"  ]
[s  ]
*DeleteProgress

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="select.ogg"  ]
[tb_eval  exp="sf.cg001=0"  name="cg001"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg002=0"  name="cg002"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg003=0"  name="cg003"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg004=0"  name="cg004"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg005=0"  name="cg005"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg006=0"  name="cg006"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg007=0"  name="cg007"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg008=0"  name="cg008"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg009=0"  name="cg009"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg010=0"  name="cg010"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg011=0"  name="cg011"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg012=0"  name="cg012"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg013=0"  name="cg013"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.cg014=0"  name="cg014"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.hScene01=0"  name="hScene01"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.hScene02=0"  name="hScene02"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.Gallery=0"  name="Gallery"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[tb_eval  exp="sf.PlayThrough='false'"  name="PlayThrough"  cmd="="  op="t"  val="false"  val_2="undefined"  ]
[tb_eval  exp="sf.PlayThrough2='false'"  name="PlayThrough2"  cmd="="  op="t"  val="false"  val_2="undefined"  ]
[tb_eval  exp="sf.PlayThrough3='false'"  name="PlayThrough3"  cmd="="  op="t"  val="false"  val_2="undefined"  ]
[tb_eval  exp="sf.PlayThrough4='false'"  name="PlayThrough4"  cmd="="  op="t"  val="false"  val_2="undefined"  ]
[jump  storage="config.ks"  target="*backtitle"  ]
[s  ]
*backtitle

[cm  ]
[layopt layer=message1 visible=false]

[freeimage layer=1]

[clearfix]

[wait_cancel]

[awakegame]

*vol_bgm_change

[iscript]
$(".bgmvol").attr("src","data/image/config/c_btn.png");
$(".bgmvol_"+tf.current_bgm_vol).attr("src","data/image/config/c_set.png");
[endscript]

[bgmopt volume="&tf.current_bgm_vol"]

[return  ]

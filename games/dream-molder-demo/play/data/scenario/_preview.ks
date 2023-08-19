[_tb_system_call storage=system/_preview.ks ]

[mask time=10]
[mask_off time=10]
[tb_start_tyrano_code]
[macro name="rndSupporter"]
[iscript]
var patrons = ["Ramuros", "Funkywully12", "Timo", "Hero Botanist", "Griffs", "Riftwalking", "Anthony Sanchez", "Alexander Ford", "ZapK", "Onstrava", "ELZAM", "SlothDemon", "Patsy", "joe mach", "Daniel Molla Garcia", "OTM", "CrissRudolf gone", "Windblown Peaks", "Syaoran", "Funkywully12", "Kita Daggertail", "Seluvia", "Justin fultz", "Ken Hargen", "Testarossa Yamaoka", "Lira", "Mnemosyne", "Tanekoden", "Zachary Jensen", "Altare Jones", "PortalBomb", "LinkDragon", "Wall of Helios", "Alma Fjellstrom", "Wolfen Crystal", "Ramuros", "Ramuros", "Funkywully12", "LinkDragon", "Funkywully12", "Kura"];
rnd = Math.floor(Math.random() * 41)
f.PatronName = patrons[rnd]
document.getElementsByClassName("supportShuffle")[0].innerHTML = patrons[rnd];
[endscript]
[endmacro]
[_tb_end_tyrano_code]

[autoconfig speed=1]

[tb_eval  exp="f.StartToEnd=0"  name="StartToEnd"  cmd="="  op="t"  val="0"  val_2="undefined"  ]
[iscript]
window.setInterval(function(){document.getElementById('bgmovie').volume = (sf.SoundVolume/100);}, 500);
[endscript]

[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Heartwarming.ogg"  ]
*TitleWithoutMusic

[tb_eval  exp="f.CGMode='false'"  name="CGMode"  cmd="="  op="t"  val="false"  ]
[hidemenubutton]

[tb_keyconfig  flag="0"  ]
[tb_start_tyrano_code]
[macro name="PlayerThinking"][position frame="frame3.png"][font color=0xffffff edge=0x444444][endmacro]
[macro name="PlayerTalking"][position frame="frame2.png"][font color=0xffffff edge=0x7a95ff][endmacro]
[macro name="PlayerTalking2"][position frame="frame1.png"][font color=0xffffff edge=0x7a95ff][endmacro]
[macro name="BraixenTalking"][position frame="frame1.png"][font color=0xffffff edge=0xe33d3d][endmacro]
[macro name="MaidTalking"][position frame="frame1.png"][font color=0xffffff edge=0x8f63e8][endmacro]
[macro name="OwnerTalking"][position frame="frame1.png"][font color=0xffffff edge=0x372976][endmacro]
[_tb_end_tyrano_code]

[tb_hide_message_window  ]
[tb_ptext_show  x="24"  y="15"  size="59"  color="0xffffff"  time="1000"  text="Dream&nbsp;Molder"  face="Pokemon_GB"  edge="0xfc0303"  shadow="undefined"  anim="true"  fadeout="false"  wait="false"  in_effect="pulse"  out_effect="fadeOut"  ]
[tb_ptext_show  x="80"  y="88"  size="25"  color="0xf70808"  time="1000"  text="A&nbsp;Fan-made&nbsp;Braixen&nbsp;Visual&nbsp;Novel"  face="KOMTXT__"  edge="0xf7f2f2"  shadow="undefined"  anim="true"  fadeout="false"  wait="false"  in_effect="flash"  out_effect="fadeOut"  ]
[tb_ptext_show  x="99"  y="112"  size="15"  color="0xfbffcc"  time="1000"  text="Patreon&nbsp;Version"  face="KOMTXT__"  edge="undefined"  shadow="undefined"  anim="false"  fadeout="false"  wait="false"  in_effect="flash"  out_effect="fadeOut"  ]
[tb_ptext_show  x="78"  y="677"  size="12"  color="0xffffff"  time="1000"  text="Art&nbsp;&&nbsp;Story&nbsp;by"  face="Pokemon_GB"  edge="undefined"  shadow="undefined"  anim="true"  fadeout="false"  wait="false"  in_effect="fadeIn"  out_effect="fadeOut"  ]
[tb_ptext_show  x="16"  y="699"  size="12"  color="0xffffff"  time="1000"  text="patreon.com/InDarkWaters"  face="Pokemon_GB"  edge="undefined"  shadow="undefined"  anim="true"  fadeout="false"  wait="false"  in_effect="fadeIn"  out_effect="fadeOut"  ]
[tb_start_tyrano_code]
[tb_ptext_show  name="supportShuffle" x="810"  y="638"  size="14"  color="0xf2db59"  time="1000"  text="&f.PatronName"  face="Pokemon_GB"  edge="0x0a0a0a"  shadow="undefined"  anim="false"  fadeout="false"  wait="false"  in_effect="fadeIn"  out_effect="fadeOut"  ]
[_tb_end_tyrano_code]

[tb_ptext_show  x="540"  y="637"  size="15"  color="0xffffff"  time="100"  text="Special&nbsp;thanks&nbsp;to"  face="Pokemon_GB"  edge="0x0a0000"  shadow="undefined"  anim="true"  fadeout="false"  wait="false"  in_effect="pulse"  out_effect="fadeOut"  ]
[tb_ptext_show  x="686"  y="664"  size="14"  color="0xffffff"  time="100"  text="for&nbsp;the&nbsp;awesome&nbsp;Support!"  face="Pokemon_GB"  edge="0x030000"  shadow="undefined"  anim="true"  fadeout="false"  wait="false"  in_effect="pulse"  out_effect="fadeOut"  ]
[iscript]
if(Math.random() > 0.4){
f.random = 1;
}else{
f.random = 0;
}
[endscript]

[jump  storage="title_screen.ks"  target="*TitleScreen02"  cond="f.random==0"  ]
[bgmovie  time="1000"  volume="100"  loop="true"  storage="TitleScreen01.webm"  ]
[jump  storage="title_screen.ks"  target="*title"  ]
*TitleScreen02

[bgmovie  time="1000"  volume="100"  loop="true"  storage="TitleScreen02.webm"  ]
*TitleWithName

[tb_ptext_show  x="24"  y="15"  size="59"  color="0xffffff"  time="0"  text="Dream&nbsp;Molder"  face="Pokemon_GB"  edge="0xfc0303"  shadow="undefined"  anim="false"  fadeout="false"  wait="false"  in_effect="pulse"  out_effect="fadeOut"  ]
[tb_ptext_show  x="80"  y="88"  size="25"  color="0xf70808"  time="0"  text="A&nbsp;Fan-made&nbsp;Braixen&nbsp;Visual&nbsp;Novel"  face="KOMTXT__"  edge="0xf7f2f2"  shadow="undefined"  anim="false"  fadeout="false"  wait="false"  in_effect="flash"  out_effect="fadeOut"  ]
[tb_ptext_show  x="99"  y="112"  size="15"  color="0xfbffcc"  time="0"  text="Patreon&nbsp;Version"  face="KOMTXT__"  edge="undefined"  shadow="undefined"  anim="false"  fadeout="false"  wait="false"  in_effect="flash"  out_effect="fadeOut"  ]
[tb_ptext_show  x="78"  y="677"  size="12"  color="0xffffff"  time="0"  text="Art&nbsp;&&nbsp;Story&nbsp;by"  face="Pokemon_GB"  edge="undefined"  shadow="undefined"  anim="false"  fadeout="false"  wait="false"  in_effect="fadeIn"  out_effect="fadeOut"  ]
[tb_ptext_show  x="16"  y="699"  size="12"  color="0xffffff"  time="0"  text="patreon.com/InDarkWaters"  face="Pokemon_GB"  edge="undefined"  shadow="undefined"  anim="false"  fadeout="false"  wait="false"  in_effect="fadeIn"  out_effect="fadeOut"  ]
[tb_start_tyrano_code]
[tb_ptext_show  name="supportShuffle" x="810"  y="638"  size="14"  color="0xf2db59"  time="0"  text="&f.PatronName"  face="Pokemon_GB"  edge="0x0a0a0a"  shadow="undefined"  anim="false"  fadeout="false"  wait="false"  in_effect="fadeIn"  out_effect="fadeOut"  ]
[_tb_end_tyrano_code]

[tb_ptext_show  x="540"  y="637"  size="15"  color="0xffffff"  time="0"  text="Special&nbsp;thanks&nbsp;to"  face="Pokemon_GB"  edge="0x0a0000"  shadow="undefined"  anim="false"  fadeout="false"  wait="false"  in_effect="pulse"  out_effect="fadeOut"  ]
[tb_ptext_show  x="686"  y="664"  size="14"  color="0xffffff"  time="0"  text="for&nbsp;the&nbsp;awesome&nbsp;Support!"  face="Pokemon_GB"  edge="0x030000"  shadow="undefined"  anim="false"  fadeout="false"  wait="false"  in_effect="pulse"  out_effect="fadeOut"  ]
*title

[tb_start_tyrano_code]
[rndSupporter]
[_tb_end_tyrano_code]

[tb_start_tyrano_code]
[iscript]
if (window.innerWidth == screen.width && window.innerHeight == screen.height) {
f.FullScreenActive="true";
widthScreen = screen.width / 1280;
heightScreen = screen.height/ 720;
}else{
f.FullScreenActive="false";
widthScreen = 1;
heightScreen = 1;
}
[endscript]

[if exp='sf.FullScreen=="true"']
[if exp='f.FullScreenActive=="false"']
[screen_full]
[eval exp='f.FullScreenActive="true"']
[iscript]
widthScreen = screen.width / 1280;
heightScreen = screen.height/ 720;
[endscript]
[endif]
[endif]

[iscript]
if(widthScreen >= heightScreen ){
document.body.style.zoom=heightScreen ;
}else{
document.body.style.zoom=widthScreen ;
}
[endscript]
[_tb_end_tyrano_code]

[tb_eval  exp="f.BackdropActive=1"  name="BackdropActive"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[jump  storage="title_screen.ks"  target="*NoBadge1"  cond="sf.PlayThrough!='true'"  ]
[button  storage=""  target="*ThankYou"  graphic="SleepingBraixen.gif"  width="48"  height="48"  x="265"  y="645"  name="img_21"  _clickable_img=""  ]
*NoBadge1

[jump  storage="title_screen.ks"  target="*NoBadge2"  cond="sf.PlayThrough2!='true'"  ]
[button  storage=""  target="*ThankYou"  graphic="SleepingBraixen2.gif"  width="50"  height="42"  x="210"  y="629"  name="img_24"  _clickable_img=""  ]
*NoBadge2

[jump  storage="title_screen.ks"  target="*NoBadge3"  cond="sf.PlayThrough3!='true'"  ]
[button  storage=""  target="*ThankYou"  graphic="SleepingBraixen3.gif"  width="48"  height="44"  x="2"  y="642"  name="img_27"  _clickable_img=""  ]
*NoBadge3

[jump  storage="title_screen.ks"  target="*title2"  cond="sf.PlayThrough4!='true'"  ]
[button  storage=""  target="*ThankYou"  graphic="SleepingBraixen4.gif"  width="48"  height="48"  x="43"  y="616"  name="img_30"  _clickable_img=""  ]
[jump  storage="title_screen.ks"  target="*title2"  cond=""  ]
*ThankYou

[tb_ptext_show  x="15"  y="606"  size="10"  color="0xffffff"  time="1000"  text="Thanks&nbsp;for&nbsp;the&nbsp;playthrough&nbsp;:3"  face="Pokemon_GB"  edge="0x6b0606"  shadow="undefined"  anim="true"  fadeout="false"  wait="false"  in_effect="swing"  out_effect="fadeOut"  ]
*title2

[glink  text="New&nbsp;Game"  x="12"  y="270"  target="*start"  width="226"  height="16"  _clickable_img=""  size="17"  color="white"  ]
[glink  text="Load&nbsp;Game"  x="12"  y="325"  target="*load"  width="226"  height="16"  _clickable_img=""  size="17"  color="white"  ]
[jump  storage="title_screen.ks"  target="*NoGallery"  cond="sf.Gallery!=1"  ]
[glink  text="Gallery"  x="12"  y="380"  target="*Gallery"  width="226"  height="16"  _clickable_img=""  storage=""  size="17"  color="orange"  ]
*NoGallery

[glink  text="Config"  x="12"  y="435"  target="*Configs"  width="226"  height="16"  _clickable_img=""  storage=""  size="17"  color="white"  ]
[glink  text="Close&nbsp;Game"  x="12"  y="555"  target="*StopGame"  width="226"  height="16"  _clickable_img=""  storage="title_screen.ks"  size="17"  color="white"  ]
[clickable  storage="title_screen.ks"  x="1245"  y="695"  width="35"  height="29"  target="*DebugTool"  _clickable_img=""  ]
[s  ]
*start

[tb_ptext_hide  time="0"  ]
[showmenubutton]

[cm  ]
[tb_keyconfig  flag="1"  ]
[stopbgm  time="1000"  fadeout="true"  ]
[jump  storage="scene1.ks"  target=""  ]
[s  ]
*load

[cm  ]
[showload]

[jump  target="*title"  storage=""  ]
[s  ]
*StopGame

[tb_start_tyrano_code]
[close ask=false]
[_tb_end_tyrano_code]

[s  ]
*Configs

[tb_start_tyrano_code]
[sleepgame storage="config.ks"]
[_tb_end_tyrano_code]

[jump  target="*title"  storage=""  ]
[s  ]
*Gallery

[tb_start_tyrano_code]
[sleepgame storage="cg.ks"]
[_tb_end_tyrano_code]

[jump  target="*title"  storage=""  ]
[s  ]
*DebugTool

[tb_ptext_hide  time="0"  ]
[cm  ]
[tb_ptext_show  x="833"  y="671"  size="30"  color="0xf01616"  time="0"  text="Debug:"  anim="false"  face="undefined"  edge="0xffffff"  shadow="undefined"  ]
[edit  left="932"  top="668"  width="273"  height="40"  size="20"  maxchars="20"  reflect="false"  name="f.debugCode"  ]
[button  storage="title_screen.ks"  target="*UseDebug"  graphic="config/arrow_next.png"  width="75"  height="70"  x="1196"  y="654"  _clickable_img=""  name="img_42"  ]
[jump  target="*TitleWithName"  storage=""  ]
[s  ]
*UseDebug

[commit  ]
[tb_ptext_hide  time="0"  ]
[jump  storage=""  target="*GetAllCGs"  cond="f.debugCode=='IMJUSTHEREFORART'"  ]
[jump  storage=""  target="*JumpToHScenes"  cond="f.debugCode=='CASANOVA'"  ]
[jump  storage=""  target="*JumpToDreamScene"  cond="f.debugCode=='GOODNIGHTSSLEEP'"  ]
[cm  ]
[jump  target="*TitleWithName"  storage=""  ]
[s  ]
*GetAllCGs

[cm  ]
[tb_eval  exp="sf.Gallery=1"  name="Gallery"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg001=1"  name="cg001"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg002=1"  name="cg002"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg003=1"  name="cg003"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg004=1"  name="cg004"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg005=1"  name="cg005"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg006=1"  name="cg006"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg007=1"  name="cg007"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg008=1"  name="cg008"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg009=1"  name="cg009"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg010=1"  name="cg010"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg011=1"  name="cg011"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg012=1"  name="cg012"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg013=1"  name="cg013"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.cg014=1"  name="cg014"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.hScene01=1"  name="hScene01"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_eval  exp="sf.hScene02=1"  name="hScene02"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_ptext_show  x="838"  y="674"  size="28"  color="0xffffff"  time="200"  text="Unlocked&nbsp;Gallery&nbsp;and&nbsp;all&nbsp;Scenes"  face="undefined"  edge="undefined"  shadow="undefined"  anim="true"  fadeout="true"  wait="false"  in_effect="bounceIn"  out_effect="fadeOutRightBig"  ]
[jump  target="*TitleWithName"  storage=""  ]
[s  ]
*JumpToHScenes

[cm  ]
[tb_eval  exp="f.Affection=7"  name="Affection"  cmd="="  op="t"  val="7"  val_2="undefined"  ]
[tb_eval  exp="f.Ruffians='true'"  name="Ruffians"  cmd="="  op="t"  val="true"  val_2="undefined"  ]
[stopbgm  time="1000"  fadeout="true"  ]
[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[stop_bgmovie  time="1000"  ]
[wait  time="1500"  ]
[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Danse_Morialta.ogg"  fadein="true"  ]
[jump  storage="scene4h.ks"  target="*hScene01Start"  ]
[s  ]
*JumpToDreamScene

[cm  ]
[tb_eval  exp="f.Affection=6"  name="Affection"  cmd="="  op="t"  val="6"  val_2="undefined"  ]
[tb_eval  exp="f.Ruffians='true'"  name="Ruffians"  cmd="="  op="t"  val="true"  val_2="undefined"  ]
[stopbgm  time="1000"  fadeout="true"  ]
[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[stop_bgmovie  time="1000"  ]
[wait  time="1500"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_show_message_window  ]
[jump  storage="scene3.ks"  target="*DreamSceneStart"  ]
[s  ]

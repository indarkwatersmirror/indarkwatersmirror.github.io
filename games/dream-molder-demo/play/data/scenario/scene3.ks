[_tb_system_call storage=system/_scene3.ks]

[hidemenubutton]

[cm  ]
[bg  time="500"  method="crossfade"  storage="bg/Black.png"  ]
[tb_show_message_window  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[playse  volume="&sf.SoundVolume"  time="1000"  buf="1"  storage="ambience-night-wildlife-a.ogg"  fadein="true"  loop="true"  ]
[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Continue_Life.ogg"  ]
[tb_start_text mode=1 ]
It was already dark when I made a stop at a gas station. [p]
Fia was waiting in the car when I saw a book between a few magazines...[p]
[_tb_end_text]

[tb_start_text mode=1 ]
"The Startraveling Princess"[p]
[_tb_end_text]

[tb_start_text mode=1 ]
It was a children's book and on the cover was a girl in a frilly dress, sitting on a shooting star.[p]
It mostly consisted of pictures, but it looked cute and could be a great help for practice.[p]
The day didn't take that great of an ending as I hoped it for...[p]
Maybe a nice book would help her to still remember the day as something great?[p]
With that I bought the book and went back to the car, but when I wanted to show it to Fia she was already asleep. [p]
[_tb_end_text]

[bg  time="1000"  method="crossfade"  storage="cg/004.jpg"  ]
[tb_eval  exp="sf.cg004=1"  name="cg004"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_start_text mode=1 ]
I guess it was a little too much excitement for her.[p]
But she looks peaceful and happy while sleeping... maybe it still was a great day for her.[p]
[_tb_end_text]

[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[tb_start_text mode=1 ]
It didn't take too long until we were back home and although I carried Fia all the way to her room trying to not wake her,<br> she still opened her eyes in the end.[p]
[_tb_end_text]

[stopse  time="1000"  buf="1"  fadeout="true"  ]
[bg  time="1000"  method="crossfade"  storage="bg/bg011.jpg"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Brrraaaai...[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Oh, you're awake?[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Braixen![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She was hugging me tightly and didn't want to stay on her bed. [p]
She's used to sleep in the same room as her owner from back when she was living with my friend. [p]
That made it hard for her the first few days when she arrived...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Come on, time for bed. You were just sleeping right now anyway, hm?[p]
[_tb_end_text]

[bg  time="1000"  method="crossfade"  storage="cg/005.jpg"  ]
[tb_eval  exp="sf.cg005=1"  name="cg005"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Brai! -3- [p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Sitting on the bed pouting, she was looking at me with a cute expression.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Ah!, I almost forgot![p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Braixen?[p]
#
[_tb_end_text]

[bg  time="1000"  method="crossfade"  storage="bg/bg011.jpg"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[chara_show  name="Fia"  time="1000"  wait="true"  left="142"  top="-117"  width="892"  height="1127"  reflect="false"  ]
[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="turn_page.ogg"  ]
[tb_start_text mode=1 ]
Fias eyes turned into big, sparkly gems when I took the book out of my bag. [p]
She was staring so intensly that I had to chuckle.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
I got this one for you as compensation and to keep my promise.[p]
[_tb_end_text]

[tb_eval  exp="f.Affection+=1"  name="Affection"  cmd="+="  op="t"  val="1"  val_2="undefined"  ]
[tb_start_tyrano_code]
[er][BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Uah..! "gasp"[p]
...Brai![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
When Fia tried to grab it though, I pulled it back.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
You can stay up and read it if you promise that you don't stay up too long and don't snatch magazines without permission anymore![p]
[_tb_end_text]

[chara_move  name="Fia"  anim="true"  time="300"  effect="easeOutQuad"  wait="true"  left="142"  top="-171"  width="892"  height="1127"  ]
[chara_move  name="Fia"  anim="true"  time="200"  effect="easeInQuad"  wait="false"  left="142"  top="-117"  width="892"  height="1127"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Braixen! Brai![p]
#
[_tb_end_text]

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="jump01.ogg"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[chara_move  name="Fia"  anim="true"  time="300"  effect="easeInQuad"  wait="false"  left="144"  top="-149"  width="892"  height="1127"  ]
[chara_move  name="Fia"  anim="true"  time="400"  effect="easeInOutQuad"  wait="false"  left="-164"  top="-446"  width="1488"  height="1883"  ]
[chara_hide  name="Fia"  time="300"  wait="true"  pos_mode="true"  ]
[tb_start_text mode=1 ]
She almost tackled me over when she jumped and latched onto me, hugging me tightly.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Im glad that you like it....[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Prrrrrrr...[p]
#
[_tb_end_text]

*DreamSceneStart

[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
And finally after petting her soft fur for a while I wished her a good night and went to my room...[p]
[_tb_end_text]

[tb_start_text mode=1 ]
Tomorrow is probably going to be a stressful work day again...[p]
But seeing Fia smile like this makes it worth every day.[p]
After all, spending the whole day with Fia was quite nice even with what happened in the end.[p]
[_tb_end_text]

[stopbgm  time="2500"  fadeout="true"  ]
[tb_start_text mode=1 ]
I hope she thinks so too...[p]
...[p]
While thinking about that I slowly fell asleep...[p]
[_tb_end_text]

[wait  time="2000"  ]
[playse  volume="&sf.SoundVolume"  time="1000"  buf="1"  storage="ambience-night-wildlife-a.ogg"  fadein="true"  loop="true"  ]
[wait  time="1500"  ]
[tb_start_text mode=1 ]
And again I feel like something woke me...[p]
The sound of the night filled my ears as I wondered how loud the animals are.[p]
Wait... where...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#???
Master?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
A strangly familiar voice is calling out for me...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#???
You can open your eyes now![p]
#
[_tb_end_text]

[bg  time="1000"  method="fadeIn"  storage="bg/bg012.jpg"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
The first thing I saw as I opened my eyes was the dark blue of the night.[p]
I was back at the fair but all the lights were out and it seemed like everything was closed already.[p]
And then...[p]
[_tb_end_text]

[tb_start_text mode=1 ]
...Fia?[p]
[_tb_end_text]

[chara_show  name="Fia_"  time="1000"  wait="true"  left="367"  top="208"  width="455"  height="527"  reflect="false"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Disquiet.ogg"  ]
[tb_start_text mode=1 ]
#Fia
Master?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Standing in front of me was Fia.[p]
Even though she was somehow different looking than usual, this is definitely her.[p]
She is wearing a dress that I seemed to know from somewhere...[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002.png"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
You're not daydreaming master, are you?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Oh, and she is talking too.[p]
Uncertain of what I'm seeing I started rubbing my eyes...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
I'm not so sure myself...[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002_a.png"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Hmhm.. "chuckle" ♪[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/001.png"  ]
[tb_start_text mode=1 ]
What do you think, master?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She proudly grinned at me while swinging the skirt of her dress back and forth...[p]
I knew that I saw this dress before![p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
It's.. it's the dress from the book that I bought you! <br>The one the girl on the cover was wearing.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Yes, I made it myself![p]
I thought it was cute when I saw it and wondered if I could wear something like that as well...[p]
Does... Does it fit?[p]
#
[_tb_end_text]

[glink  color="black"  storage="scene3.ks"  size="20"  text="Looks&nbsp;good&nbsp;on&nbsp;you"  x="350"  y="259"  width="513"  height="20"  _clickable_img=""  target="*LooksGood"  ]
[glink  color="black"  storage="scene3.ks"  size="20"  text="It&nbsp;feels&nbsp;strange"  x="350"  y="340"  width="513"  height="20"  _clickable_img=""  target="*FeelsStrange"  ]
[s  ]
*LooksGood

[tb_eval  exp="f.Affection+=1"  name="Affection"  cmd="+="  op="t"  val="1"  val_2="undefined"  ]
[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Yeah, it looks good on you.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002_a.png"  ]
[tb_start_text mode=1 ]
#Fia
Really? Thank you![p]
I wasn't sure if you would like it at first... <br> It's quite unusual to wear something like this for me...[p]
#
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/001.png"  ]
[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Don't worry, I like it.[p]
But I do have to say I'm kind of confused...[p]
Is this a dream?[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002.png"  ]
[tb_start_text mode=1 ]
#Fia
Well...<br>If it is, it certainly is a good one, isn't it?[p]
The night sky looks so beautiful...[p]
#
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/001.png"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
The moment I looked up to the sky a shooting star suddenly lit the night.[p]
It alternated between different colors until it vanished into the dark again, leaving only a sparkling trail of light behind.[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002_a.png"  ]
[chara_move  name="Fia_"  anim="true"  time="150"  effect="easeOutQuad"  wait="true"  left="366"  top="194"  width="456"  height="528"  ]
[chara_move  name="Fia_"  anim="true"  time="100"  effect="easeInQuad"  wait="true"  left="367"  top="208"  width="456"  height="528"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Did you see that Master?![p]
You have to wish for something![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Hm... [p]
Did you wish for something?[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002.png"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
That's a secret. ♪[p]
Since I still have a long way to go until my wish comes true...[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She didn't speak any further and it got a little quiet after that...[p]
I'm still quite unsure what to think of this whole situation.[p]
This is clearly a dream but everything seems so real... [p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/001.png"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Master...?[p]
Thank you... [p]
For taking me to the fair today.. for the book...[p]
Thank you for everything.[p]
I had a lot of fun.[p]
#
[_tb_end_text]

[jump  storage="scene3.ks"  target="*RuffianAttack"  cond="f.Ruffians=='true'"  ]
[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
I'm sorry about your plush in the end...[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002.png"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
It's ok... who needs that thing anyway when I can snuggle up to you instead?[p]
#
[_tb_end_text]

[chara_hide  name="Fia_"  time="600"  wait="true"  pos_mode="true"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Fia took a short leap and bumped against me where she put her head at rest on my chest.[p]
My heart skipped a beat in that moment, and I was kind of confused about it...[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/003.png"  ]
[chara_show  name="Fia_"  time="1000"  wait="true"  left="381"  top="220"  width="452"  height="524"  reflect="false"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Master...[p]
If we're already here...[p]
Do you think we could ride the Ferris Wheel one more time?[p]
#
[_tb_end_text]

[jump  storage="scene3.ks"  target="*FerrisWheelV2"  ]
[s  ]
*RuffianAttack

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
But I messed up in the end. I couldn't even protect you...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
But you DID protect me.[p]
You were there even when I went off on my own.[p]
You shouldn't overthink this so much.[p]
I'm fine and something like that wouldn't just ruin our day.[p]
Besides, you're back here with me to make up for it, right?[p]
#
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/003.png"  ]
[tb_start_text mode=1 ]
#Fia
Master...[p]
While we're talking about that...[p]
Do you think we could ride the Ferris Wheel one more time?[p]
#
[_tb_end_text]

[jump  storage="scene3.ks"  target="*FerrisWheelV2"  ]
[s  ]
*FeelsStrange

[tb_eval  exp="f.Affection-=1"  name="Affection"  cmd="-="  op="t"  val="1"  val_2="undefined"  ]
[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
It feels strange somehow...[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/003.png"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Huh? What do you mean?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
I'm not sure... it's just a little unusual to see you dressed since you normally dont wear clothes at all.[p]
I guess it just feels somewhat foreign because of that.[p]
I always liked you the way you are, even without clothes.[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/003_a.png"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
........[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Ah, I'm sorry! <br>[p]
I don't mean that I prefer you without it right now, just that it feels different and I would have been more at ease.[p]
Err.. I mean it's normal for you to...[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002_a.png"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
"chuckle"[p]
It's ok, I know what you mean...[p]
#
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002.png"  ]
[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
I'll just stop, what am I even saying...[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/003.png"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
No! You're right...[p]
I thought that it's kind of strange myself...[p]
Also, I do have fur after all.[p]
#
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/001.png"  ]
[tb_start_text mode=1 ]
#Fia
I just wanted to wear something special since it's kind of a special occasion...[p]
To make it more exciting and romantic I guess, Tihi.♪[p]
#
[_tb_end_text]

[jump  storage="scene3.ks"  target="*NoAffection"  cond="f.Affection<5"  ]
[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002.png"  ]
[tb_start_text mode=1 ]
#Fia
I could undress anytime of course if my master feels better this way.[p]
#
[_tb_end_text]

[chara_hide  name="Fia_"  time="1000"  wait="true"  pos_mode="true"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She leaned forward in a teasing manner and sticked her tongue out as she said this.[p]
Then she turned her back to me while looking into the starlit sky...[p]
[_tb_end_text]

[chara_show  name="Fia_"  time="1000"  wait="true"  left="342"  top="215"  width="455"  height="527"  reflect="false"  ]
*NoAffection

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
I'm glad that we decided to sneak onto the fair site one more time.[p]
It's pretty fun even with all the rides closed...[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002.png"  ]
[tb_start_text mode=1 ]
But maybe that makes it a little thrilling? ❤[p]
By the way...[p]
Do you think we can ride the Ferris Wheel one more time?[p]
I'm sure it would be even more exciting right now.[p]
#
[_tb_end_text]

*FerrisWheelV2

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/001.png"  ]
[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
You really liked this one, huh?[p]
It doesn't look like we would be able to use it right now though...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Since it was in the middle of the night and everything on the fair was shutdown of course.[p]
But Fia's face turned into a mischievous smile.[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002.png"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Well... Maybe we can do something about that?[p]
#
[_tb_end_text]

[chara_move  name="Fia_"  anim="true"  time="300"  effect="easeInQuad"  wait="false"  left="810"  top="214"  width="456"  height="528"  ]
[chara_hide  name="Fia_"  time="600"  wait="true"  pos_mode="true"  ]
[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
I don't think that would be a good Idea..[p]
We will only get into trouble if someone see's tha-...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Aha![p]
#
[_tb_end_text]

[playse  volume="&sf.SoundVolume"  time="1000"  buf="3"  storage="engine.ogg"  ]
[bg  time="1000"  method="crossfade"  storage="bg/bg013.jpg"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Before I could even finish speaking the Ferris Wheel and surrounding area suddenly lit up in dozens of colors.[p]
Fia stands grinning infront of a desk where she randomly pulled levers and smashed buttons.[p]
How did this even work?[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002.png"  ]
[chara_show  name="Fia_"  time="1000"  wait="true"  left="396"  top="207"  width="455"  height="527"  reflect="false"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Well, now it works. Sooooo...?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Ok Ok... I don't have much of a choice, have I?[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002_a.png"  ]
[chara_move  name="Fia_"  anim="true"  time="150"  effect="easeOutQuad"  wait="true"  left="394"  top="192"  width="457"  height="529"  ]
[chara_move  name="Fia_"  anim="true"  time="100"  effect="easeInQuad"  wait="true"  left="397"  top="202"  width="456"  height="528"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Yaaay![p]
#
[_tb_end_text]

[chara_hide  name="Fia_"  time="1000"  wait="true"  pos_mode="true"  ]
[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
We're in trouble now anyway. So lets have some fun while we're at it.[p]
[_tb_end_text]

[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[stopbgm  time="1000"  fadeout="true"  ]
[tb_start_text mode=1 ]
After doing a few adjustments at the pult of the Ferris Wheel we climbed into one of the slowly rotating gondolas.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Kyaa~[p]
#
[_tb_end_text]

[stopse  time="1000"  buf="1"  fadeout="true"  ]
[bg  time="1000"  method="crossfade"  storage="bg/bg014.jpg"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Again Fia glares into the distance while her tail wiggles with excitement.[p]
As we finally reach the top of the Ferris Wheel and the gondola comes to an hold, Braixen turns around towards me. [p]
She smiles but then starts blushing and quickly hides her face.[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/003x.png"  ]
[chara_show  name="Fia_"  time="1000"  wait="true"  left="92"  top="-138"  width="1062"  height="1111"  reflect="false"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
You know... Master...[p]
I'm thankfull for everything you do for more every day...[p]
I think I should start giving something back more often.[p]
And I should start by showing you my gratitude for everything today![p]
I owe you that much...[p]
#
[_tb_end_text]

[tb_hide_message_window  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002x.png"  ]
[stopbgm  time="1500"  fadeout="true"  ]
[jump  storage="scene3.ks"  target="*LowestAffection"  cond="f.Affection<4"  ]
[tb_show_message_window  ]
[tb_start_text mode=1 ]
She suddenly pulls her wand out from somewhere, smiling at me with a naughty look on her face.[p]
And when the Ferris Wheel was about to move on she gave her wand a swing and suddenly everything came to a hold.[p]
[_tb_end_text]

[stopse  time="1000"  buf="3"  fadeout="true"  ]
[bg  time="1000"  method="crossfade"  storage="bg/bg015.jpg"  ]
[tb_start_text mode=1 ]
The lights went out and she was putting her wand away again while striking a victorious pose.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Sooo...[p]
Now nobody notices that we snuck in here. ♪[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Yeah, but we're also stuck.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Well, that was the point..[p]
#
[_tb_end_text]

[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Sapphire_Isle.ogg"  ]
[chara_hide  name="Fia_"  time="500"  wait="true"  pos_mode="false"  ]
[chara_mod  name="Fia_"  time="0"  cross="false"  storage="chara/2/001x.png"  ]
[chara_show  name="Fia_"  time="500"  wait="true"  left="-80"  top="-302"  width="1423"  height="1489"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Fia got closer to me and sat down on my lap, using her soft paws to put my hair to the side she takes a deep look into my eyes.[p]
My chest started pounding while she got closer and her soft fur brushed against me.[p]
Should I feel this way around a Pokemon? [p]
My feeling of excitement mixed with uneasiness and confusion.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Fia...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002x.png"  ]
[tb_start_text mode=1 ]
#Fia
Yes, Master?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Her face got even closer while she was waiting for an answer and my heart started racing again.[p]
You could see that she is clearly enjoying herself.[p]
Grinning while she's teasing me with her dazzling eyes.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
I...[p]
We shouldn't...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She now was so close to me that I could almost feel the fur of her snout brushing against my face.[p]
I swallowed while she put her head to the side in question, still staring into my eyes.[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/002x_a.png"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Am I not allowed to be this close to my owner?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Thats not it, it's just...[p]
You're a Pokemon. I shouldn't feel...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Well... [p]
Do I look that much like a Pokemon right now..?[p]
#
[_tb_end_text]

[chara_hide  name="Fia_"  time="1000"  wait="true"  pos_mode="true"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_tyrano_code]
[bg storage="cg/006.png" method="puff" time=8000 wait=false]
[_tb_end_tyrano_code]

[tb_eval  exp="sf.cg006=1"  name="cg006"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_start_text mode=1 ]
As she presses herself against me I take a closer look on her...[p]
Even though she still looks like a Braixen, she does have more female proportions like that of a human.[p]
I muster her ears and face down over her neck where my view meets her chest.[p]
I immediately realize that Fia still watches me and my head turns red as I avoide her gaze.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Are you not satisfied with me? <br>Do you think I'm unattractive?[p]
Do you... do you not like me?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
No, I do like you...[p]
It's just...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[bg  time="1000"  method="crossfade"  storage="cg/006_a.png"  ]
[tb_eval  exp="sf.cg007=1"  name="cg007"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_start_text mode=1 ]
#Fia
Then don't let it bother you![p]
Just relax and give me a chance to show you how thankful I am to my master...[p]
#
[_tb_end_text]

[stopbgm  time="2500"  fadeout="true"  ]
[jump  storage="scene4h.ks"  target=""  ]
[s  ]
*LowestAffection

[wait  time="2000"  ]
[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/003x.png"  ]
[tb_show_message_window  ]
[tb_start_text mode=1 ]
Her gaze wanders off into the distance of the fair and becomes a little sad.[p]
I instinctively pet her head and scratch her ear like I normally do without realizing.[p]
[_tb_end_text]

[chara_mod  name="Fia_"  time="600"  cross="true"  storage="chara/2/001x.png"  ]
[tb_start_text mode=1 ]
It surprised her a little, but she seemed to like it and started to push her head against my hand and cuddle with it.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Sapphire_Isle.ogg"  ]
[tb_start_text mode=1 ]
#Fia
Do you mind if I sit next to you Master?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
No, go ahead.[p]
[_tb_end_text]

[chara_hide_all  time="1000"  wait="true"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She sat down next to me and put her head on my shoulder with a cute purring sound<br> while we were watching the stars through the windows of the gondola...[p]
Her paw touched and moved along my arm before she started speaking...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
You wouldn't forget me Master, would you?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Of course not, why should I?[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
It's just a thought...[p]
I feel like this experience, no matter how beautiful will be meaningless in the end...[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Her paw now clasp my arm tightly and her claws start to burrow into my skin.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Hmm..<br>I think everything we do is meaningless in one way or another.[p]
What matters in the end is that we were both here and experienced it together.<br>Even if we forget about it at some point we were still happy here and now, right?[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
I guess you're right. Im sorry...<br>[p]
I'm probably just overthinking things right now. "chuckle".[p]
#
[_tb_end_text]

[tb_start_text mode=1 ]
#Both
....................[p]
#
[_tb_end_text]

[tb_start_text mode=1 ]
#Fia
The stars sure are beautiful tonight...[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Yeah...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
We were cuddling a little more while the ferris wheel took as on a ride through the starry sky.[p]
Fia asked for one last favor when we decided to get off before someone notices...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[stopbgm  time="1000"  fadeout="true"  ]
[tb_start_text mode=1 ]
#Fia
Master?[p]
Can you... can you close your eyes for me?<br>[p]
Just for a short moment...[p]
#
[_tb_end_text]

[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
The next thing I felt when I did was the soft touch of her nose on my forehead with a kiss.[p]
I felt tired and her kiss had a relaxing effect that I relished for every second it lasted.[p]
[_tb_end_text]

[wait  time="1500"  ]
[tb_start_text mode=1 ]
I had my eyes closed for what felt for an eternity when I finally opened my eyes to thank Fia I-[p]
[_tb_end_text]

[bg  time="1000"  method="crossfade"  storage="bg/bg001.jpg"  ]
[tb_start_text mode=1 ]
..was back in my room..<br>It was cold and my eyes felt heavy... wasn't I just..?[p]
Wait, where was I, did I dream something?[p]
I seem to have forgotten everything about what happened in it...[p]
I take a look onto my clock to see that it's still in the middle of the night.<br>Why did I even wake up? I should get back to sleep since I have to work again later...[p]
I need all the rest I can get...[p]
With that thought I slowly drifted back to sleep...[p]
[_tb_end_text]

[tb_hide_message_window  ]
[wait  time="1000"  ]
[tb_show_message_window  ]
[tb_start_text mode=1 ]
I wonder what that dream was about...[p]
[_tb_end_text]

[tb_eval  exp="f.StartToEnd+=1"  name="StartToEnd"  cmd="+="  op="t"  val="1"  val_2="undefined"  ]
[jump  storage="scene3.ks"  target="*PlayThrough3"  cond="f.StartToEnd<2"  ]
[tb_eval  exp="sf.PlayThrough3='true'"  name="PlayThrough3"  cmd="="  op="t"  val="true"  val_2="undefined"  ]
*PlayThrough3

[jump  storage="scene4h.ks"  target="*BraixenBehindDoor"  ]
[s  ]

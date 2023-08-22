[_tb_system_call storage=system/_scene2.ks]

[hidemenubutton]

[cm  ]
[bg  time="500"  method="crossfade"  storage="bg/Black.png"  ]
[tb_show_message_window  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Phew, done![p]
Now I should have everything ready to go to the fair with Fia.[p]
I wonder what she's doing though...?[p]
[_tb_end_text]

[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Clear_Air.ogg"  ]
[bg  time="500"  method="crossfade"  storage="bg/bg003.jpg"  ]
[tb_start_text mode=1 ]
After a quick change of clothes I went into the hallway to look for Fia and call out for her.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Hey Fia, are you ready to go?[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="stairs.ogg"  ]
[tb_start_text mode=1 ]
It didn't take long before you could hear Fia's little Footsteps coming down the stairs.[p]

[_tb_end_text]

[tb_start_tyrano_code]
[chara_mod name="Fia" storage="chara/1/Braixen001.png" page="back"]
[chara_show  name="Fia"  time="300" left="0" top="82" width="532" height="673" wait="true" reflect="false" page="back"]
[anim name="Fia" left="348" time=400 wait=true effect=jswing]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Brai![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Fia jumped down the last few steps and landed in front of me, smiling all over her face.[p]
She was jumping and waving her skirt around, clearly trying to impress with her shiny fur.[p]
Shortly after, the maid followed her down the stairs.[p]

[_tb_end_text]

[tb_start_tyrano_code]
[MaidTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Old Maid
She made quite the ruckus at first, but in the end she bravely endured a whole bath with scrubbing to be pretty for today.[p]
#

[_tb_end_text]

[tb_start_tyrano_code]
[chara_hide  name="Fia"  time="150" page="back"]
[chara_mod name="Fia" storage="chara/1/Braixen003.png" page="back"]
[wait time=160]
[chara_show  name="Fia"  time="300" left="414" top="244" width="426" height="549" wait="true" reflect="false" page="back"]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Fia looked somewhat embarrassed by getting praise from the old maid but was still proudly waving her sparkling skirt of fur.[p]

[_tb_end_text]

[tb_start_tyrano_code]
[MaidTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Old Maid
Uohohoho...[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
The old maid might seem somewhat traditional and strict at first, but she actually is a really caring and friendly person.[p]
It's been a while since I've seen her laughing like that and it makes me think of how Fia changed a lot here to the better.[p]

[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Good job Fia...[p]

[_tb_end_text]

[tb_start_tyrano_code]
[chara_hide  name="Fia"  time="150" page="back"]
[chara_mod name="Fia" storage="chara/1/Braixen003.png" page="back"]
[wait time=150]
[chara_show  name="Fia"  time="300" left="303" top="240" width="645" height="832" wait="true" reflect="false" page="back"]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
I reach out to pat and stroke her head whereupon she leans against my hand, making cute purring sounds.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Prrrrr....[p]
#

[_tb_end_text]

[tb_start_tyrano_code]
[chara_hide  name="Fia"  time="150" page="back"]
[chara_mod name="Fia" storage="chara/1/Braixen003.png" page="back"]
[wait time=150]
[chara_show  name="Fia"  time="300" left="414" top="244" width="426" height="549" wait="true" reflect="false" page="back"]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Well then, we'll be going now. [p]
I'm done with everything mother requested. I already send her everything if she asks.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[MaidTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Old Maid
I let her know. Have a nice trip young master.[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[chara_hide  name="Fia"  time="150" page="back"]
[PlayerThinking]
[_tb_end_tyrano_code]

[stopbgm  time="2500"  fadeout="true"  ]
[tb_start_text mode=1 ]
With that we left the house and took my car to drive to the fair...[p]
[_tb_end_text]

[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[wait  time="2500"  ]
[playse  volume="&sf.SoundVolume"  time="1000"  buf="1"  loop="true"  storage="ambiance-food-market.ogg"  ]
[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="On_My_Way.ogg"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Huuh... "gasp"[p]
Braixen! Braix![p]
#
[_tb_end_text]

[tb_hide_message_window  ]
[bg  time="1000"  method="crossfade"  storage="bg/bg004.jpg"  ]
[tb_show_message_window  ]
[tb_start_tyrano_code]
[chara_mod name="Fia" storage="chara/1/Braixen001.png" page="back"]
[chara_show  name="Fia"  time="300" left="348" top="82" width="532" height="673" wait="true" reflect="false" page="back"]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Fia admired the fair with mixed feelings.[p]
She marveled over all the colors and music but was tense in the presence of the shoving crowd.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[chara_hide  name="Fia"  time="150" page="back"]
[chara_mod name="Fia" storage="chara/1/Braixen004.png" page="back"]
[wait time=150]
[chara_show  name="Fia"  time="300" left="421" top="155" width="421" height="639" wait="true" reflect="false" page="back"]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Wow, there are a lot more people here than I expected.[p]
You okay there?[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She was living in a small village before she came here and probably has never seen so many people, lights and food stands.[p]
It wasn't even one of the prettiest fairs to begin with, but she seemed so excited that she started shaking<br> a little while she was looking around.[p]
She's so cute.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[chara_hide  name="Fia"  time="150" page="back"]
[chara_mod name="Fia" storage="chara/1/Braixen003.png" page="back"]
[wait time=150]
[chara_show  name="Fia"  time="300" left="303" top="240" width="645" height="832" wait="true" reflect="false" page="back"]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
With that I reached out for her paw and took her along, what probably surprised her a little.[p]
Thinking back we were way closer back in the days, when she was still a fennekin.[p]
It's only natural to grow apart over such a long time you don't see each other, but now it's kind of embarrassing to hold her paw...[p]
I mean it got a lot better since she started living here, but I still don't really know what is okay to do<br> as her owner or what would be strange or inappropriate...[p]
I just hope this isn't too much for her.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
......[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She started blushing and tried to hide it, focusing so much on it that she wasn't moving at all.[p]
Thinking about how cute she acts I pulled her a bit closer to me without realizing. [p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Should we take a look around?[p]
[_tb_end_text]

[tb_start_tyrano_code]
[anim name="Fia" top="200" time=300 wait=true effect=jswing]
[anim name="Fia" top="240" time=300 wait=false effect=jswing]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She snapped back to reality and nod nervously, clinging a little more to my arm while we started walking through the mass of people.[p]
She was a bit intimidated, but you could see her excitement.[p]
Curiously her eyes wandered from one stall to the other, marveling about all the different goods and food.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[chara_hide  name="Fia"  time="150" page="back"]
[chara_mod name="Fia" storage="chara/1/Braixen001.png" page="back"]
[wait time=150]
[chara_show  name="Fia"  time="300" left="348" top="82" width="532" height="673" wait="true" reflect="false" page="back"]
[anim name="Fia" top="60" time=300 wait=true effect=jswing]
[anim name="Fia" top="82" time=300 wait=true effect=jswing]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
"sniff" Brai?[p]
"sniff sniff"[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[anim name="Fia" top="60" time=300 wait=true effect=jswing]
[anim name="Fia" top="82" time=300 wait=false effect=jswing]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Suddenly her eyes began to sparkle and she started dragging me in the direction of a food stall, where a nice smell was coming from.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[anim name="Fia" left="800" time=500 wait=true effect=jswing]
[wait time="300"]
[OwnerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Stall owner
Ha! You've got a good nose little one![p]
We have the best cakes of the whole autumn fair![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She stopped at a stall that sells fried food and delicious looking sweets, almost pressing<br> her snout against the glass of the stall while marveling at it.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
You want something? [p]
We didnt really have the time to eat something proper, huh?[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She was licking her lips while she looked at the food behind the glass and then gave me a hungry look.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Haha, well then...[p]
Excuse me, I would like one bag of these.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[OwnerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Stall owner
One bag comes right up, enjoy![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[anim name="Fia" left="348" time=500 wait=true effect=jswing]
[anim name="Fia" top="60" time=220 wait=true effect=jswing]
[anim name="Fia" top="82" time=220 wait=false effect=jswing]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Brai~ "munch" [p]
Mmh.. Braixen! Brai![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Fia filled her mouth with a few of the fried cakes and chewed them down instantly. [p]
Seeing how excited she was about them made me want to try one too.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
...[p]
Wow! I didn't expect them to be this tasty![p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[anim name="Fia" top="60" time=220 wait=true effect=jswing]
[anim name="Fia" top="82" time=220 wait=false effect=jswing]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Brai~[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Fia seemed proud of her tracking skills and let of a triumphant giggle while chewing down more of the cakes.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
The cakes kind of make me want even more, what else can you sniff out?[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[anim name="Fia" top="60" time=220 wait=true effect=jswing]
[anim name="Fia" top="82" time=220 wait=true effect=jswing]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
~xen![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[chara_hide  name="Fia"  time="150" page="back"]
[_tb_end_tyrano_code]

[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Happy that I asked Fia started sprinting through the crowd, <br>dragging me along from one stall to the next and before we knew it we bought all kinds of food and went on attraction after the other...[p]
I even won a plushie for her that she really seemed to like![p]

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
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Hey, wait for me![p]
[_tb_end_text]

[bg  time="1000"  method="crossfade"  storage="cg/002.jpg"  ]
[tb_eval  exp="sf.cg002=1"  name="cg002"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
The Ferris Wheel seems to be the one Fia was looking forward the most. [p]
It was hard for her to hold back her excitement while we were waiting in line.[p]
When we got our tickets and went our way to the gondola she was mumbling to herself,<br> all excited looking up to the swinging gondolas at the top.[p]

[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Bra-b-braixen...[p]
#
[_tb_end_text]

[tb_hide_message_window  ]
[stopse  time="500"  buf="1"  fadeout="true"  ]
[wait  time="500"  ]
[bg  time="1000"  method="crossfade"  storage="bg/bg005.jpg"  ]
[tb_show_message_window  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Fia was pressing her nose and paws against the glass of the gondola while we were going higher.[p]

[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Braaaaaai....[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She turned around with a big grin, pointing at all the little buildings you could see afar.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[chara_mod name="Fia" storage="chara/1/Braixen001.png" page="back"]
[chara_show  name="Fia"  time="300" left="348" top="82" width="532" height="673" wait="true" reflect="false" page="back"]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Running from one side of the gondola to the other while gasping in awe.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Hey, you can see our car from here![p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[anim name="Fia" top="60" time=220 wait=true effect=jswing]
[anim name="Fia" top="82" time=220 wait=true effect=jswing]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Brai![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
When we reached the highest point of the Ferris Wheel we were able to see the whole fair and the river running alongside it.[p]
The sun was glistening in the water and suddenly Wingull were flying past us, making both of us laugh.[p]
It is nice to see Fia having so much fun after all that trouble my parents gave her when she first moved in.[p]
When She realized that I was looking at her instead of the view her head turned red, and she gave me suspicious looks over her shoulder.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[chara_hide  name="Fia"  time="150" page="back"]
[chara_mod name="Fia" storage="chara/1/Braixen004.png" page="back"]
[wait time=150]
[chara_show  name="Fia"  time="300" left="421" top="155" width="421" height="639" wait="true" reflect="false" page="back"]
[anim name="Fia" top="140" time=220 wait=true effect=jswing]
[anim name="Fia" top="155" time=220 wait=true effect=jswing]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Braixen. [p]
Bra! Brai![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Im sorry, haha.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[chara_hide  name="Fia"  time="150" page="back"]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She kept giving me suspicious looks over her shoulder until we got back down again.[p]
[_tb_end_text]

[stopbgm  time="1000"  fadeout="true"  ]
[bg  time="1000"  method="crossfade"  storage="bg/bg007.jpg"  cross="false"  ]
[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[playse  volume="&sf.SoundVolume"  time="1000"  buf="1"  loop="true"  storage="ambiance-food-market.ogg"  fadein="true"  ]
[tb_start_text mode=1 ]
Well, that was nice![p]
[_tb_end_text]

[tb_start_tyrano_code]
[chara_mod name="Fia" storage="chara/1/Braixen004.png" page="back"]
[chara_show  name="Fia"  time="300" left="421" top="155" width="421" height="639" wait="true" reflect="false" page="back"]
[BraixenTalking]
[_tb_end_tyrano_code]

[wait  time="330"  ]
[tb_start_text mode=1 ]
#Fia
...... Brai? [p]
Braixen!?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
When we got out of the crowd in front of the Ferris Wheel, Fia suddenly started turning into different<br> directions with a sad look on her face as if she was looking for something.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Is everything alright?[p]
[_tb_end_text]

[tb_start_tyrano_code]
[anim name="Fia" left="361" time=520 wait=true effect=jswing]
[wait time="1000"]
[anim name="Fia" left="581" time=520 wait=true effect=jswing]
[BraixenTalking]
[wait time="500"]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Braixen...[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
That's when I realized that the rowlet plushie I won for her was missing. [p]
Did we leave it in the gondola?[p]
Should I go back and take a short look?[p]
[_tb_end_text]

[glink  color="black"  storage="scene2.ks"  size="20"  text="Tell&nbsp;her&nbsp;to&nbsp;wait&nbsp;so&nbsp;you&nbsp;can&nbsp;take&nbsp;a&nbsp;fast&nbsp;look&nbsp;for&nbsp;it"  x="350"  y="259"  width="513"  height="20"  _clickable_img=""  target="*LookForIt"  ]
[glink  color="black"  storage="scene2.ks"  size="20"  text="Tell&nbsp;her&nbsp;to&nbsp;get&nbsp;her&nbsp;a&nbsp;new&nbsp;one"  x="350"  y="346"  width="513"  height="20"  _clickable_img=""  target="*GetHerNewOne"  ]
[s  ]
*LookForIt

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Wait a second, I'll take a look if we left it in the gondola![p]
[_tb_end_text]

[tb_hide_message_window  ]
[wait  time="2000"  ]
[tb_show_message_window  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
...?[p]
Braixen...?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[anim name="Fia" left="0" time=420 wait=true effect=jswing]
[chara_hide  name="Fia"  time="150" page="back"]
[PlayerThinking]
[_tb_end_tyrano_code]

[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  cross="false"  ]
[wait  time="1000"  ]
[stopbgm  time="2500"  fadeout="true"  ]
[tb_start_text mode=1 ]
I went back to take a look into the gondola and asked the staff if they found anything but it seems like nobody saw it.[p]
[_tb_end_text]

[tb_start_text mode=1 ]
Maybe we lost it before?[p]
I decided to go back to Fia and just get her a new one. It's sad but nothing too severe.[p]
[_tb_end_text]

[bg  time="1000"  method="crossfade"  storage="bg/bg007.jpg"  cross="false"  ]
[wait  time="1000"  ]
[tb_start_text mode=1 ]
Wait, what? [p]
[_tb_end_text]

[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Anguish.ogg"  ]
[tb_start_text mode=1 ]
Where is she?[p]
When I got back she wasn't there. Did she wander off to find it herself?[p]
I don't think she would just go by herself without letting me know.[p]
I took a look around, but she doesn't seem to be nearby.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Fiiaaaa![p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
I called out for her a few times but couldn't hear anything over the crowd.[p]
I decided to go back to the car first since it's probably the first place she would look for me in case we got separated.[p]
I just hope that she's alright...[p]
[_tb_end_text]

[stopse  time="1000"  buf="1"  fadeout="true"  ]
[bg  time="1000"  method="crossfade"  storage="bg/bg008.jpg"  ]
[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Braixen...[p]
#
[_tb_end_text]

[tb_image_show  time="1000"  storage="default/RowletPlush.png"  width="387"  height="387"  x="794"  y="25"  _clickable_img=""  name="img_155"  ]
[wait  time="500"  ]
[tb_image_show  time="300"  storage="default/BraixenExclamation2.png"  width="576"  height="314"  x="29"  y="304"  _clickable_img=""  name="img_157"  ]
[tb_start_text mode=1 ]
#Fia
"gasp" Braixen![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[OwnerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#???
Haha, Gotcha![p]
#
[_tb_end_text]

[tb_image_hide  time="100"  ]
[bg  time="1000"  method="crossfade"  storage="cg/003.jpg"  ]
[tb_eval  exp="sf.cg003=1"  name="cg003"  cmd="="  op="t"  val="1"  val_2="undefined"  ]
[tb_start_text mode=1 ]
#Ruffian
This couldnt have been any easier![p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Braixen! Brai![p]
[_tb_end_text]

[tb_start_tyrano_code]
[OwnerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Ruffian 2
Ha! Caught ourselfs some money![p]
Your plan to lure her out here with her plush was awesome bro![p]
[_tb_end_text]

[tb_start_text mode=1 ]
#Ruffian 1
Yeah yeah...[p]
Lets just get out of here before anyone notices![p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Braixen- B-Brai![p]
[_tb_end_text]

[tb_start_tyrano_code]
[OwnerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Ruffian 1
Come on, we know where your owner is![p]
[_tb_end_text]

[tb_start_text mode=1 ]
#Ruffian 2
Yeah, we totally get you there. We're just helping man![p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Braixen.. "sniff"[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking2]
[_tb_end_tyrano_code]

[stopbgm  time="1000"  fadeout="true"  ]
[tb_start_text mode=1 ]
#???
Hey![p]
[_tb_end_text]

[tb_start_tyrano_code]
[OwnerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Ruffian 1
Huh?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Let her go![p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Open_Those_Bright_Eyes.ogg"  ]
[tb_start_text mode=1 ]
#Fia
Braixen! Brai![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
On my way back to the car I felt strange and thought I should take a look into one of the side alleys away from the fair.[p]
Seems like it was the right feeling and I got here just in time![p]
[_tb_end_text]

[tb_start_tyrano_code]
[OwnerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Ruffian 1
What do you want snob, this is our Pokemon. [p]
So get going![p]
[_tb_end_text]

[tb_start_text mode=1 ]
#Ruffian 2
Yeah! Go back where you came from or we teach you a lesson prig![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
It were two of them and it seemed like they used her plush to lure Fia into the alley.[p]
Who knows what would have happened if I didn't decide to go this direction just now...[p]
But I don't know If I could take on both of them...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Brrrrai..! "chomp"[p]
#
[_tb_end_text]

[tb_image_show  time="1000"  storage="default/BraixenBite.png"  width="772"  height="482"  x="231"  y="57"  _clickable_img=""  name="img_193"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
While I was thinking about that Fia used the moment of distraction and bit into the hand of the ruffian that was holding her,<br>[p]
leading to him pulling back his hand in short moment of shock.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[OwnerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Ruffian 1
Argh! You little beast... I'll get you for that..![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
The moment the ruffian was reaching out for her again I went in and gave him a forceful punch in his face,<br> making him stumble and fall to the ground.[p]

[_tb_end_text]

[playse  volume="&sf.SoundVolume"  time="1000"  buf="0"  storage="punch.ogg"  ]
[tb_eval  exp="f.Affection+=1"  name="Affection"  cmd="+="  op="t"  val="1"  val_2="undefined"  ]
[tb_start_tyrano_code]
[er][BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
......![p]
#
[_tb_end_text]

[wait  time="1000"  ]
[tb_start_tyrano_code]
[OwnerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Ruffian 2
B-Bro! You a'right?[p]
[_tb_end_text]

[tb_start_text mode=1 ]
#Ruffian 1
Don't just stand there and watch, get him![p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Fia! Lets go![p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[stopbgm  time="2500"  fadeout="true"  ]
[tb_start_text mode=1 ]
With that I grabbed Fias paw and we both started running into the crowd until we were sure to have lost them.[p]
[_tb_end_text]

[tb_image_hide  time="0"  ]
[playse  volume="&sf.SoundVolume"  time="1000"  buf="1"  fadein="true"  storage="ambiance-food-market.ogg"  loop="true"  ]
[bg  time="1000"  method="crossfade"  storage="bg/bg009.jpg"  ]
[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="Continue_Life.ogg"  ]
[tb_start_text mode=1 ]
I'm so sorry Fia...[p]
I should have payed more attention...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[chara_mod name="Fia" storage="chara/1/Braixen004.png" page="back"]
[chara_show  name="Fia"  time="300" left="421" top="155" width="421" height="639" wait="true" reflect="false" page="back"]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
....[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
She didn't answer with anything besides of the clinging of her soft paws on my arm while leaning her head against it.[p]
I'm just happy that she's alright...[p]
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
Let's go home, I guess that was enough excitement for the day.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[chara_hide  name="Fia"  time="150" page="back"]
[_tb_end_tyrano_code]

[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[stopse  time="2500"  buf="1"  fadeout="true"  ]
[stopbgm  time="2500"  fadeout="true"  ]
[tb_start_text mode=1 ]
With that we went to the car and on our way back home...[p]
[_tb_end_text]

[wait  time="2000"  ]
[tb_eval  exp="f.Ruffians='true'"  name="Ruffians"  cmd="="  op="t"  val="true"  val_2="undefined"  ]
[jump  storage="scene3.ks"  target=""  ]
[s  ]
*GetHerNewOne

[tb_start_tyrano_code]
[PlayerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
It doesn't seem to be anywhere nearby.. Who knows when we even lost it.[p]
Maybe it's for the better if we just get another one.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[BraixenTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Fia
Brai...[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[playbgm  volume="&sf.MusicVolume"  time="1000"  loop="true"  storage="On_My_Way.ogg"  fadein="true"  ]
[tb_start_text mode=1 ]
It's sad that we lost the plush but it's nothing that can't be replaced.[p]
[_tb_end_text]

[tb_start_tyrano_code]
[chara_hide  name="Fia"  time="150" page="back"]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
With Fia still desperately looking into every direction we went back to the stall where we won the plush...[p]
[_tb_end_text]

[bg  time="1000"  method="crossfade"  storage="bg/bg009.jpg"  ]
[tb_start_tyrano_code]
[OwnerTalking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
#Owner
Sorry but were fresh out of those. We still have a few other ones if you'd like one?[p]
#
[_tb_end_text]

[tb_start_tyrano_code]
[PlayerThinking]
[_tb_end_tyrano_code]

[tb_start_text mode=1 ]
I directed a questioning look at Fia but she answered with a saddened shake of her head.[p]
I felt bad for her but maybe we can still find something similar at the fair.[p]
[_tb_end_text]

[wait  time="1000"  ]
[tb_start_text mode=1 ]
After a while of walking and visiting multiple stands and attractions we called it a day, went to the car and on our way back home.[p]
I'm sure she still had fun but I'm sad that she didn't get a replacement in the end...[p]
[_tb_end_text]

[stopse  time="1000"  buf="1"  fadeout="true"  ]
[stopbgm  time="1000"  fadeout="true"  ]
[bg  time="1000"  method="crossfade"  storage="bg/Black.png"  ]
[wait  time="3000"  ]
[jump  storage="scene3.ks"  target=""  ]
[s  ]

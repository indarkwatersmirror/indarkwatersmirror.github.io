;メッセージレイヤの定義

		[position width=1280 height=248 top=472 left=0 ]


		
			[position page=fore frame="frame2.png" margint=85 marginl=15 marginr=320 marginb=45 vertical=false ]
		

		[ptext name="chara_name_area" layer="message0" color=0xFFFFFF size=26 x=10 y=510 bold="bold" edge="undefined" shadow="undefined"]

		;キャラクターの表示モードに関する定義
		[chara_config ptext="chara_name_area" pos_mode=true time="600" memory="false" anim="true" effect="easeInQuad" pos_change_time="600" ]

		;キャラクターフォーカスなど
		[chara_config  talk_focus="none" ]

		;クリック待ちボタンについて
		[glyph fix="false" left="0" top="0" ]

		

            
            [button role="save" graphic="ButtonSave.png" x="796" y="686" width="34" height="34" visible="false" ]
            

        

            
            [button role="load" graphic="ButtonLoad.png" x="839" y="686" width="34" height="34" visible="false" ]
            

        

            
            [button role="backlog" graphic="ButtonLog.png" x="881" y="685" width="34" height="34" visible="false" ]
            

        

            
            [button role="title" graphic="ButtonTitle.png" x="965" y="686" width="34" height="34" visible="false" ]
            

        

            
            [button role="sleepgame" graphic="ButtonConfig.png" x="921" y="686" width="37" height="34" visible="false" storage="config.ks"]
            

        

            
            [button role="skip" graphic="ButtonSkip.png" x="753" y="686" width="34" height="34" visible="false" ]
            

        

            
            [button role="auto" graphic="ButtonAuto.png" x="710" y="686" width="34" height="34" visible="false" ]
            

        
		
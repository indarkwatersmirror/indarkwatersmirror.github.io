GS.dataCache['DDD50C17443D154E628A57D473A1C1938F1F'] = {
    "uid": "DDD50C17443D154E628A57D473A1C1938F1F",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Random Patron",
        "type": "data_record",
        "order": 9,
        "category": "commonEvents",
        "id": "DDD50C17443D154E628A57D473A1C1938F1F",
        "isFolder": false,
        "parentId": "C6BF477F10AE084A027A58F3A3D4F77DABBB",
        "data": {
            "name": "Random Patron",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.ChangeStringVariables",
                    "params": {
                        "source": 0,
                        "target": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "PatronList",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "operation": 0,
                        "valueType": 0,
                        "textValue": {
                            "lcId": null,
                            "defaultText": "Kurtis Cross,funkywully12,EvolutionFox,Piediblu Kawatani,Scarlet,Cobalt Blue,Matthew,Scott T Cook,Edward Nirenberg,Judkip,Erik D.,Alexis Perron,Matasuura,Replikagami,Toast,areyath,Davis Murphy,Vane Holzer,Altare Jones,Daniel Molla Garcia,Fourtailowns,John Mitchell,Levin,Lira,Riftwalking,Zexas,Alma Fjellstrom,William Hodgson,Anthony Sanchez,Artomis,Brayan X,Justin fultz,Kita Daggertail,Tymon Kinneas,Windblown Peaks,ZapK,Alex Laberge,Bille Åkesson,Emanuele Carruba,Esdee3024,IronDan,Jacob Colwell,Jaki-Kun,Kyle Striker,Nightshade480,OTM,Piwix,ShadowFox26,Skwel,tails,Wall of Helios,Bob Sagget,Canitoo,Danny,DarknessRuler2345,Hero Botanist,KYagami165,Lvost,Mnemosyne,Noah,PixiLoss,Silvr,TheLastWriter,William Peterson,ZotBuster,a vap,Aaron Sun,ArrrTeest,Braixen Maid,Cameron,chaoz legends,clive silverson,D-man,Daniel,Darvin,DeadSilence23,Dizzy Morrie Spiral,DonBay,Eclipse18,Finnick,Fleischerkalle,funtice,Griffs,joe mach,jonathan luke,Kaenrae Obscuro,Kintot,light snow wolf,LucidLucario,LunaTacos,Mathys Tard-Lorean,Naevaris,okami5432,radigast,Revenuk,RKitsune,Shawaterasu,SlothDemon,Sparky66,Struppi,Tanekoden,ThornyBits,ToffelsKater,trujillo,Victor,AllTheFoxes,Almaturasu,blackjeans,Byful,fourward,j terry,Jaztec,Ken Hargen,KitsuneChibi,LinkDragon,Onstrava,sou,TheCookieCrusaders,therobotchicken,Zayne,Abraham,Akula,Alberto Roman,alexleon arbeau,Amos Defamos,Andres Squeak,Aurario,Azuron,Blake Williams,Camio,Carlos Ayala,Celierra & Darvian,darkcookies,David Giles,DeterminedCrab,Draxxus,Duane Fouche,dyllan chadwick,ELZAM,Fireson,Fuffy Zoroark,Garchompy,Golden Gear,Gosune,Haruna,Jake Meadors,Jam,James Atkinson,Jeffrey George,Jeffrey S.,Johnathan Smith,Jose Arriaga,kindalucky,Kolt Porter,Kumi686960,Lemony,Lise,Lol,LunalMan,Mean Hardon,Mini-Dinkster,Mr ManyFaces,Mr.S,MrAKiRA4,Neo the cyber lucario,Nero,Ninten.Zer0,OcStaticNexus,onioni,Patsy,PlushDragon,Porntagonist,Purpadurp,Reshi,Rozhide,Rufe Dagger,Sean Kimura,Shadrel,Side B,Slethis Slither,sock knight,SublimeSludge,Thicc boy,UNCLE_TEMA,Unfounded Anxiety,Vertigo,Vinertsm,Xaos Wolf,AzurathDrakos,Jes,MacMashPotato,Matt borkabork,PortalBomb,Rafael,Saltyman66,Seluvia,Syaoran,Timo2141,Weritirun,Wolfen Crystal,артём машковский,恩 龍\n"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "3467AFBA21D0E743872B671954F14CEDDBE3",
                    "indent": 0,
                    "expanded": true
                },
                {
                    "id": "gs.ListClear",
                    "params": {
                        "listVariable": {
                            "name": "PatronListArray",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "12C865F724BC8740866A74904DF1A2463041",
                    "indent": 0
                },
                {
                    "id": "gs.ListFromText",
                    "params": {
                        "separator": ",",
                        "textVariable": {
                            "name": "PatronList",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "PatronListArray",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "7AACD7A64988514D1F2ABF12ED653C6D2860",
                    "indent": 0
                },
                {
                    "id": "gs.ListLength",
                    "params": {
                        "listVariable": {
                            "name": "PatronListArray",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "PatronCount",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "9DDC438F1E12A240FA4B1D733ECDBB5C6931",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "RandomPatron1",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 1,
                        "sourceValue": 0,
                        "sourceRandom": {
                            "start": 0,
                            "end": {
                                "name": "PatronCount",
                                "index": 0,
                                "scope": 0,
                                "domain": "com.degica.vnm.default"
                            }
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "4F89C45F64C37142E36A72D1C75CBC3E561B",
                    "indent": 0
                },
                {
                    "id": "gs.ListValueAt",
                    "params": {
                        "valueType": 2,
                        "index": {
                            "name": "RandomPatron1",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "listVariable": {
                            "name": "PatronListArray",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "RandomPatron1",
                            "index": 9,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "7D3D854B1F2A1847351B2E01AA47C0385832",
                    "indent": 0
                },
                {
                    "id": "gs.LoopCommand",
                    "params": {},
                    "uid": "D4905CD81C5E3847E92953E7DB1F18A8262C",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "RandomPatron2",
                            "index": 2,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 1,
                        "sourceValue": 0,
                        "sourceRandom": {
                            "start": 0,
                            "end": {
                                "name": "PatronCount",
                                "index": 0,
                                "scope": 0,
                                "domain": "com.degica.vnm.default"
                            }
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "4BFD66CD799C3142D638F248BB6DB3480634",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "RandomPatron1",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": {
                            "name": "RandomPatron2",
                            "index": 2,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "94B48A5069F558457F79FE85F51DA05C72CF",
                    "indent": 1
                },
                {
                    "id": "gs.ListValueAt",
                    "params": {
                        "valueType": 2,
                        "index": {
                            "name": "RandomPatron",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "listVariable": {
                            "name": "PatronList",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "RandomPatron2",
                            "index": 10,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "7CD8646182055748C18854C731033B3D4E9F",
                    "indent": 2
                },
                {
                    "id": "gs.BreakLoopCommand",
                    "params": {},
                    "uid": "A002498D16F5D7484B2A1AA31973DCFB7F14",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "RandomPatron1",
                            "index": 9,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 10,
                        "textValue": "Sparky66",
                        "switchValue": 0,
                        "valueType": 2,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "0A7846DB5FCF6347A91B10D095E75982B9E9",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "RandomPatron1",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetScope": 0,
                        "targetRange": {
                            "start": 0,
                            "end": 0
                        },
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 0,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
                        },
                        "sourceScope": 0,
                        "sourceVariable": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "sourceReferenceDomain": "com.degica.vnm.default",
                        "sourceReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "8FC6D011620B0345522A8115AACEE44955AF",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeTextSettings",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 5,
                        "bold": 1,
                        "italic": 0,
                        "underline": 0,
                        "smallCaps": 0,
                        "strikeThrough": 0,
                        "lineSpacing": 0,
                        "padding": [
                            0,
                            0,
                            0,
                            0
                        ],
                        "font": "Verdana",
                        "size": 40,
                        "outline": 1,
                        "shadow": 0,
                        "outlineColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "fieldFlags": {
                            "font": 0,
                            "size": 1,
                            "color": 0,
                            "bold": 0,
                            "italic": 1,
                            "smallCaps": 1,
                            "underline": 1,
                            "strikeThrough": 1,
                            "lineSpacing": 0,
                            "outline": 0,
                            "outlineColor": 0,
                            "outlineSize": 1,
                            "shadow": 1,
                            "shadowColor": 1,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1,
                            "padding.0": 0,
                            "padding.1": 1,
                            "padding.2": 0,
                            "padding.3": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "EA41547D54E1524BED5ABB34B912CB8698CC",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.ShowText",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "viewport": {
                            "type": "ui"
                        },
                        "predefinedPositionId": 5,
                        "positionType": 1,
                        "number": 5,
                        "duration": 15,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "positionOrigin": 0,
                        "origin": 0,
                        "zOrder": 5000,
                        "text": {
                            "lcId": null,
                            "defaultText": "A big thank you to \n\n             for their awesome support!"
                        },
                        "position": {
                            "x": 375,
                            "y": 605
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 2,
                            "movement": 0,
                            "mask": {
                                "graphic": {
                                    "name": "Blinds_Hor",
                                    "hue": 0,
                                    "opacity": 255,
                                    "blending": 0,
                                    "tone": {
                                        "red": 0,
                                        "green": 0,
                                        "blue": 0,
                                        "grey": 0
                                    }
                                },
                                "vague": 255
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 0,
                            "origin": 1,
                            "positionOrigin": 1,
                            "zOrder": 0,
                            "blendMode": 1,
                            "viewport.type": 1
                        },
                        "expressions": [],
                        "animations": [],
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "3C63713A5D76D648BC780392C1647E9CC2E6",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "RandomPatron1",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 9,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "619833D38161D543622B3BC4E57BFBFE7C95",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeTextSettings",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 6,
                        "bold": 1,
                        "italic": 0,
                        "underline": 0,
                        "smallCaps": 0,
                        "strikeThrough": 0,
                        "lineSpacing": 0,
                        "padding": [
                            0,
                            0,
                            0,
                            0
                        ],
                        "font": "Verdana",
                        "size": 28,
                        "outline": 1,
                        "shadow": 0,
                        "outlineColor": {
                            "red": 198,
                            "green": 116,
                            "blue": 44,
                            "alpha": 221
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "fieldFlags": {
                            "font": 0,
                            "size": 0,
                            "color": 0,
                            "bold": 0,
                            "italic": 1,
                            "smallCaps": 1,
                            "underline": 0,
                            "strikeThrough": 1,
                            "lineSpacing": 0,
                            "outline": 0,
                            "outlineColor": 0,
                            "outlineSize": 1,
                            "shadow": 1,
                            "shadowColor": 1,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1,
                            "padding.0": 0,
                            "padding.1": 1,
                            "padding.2": 0,
                            "padding.3": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "color": {
                            "red": 254,
                            "green": 193,
                            "blue": 74,
                            "alpha": 232
                        }
                    },
                    "uid": "1C8D89FF9407F7492058FC57F641CE5C4EBF",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.ShowText",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "viewport": {
                            "type": "ui"
                        },
                        "predefinedPositionId": 5,
                        "positionType": 1,
                        "number": 6,
                        "duration": 15,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "positionOrigin": 0,
                        "origin": 0,
                        "zOrder": 5000,
                        "text": {
                            "lcId": null,
                            "defaultText": "\n           {GT:0010}\n"
                        },
                        "position": {
                            "x": 375,
                            "y": 605
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 2,
                            "movement": 0,
                            "mask": {
                                "graphic": {
                                    "name": "Blinds_Hor",
                                    "hue": 0,
                                    "opacity": 255,
                                    "blending": 0,
                                    "tone": {
                                        "red": 0,
                                        "green": 0,
                                        "blue": 0,
                                        "grey": 0
                                    }
                                },
                                "vague": 255
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 0,
                            "origin": 1,
                            "positionOrigin": 1,
                            "zOrder": 0,
                            "blendMode": 1,
                            "viewport.type": 1
                        },
                        "expressions": [],
                        "animations": [],
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "0F38B0D64C93E84D58690514B0AB2C1CF23E",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.PlayPictureAnimation",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 6,
                        "animationId": "A535A5646A918944C518B8E5AB89A59102F4",
                        "predefinedPositionId": 0,
                        "blendMode": 0,
                        "zOrder": 5099,
                        "duration": 15,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 1,
                        "position": {
                            "x": 436,
                            "y": 642,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {},
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 0
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 0,
                            "zOrder": 0,
                            "blendMode": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "9E50E5B3734AA840F7691CD5F8177B965FE1",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.PlayPictureAnimation",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 7,
                        "animationId": "6EDB1055007C964D2468BCC6698570C81129",
                        "predefinedPositionId": 0,
                        "blendMode": 0,
                        "zOrder": 5100,
                        "duration": 15,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 1,
                        "position": {
                            "x": 429,
                            "y": 639,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {},
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 0
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 0,
                            "zOrder": 0,
                            "blendMode": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "F14D5F212929134A2E48F2F9B8A6A427EAE7",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "RandomPatron1",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 18,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "15F9891A4334E34305890756B212CBC7A061",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeTextSettings",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 6,
                        "bold": 1,
                        "italic": 0,
                        "underline": 0,
                        "smallCaps": 0,
                        "strikeThrough": 0,
                        "lineSpacing": 0,
                        "padding": [
                            0,
                            0,
                            0,
                            0
                        ],
                        "font": "Verdana",
                        "size": 28,
                        "outline": 1,
                        "shadow": 0,
                        "outlineColor": {
                            "red": 123,
                            "green": 123,
                            "blue": 129,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "fieldFlags": {
                            "font": 0,
                            "size": 0,
                            "color": 0,
                            "bold": 0,
                            "italic": 1,
                            "smallCaps": 1,
                            "underline": 1,
                            "strikeThrough": 1,
                            "lineSpacing": 0,
                            "outline": 0,
                            "outlineColor": 0,
                            "outlineSize": 0,
                            "shadow": 1,
                            "shadowColor": 1,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1,
                            "padding.0": 0,
                            "padding.1": 1,
                            "padding.2": 0,
                            "padding.3": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "color": {
                            "red": 194,
                            "green": 199,
                            "blue": 206,
                            "alpha": 157
                        },
                        "outlineSize": 3
                    },
                    "uid": "6555D9A673274842E75989B60B9241483A3F",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.ShowText",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "viewport": {
                            "type": "ui"
                        },
                        "predefinedPositionId": 5,
                        "positionType": 1,
                        "number": 6,
                        "duration": 15,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "positionOrigin": 0,
                        "origin": 0,
                        "zOrder": 5000,
                        "text": {
                            "lcId": null,
                            "defaultText": "\n           {GT:0010}\n"
                        },
                        "position": {
                            "x": 375,
                            "y": 605
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 2,
                            "movement": 0,
                            "mask": {
                                "graphic": {
                                    "name": "Blinds_Hor",
                                    "hue": 0,
                                    "opacity": 255,
                                    "blending": 0,
                                    "tone": {
                                        "red": 0,
                                        "green": 0,
                                        "blue": 0,
                                        "grey": 0
                                    }
                                },
                                "vague": 255
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 0,
                            "origin": 1,
                            "positionOrigin": 1,
                            "zOrder": 0,
                            "blendMode": 1,
                            "viewport.type": 1
                        },
                        "expressions": [],
                        "animations": [],
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "9B43A761465D4148E5281140BB7E1817BB12",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.PlayPictureAnimation",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 6,
                        "animationId": "4459C6507DBE3645F84B67535EBC28BFA7B3",
                        "predefinedPositionId": 0,
                        "blendMode": 0,
                        "zOrder": 5099,
                        "duration": 15,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 1,
                        "position": {
                            "x": 436,
                            "y": 642,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {},
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 0
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 0,
                            "zOrder": 0,
                            "blendMode": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "9699570F66FD86483879C2653A96550E8447",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.PlayPictureAnimation",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 7,
                        "animationId": "0FFA7F78694A804C806B22F86A4DD333065A",
                        "predefinedPositionId": 0,
                        "blendMode": 0,
                        "zOrder": 5100,
                        "duration": 15,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 1,
                        "position": {
                            "x": 429,
                            "y": 639,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {},
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 0
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 0,
                            "zOrder": 0,
                            "blendMode": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "E93A9AA494C443485E29CA820C8CF1A28F9F",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "0790C68A78FB984C051A9AF91CF77EE31F2F",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeTextSettings",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 6,
                        "bold": 1,
                        "italic": 0,
                        "underline": 0,
                        "smallCaps": 0,
                        "strikeThrough": 0,
                        "lineSpacing": 0,
                        "padding": [
                            0,
                            0,
                            0,
                            0
                        ],
                        "font": "Verdana",
                        "size": 40,
                        "outline": 1,
                        "shadow": 0,
                        "outlineColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "fieldFlags": {
                            "font": 0,
                            "size": 1,
                            "color": 0,
                            "bold": 0,
                            "italic": 1,
                            "smallCaps": 1,
                            "underline": 1,
                            "strikeThrough": 1,
                            "lineSpacing": 0,
                            "outline": 0,
                            "outlineColor": 0,
                            "outlineSize": 1,
                            "shadow": 1,
                            "shadowColor": 1,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1,
                            "padding.0": 0,
                            "padding.1": 1,
                            "padding.2": 0,
                            "padding.3": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "C6E9EC703AC3D145529A7B254E4553692BC8",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.ShowText",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "viewport": {
                            "type": "ui"
                        },
                        "predefinedPositionId": 5,
                        "positionType": 1,
                        "number": 6,
                        "duration": 15,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "positionOrigin": 0,
                        "origin": 0,
                        "zOrder": 5000,
                        "text": {
                            "lcId": null,
                            "defaultText": "\n           {GT:0010}\n"
                        },
                        "position": {
                            "x": 375,
                            "y": 605
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 2,
                            "movement": 0,
                            "mask": {
                                "graphic": {
                                    "name": "Blinds_Hor",
                                    "hue": 0,
                                    "opacity": 255,
                                    "blending": 0,
                                    "tone": {
                                        "red": 0,
                                        "green": 0,
                                        "blue": 0,
                                        "grey": 0
                                    }
                                },
                                "vague": 255
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 0,
                            "origin": 1,
                            "positionOrigin": 1,
                            "zOrder": 0,
                            "blendMode": 1,
                            "viewport.type": 1
                        },
                        "expressions": [],
                        "animations": [],
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "23130EBD59D828456F5B306393F886954A48",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.TextEffect",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 6,
                        "duration": 15,
                        "waitForCompletion": 1,
                        "type": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "pixelate": {
                            "enabled": false,
                            "size": {
                                "width": 10,
                                "height": 10
                            }
                        },
                        "blur": {
                            "enabled": false,
                            "power": 0
                        },
                        "wobble": {
                            "power": 10,
                            "speed": 10,
                            "orientation": 0
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "D7E9573269B75346854801F950B1AEAF4502",
                    "indent": 0,
                    "expanded": false
                }
            ],
            "index": "DDD50C17443D154E628A57D473A1C1938F1F",
            "numberVariables": [
                {
                    "name": "RandomValue",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Reroll",
                    "index": 1,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                }
            ],
            "booleanVariables": [
                {
                    "name": "RerollPatrons",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                }
            ],
            "stringVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "listVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "localizableStrings": {
            "BC653A555233C645613801071E6C8E049561": {
                "t": "my Patrons",
                "d": null
            },
            "75D620C6540EB5457E7A1B5071CB6ABD2AFF": {
                "t": "Kurtis Cross",
                "d": null
            },
            "300F73EF397B3141E47A3C1399E3C49026A1": {
                "t": "funkywully12",
                "d": null
            },
            "D20B4192588F05486738C3C7A1BC1A347B43": {
                "t": "EvolutionFox",
                "d": null
            },
            "263C58236D1BB648011A90E39E87A2DFEC53": {
                "t": "Piediblu Kawatani",
                "d": null
            },
            "D75D2C5C52F87245998A564466CB16A725FB": {
                "t": "Scarlet",
                "d": null
            },
            "4197319174B9434B65198B63B90141B2676E": {
                "t": "Edward Nirenberg",
                "d": null
            },
            "EB151CDD011E5645BF689B493DDB9DFEBB10": {
                "t": "Judkip",
                "d": null
            },
            "D9BF43026F3DF143D13BA355CBCECA66E990": {
                "t": "Matthew",
                "d": null
            },
            "B1EA814E14173441B88A8185BC5F63C50A3D": {
                "t": "Scott T Cook",
                "d": null
            },
            "053C20A83B4F5343DD68E801413B778D8C1D": {
                "t": "areyath",
                "d": null
            },
            "513F22374DE5D74D1A0B094704627A74FF06": {
                "t": "Erik",
                "d": null
            },
            "8172B1DF0E50534CD97B0FD8BB120692002E": {
                "t": "Davis Murphy",
                "d": null
            },
            "B7F70A0C70E777491A7A48C855F77F4AF419": {
                "t": "Vane Holzer",
                "d": null
            },
            "B8D392C82CC2B945D81BD3C8D08D1B862886": {
                "t": "Altare Jones",
                "d": null
            },
            "235B447D4F5C024F333848F8C9F44B1005DB": {
                "t": "Brayan X",
                "d": null
            },
            "352F6A1A336C2143D4695181DEE08522D9CC": {
                "t": "Daniel Molla Garcia",
                "d": null
            },
            "2146C5EF9A4F0349A6888455D8374BE47BEB": {
                "t": "Fourtailowns",
                "d": null
            },
            "BBA8848705A1E245C74AA049D9D7CFE8D899": {
                "t": "John Mitchell",
                "d": null
            },
            "1AE98A667594D24C8A7B4923D389620A72B5": {
                "t": "Levin",
                "d": null
            },
            "0FBA68D02034A84D452B2CA7DAAFC2DA8509": {
                "t": "Lira",
                "d": null
            },
            "BBBE17EE6D64D043D11B558750C1C2F91A8A": {
                "t": "Riftwalking",
                "d": null
            },
            "5B3750ED3D2D5048642B6E00167F2794C80B": {
                "t": "Zexas",
                "d": null
            },
            "CFF096480A38A7451D6B8343D5732419B5AE": {
                "t": "Alma Fjellstrom",
                "d": null
            },
            "BC7E0BB872AE374B851849976CFA47DB98BD": {
                "t": "Anthony Sanchez",
                "d": null
            },
            "1084CD8F7442B643E178028377131076742B": {
                "t": "Justin fultz",
                "d": null
            },
            "253713CF412E664EF84A00B6767BD9707211": {
                "t": "Kita Daggertail",
                "d": null
            },
            "1CB0D4968B757745908897811995A174CCD2": {
                "t": "William Hodgson",
                "d": null
            },
            "9FAB0E06508FB24F077BB8D2525D65978CE6": {
                "t": "Windblown Peaks",
                "d": null
            },
            "529E2A191E353243E23AC2B405B0CCE0DE84": {
                "t": "Artomis",
                "d": null
            },
            "AE9BD65D22D30440EC0B1783963047846324": {
                "t": "Emanuele Carruba",
                "d": null
            },
            "3F0AD30E27B4534F3C1BECF1264EEA022095": {
                "t": "Esdee3024",
                "d": null
            },
            "076D6044654AB142CC48D8E969625309F713": {
                "t": "Hero Botanist",
                "d": null
            },
            "8B02561C7017C54EF958579339FD874A0BC3": {
                "t": "Jacob Colwell",
                "d": null
            },
            "B76525E37AF5B649F62A8F98C02F51901F28": {
                "t": "Mnemosyne",
                "d": null
            },
            "8C3D79F85B18C6464019EB96F6F273D12A0F": {
                "t": "ShadowFox26",
                "d": null
            },
            "70BADC05434A334CFC791D58802FC00F9D4E": {
                "t": "tails",
                "d": null
            },
            "216A582E6C67654D9B5A0F967419BF8D955B": {
                "t": "TheLastWriter",
                "d": null
            },
            "9146EBC9810597459F7AB927DF49F44B71A6": {
                "t": "Tymon Kinneas",
                "d": null
            },
            "3E80D89862AA1744AC4BF0C5CF5758606576": {
                "t": "ZapK",
                "d": null
            },
            "72E867E71103A14AC86B8C40F7F97553AB77": {
                "t": "Alex Laberge",
                "d": null
            },
            "3B1BBE735CA9284C08495EF274BA779E86E6": {
                "t": "Bille Åkesson",
                "d": null
            },
            "2AC0CAC71CE80345018BF6E66DDA457875F1": {
                "t": "Cameron",
                "d": null
            },
            "36AAD0CD245D674F846A6032D44BC2E875E8": {
                "t": "Griffs",
                "d": null
            },
            "CBECC965089ED149366B44C3F56B301D369F": {
                "t": "IronDan",
                "d": null
            },
            "23B65268514DA94DD82BB58617D7D6C103E6": {
                "t": "Jaki-Kun",
                "d": null
            },
            "6B2FE243821B1643432AEF01726907DB82A4": {
                "t": "Kyle Striker",
                "d": null
            },
            "77DF1DD04C852643FF681CE75D64E96899F5": {
                "t": "Nightshade480",
                "d": null
            },
            "5228D4202329614FEA6B3D22101EC2B7AB99": {
                "t": "OTM",
                "d": null
            },
            "78357A056CC67146532952E61359B04C815D": {
                "t": "Piwix",
                "d": null
            },
            "5180042059A4394CD9786CC5E854426BA91C": {
                "t": "Silvr",
                "d": null
            },
            "3814EFB14C09E845C298DAE3042691015030": {
                "t": "Skwel",
                "d": null
            },
            "802E79E31B897443E71959D5528D2B635913": {
                "t": "SlothDemon",
                "d": null
            },
            "586F211184CF6344C54A88F4835056AE4FF7": {
                "t": "Tanekoden",
                "d": null
            },
            "C7899B5A4DC7E948B65947F6A1A3E9088C20": {
                "t": "blackjeans",
                "d": null
            },
            "638E7C65324F6040676A14F73F316871D471": {
                "t": "Bob Sagget",
                "d": null
            },
            "8C35BC175241F842F97A6D72F5165F31F5CF": {
                "t": "Byful",
                "d": null
            },
            "2037D6844A6C5644A0598A3417D33810CC2A": {
                "t": "Canitoo",
                "d": null
            },
            "C7E984E72727D144A11B20C289DE656CC50E": {
                "t": "Danny",
                "d": null
            },
            "C0182E4560DF084F8629CEA001B462637B7F": {
                "t": "DarknessRuler2345",
                "d": null
            },
            "5772213052FF084E274A7952A4C8EE5F97AF": {
                "t": "fourward",
                "d": null
            },
            "EBBFA8B985E34740C47A33541F7D7711ACF0": {
                "t": "Ken Hargen",
                "d": null
            },
            "D39179665F9A59498C3BFF705B898D955146": {
                "t": "KYagami165",
                "d": null
            },
            "115ABE0965B8A841CF18C0E9F30876C939DE": {
                "t": "LinkDragon",
                "d": null
            },
            "A06FAB197224454F563A2EE118EBAB7E46FF": {
                "t": "Lvost",
                "d": null
            },
            "E682B6568674C54A9C388D16CF8852E82FD1": {
                "t": "Noah",
                "d": null
            },
            "7DD3E42A8ECDA74BC81955079AE5EA4725EC": {
                "t": "PixiLoss",
                "d": null
            },
            "644690D44BBDA74AA96BB1C379DB48587FCC": {
                "t": "sou",
                "d": null
            },
            "6C5DA03E87FBB342A028F221C21850D7DB9F": {
                "t": "TheCookieCrusaders",
                "d": null
            },
            "2F44B53163E4A3479E0926F5FDA8B1EA9560": {
                "t": "Wall of Helios",
                "d": null
            },
            "BA1749B568F43346BE4819676FAB796CB6B2": {
                "t": "William Peterson",
                "d": null
            },
            "8C840933122F844BB15BFCF2AD3DF9DC6111": {
                "t": "Zayne",
                "d": null
            },
            "018DB7B23707A24B84788C161431C56D4F8C": {
                "t": "ZotBuster",
                "d": null
            },
            "638403EB8721C241373A9D251F3F33C91D6F": {
                "t": "a vap",
                "d": null
            },
            "E3B052CF48E1964BAE297E048541F403D79B": {
                "t": "Aaron Sun",
                "d": null
            },
            "E4CC95BE96D8B248B89A0F11B6AE265D364D": {
                "t": "alexleon arbeau",
                "d": null
            },
            "7DF1A37F76E2B5446D184E56946F59481CB9": {
                "t": "AllTheFoxes",
                "d": null
            },
            "A29BB0F67C3B06455E7957450A9A3F8A925B": {
                "t": "Almaturasu",
                "d": null
            },
            "4D354C5C7B8DD44F7D3B0A683BFB82D05743": {
                "t": "ArrrTeest",
                "d": null
            },
            "D5F727FB86A4D448888B73866D2930E095BC": {
                "t": "Aurario",
                "d": null
            },
            "38EEBA31320BA847D7287B29A6E6432782AC": {
                "t": "Braixen Maid",
                "d": null
            },
            "F698C50A0B60484E2979B07398E51C58DE6F": {
                "t": "chaoz legends",
                "d": null
            },
            "A35E5323377C224938592C816E067E8E5B8B": {
                "t": "clive silverson",
                "d": null
            },
            "9944082040D6244DBA58E6389657DF90E72B": {
                "t": "D-man",
                "d": null
            },
            "D2B7F7189C617744FE687907F1AA613AB55E": {
                "t": "Daniel",
                "d": null
            },
            "F3F8FB9580B79146DB687E712D025EE272F7": {
                "t": "Darvin",
                "d": null
            },
            "8EEDBC71138992473E1B6786B1F549271915": {
                "t": "DeadSilence23",
                "d": null
            },
            "3BDE40F40FED15433489B7E7D10A33CC23B8": {
                "t": "Dizzy Morrie Spiral",
                "d": null
            },
            "3A08D2513DE7A84541283D887526A9EBF2BA": {
                "t": "DonBay",
                "d": null
            },
            "6FA81A0205F4914B47894006EF1A6191CC82": {
                "t": "Eclipse18",
                "d": null
            },
            "13782E0843EB8149DD7BE011553EAF33D20B": {
                "t": "ELZAM",
                "d": null
            },
            "AF5783033B7BB74D417A9DA45C33A2268742": {
                "t": "Finnick",
                "d": null
            },
            "ABA637246ED16646BF6A94B5DE4024D355E9": {
                "t": "Fleischerkalle",
                "d": null
            },
            "2405C99B3250B44FB67824A99C1F09CDA8E1": {
                "t": "funtice",
                "d": null
            },
            "6FEF50E085DC124C231BF30386C422469311": {
                "t": "j terry",
                "d": null
            },
            "CE090E542DFF714457380356B61D02055D48": {
                "t": "Jacob Stallings",
                "d": null
            },
            "04CA7A3A8E488844A948A56730D6EF553330": {
                "t": "James Atkinson",
                "d": null
            },
            "F3E329BB30E7A04EBF2802D183E2059ABB22": {
                "t": "Jaztec",
                "d": null
            },
            "35EAC6B000E8224B602804301754A3239803": {
                "t": "Jeffrey George",
                "d": null
            },
            "609DF8779F5A1644187A1933C0CE684B6267": {
                "t": "joe mach",
                "d": null
            },
            "369C294A59761847083B8D20BF7C6380EB60": {
                "t": "jonathan luke",
                "d": null
            },
            "25318F4449078549A7183AE656252FAB5651": {
                "t": "Kaenrae Obscuro",
                "d": null
            },
            "97D3A1688361A84F56287809742D2D3A15E9": {
                "t": "Kintot",
                "d": null
            },
            "C31E11C198CCF44A2898498822A594ADFD44": {
                "t": "Lemony",
                "d": null
            },
            "BB62CE0363B22143AA388724A10A1510C04E": {
                "t": "light snow wolf",
                "d": null
            },
            "3B601CD67F4AF74E2A889F633256DC0D4339": {
                "t": "LunaTacos",
                "d": null
            },
            "D49CBE311F6C06412E995A7450B452967EAB": {
                "t": "Mathys Tard-Lorean",
                "d": null
            },
            "B28F108E26CFE94B382ADBB72BE0C0EB5789": {
                "t": "Mr.S",
                "d": null
            },
            "CFC0875D185C35489A5823A74F950E5A96FC": {
                "t": "Naevaris",
                "d": null
            },
            "59C4CDFA74F6B1441C0801715C455EDD01FC": {
                "t": "OcStaticNexus",
                "d": null
            },
            "C5CE2B28795C0745F2294E06B15FCE4B0E88": {
                "t": "okami5432",
                "d": null
            },
            "F98B33D797E861402E98A4B9A4DB395A18A0": {
                "t": "Patsy",
                "d": null
            },
            "D69DF5ED6D06484B337A60D08D13FB0729E6": {
                "t": "PlushDragon",
                "d": null
            },
            "CB1DDEEC81A3034F8C89AF20D610430DAF25": {
                "t": "Revenuk",
                "d": null
            },
            "32199F017907434A75594B424738DB52132E": {
                "t": "RKitsune",
                "d": null
            },
            "6DDAE686686C7444351BEEC6A5A4DEDD4651": {
                "t": "Shawaterasu",
                "d": null
            },
            "062F3CA20B4D964C5C6AC9B2D8D0C1FE0495": {
                "t": "Slethis Slither",
                "d": null
            },
            "74C1EC0F8E699842701B7A6210E3E4C6CAFD": {
                "t": "Sparky66",
                "d": null
            },
            "184C6CBF510F7549234901A798791C451DC7": {
                "t": "Struppi",
                "d": null
            },
            "0FCB64EF2A5B3445A36930935F5CC77E4E16": {
                "t": "therobotchicken",
                "d": null
            },
            "EB25C560575F164FF62A469427B034C64A1C": {
                "t": "ThornyBits",
                "d": null
            },
            "23A575DA7A41B94B0619B986E4BF1C7E7E29": {
                "t": "ToffelsKater",
                "d": null
            },
            "36326BAB5E79D44BD09A0CC4B63632F4C25F": {
                "t": "Tristin Watkins",
                "d": null
            },
            "7AA343AB5049F44B5B5B29D84DC6C0B216D0": {
                "t": "trujillo",
                "d": null
            },
            "D41A5E454D03134FB20838C0588D6D6A21CE": {
                "t": "Victor",
                "d": null
            },
            "AD1E2C844367F74AC22843B171C5B62E371E": {
                "t": "Xaos Wolf",
                "d": null
            },
            "DBF2D8BB3D88D44B6428C592680502798B22": {
                "t": "AzurathDrakos",
                "d": null
            },
            "370833BE84D74644AA9AAEC703E5DD92870B": {
                "t": "Jes",
                "d": null
            },
            "982DC23E486D37459A1BFBB01E3C6AAA0BF2": {
                "t": "KitsuneChibi",
                "d": null
            },
            "360DC50681F0B8405C298989128D5DB18A5D": {
                "t": "MacMashPotato",
                "d": null
            },
            "784E78BC2EEB454AE75BBDB1AA0D9FE5D136": {
                "t": "Matt borkabork",
                "d": null
            },
            "9374A4550347E044AA8A5B7767A518C5FB89": {
                "t": "Onstrava",
                "d": null
            },
            "67622AA24DC1E54D164A5F57C19C0D372614": {
                "t": "PortalBomb",
                "d": null
            },
            "D6DD97797E186146A47AE0C4A951DFB6731D": {
                "t": "Rafael",
                "d": null
            },
            "6FD676EB2AFA3349213B9756FEDA2B97A863": {
                "t": "Saltyman66",
                "d": null
            },
            "CC144F1B7200C34E7C9B7091277CC18EC69D": {
                "t": "Seluvia",
                "d": null
            },
            "55227B321926554920596BD9D3A54D034E4A": {
                "t": "Syaoran",
                "d": null
            },
            "7956BB894402164D6B6BEFF4D1826106A2ED": {
                "t": "Timo2141",
                "d": null
            },
            "2DD30AB21578A641E71BCD0390B9D9052B7F": {
                "t": "Wolfen Crystal",
                "d": null
            },
            "883469BC5E32D843D51864441E1E2E0B1207": {
                "t": "артём машковский",
                "d": null
            },
            "CBC30B03316F034F0B7925833BF42A4AA5F3": {
                "t": "A big thank you to \n\n             for their awesome support!",
                "d": null
            },
            "3562ADDB8649574E17799E64DB0BD10B20F2": {
                "t": "\n           {LT:0001}\n",
                "d": null
            },
            "FEFDB3D041CF324C5B4A4407EF7B5FFB3A70": {
                "t": "\n           {LT:0001}\n",
                "d": null
            },
            "598147555BF6F640029BA2663A2D8D3DA300": {
                "t": "\n           {LT:0001}\n",
                "d": null
            }
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
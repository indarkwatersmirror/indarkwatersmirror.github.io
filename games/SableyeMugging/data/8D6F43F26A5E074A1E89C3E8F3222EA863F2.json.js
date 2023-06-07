GS.dataCache['8D6F43F26A5E074A1E89C3E8F3222EA863F2'] = {
    "uid": "8D6F43F26A5E074A1E89C3E8F3222EA863F2",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "AutoMode_Stage03",
        "type": "data_record",
        "order": 4,
        "category": "commonEvents",
        "id": "8D6F43F26A5E074A1E89C3E8F3222EA863F2",
        "isFolder": false,
        "data": {
            "name": "AutoMode_Stage03",
            "startCondition": 1,
            "conditionEnabled": true,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "AutoMode",
                            "index": 18,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 3,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "CB91E4E403AC564ADE29A7560BE4A25406B8",
                    "indent": 0
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonStage",
                            "value": 3
                        },
                        "duration": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "1453F1AE663DB64FE0281BC1DC91DD2635A1",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonVisibility",
                            "value": 0
                        },
                        "duration": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        }
                    },
                    "uid": "8552DC196876194BA34BC868BAC7CB041A02",
                    "indent": 1
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonFill",
                            "value": 0
                        },
                        "duration": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "BF501DC95B5676473B497617025925FF55B2",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "WetMax",
                            "index": 5,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "AF1DEF053EFD714FA378EEF3D228F1F8CC1D",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Stage03_auto.ogg",
                            "volume": 100,
                            "playbackRate": 100
                        },
                        "musicEffect": 0,
                        "loop": 0,
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "sound.volume": 1,
                            "sound.playbackRate": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "6C212B13534A31437729B0C14EF43854895C",
                    "indent": 2
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "loop": 0,
                        "fadeInTime": 1000,
                        "data": {
                            "model": {
                                "name": "SableyeModel.model.live2d",
                                "folderPath": "Live2D",
                                "hue": 0,
                                "opacity": 255,
                                "blending": 0,
                                "tone": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0
                                }
                            },
                            "motion": "Stage03_auto.mtn",
                            "position": {
                                "x": -117,
                                "y": -918,
                                "zoom": {
                                    "x": 1,
                                    "y": 1,
                                    "d": 1
                                }
                            }
                        },
                        "waitForCompletion": 1,
                        "fieldFlags": {
                            "fadeInTime": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "4CCA35B4395A7540C36954E46CA4AB70D648",
                    "indent": 2
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "BFB0D0AD2C6AC3496E8883801167522271C6",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Stage03_auto.ogg",
                            "volume": 100,
                            "playbackRate": 100
                        },
                        "musicEffect": 0,
                        "loop": 0,
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "sound.volume": 1,
                            "sound.playbackRate": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "522A593E1EC2F74C1B78E0A8217B5ADD31B6",
                    "indent": 2
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "loop": 0,
                        "fadeInTime": 1000,
                        "data": {
                            "model": {
                                "name": "SableyeModel.model.live2d",
                                "folderPath": "Live2D",
                                "hue": 0,
                                "opacity": 255,
                                "blending": 0,
                                "tone": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0
                                }
                            },
                            "motion": "Stage03_wetAuto.mtn",
                            "position": {
                                "x": 0,
                                "y": 0,
                                "zoom": {
                                    "x": 1,
                                    "y": 1,
                                    "d": 1
                                }
                            }
                        },
                        "waitForCompletion": 1,
                        "fieldFlags": {
                            "fadeInTime": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "99397661295E85464778DAD19C4C19935399",
                    "indent": 2
                },
                {
                    "id": "vn.CallScene",
                    "params": {
                        "scene": {
                            "uid": "45C6EE4A45AF5245902831B24667A076B145",
                            "name": "Game_Stage04"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "12D36FD290FE4949BB09C9B2D0B84BD07365",
                    "indent": 1
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 18
                    },
                    "uid": "47CB5F81471B014E898B33235EE31BE3ECC5",
                    "indent": 0
                }
            ],
            "index": "8D6F43F26A5E074A1E89C3E8F3222EA863F2",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "autoModeDuration",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                }
            ],
            "conditionSwitch": {
                "name": "AutoMode",
                "index": 29,
                "scope": 1,
                "domain": "com.degica.vnm.default",
                "changed": true
            },
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
        "localizableStrings": {},
        "parentId": "C41CE43B8658674A732BD897CC92A6F568F8"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
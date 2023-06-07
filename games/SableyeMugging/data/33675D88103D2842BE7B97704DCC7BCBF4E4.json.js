GS.dataCache['33675D88103D2842BE7B97704DCC7BCBF4E4'] = {
    "uid": "33675D88103D2842BE7B97704DCC7BCBF4E4",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "StartSecretEnding",
        "type": "data_record",
        "order": 5,
        "category": "commonEvents",
        "id": "33675D88103D2842BE7B97704DCC7BCBF4E4",
        "isFolder": false,
        "parentId": "E12C9FFC293308481F1AAAD269FF7C80EEA6",
        "data": {
            "name": "StartSecretEnding",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Stage04_WetAuto.ogg",
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
                    "uid": "EEF8E0893FBCF7420A6B1F82533B6364BF80",
                    "indent": 0,
                    "expanded": true
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
                            "motion": "Stage04_wetIdle.mtn",
                            "position": {
                                "x": -367,
                                "y": -720,
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
                    "uid": "A456734A6763D545E85AE13344F26E705DCD",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "SceneStage4",
                            "index": 19,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 1,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "EE44E6A285F4A543A649EFC1D4145046258A",
                    "indent": 0
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Stage04_WetAuto.ogg",
                            "volume": 100,
                            "playbackRate": 100
                        },
                        "musicEffect": 0,
                        "loop": 1,
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "sound.volume": 1,
                            "sound.playbackRate": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "84D190626619034D79590E16227F0DC5767E",
                    "indent": 1,
                    "expanded": true
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "loop": 1,
                        "fadeInTime": 0,
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
                            "motion": "Stage04_wetIdle.mtn",
                            "position": {
                                "x": -367,
                                "y": -720,
                                "zoom": {
                                    "x": 1,
                                    "y": 1,
                                    "d": 1
                                }
                            }
                        },
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "fadeInTime": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "3AE23D4D9CCC734E82699E641911831585D1",
                    "indent": 1
                }
            ],
            "index": "33675D88103D2842BE7B97704DCC7BCBF4E4",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "stringVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
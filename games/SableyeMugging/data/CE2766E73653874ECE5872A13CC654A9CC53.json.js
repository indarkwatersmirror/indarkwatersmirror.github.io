GS.dataCache['CE2766E73653874ECE5872A13CC654A9CC53'] = {
    "uid": "CE2766E73653874ECE5872A13CC654A9CC53",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "RubbingIdleAni",
        "type": "data_record",
        "order": 3,
        "category": "commonEvents",
        "id": "CE2766E73653874ECE5872A13CC654A9CC53",
        "isFolder": false,
        "parentId": "381E59B913CDF442C62BE0C4275030B460F1",
        "data": {
            "name": "RubbingIdleAni",
            "startCondition": 0,
            "conditionEnabled": false,
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
                    "uid": "2A5DF3C9814155471B2A4F664F00F685EEE9",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "loop": 0,
                        "fadeInTime": 200,
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
                            "motion": "Stage02_idle.mtn",
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
                    "uid": "2911A3FA5EE8D6450E5A5CF59C0188AD3438",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "SceneStage2",
                            "index": 11,
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
                    "uid": "931AD2FE5C7F44455B69AEE2D28A6C16B5E8",
                    "indent": 1
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
                            "motion": "Stage02_idle.mtn",
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
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "fadeInTime": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "27E0DDF5696D024CCD1857E1387AE4B4EB3C",
                    "indent": 2
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "39F038835E31F845FB988383445AF7773259",
                    "indent": 0
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
                            "motion": "Stage02_wet.mtn",
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
                    "uid": "4E93DA0560297040836BF5111DB73D26EA94",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "SceneStage2",
                            "index": 11,
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
                    "uid": "EB5CD28D3013D8465A6BF311306EE65BA306",
                    "indent": 1
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
                            "motion": "Stage02_wet.mtn",
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
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "fadeInTime": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "C74725732EF767463A1AC221AE9FD8D0E0B6",
                    "indent": 2
                }
            ],
            "index": "CE2766E73653874ECE5872A13CC654A9CC53",
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
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
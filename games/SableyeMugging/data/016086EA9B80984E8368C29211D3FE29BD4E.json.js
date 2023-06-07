GS.dataCache['016086EA9B80984E8368C29211D3FE29BD4E'] = {
    "uid": "016086EA9B80984E8368C29211D3FE29BD4E",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "PeneAniStop",
        "type": "data_record",
        "order": 5,
        "category": "commonEvents",
        "id": "016086EA9B80984E8368C29211D3FE29BD4E",
        "isFolder": false,
        "data": {
            "name": "PeneAniStop",
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
                    "uid": "F80A2D9858DD8348C159DA92B53881D1243A",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "loop": 0,
                        "fadeInTime": 1200,
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
                            "motion": "Stage03_idle.mtn",
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
                    "uid": "2C4A38D9117F85499C18D9F68B58F27E8744",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "SceneStage3",
                            "index": 12,
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
                    "uid": "FC3778D05A94A64C07085F27D2D52CA050E5",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "PenetratingActive",
                            "index": 17,
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
                    "uid": "C051754109F238486E2A23922D5BE2C9963B",
                    "indent": 2
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
                            "motion": "Stage03_idle.mtn",
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
                    "uid": "495FCD4082CA33407A6B1481F94F24EF7B3D",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "8A238CBA2EC9E24B503B3837AC3D9DDFEB9A",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "loop": 0,
                        "fadeInTime": 1200,
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
                            "motion": "Stage03_wet.mtn",
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
                    "uid": "B77236F28CF8E4476E492274CFE3C81859DC",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "SceneStage3",
                            "index": 12,
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
                    "uid": "C2A398BA15984449678A12F3A8D7A6DDA51C",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "PenetratingActive",
                            "index": 17,
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
                    "uid": "108CF1EE8BA2E248631BD5F5D8D1752EE2AD",
                    "indent": 2
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
                            "motion": "Stage03_wet.mtn",
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
                    "uid": "96A7072D47B9774F9528C9B1A70F4925932F",
                    "indent": 3
                }
            ],
            "index": "016086EA9B80984E8368C29211D3FE29BD4E",
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
        "localizableStrings": {},
        "parentId": "46B4DEAD168F984256690CB81CEE502FADAF"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
GS.dataCache['5FCD4A352AF8C243AF8AA1B28248F50E1311'] = {
    "uid": "5FCD4A352AF8C243AF8AA1B28248F50E1311",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "ChangeModelColor",
        "type": "data_record",
        "order": 16,
        "category": "commonEvents",
        "id": "5FCD4A352AF8C243AF8AA1B28248F50E1311",
        "isFolder": false,
        "parentId": "28317CE76CAE41400519B70173C90F6241CE",
        "data": {
            "name": "ChangeModelColor",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": false,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "vn.L2DJoinScene",
                    "params": {
                        "viewport": {
                            "type": "scene"
                        },
                        "predefinedPositionId": 0,
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "model": {
                            "name": "BraixenDefaultModel",
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
                        "zOrder": 0,
                        "origin": 0,
                        "blendMode": 0,
                        "positionType": 1,
                        "motionBlur": {
                            "enabled": 0,
                            "delay": 2,
                            "opacity": 100,
                            "dissolveSpeed": 3
                        },
                        "position": {
                            "x": -13,
                            "y": -6,
                            "zoom": {
                                "x": 1.1,
                                "y": 1.1,
                                "d": 1.1
                            }
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 0
                        },
                        "duration": 0.06,
                        "waitForCompletion": 1,
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 1,
                            "motionBlur.enabled": 1,
                            "origin": 1,
                            "zOrder": 1,
                            "blendMode": 1,
                            "viewport.type": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "66B68E7E6641154F1E686028C202DB867870",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "CreatorClimax",
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
                    "uid": "6E0574F3415433452A2987F346882FA3E9FC",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 1,
                        "fadeInTime": 1,
                        "data": {
                            "model": {
                                "name": "BraixenDefaultModel",
                                "hue": 0,
                                "opacity": 255,
                                "blending": 0,
                                "tone": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0
                                }
                            },
                            "motion": "015-IdleAfter.mtn",
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
                    "uid": "BB630DEB348D64433F5B1D6501F8E50F55AE",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "CreatorEmbarassed",
                            "index": 2,
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
                    "uid": "2AA5986C566F8848F96A6095E4DBA0D36014",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 1,
                        "fadeInTime": 1,
                        "data": {
                            "model": {
                                "name": "BraixenDefaultModel",
                                "hue": 0,
                                "opacity": 255,
                                "blending": 0,
                                "tone": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0
                                }
                            },
                            "motion": "006-IdleU.mtn",
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
                    "uid": "891A509C784C0743DD688BD78D02EF739A2D",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "DE1396FB65F01543FF484DF4195EFCDF5A61",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 1,
                        "fadeInTime": 1,
                        "data": {
                            "model": {
                                "name": "BraixenDefaultModel",
                                "hue": 0,
                                "opacity": 255,
                                "blending": 0,
                                "tone": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0
                                }
                            },
                            "motion": "000-Idle.mtn",
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
                    "uid": "25E026975E96264AE14938D719BF2627F74A",
                    "indent": 1
                }
            ],
            "index": "5FCD4A352AF8C243AF8AA1B28248F50E1311",
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
GS.dataCache['A50851E34A5DA1492A884DF9B5138F1ED922'] = {
    "uid": "A50851E34A5DA1492A884DF9B5138F1ED922",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Touching",
        "type": "data_record",
        "order": 0,
        "category": "commonEvents",
        "id": "A50851E34A5DA1492A884DF9B5138F1ED922",
        "isFolder": false,
        "parentId": "2F7C0FD42BA701456D3B378118DDAF977D4C",
        "data": {
            "name": "Touching",
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
                            "name": "SceneStage0",
                            "index": 9,
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
                    "uid": "CB46A171804542445C58A6885445992F860E",
                    "indent": 0
                },
                {
                    "id": "vn.L2DJoinScene",
                    "params": {
                        "viewport": {
                            "type": "scene"
                        },
                        "predefinedPositionId": 9,
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "model": {
                            "name": "StageButtons.model.live2d",
                            "folderPath": "Live2D",
                            "hue": 0,
                            "opacity": 200,
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
                        "positionType": 0,
                        "motionBlur": {
                            "enabled": 0,
                            "delay": 2,
                            "opacity": 100,
                            "dissolveSpeed": 3
                        },
                        "position": {
                            "x": 1060,
                            "y": 1790,
                            "zoom": {
                                "x": 0.1,
                                "y": 0.1,
                                "d": 0.1
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
                        "duration": 30,
                        "waitForCompletion": 0,
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
                            "name": "",
                            "folderPath": ""
                        }
                    },
                    "uid": "00E0270778A8D94A1008ED072D8092E91BA2",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonVisibility",
                            "value": 5
                        },
                        "duration": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        }
                    },
                    "uid": "CB803EB54169E24F605BF705BD2CAC068338",
                    "indent": 1
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonStage",
                            "value": 1
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
                    "uid": "10E37D1D60EB23490F78966706090AFB2962",
                    "indent": 1,
                    "expanded": false
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
                    "uid": "411B897187D217415759E292FC4E1C12BF04",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "SceneStage00",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "AC9DC71463E8474F13281488E923798E3956",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "TouchingActive",
                            "index": 7,
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
                    "uid": "A28B22F310B5E547E148A77513703EB1BB2A",
                    "indent": 0
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
                    "uid": "64C054694757084D844BE795FD20BD8BD07F",
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
                            "motion": "Stage01_action.mtn",
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
                    "uid": "9E627C2D5CA4F649F7383B96C5EA42097A0E",
                    "indent": 2
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "E8E7C41845A7404C84992E574E7DF7A1DAF8",
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
                            "motion": "Stage01_wet.mtn",
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
                    "uid": "80BCE56239ACA445847A04337452ABF83060",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "NoMovement",
                            "index": 4,
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
                    "uid": "1D4B39454F06964CF93AF565B7292F3EF94B",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "TouchingActive",
                            "index": 7,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "B18DB004041AE046EA8954A86250B193FC2E",
                    "indent": 1
                },
                {
                    "id": "vn.GetObjectData",
                    "params": {
                        "objectType": 7,
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 1,
                        "targetVariable": {
                            "name": "x",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "40708DCA80AE8343F95B73E1D92A6BD8C346",
                    "indent": 0
                },
                {
                    "id": "vn.GetObjectData",
                    "params": {
                        "objectType": 7,
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 2,
                        "targetVariable": {
                            "name": "y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "3742AB4F309EE645854982362366D703A0D4",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "x",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": {
                            "name": "oldX",
                            "index": 2,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "10016FEA5A78E24F947AC3F48151F64D16BD",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": {
                            "name": "oldY",
                            "index": 3,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "EA481C5D134AA244C18A10F5A91447CD23AF",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "NoMovement",
                            "index": 4,
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
                        "operation": 1,
                        "source": 0,
                        "sourceValue": 1,
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
                    "uid": "AA0BC57766F11849180AA31983B9C7E26149",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "NoMovement",
                            "index": 4,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 5,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "157DC5493ED73447BC6801181BF04AB54B93",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "LovePercent",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                        "operation": 2,
                        "source": 1,
                        "sourceValue": 1,
                        "sourceRandom": {
                            "start": 0,
                            "end": 1
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
                    "uid": "CAA430E26491A346171A6AA7DFEAA89F5AC1",
                    "indent": 3
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "NoMovement",
                            "index": 4,
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
                    "uid": "1533558730FD394EDF39CF88E6CEB822178C",
                    "indent": 3
                },
                {
                    "id": "gs.JumpToLabel",
                    "params": {
                        "name": "NoMovement",
                        "target": "activeContext"
                    },
                    "uid": "FE715A9B6C4D20494C89AEE6FC47DB296FEA",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "NoMovement",
                            "index": 4,
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
                    "uid": "C6B804AB405A784B9A595460AB8460CF803D",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "TouchAni",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "D041114A2EFB23421939456580B9948FEF48",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "TouchAni",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "F60E28594004E749FE9BDD647046C602DEA8",
                    "indent": 0
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "98E004C02D02B1406F0A8072FF0A3E60F75E",
                        "parameters": {
                            "values": [
                                1
                            ]
                        }
                    },
                    "uid": "CB214DEB5BA9F844AC8B88C52EDF6DD99ABF",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeScreenCursor",
                    "params": {
                        "hx": 80,
                        "hy": 80,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "graphic": {
                            "name": "TouchHand01.png",
                            "folderPath": "Graphics/Pictures",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        }
                    },
                    "uid": "E7F5E74A979F71430F59ED398950A865CC14",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "oldX",
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
                        "source": 0,
                        "sourceValue": {
                            "name": "x",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
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
                    "uid": "7AB77F4D8BFDC64504797C49AB8A455CE269",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "oldY",
                            "index": 3,
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
                        "sourceValue": {
                            "name": "y",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
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
                    "uid": "EC0AAEF8508AD24F184A1425D79163544E2B",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "LovePercent",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                        "operation": 1,
                        "source": 1,
                        "sourceValue": 1,
                        "sourceRandom": {
                            "start": 1,
                            "end": 1
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
                    "uid": "E305D1DE6D96F848B45834E149F036D3E55C",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "BFBC1A1923108442F57B3FC978C39A1E2701",
                    "indent": 0
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "98E004C02D02B1406F0A8072FF0A3E60F75E",
                        "parameters": {
                            "values": [
                                0
                            ]
                        }
                    },
                    "uid": "AB83AF2E67CD894F1E7BF7B710CC67E93E5E",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeScreenCursor",
                    "params": {
                        "hx": 80,
                        "hy": 80,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "graphic": {
                            "name": "TouchHand02.png",
                            "folderPath": "Graphics/Pictures",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        }
                    },
                    "uid": "60D29DDE5B4FD842F91BA837A743F745953C",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "LovePercent",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 70,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "8CB3BB357B2A2942BF4B93D66092BFDAEE72",
                    "indent": 0
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
                    "uid": "4E1E567E2C400544924990B5C63F98EE97D9",
                    "indent": 1
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "loop": 1,
                        "fadeInTime": 500,
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
                            "motion": "Stage01_wet.mtn",
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
                    "uid": "9EA3BC322E3C23424C1B097773D503B64389",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "MessageStage0",
                            "index": 12,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                    "uid": "E3065B5542C82046F57855F2FC1F1FB987DF",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ActionTextStage",
                            "index": 13,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                    "uid": "14A2EC767D6EB4433809880884EC0445FA32",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "WetMax",
                            "index": 5,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "7715E3BD192C174ACB88D071224A6932B433",
                    "indent": 2
                },
                {
                    "id": "gs.Label",
                    "params": {
                        "name": "NoMovement"
                    },
                    "uid": "F23373167145264CC08A43A88B9C7CBC1C25",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "LovePercent",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "E2A4DBFA2D6CB74DCE9859C4961D08830447",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "LovePercent",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                    "uid": "4E07443336921448C588AEE2C5D05E560D41",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "LovePercent",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 100,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "5CFD8E0715703440C0884CC4AD2BBE3D314E",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "LovePercent",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                        "sourceValue": 100,
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
                    "uid": "A9D8532683C69444F809C00562C16107D597",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "WetnessLevel",
                            "index": 10,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                        "sourceValue": {
                            "name": "LovePercent",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
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
                    "uid": "4D6E071D8B0777467C2A2BB55070BFF4BA8D",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "WetnessLevel",
                            "index": 10,
                            "scope": 1,
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
                        "operation": 4,
                        "source": 0,
                        "sourceValue": 10,
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
                    "uid": "97888C6204D82341F438B888A233705AE987",
                    "indent": 0
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "param": {
                            "name": "WetnessLevel",
                            "value": {
                                "name": "WetnessLevel",
                                "index": 10,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            }
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
                    "uid": "FCF978382D5379484F4B48A4F70C5D110113",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PercentBar",
                            "index": 8,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                        "sourceValue": {
                            "name": "LovePercent",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
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
                    "uid": "207736852F6E714CF0299433A09993DF866E",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PercentBar",
                            "index": 8,
                            "scope": 1,
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
                        "operation": 3,
                        "source": 0,
                        "sourceValue": 8,
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
                    "uid": "FBBAF048800E94461618BB069780B5232692",
                    "indent": 0
                },
                {
                    "id": "gs.CropPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 1,
                        "x": 0,
                        "y": -500,
                        "width": 70,
                        "height": {
                            "name": "PercentBar",
                            "index": 8,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        }
                    },
                    "uid": "EFE8A0FC3663F34B825B3C5128E5A0CB50B2",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "LovePercent",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 30,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "41470B5E117F13404C5943D4EBDCCD797597",
                    "indent": 0
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonVisibility",
                            "value": 10
                        },
                        "duration": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        }
                    },
                    "uid": "1C3BA00D2D6356459359D1F190D96901D9FA",
                    "indent": 1
                },
                {
                    "id": "gs.AddHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 27,
                        "shape": "rect",
                        "positionType": 1,
                        "actions": {
                            "onClick": {
                                "type": 3,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": "019A125D7A106845891BEB8242E9A215B151",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": {
                                    "uid": "750473584CCE68432F7B5108C03BB8B276AC",
                                    "name": "Game_Stage02"
                                }
                            },
                            "onEnter": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onSelect": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": {
                                    "uid": "750473584CCE68432F7B5108C03BB8B276AC",
                                    "name": "Game_Stage02"
                                }
                            },
                            "onDeselect": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onLeave": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onDrag": {
                                "type": 3,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": {
                                    "uid": "750473584CCE68432F7B5108C03BB8B276AC",
                                    "name": "Game_Stage02"
                                }
                            },
                            "onDrop": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onDropReceive": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            }
                        },
                        "dragging": {
                            "enabled": 1,
                            "variable": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "horizontal": 0,
                            "vertical": 0,
                            "rect": {
                                "x": 1062,
                                "y": 1792,
                                "size": {
                                    "width": 341,
                                    "height": 193
                                }
                            }
                        },
                        "position": 1,
                        "box": {
                            "x": 1062,
                            "y": 1792,
                            "size": {
                                "width": 341,
                                "height": 193
                            }
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "baseGraphic": null
                    },
                    "uid": "EDF557C28D601548B02ACF6210F455E0238D",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonFill",
                            "value": {
                                "name": "LovePercent",
                                "index": 9,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            }
                        },
                        "duration": 42,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "98180638436C294759292EC0AF64254EA021",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 21
                    },
                    "uid": "DDDDFCED65206341754A60D57E7BA573B62C",
                    "indent": 0
                }
            ],
            "index": "A50851E34A5DA1492A884DF9B5138F1ED922",
            "booleanVariables": [
                {
                    "name": "TouchAni",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                }
            ],
            "conditionSwitch": {
                "name": "Touching",
                "index": 6,
                "scope": 1,
                "domain": "com.degica.vnm.default",
                "changed": true
            },
            "numberVariables": [
                {
                    "name": "x",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "y",
                    "index": 1,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "oldX",
                    "index": 2,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "oldY",
                    "index": 3,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "NoMovement",
                    "index": 4,
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
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
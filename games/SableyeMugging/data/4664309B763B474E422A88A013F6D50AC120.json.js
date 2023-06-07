GS.dataCache['4664309B763B474E422A88A013F6D50AC120'] = {
    "uid": "4664309B763B474E422A88A013F6D50AC120",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Game_Stage01",
        "type": "vn.scene",
        "parentId": "3CFF2846043C744BCD2B89B4DC5FF0FD4695",
        "chapterUid": "3CFF2846043C744BCD2B89B4DC5FF0FD4695",
        "order": 2,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.ChangeScreenCursor",
                "params": {
                    "hx": 0,
                    "hy": 0
                },
                "uid": "2F8E036461994748F689D164543FE61BE658",
                "indent": 0
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "SceneStage1",
                        "index": 10,
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
                "uid": "F52193C24E946240881AECA1F20AA93E77CC",
                "indent": 0
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "IdleTextStage",
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
                "uid": "D38B8EBF2798B445AF3B75C46C77499D4D6A",
                "indent": 1
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
                "uid": "58D820BD0E6E5543768980E7827E685E1ED9",
                "indent": 1
            },
            {
                "id": "gs.CreateMessageArea",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "box": {
                        "x": 9,
                        "y": 140,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 547,
                            "height": 415
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "BB1A29846472A442FD6A6294F5A07EE3F860",
                "indent": 1
            },
            {
                "id": "gs.CreateMessageArea",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 1,
                    "box": {
                        "x": 611,
                        "y": 19,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 660,
                            "height": 326
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "661C5ABD1021184FDB2BCBD5B7B7ECF8A657",
                "indent": 1
            },
            {
                "id": "vn.L2DJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                    "model": {
                        "name": "SableyeModel.model.live2d",
                        "folderPath": "Live2D",
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
                    "positionType": 0,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 0,
                        "y": 0,
                        "zoom": {
                            "x": 1,
                            "y": 1,
                            "d": 1
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
                    "duration": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 1,
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
                "uid": "C2D5F09F00F6664F2F281C2853CB29C0D2AD",
                "indent": 1,
                "expanded": false
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
                    "duration": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 1,
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
                "uid": "C02BFFD862B25845E75B6C45F9AB2B99306B",
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
                "uid": "84D73FFA37DB97401C4985A493119B1C8041",
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
                "uid": "A7050A8A12171348977B0DF17B60D794C11B",
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
                    "duration": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 1
                    }
                },
                "uid": "2B5BF5A4289905426D1858D2484E53213F87",
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
                        "name": "SceneStage0",
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
                "uid": "4F8E7C158C8102419E9B1EC36090615AB21D",
                "indent": 0
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
                        "motion": "Stage01_stop.mtn",
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
                "uid": "45792F1E4F1D3641399BF9D852D82A4B1C37",
                "indent": 0
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "shape": "rect",
                    "positionType": 1,
                    "actions": {
                        "onClick": {
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
                            "scene": null
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
                            "type": 2,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "name": "Touching",
                                "index": 6,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            },
                            "scene": null
                        },
                        "onDrop": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "StopTouching",
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
                        "horizontal": 1,
                        "vertical": 1,
                        "rect": {
                            "x": 250,
                            "y": 1150,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 0,
                                "width": 1000,
                                "height": 500,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 1000,
                                "height": 500
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 300,
                        "y": 1200,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 0,
                            "y": 0,
                            "width": 871,
                            "height": 652,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 871,
                            "height": 400
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "baseGraphic": null
                },
                "uid": "7340AB3B24F3F346A3091777BCF39004FF15",
                "indent": 0,
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
                        "name": "SceneStage1",
                        "index": 10,
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
                "uid": "170C8AB213E5C0450D4ADE55D2B303270226",
                "indent": 0
            },
            {
                "id": "gs.Idle",
                "params": {},
                "uid": "95183BBA3938A74BF23B1CD636A2538DD849",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "StopTouching"
                },
                "uid": "694D3B645477D24925198DF5396DC05EE196",
                "indent": 0
            },
            {
                "id": "gs.EraseHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0
                },
                "uid": "DB8630A6687AA14C9A8BBE66897073278196",
                "indent": 0
            },
            {
                "id": "gs.EndCommonEvent",
                "params": {
                    "commonEventId": "A50851E34A5DA1492A884DF9B5138F1ED922"
                },
                "uid": "0DE05918899C1649726BB315077B6E014E4B",
                "indent": 0
            },
            {
                "id": "vn.L2DParameter",
                "params": {
                    "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                    "param": {
                        "name": "HandAnimation",
                        "value": 0
                    },
                    "duration": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    },
                    "waitForCompletion": 1
                },
                "uid": "61B242D03EC3744EC5690D84E72B44DBDD0A",
                "indent": 0,
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
                        "name": "Touching",
                        "index": 6,
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
                "uid": "850F192516CDA441453A31C4EE74C770F494",
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
                        "name": "TouchingActive",
                        "index": 7,
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
                "uid": "98258A2F2FFE454262186F540B3E7D81EC96",
                "indent": 0
            },
            {
                "id": "gs.ChangeScreenCursor",
                "params": {
                    "hx": 0,
                    "hy": 0
                },
                "uid": "FE45838C7293094258680231666B0560EB0E",
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
                "uid": "C16D02BC75109341D39BB275B0856EA77C04",
                "indent": 0
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
                        "motion": "Stage01_stop.mtn",
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
                "uid": "424307E687475841A3196E3681D00934F929",
                "indent": 1
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "379906C620A5F74A4349A7C885B9F9A3A394",
                "indent": 0
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
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "fadeInTime": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "588915617CAC3545B48AB91775AADFEB5706",
                "indent": 1
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "shape": "rect",
                    "positionType": 1,
                    "actions": {
                        "onClick": {
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
                            "scene": null
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
                            "type": 2,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "name": "Touching",
                                "index": 6,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            },
                            "scene": null
                        },
                        "onDrop": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "StopTouching",
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
                        "horizontal": 1,
                        "vertical": 1,
                        "rect": {
                            "x": 250,
                            "y": 1150,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 0,
                                "width": 1000,
                                "height": 500,
                                "horizontalFlip": false,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 1000,
                                "height": 500
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 300,
                        "y": 1200,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 0,
                            "y": 0,
                            "width": 871,
                            "height": 652,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 871,
                            "height": 400
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "baseGraphic": null
                },
                "uid": "B5738DF7834291453A892DF79D6B7A4E666E",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.Idle",
                "params": {},
                "uid": "C069B1D92B1F93417C0BD8660C6D573DB324",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
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
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}
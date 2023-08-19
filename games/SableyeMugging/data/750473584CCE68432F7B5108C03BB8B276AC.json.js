GS.dataCache['750473584CCE68432F7B5108C03BB8B276AC'] = {
    "uid": "750473584CCE68432F7B5108C03BB8B276AC",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Game_Stage02",
        "type": "vn.scene",
        "parentId": "3CFF2846043C744BCD2B89B4DC5FF0FD4695",
        "chapterUid": "3CFF2846043C744BCD2B89B4DC5FF0FD4695",
        "order": 3,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.ChangeScreenCursor",
                "params": {
                    "hx": 0,
                    "hy": 0
                },
                "uid": "77868A5361DA57498B397CD62868A86520F6",
                "indent": 0
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "AutoMode",
                        "index": 29,
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
                "uid": "CE88173A24D8B24CD58805B2A21EEABE2ED1",
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
                "uid": "AF8EFEF18A4B014CA839AF8356FB52FB50AF",
                "indent": 1
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "PartnerPushLevel",
                        "index": 7,
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
                "uid": "504E98CB8453644025681DF028D997065C82",
                "indent": 2
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
                "uid": "9ED4436E34CA574100498212F8C34A421518",
                "indent": 2
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
                "uid": "8BB553C58E21C64BE37B4C77BF66FFB80907",
                "indent": 2
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
                "uid": "25C96150956E714D096A8A13CF82E96F0270",
                "indent": 2,
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
                "uid": "4159BCD3210CD146A25BE535B0CB425F0986",
                "indent": 2,
                "expanded": false
            },
            {
                "id": "gs.EraseHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 27
                },
                "uid": "7D3ABA0936083746DD883D15365216DBA4EA",
                "indent": 0
            },
            {
                "id": "gs.EraseHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0
                },
                "uid": "511C72C34E83334E376A6873C18EE892DADA",
                "indent": 0
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
                    },
                    "waitForCompletion": 1
                },
                "uid": "A4B9D19F9478A147A94A7CF37F5A23678780",
                "indent": 0
            },
            {
                "id": "vn.L2DParameter",
                "params": {
                    "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                    "param": {
                        "name": "ButtonStage",
                        "value": 2
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
                "uid": "1251D5360AEB014AD22A046379A887768F19",
                "indent": 0,
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
                "uid": "22D543D42D9A72407C889717FFC076AC0281",
                "indent": 0,
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
                    "duration": 30,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "waitForCompletion": 0
                },
                "uid": "26B0054834F7624ED77AEE197B2326CF02A4",
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
                "uid": "F02664833D12A24B299B5B246B029EC61490",
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
                "uid": "27E42D60369BA844082B16A9D3466C9B7B88",
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
                        "name": "SceneStage1",
                        "index": 10,
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
                "uid": "E8D06EDE8BED46408B4AAD14D5D7CF5ED4B1",
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
                "uid": "64E852710C69D749266879C695D6FF7A2233",
                "indent": 0
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
                "uid": "C2A833E61EB5204E8D381B90F9E45332C520",
                "indent": 0
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "AutoMode",
                        "index": 29,
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
                "uid": "A930A0204B47464D65894F25EAB41C7DE6CB",
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
                        "name": "SceneStage2",
                        "index": 11,
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
                "uid": "19D73AA006DC684C358A0661C8E9F0F0CE29",
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
                                "name": "Rubbing",
                                "index": 15,
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
                            "name": "Confirmation Result",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 0,
                            "y": 1100,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 1100,
                                "width": 1416,
                                "height": 900,
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
                                "width": 1416,
                                "height": 900
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 0,
                        "y": 1100,
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
                            "width": 1416,
                            "height": 800
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "baseGraphic": null
                },
                "uid": "947C747778928848181BF675D29D3402AFB3",
                "indent": 1,
                "expanded": false
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "CE2766E73653874ECE5872A13CC654A9CC53",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "F9DD9AAF1C4680419A59B39800C17063DCDC",
                "indent": 1
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "F6C48B7E9489B642340B13652E30A495CC46",
                "indent": 0
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "AutoMode",
                        "index": 18,
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
                    "sourceValue": 2,
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
                "uid": "5901FFD0177A054ED61A5CD7F8DE3DE578A7",
                "indent": 1
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
                        "name": "AutoModeText",
                        "index": 30,
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
                "uid": "E99EDF5469D6C445DF5AEDC79FB67E5EEA17",
                "indent": 1
            },
            {
                "id": "gs.StopSound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage01_auto.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "4BCCCDFE62A2E2490149854306F71A860B06",
                "indent": 1
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
                "uid": "ADB44E2F04DDD54233481D25A3E8478EB4DD",
                "indent": 1
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage02_auto.ogg",
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
                "uid": "A2A253424EBCF94FD198AEA6E0B302AB335D",
                "indent": 2
            },
            {
                "id": "vn.L2DMotion",
                "params": {
                    "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                    "loop": 0,
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
                        "motion": "Stage02_auto.mtn",
                        "position": {
                            "x": -85,
                            "y": -728,
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
                "uid": "82B5A78B8B5F4344BB7B31E4447B60FCBF8E",
                "indent": 2
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "41E265816827934A6F28EEF24767736DD4AE",
                "indent": 1
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage02_WetAuto.ogg",
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
                "uid": "C3445E0840378149AC1BBFA21708340D2D97",
                "indent": 2
            },
            {
                "id": "vn.L2DMotion",
                "params": {
                    "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                    "loop": 0,
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
                        "motion": "Stage02_wetAuto.mtn",
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
                "uid": "4D1C67C76CABA64D2D6ADBE1BBAF986B2754",
                "indent": 2
            },
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
                    "numberValue": 2,
                    "textValue": "",
                    "switchValue": 1,
                    "valueType": 0,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "EDA043666C0C244FDE4A24D869E7FF826788",
                "indent": 1
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
                "uid": "7CBFCE312CF13643BB3991E463CF7C7FB9C0",
                "indent": 2
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage02_auto.ogg",
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
                "uid": "AC4BFF644045674B883A62D66A72055D3865",
                "indent": 3
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
                        "motion": "Stage02_auto.mtn",
                        "position": {
                            "x": -85,
                            "y": -728,
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
                "uid": "42D9B10D6F60B14A114B0F118BDEF2E84151",
                "indent": 3
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "D46E4B831F4B4644F56BB2464553C7A794F9",
                "indent": 2
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage02_WetAuto.ogg",
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
                "uid": "13B5147E857D1545127A3DA4FF62DF7070E2",
                "indent": 3
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
                        "motion": "Stage02_wetAuto.mtn",
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
                "uid": "4A0C36175BDFF046D33AD202A4FD2F92A614",
                "indent": 3
            },
            {
                "id": "gs.Idle",
                "params": {},
                "uid": "6988BCCC8A2A86472B8B0833E622231B1885",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "booleanVariables": [
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
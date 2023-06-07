GS.dataCache['45C6EE4A45AF5245902831B24667A076B145'] = {
    "uid": "45C6EE4A45AF5245902831B24667A076B145",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Game_Stage04",
        "type": "vn.scene",
        "parentId": "3CFF2846043C744BCD2B89B4DC5FF0FD4695",
        "chapterUid": "3CFF2846043C744BCD2B89B4DC5FF0FD4695",
        "order": 5,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.ChangeScreenCursor",
                "params": {
                    "hx": 0,
                    "hy": 0
                },
                "uid": "4F3155B6409854452C68BE57A2EF53F14654",
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
                "uid": "A84009DF74C3854BD338DB7285E0DBD23797",
                "indent": 0
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
                    "switchValue": 0,
                    "valueType": 1,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "2A4C42B48825474D175A7F830EF468156211",
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
                "uid": "0FDEADE976C4D1473F2B9D155A590D7AC7E3",
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
                "uid": "9320D69162895544666B0B018431D1CF5923",
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
                "uid": "B0E779AD34EC7941F67A57B5B75869EB55B4",
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
                "uid": "2354FD9F8B6249471D6B6C4825E51306A6C9",
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
                "uid": "BA6F65A97938544546196B675AAA28A5FFD0",
                "indent": 2,
                "expanded": false
            },
            {
                "id": "gs.EraseHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 27
                },
                "uid": "CB446468424EE948704896D473DCBDB1FCED",
                "indent": 0
            },
            {
                "id": "gs.EraseHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0
                },
                "uid": "A62247CA397ED34CF36A65D5DA1CAD97430E",
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
                "uid": "A57F19429E892246B93961E8362316800161",
                "indent": 0
            },
            {
                "id": "vn.L2DParameter",
                "params": {
                    "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                    "param": {
                        "name": "ButtonStage",
                        "value": 5
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
                "uid": "A174FDEA18A981452D8BE4084F273D88E41B",
                "indent": 0,
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
                "uid": "CFB02B2C679B734B977879D429CD6D6F7104",
                "indent": 0,
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
                    "duration": 30,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "waitForCompletion": 0
                },
                "uid": "FAEC479F60F44448385B05E1508C32D2E85A",
                "indent": 0
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "FinalScene",
                        "index": 17,
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
                "uid": "594DBECE178E414D628972016AA71E44E358",
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
                        "name": "Penetrating",
                        "index": 16,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "4F11FF6562AAB645FD3958836B6C8FC0DE24",
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
                        "name": "PenetratingActive",
                        "index": 17,
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
                "uid": "DAA55B3B4CE52849A758520309CF32428BD6",
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
                        "name": "SceneStage3",
                        "index": 12,
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
                "uid": "748D3647599E69479F59E838752AA456A4E1",
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
                "uid": "1293C66490DD6642071B6A4692C3CD647528",
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
                "uid": "58F234FE82607742BB5A892396683FBFB450",
                "indent": 0
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "LewdRubbingBonus",
                        "index": 14,
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
                "uid": "1EFCF2BA38C9C44748893C062018478ACB98",
                "indent": 0
            },
            {
                "id": "vn.L2DParameter",
                "params": {
                    "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                    "param": {
                        "name": "PartnerY",
                        "value": 0
                    },
                    "duration": 6,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 1
                    },
                    "waitForCompletion": 0
                },
                "uid": "13909FD0288AB64B1C08B1962DB6538BFE33",
                "indent": 0,
                "expanded": false
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
                "uid": "3EB17F6536184540BB1B99140B2A618E1220",
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
                        "name": "SceneStage4",
                        "index": 19,
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
                "uid": "572A95E379617845EC68A5F8B25B6F0E22B3",
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
                                "name": "Pushing",
                                "index": 20,
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
                        "horizontal": 0,
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
                "uid": "DBCD515A12406946A53A93A4E5FE64D591AB",
                "indent": 1,
                "expanded": false
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "909D4B4608D366401E393450D98FE0F661E2",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "5045A4129451A6425C7A5E45689CBB0949A1",
                "indent": 1
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "FE37DCE001CC5343234ADB12F558E9046FA0",
                "indent": 0
            },
            {
                "id": "gs.StopSound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage03_auto.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "911106894758A24CC8081B5170648335DF57",
                "indent": 1
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
                    },
                    "waitForCompletion": 1
                },
                "uid": "2EE67218485274430C796E04AB3ED0022E43",
                "indent": 1
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
                    "sourceValue": 4,
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
                "uid": "BD1F557F6F60434FB788C1551F5C428467C0",
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
                "uid": "DDD8244F6DE2114E194A833838F3BE6E3ABD",
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
                "uid": "D87B563B1829B548D32A8B07B1241389E885",
                "indent": 1
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage04_auto.ogg",
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
                "uid": "E00D7329016CA4433A194F44A43A00E9A980",
                "indent": 2
            },
            {
                "id": "vn.L2DMotion",
                "params": {
                    "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                    "loop": 0,
                    "fadeInTime": 3000,
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
                        "motion": "Stage04_auto.mtn",
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
                "uid": "B7FEC95213FC364A444A5B40E1E425B33D33",
                "indent": 2
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "29D4CBA935665840951B2F9289F0F47D5869",
                "indent": 1
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage04_auto.ogg",
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
                "uid": "DD81243C254753464A99A1463C3651A2CEB5",
                "indent": 2
            },
            {
                "id": "vn.L2DMotion",
                "params": {
                    "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                    "loop": 0,
                    "fadeInTime": 3000,
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
                        "motion": "Stage04_wetAuto.mtn",
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
                "uid": "8082103309B3464BFE1932D6F91BFF16659B",
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
                    "numberValue": 4,
                    "textValue": "",
                    "switchValue": 1,
                    "valueType": 0,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "89FD646537B524456D0887767FF1BE604DE3",
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
                "uid": "84C273D162A6444267496A1333A0F32D6738",
                "indent": 2
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage04_auto.ogg",
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
                "uid": "F22259DB2AC07048B9582436E2F996B81AF6",
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
                        "motion": "Stage04_auto.mtn",
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
                "uid": "C705E1F259FE85466A8ADC145D720549E287",
                "indent": 3
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "81475E5883AA664C333939A2A107FDF777D3",
                "indent": 2
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage04_auto.ogg",
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
                "uid": "AC324A5488E8264FDD1AD27210A37F409906",
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
                        "motion": "Stage04_wetAuto.mtn",
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
                "uid": "05CF64E12F9C774F037A7508A6B146F6ED4A",
                "indent": 3
            },
            {
                "id": "gs.Idle",
                "params": {},
                "uid": "A6C511C011E3D04B694826563F1294177B76",
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
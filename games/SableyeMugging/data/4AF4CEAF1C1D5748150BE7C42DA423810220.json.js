GS.dataCache['4AF4CEAF1C1D5748150BE7C42DA423810220'] = {
    "uid": "4AF4CEAF1C1D5748150BE7C42DA423810220",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Game_Ending02",
        "type": "vn.scene",
        "parentId": "3CFF2846043C744BCD2B89B4DC5FF0FD4695",
        "chapterUid": "3CFF2846043C744BCD2B89B4DC5FF0FD4695",
        "order": 7,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.ChangeScreenCursor",
                "params": {
                    "hx": 0,
                    "hy": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "4F3155B6409854452C68BE57A2EF53F14654",
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
                    "switchValue": 0,
                    "valueType": 1,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "2A4C42B48825474D175A7F830EF468156211",
                "indent": 0
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
                "uid": "B0E779AD34EC7941F67A57B5B75869EB55B4",
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
                "uid": "2354FD9F8B6249471D6B6C4825E51306A6C9",
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
                "uid": "BA6F65A97938544546196B675AAA28A5FFD0",
                "indent": 1,
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
                    "duration": 18,
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
                        "name": "Pushing",
                        "index": 20,
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
                        "name": "PushActive",
                        "index": 21,
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
                        "name": "SceneStage4",
                        "index": 19,
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
                        "name": "SecretEnding",
                        "index": 8,
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
                "uid": "49270312476A084E5F38A2991E69ABF81676",
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
                        "name": "Almost",
                        "index": 23,
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
                "uid": "6619065986EFA34F603BAFC02CD2C024B5D0",
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
                        "name": "SceneStage5-2",
                        "index": 33,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "450E618B5FBC4347D68A8C223A9F306DE76F",
                "indent": 0
            },
            {
                "id": "gs.StopSound",
                "params": {
                    "sound": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage04_WetAuto.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "391C40BB31EC0241024A7DE464F86D23834F",
                "indent": 0
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "SoundSwitch",
                        "index": 28,
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
                "uid": "E4B3F87041CB45411B089CC50B0373344599",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 2,
                    "loop": 0,
                    "music": {
                        "folderPath": "Audio/Sounds/Sound Effects",
                        "name": "Stage05_WetAuto.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "fadeInDuration": 0,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "48D926A17DA2E248724B39B1A716ABA97D7E",
                "indent": 1,
                "expanded": false
            },
            {
                "id": "vn.L2DMotion",
                "params": {
                    "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                    "loop": 0,
                    "fadeInTime": 900,
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
                        "motion": "Stage05_wetEnd.mtn",
                        "position": {
                            "x": -96,
                            "y": -524,
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
                "uid": "21775CA037E1D347C37AF5E8DE6A2DE63FBF",
                "indent": 0
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 630
                },
                "uid": "86670F007A4B9540787AA2408B2EFD56E933",
                "indent": 0
            },
            {
                "id": "vn.L2DMotion",
                "params": {
                    "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                    "loop": 0,
                    "fadeInTime": 7000,
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
                        "motion": "Stage05_wet.mtn",
                        "position": {
                            "x": -97,
                            "y": -756,
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
                "uid": "784943B770606449CD894444E7EC0DD6441B",
                "indent": 0
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
                        "motion": "Stage05_wet.mtn",
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
                "uid": "D11B80FA53BF8446A548F2F845E8BC1E141F",
                "indent": 0
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 28,
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
                            "commonEventId": "019A125D7A106845891BEB8242E9A215B151",
                            "label": "BackToTitle",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": {
                                "uid": "805D71525CBE07483D3A6E432C9D3BC26B47",
                                "name": "ResetGame"
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
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "BackToTitle",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": {
                                "uid": "805D71525CBE07483D3A6E432C9D3BC26B47",
                                "name": "ResetGame"
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
                    "baseGraphic": {
                        "name": "ButtonTitle.png",
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
                "uid": "7EBD749D1C807143248BE325D7E2469118DB",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.Idle",
                "params": {},
                "uid": "A6C511C011E3D04B694826563F1294177B76",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "BackToTitle"
                },
                "uid": "BB28016C9D1D974AB559BCE27799D19B0FCD",
                "indent": 0
            },
            {
                "id": "gs.TintScreen",
                "params": {
                    "tone": {
                        "red": -255,
                        "green": -255,
                        "blue": -255,
                        "grey": 255
                    },
                    "duration": 30,
                    "waitForCompletion": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "D18BA18E6CDF3243F588FA643F4D1059B7D0",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "805D71525CBE07483D3A6E432C9D3BC26B47",
                        "name": "ResetGame"
                    },
                    "savePrevious": 0,
                    "erasePictures": 1,
                    "eraseTexts": 1,
                    "eraseVideos": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "9CD829BF94F1024B8179BB9489D2986415E0",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.Idle",
                "params": {},
                "uid": "60B495841FF7114BA5781D85B461CA177596",
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
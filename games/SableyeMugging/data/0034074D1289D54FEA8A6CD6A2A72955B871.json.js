GS.dataCache['0034074D1289D54FEA8A6CD6A2A72955B871'] = {
    "uid": "0034074D1289D54FEA8A6CD6A2A72955B871",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Game_Stage00",
        "type": "vn.scene",
        "parentId": "3CFF2846043C744BCD2B89B4DC5FF0FD4695",
        "chapterUid": "3CFF2846043C744BCD2B89B4DC5FF0FD4695",
        "order": 1,
        "localizableStrings": {},
        "commands": [
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
                        "name": "CaveSoundsStart",
                        "index": 27,
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
                "uid": "C031BA54783EA246CC89BF72F32808CE7555",
                "indent": 0
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "MusicSwitch",
                        "index": 22,
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
                "uid": "679673627C67B4432E7975182F04CA4E3F70",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 5,
                    "loop": 1,
                    "music": {
                        "folderPath": "Audio/Music",
                        "name": "MoM_bgm14.ogg",
                        "volume": "42",
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
                        "music.volume": 0,
                        "music.playbackRate": 1,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "BA49F1BF1716D5453B2B8E05C2604C45AFBD",
                "indent": 1,
                "expanded": false
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
                "uid": "7191EFD9218027479B7912F385C55111C9D6",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Audio/Music",
                        "name": "CaveAmbience_by_foxzine.wav",
                        "volume": "43",
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
                        "music.volume": 0,
                        "music.playbackRate": 1,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "80F7C1EA99A0A3476B288B61A33CCB6AD76D",
                "indent": 1,
                "expanded": false
            },
            {
                "id": "gs.TintScreen",
                "params": {
                    "tone": {
                        "red": 9,
                        "green": -12,
                        "blue": 10,
                        "grey": 0
                    },
                    "duration": 30,
                    "waitForCompletion": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "241308038F7D9142975BFBC6EAB7C1C28B43",
                "indent": 0
            },
            {
                "id": "gs.EraseHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0
                },
                "uid": "DFB71F72698375443B4AB6599B38418035DB",
                "indent": 0
            },
            {
                "id": "gs.EraseText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 12,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "07937B1D7E9732415B7BA7A1FC1E7978C67F",
                "indent": 0
            },
            {
                "id": "gs.EraseText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 1,
                    "duration": 12,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "1F944F4D151197479E4B1870FE4AB55CAFCC",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": null,
                    "layer": 0,
                    "duration": 30,
                    "waitForCompletion": 1,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "8BD8E4675FEBA44C0D8B70C5A82580A7B15F",
                "indent": 0
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 23,
                    "shape": "rect",
                    "positionType": 1,
                    "actions": {
                        "onClick": {
                            "type": 1,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": "F1CF59248E86F441E33BF833B46C33DA9F6C",
                            "label": "",
                            "switch": {
                                "name": "MessageSetting",
                                "index": 24,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
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
                            "commonEventId": "F1CF59248E86F441E33BF833B46C33DA9F6C",
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
                            "commonEventId": "F1CF59248E86F441E33BF833B46C33DA9F6C",
                            "label": "",
                            "switch": {
                                "name": "MessageSetting",
                                "index": 24,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
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
                            "commonEventId": "F1CF59248E86F441E33BF833B46C33DA9F6C",
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
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
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
                        "enabled": 0,
                        "variable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "horizontal": 0,
                        "vertical": 0,
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 200,
                                "height": 50
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1280,
                        "y": 320,
                        "size": {
                            "width": 122,
                            "height": 122
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "baseGraphic": {
                        "name": "ButtonText.png",
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
                    },
                    "hoverGraphic": null,
                    "selectedGraphic": {
                        "name": "ButtonText_.png",
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
                "uid": "F496AA8C3880A445B27B4496521BF25265EA",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 24,
                    "shape": "rect",
                    "positionType": 1,
                    "actions": {
                        "onClick": {
                            "type": 1,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": "A2041CDB83A83841CF68BDC78F308837B224",
                            "label": "",
                            "switch": {
                                "name": "ChestSwitch",
                                "index": 13,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
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
                            "commonEventId": "A2041CDB83A83841CF68BDC78F308837B224",
                            "label": "",
                            "switch": {
                                "name": "ChestSwitch",
                                "index": 13,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
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
                            "commonEventId": "A2041CDB83A83841CF68BDC78F308837B224",
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
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
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
                        "enabled": 0,
                        "variable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 200,
                                "height": 50
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1280,
                        "y": 470,
                        "size": {
                            "width": 122,
                            "height": 122
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "baseGraphic": {
                        "name": "ButtonChest_.png",
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
                    },
                    "selectedGraphic": {
                        "name": "ButtonChest.png",
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
                "uid": "7B0AA3EF667FA548A77914B397827D7E3C99",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 25,
                    "shape": "rect",
                    "positionType": 1,
                    "actions": {
                        "onClick": {
                            "type": 1,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": "758442670B53A748AC1975A1F26110A7842D",
                            "label": "",
                            "switch": {
                                "name": "PartnerSwitch",
                                "index": 14,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
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
                            "commonEventId": "758442670B53A748AC1975A1F26110A7842D",
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
                            "commonEventId": "758442670B53A748AC1975A1F26110A7842D",
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
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
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
                        "enabled": 0,
                        "variable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 200,
                                "height": 50
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1280,
                        "y": 620,
                        "size": {
                            "width": 122,
                            "height": 122
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "baseGraphic": {
                        "name": "ButtonPartner.png",
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
                    },
                    "selectedGraphic": {
                        "name": "ButtonPartner_.png",
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
                "uid": "704734FD3AF7E84F7D28BCC96CC6C558B7F5",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 26,
                    "shape": "rect",
                    "positionType": 1,
                    "actions": {
                        "onClick": {
                            "type": 1,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": "4A70759981CB31468A482DE281B2EE61B917",
                            "label": "",
                            "switch": {
                                "name": "AutoPlaySetting",
                                "index": 25,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
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
                        "enabled": 0,
                        "variable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 200,
                                "height": 50
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 1280,
                        "y": 770,
                        "size": {
                            "width": 122,
                            "height": 122
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "baseGraphic": {
                        "name": "ButtonAuto_.png",
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
                    },
                    "selectedGraphic": {
                        "name": "ButtonAuto.png",
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
                "uid": "2DC3F2B44AFCE641AD0BCB3212D6E08A79DA",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.SetObjectData",
                "params": {
                    "objectType": 7,
                    "number": 23,
                    "numberDomain": "com.degica.vnm.default",
                    "layer": 0,
                    "characterId": null,
                    "field": 7,
                    "numberValue": 3000,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "E06B67D726CAE547A8799ED8C78233B094BA",
                "indent": 0
            },
            {
                "id": "vn.SetObjectData",
                "params": {
                    "objectType": 7,
                    "number": 24,
                    "numberDomain": "com.degica.vnm.default",
                    "layer": 0,
                    "characterId": null,
                    "field": 7,
                    "numberValue": 3000,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "C033210469D6164CB19A7D4290E089F662EE",
                "indent": 0
            },
            {
                "id": "vn.SetObjectData",
                "params": {
                    "objectType": 7,
                    "number": 25,
                    "numberDomain": "com.degica.vnm.default",
                    "layer": 0,
                    "characterId": null,
                    "field": 7,
                    "numberValue": 3000,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "83ADA3F82B5C8849CE1B12B18AB5EB04FC5F",
                "indent": 0
            },
            {
                "id": "vn.SetObjectData",
                "params": {
                    "objectType": 7,
                    "number": 26,
                    "numberDomain": "com.degica.vnm.default",
                    "layer": 0,
                    "characterId": null,
                    "field": 7,
                    "numberValue": 3000,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "1AEF2B5A3E3CA343E16AD375AF90D80722C9",
                "indent": 0
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 1,
                        "width": 70,
                        "height": 800
                    },
                    "visual": {
                        "type": 4,
                        "quad": {
                            "color": {
                                "red": 84,
                                "green": 84,
                                "blue": 117,
                                "alpha": 210
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 1000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 2,
                    "position": {
                        "x": 50,
                        "y": 1160
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "origin": 0,
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 0,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 0,
                        "size.type": 0,
                        "size.width": 0,
                        "size.height": 0,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "C57C367772CFB8462D68C3C1E70FC50EDB41",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 1,
                        "width": 70,
                        "height": 800
                    },
                    "visual": {
                        "type": 4,
                        "quad": {
                            "color": {
                                "red": 245,
                                "green": 84,
                                "blue": 117,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 1,
                    "blendMode": 0,
                    "zOrder": 1000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 2,
                    "position": {
                        "x": 50,
                        "y": 1160
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "origin": 0,
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 0,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 0,
                        "size.type": 0,
                        "size.width": 0,
                        "size.height": 0,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "9E2B5AE66FD1E34C882BBA291962C40610BE",
                "indent": 0,
                "expanded": false
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
                        "name": "LovePercent",
                        "index": 9,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    }
                },
                "uid": "86E0559A6007E6466B992121F1A8BC5A2BDE",
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
                "uid": "38199F0E3983E64B3E1BCC65F66BF655752D",
                "indent": 0
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
                "uid": "3EEA11833ED4C14C16699036B98C76E0192E",
                "indent": 0
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
                    "zOrder": 200,
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
                        "animation.type": 0,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "5DEF0B572C15A645A7180781EDDCCE70485B",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.L2DMotion",
                "params": {
                    "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                    "loop": 1,
                    "fadeInTime": 1,
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
                        "motion": "Stage01_idle.mtn",
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
                "uid": "20C0FD0674A8E442F31B7A79C151ECCCFF89",
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
                "uid": "B60B3C754BC477411779E6B2B67DD21D5EF0",
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
                        "name": "SceneStage0",
                        "index": 9,
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
                "uid": "850F192516CDA441453A31C4EE74C770F494",
                "indent": 0
            },
            {
                "id": "gs.ChangeScreenCursor",
                "params": {
                    "hx": 0,
                    "hy": 0
                },
                "uid": "F565D5970739F74F2F890975876D6E6800E5",
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
                "uid": "844F513878C1F841F52A5654ECC5EC02975A",
                "indent": 0
            },
            {
                "id": "vn.CallScene",
                "params": {
                    "scene": {
                        "uid": "4664309B763B474E422A88A013F6D50AC120",
                        "name": "Game_Stage01"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "3B5EF19C36F16244C00842A3563B93904FAB",
                "indent": 0
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
GS.dataCache['A1E7878296452845993A2A36AE80393F1C39'] = {
    "uid": "A1E7878296452845993A2A36AE80393F1C39",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "CreatorTouchingStop",
        "type": "data_record",
        "order": 6,
        "category": "commonEvents",
        "id": "A1E7878296452845993A2A36AE80393F1C39",
        "isFolder": false,
        "data": {
            "name": "CreatorTouchingStop",
            "startCondition": 1,
            "conditionEnabled": true,
            "parallel": true,
            "autoPreload": false,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "CreatorTouching",
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
                    "uid": "55BE2A1503C1C7464968DA17DB18984FC6BE",
                    "indent": 0
                },
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 11
                    },
                    "uid": "C6834C6F408C554F610A5A711D453C02BCC3",
                    "indent": 2
                },
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 10
                    },
                    "uid": "57AC73AD5A8C31435B691B62B5F89BAC2A69",
                    "indent": 2
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
                        "numberValue": 76,
                        "textValue": "",
                        "switchValue": 1,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "65AE57710751A5489D1B3234168D6675664B",
                    "indent": 1
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 1,
                        "fadeInTime": 500,
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
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "fadeInTime": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "9C8711805F447247710B582882B9DD85953E",
                    "indent": 2
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "Lewdness",
                            "index": 11,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 76,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 4,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "D7E56E758C63B24835596B8247F2C17D81E2",
                    "indent": 1
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 1,
                        "fadeInTime": 500,
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
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "fadeInTime": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "25D38C8625BFA842C7782203A47B43FD4919",
                    "indent": 2
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "Lewdness",
                            "index": 11,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 560,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "1EBF910C4603B84DA26BD3C477818E641A97",
                    "indent": 1
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 1,
                        "fadeInTime": 500,
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
                            "motion": "011-Aroused.mtn",
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
                    "uid": "165A9831620CA74A4329DE2307A7C16F1F41",
                    "indent": 2
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
                        "numberValue": 75,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "11FE9AF954D8D546C84B1C5033E3C1F560FE",
                    "indent": 1
                },
                {
                    "id": "gs.AddHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 11,
                        "shape": "rect",
                        "positionType": 0,
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
                                    "name": "CreatorTouching",
                                    "index": 7,
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
                                    "name": "CreatorPettingStop",
                                    "index": 5,
                                    "scope": 1,
                                    "domain": "com.degica.vnm.default",
                                    "changed": true
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
                                    "name": "CreatorPettingStop",
                                    "index": 5,
                                    "scope": 1,
                                    "domain": "com.degica.vnm.default",
                                    "changed": true
                                },
                                "scene": null
                            }
                        },
                        "dragging": {
                            "enabled": 1,
                            "variable": {
                                "name": "Touching",
                                "index": 9,
                                "scope": 1,
                                "changed": true,
                                "domain": "com.degica.vnm.default"
                            },
                            "horizontal": 1,
                            "vertical": 1,
                            "rect": {
                                "x": 218,
                                "y": 369,
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
                                    "width": 161,
                                    "height": 170
                                }
                            }
                        },
                        "position": 1,
                        "box": {
                            "x": 237,
                            "y": 422,
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
                                "width": 89,
                                "height": 84
                            }
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "FBDAEBDB7F7E6149D6195CC39C27DF801BE4",
                    "indent": 2,
                    "expanded": false
                },
                {
                    "id": "gs.AddHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 10,
                        "shape": "rect",
                        "positionType": 0,
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
                                    "name": "CreatorPetting",
                                    "index": 4,
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
                                    "name": "CreatorPettingStop",
                                    "index": 5,
                                    "scope": 1,
                                    "domain": "com.degica.vnm.default",
                                    "changed": true
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
                                    "name": "CreatorPettingStop",
                                    "index": 5,
                                    "scope": 1,
                                    "domain": "com.degica.vnm.default",
                                    "changed": true
                                },
                                "scene": null
                            }
                        },
                        "dragging": {
                            "enabled": 1,
                            "variable": {
                                "name": "Petting",
                                "index": 7,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            },
                            "horizontal": 1,
                            "vertical": 0,
                            "rect": {
                                "x": 140,
                                "y": 153,
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
                                    "width": 238,
                                    "height": 92
                                }
                            }
                        },
                        "position": 1,
                        "box": {
                            "x": 209,
                            "y": 146,
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
                                "width": 106,
                                "height": 100
                            }
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "A95DF37A515A6341050BDEE6C00F26BA1F1F",
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
                            "name": "CreatorTouchingStart",
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
                    "uid": "C66CF3ED6B146649C54A17760BEA314FD8BB",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Lewdness",
                            "index": 11,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 76,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "2D265282385D644F5F8AA58897C812C8334B",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "CreatorLewdPoints",
                            "index": 99,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "16435BA9204D754FC438AED3D882946FA0EF",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Lewdness",
                            "index": 11,
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
                    "uid": "7E35DFAC18EEF848794ADE569F3793BC1EE4",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "CreatorLewdPoints",
                            "index": 99,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 10,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "95E57B9A387491451B3B9B425D4480F61868",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Lewdness",
                            "index": 11,
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
                    "uid": "BA1056214BE153495A2BD03968F5E15576C7",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "CreatorLewdPoints",
                            "index": 99,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 30,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "E016D5B59B4128452A885AB89DF39E5DD4DA",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Lewdness",
                            "index": 11,
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
                    "uid": "E67DB9568289B54F0C3A9DE19FDDD2424625",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "CreatorLewdPoints",
                            "index": 99,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 50,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "68C36E5842FBE445788A74D885777EF2E6C2",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Lewdness",
                            "index": 11,
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
                            "end": 3
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
                    "uid": "4E03412D56D555461B48A8A755D38EF4F1F8",
                    "indent": 2
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "571BF5DA2521A540E2286507AC08D703AB4C",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Lewdness",
                            "index": 11,
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
                    "uid": "B13E71368E6F524826594286E2B72F47CB28",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "CreatorLewdPoints",
                            "index": 99,
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
                    "uid": "9BB83E561974E34DBB6B61D0556026395250",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Lewdness",
                            "index": 11,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 76,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "4B6E808B7D30E540414832194DC345AFF9F9",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Helping",
                            "index": 59,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 75,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "CF49A54265C29740FE4A05F4584599635B1A",
                    "indent": 1
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 1,
                        "fadeInTime": 500,
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
                            "motion": "012-Helping.mtn",
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
                    "uid": "4E70BDFF8E77D64E7A3992E8AA0B8C9A1868",
                    "indent": 2
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 12
                    },
                    "uid": "73C983009B20F14AEE3B2A35CDD678A78FAB",
                    "indent": 2
                },
                {
                    "id": "gs.FlashPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 13,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "duration": 30,
                        "waitForCompletion": 1
                    },
                    "uid": "41CEFF976624F84A12798C0785C54F789B58",
                    "indent": 2
                },
                {
                    "id": "gs.FlashPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 13,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "duration": 30,
                        "waitForCompletion": 1
                    },
                    "uid": "B1C035DA1D18D848592A3BC2E5125C269668",
                    "indent": 2
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 6
                    },
                    "uid": "F7ADCDC5138F7542149848F1B82EF2107287",
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
                            "name": "Helping",
                            "index": 59,
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
                    "uid": "0BD802CF52BB724D385B0E88EDE0CCDEA142",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Lewdness",
                            "index": 11,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 320,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "5ADBC61D298F4043896A48984A720D3425F2",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "CloseToEnd",
                            "index": 58,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 75,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "502A1EC9707D574BC709C7D981324CC8B202",
                    "indent": 1
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 1,
                        "fadeInTime": 100,
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
                            "motion": "013-HelpingFast.mtn",
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
                    "uid": "884EC07B68CD344DFC595308244E474B2530",
                    "indent": 2
                },
                {
                    "id": "gs.FlashPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 13,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "duration": 24,
                        "waitForCompletion": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "CC1453BE7BB8654AE98A7B541EBC11A086CC",
                    "indent": 2
                },
                {
                    "id": "gs.FlashPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 13,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "duration": 24,
                        "waitForCompletion": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "07889FF808EEE143F73805A13B0DA7018B6A",
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
                            "name": "CloseToEnd",
                            "index": 58,
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
                    "uid": "F974E93875941347486B39C4F7E70245F91F",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Lewdness",
                            "index": 11,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 470,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "92C825D1468A144D53690D4786AFDED3364D",
                    "indent": 0
                },
                {
                    "id": "gs.FlashPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 13,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "duration": 12,
                        "waitForCompletion": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "A15B02236BA4914C810B5801CB02BBA153DD",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Lewdness",
                            "index": 11,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 450,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "1B791BCA82D9C1427B1A3C82AC85C37D7F2A",
                    "indent": 0
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
                        "numberValue": 75,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "AE7289B32D5B27499179F65284D3CA999923",
                    "indent": 1
                },
                {
                    "id": "gs.FlashPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 13,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "duration": 60,
                        "waitForCompletion": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "9B86DC0B38B63341024A7563DD82EA2D3B7C",
                    "indent": 2
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 0,
                        "fadeInTime": 100,
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
                            "motion": "014-Climax.mtn",
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
                    "uid": "48634FF94AD1984D3A792762744B020BF992",
                    "indent": 2
                },
                {
                    "id": "gs.FlashScreen",
                    "params": {
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "duration": 24,
                        "waitForCompletion": 1
                    },
                    "uid": "F1515DF44F1B70433D8882F2DDBCBBFD7420",
                    "indent": 2
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "param": {
                            "name": "MaleAction",
                            "value": 30
                        },
                        "duration": 30,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "waitForCompletion": 0
                    },
                    "uid": "735E41C8194F724C1D5986B49643E0745BB9",
                    "indent": 2
                },
                {
                    "id": "gs.FlashScreen",
                    "params": {
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "duration": 24,
                        "waitForCompletion": 1
                    },
                    "uid": "7765CA770699D641E779B3315F3DA806F1FF",
                    "indent": 2
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 192
                    },
                    "uid": "3A83F30F743CE341F558EB14C7BEA94E27FA",
                    "indent": 2
                },
                {
                    "id": "gs.TintPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 13,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "tone": {
                            "red": -255,
                            "green": -255,
                            "blue": 255,
                            "grey": 0
                        },
                        "duration": 0,
                        "waitForCompletion": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "1D92FA89673AD942463BF4A564DC0C6C1590",
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
                            "name": "CreatorClimax",
                            "index": 12,
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
                    "uid": "97BD234B586AD1460D798871755446958131",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ClimaxCount",
                            "index": 9,
                            "scope": 2,
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
                    "uid": "8D7EAA0C91054341164A9E92C3C0878D7238",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Lewdness",
                            "index": 11,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 320,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "4B325D70034ED44DAA98A804CC746B217D20",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Lewdness",
                            "index": 11,
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
                        "source": 0,
                        "sourceValue": 3,
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
                    "uid": "9F89072A8442864FA06905D529CC9D2EBD7F",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Lewdness",
                            "index": 11,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 430,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "0ECF4B0006A059488D6BC4B69FF169B625AD",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "Lewdness",
                            "index": 11,
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
                        "sourceValue": 560,
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
                    "uid": "5427005F9A6539451A6AAF796BB81795A20C",
                    "indent": 1
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 12
                    },
                    "uid": "5EF7450260A0F34D407A3F43184F0631BB72",
                    "indent": 0
                }
            ],
            "index": "A1E7878296452845993A2A36AE80393F1C39",
            "booleanVariables": [
                {
                    "name": "CloseToEnd",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Climax",
                    "index": 1,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Helping",
                    "index": 2,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
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
            "conditionSwitch": {
                "name": "CreatorTouchingStart",
                "index": 8,
                "scope": 1,
                "domain": "com.degica.vnm.default",
                "changed": true
            }
        },
        "localizableStrings": {},
        "parentId": "28317CE76CAE41400519B70173C90F6241CE"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
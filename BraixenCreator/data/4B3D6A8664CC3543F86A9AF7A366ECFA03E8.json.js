GS.dataCache['4B3D6A8664CC3543F86A9AF7A366ECFA03E8'] = {
    "uid": "4B3D6A8664CC3543F86A9AF7A366ECFA03E8",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "CreatorZoomOut",
        "type": "data_record",
        "order": 14,
        "category": "commonEvents",
        "id": "4B3D6A8664CC3543F86A9AF7A366ECFA03E8",
        "isFolder": false,
        "parentId": "28317CE76CAE41400519B70173C90F6241CE",
        "data": {
            "name": "CreatorZoomOut",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": false,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 10
                    },
                    "uid": "186C44259878A648D09AC8971AD22F98B76A",
                    "indent": 0
                },
                {
                    "id": "vn.MoveCharacter",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "predefinedPositionId": 0,
                        "duration": 18,
                        "waitForCompletion": 0,
                        "positionType": 2,
                        "position": {
                            "x": -13,
                            "y": -6
                        },
                        "easing": {
                            "type": 1,
                            "inOut": 2
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "fieldFlags": {
                            "easing.type": 0
                        }
                    },
                    "uid": "B59FF7971A83A34C5349D145874606E7EC75",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "vn.ZoomCharacter",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "duration": 18,
                        "waitForCompletion": 0,
                        "zooming": {
                            "x": 110,
                            "y": 110
                        },
                        "easing": {
                            "type": 1,
                            "inOut": 2
                        },
                        "fieldFlags": {
                            "easing.type": 0
                        }
                    },
                    "uid": "082E4E1615479844181BE10602233607C873",
                    "indent": 0,
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
                    "uid": "89C9C2AF04AA914E4D88F2240F9C6DE6A658",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.Condition",
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
                    "uid": "2A799B7D9CF965477B38F312A836BCD68D53",
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
                    "uid": "B6B2935C6483E445515991D7C1A783E95798",
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
                    "uid": "249EFE759448704E331951A8971AF9A6812F",
                    "indent": 2,
                    "expanded": false
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
                    "uid": "309EBA581B217843E41A9C13B38EECBF1996",
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
                            "name": "CreatorZoomIn",
                            "scope": 1,
                            "index": 0,
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
                    "uid": "6B8FDD1889A3B5401609C004CE09B1BEDD92",
                    "indent": 0
                }
            ],
            "index": "4B3D6A8664CC3543F86A9AF7A366ECFA03E8",
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
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
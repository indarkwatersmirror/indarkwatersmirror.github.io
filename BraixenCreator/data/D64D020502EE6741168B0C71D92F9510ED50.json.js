GS.dataCache['D64D020502EE6741168B0C71D92F9510ED50'] = {
    "uid": "D64D020502EE6741168B0C71D92F9510ED50",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "CreatorZoomIn",
        "type": "data_record",
        "order": 12,
        "category": "commonEvents",
        "id": "D64D020502EE6741168B0C71D92F9510ED50",
        "isFolder": false,
        "data": {
            "name": "CreatorZoomIn",
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
                    "id": "gs.EraseHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 11
                    },
                    "uid": "2E80C70E648F754FB969D2734D98C5F5E507",
                    "indent": 0
                },
                {
                    "id": "vn.MoveCharacter",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "predefinedPositionId": 0,
                        "duration": 30,
                        "waitForCompletion": 0,
                        "positionType": 2,
                        "position": {
                            "x": -700,
                            "y": -500
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
                    "uid": "BD79B8D937DB0245B97AB4A2EB07EF6E49C0",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "vn.ZoomCharacter",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "duration": 30,
                        "waitForCompletion": 0,
                        "zooming": {
                            "x": 400,
                            "y": 400
                        },
                        "easing": {
                            "type": 1,
                            "inOut": 2
                        },
                        "fieldFlags": {
                            "easing.type": 0
                        }
                    },
                    "uid": "01CBDCFC728746440A2ABC65A0EC033CF1DF",
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
                                "x": 12,
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
                                    "width": 635,
                                    "height": 159
                                }
                            }
                        },
                        "position": 1,
                        "box": {
                            "x": 209,
                            "y": 150,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 209,
                                "y": 146,
                                "width": 106,
                                "height": 100,
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
                                "width": 145,
                                "height": 134
                            }
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "baseGraphic": null,
                        "selectedGraphic": null,
                        "hoverGraphic": null
                    },
                    "uid": "3A48920785A1D84CE528CAF2026D796CDC42",
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
                            "name": "CreatorZoomIn",
                            "scope": 1,
                            "index": 0,
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
                    "uid": "BDC0ABE6399AD945951BCC75D8680A6ADBD6",
                    "indent": 0
                }
            ],
            "index": "D64D020502EE6741168B0C71D92F9510ED50",
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
        "parentId": "28317CE76CAE41400519B70173C90F6241CE"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
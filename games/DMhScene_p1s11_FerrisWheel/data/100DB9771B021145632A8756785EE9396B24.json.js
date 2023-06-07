GS.dataCache['100DB9771B021145632A8756785EE9396B24'] = {
    "uid": "100DB9771B021145632A8756785EE9396B24",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Show Log",
        "type": "data_record",
        "order": 8,
        "category": "commonEvents",
        "id": "100DB9771B021145632A8756785EE9396B24",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Show Log",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "We call this common event whenever the user clicks on the \"Log\" link in our message box. In that case, we check if the backlog is currently open by checking the global \"Backlog Opened\" switch. If so, we hide the backlog and set the switch to OFF to indicate that the backlog is not visible anymore. Otherwise we open the backlog and set the switch to ON to indicate that the backlog is currently visible.\n\nThat means that whenever we call this common event, it will toggle the visibility of the backlog: If the backlog is currently opened, this common event will close it. If the backlog is currently closed, this common event will open it."
                    },
                    "indent": 0,
                    "uid": "6333E3B73172054DC85A8365450FB19D773D",
                    "expanded": true
                },
                {
                    "id": "vn.BacklogVisibility",
                    "params": {
                        "visible": 1,
                        "backgroundVisible": 0
                    },
                    "indent": 0,
                    "uid": "3E56879F1317B0423E08D5819283EF8A40BA"
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
                            "width": 1280,
                            "height": 720
                        },
                        "visual": {
                            "type": 4,
                            "quad": {
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
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
                        "number": 88,
                        "blendMode": 0,
                        "zOrder": 99999,
                        "duration": 0,
                        "origin": 1,
                        "waitForCompletion": 0,
                        "positionType": 0,
                        "position": {
                            "x": 0,
                            "y": 0
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
                            "origin": 1,
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
                    "indent": 0,
                    "uid": "2E45E068447158400658C697981A2F4489D6",
                    "expanded": false
                },
                {
                    "id": "gs.AddHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 88,
                        "shape": "rect",
                        "positionType": 2,
                        "actions": {
                            "onClick": {
                                "type": 1,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": "158BCC5D580307477F6AE8A14D5278F56EE2",
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
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "pictureNumber": 88,
                        "pictureNumberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "4950D00C6D5DB84B03291BA01CB421C2E35E",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Backlog Opened",
                            "index": 1,
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
                        },
                        "targetReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "9B232F5E59AB01450C2872F9B11A0746886D"
                }
            ],
            "index": "100DB9771B021145632A8756785EE9396B24",
            "booleanVariables": [
                {
                    "name": "Log Opened",
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
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
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
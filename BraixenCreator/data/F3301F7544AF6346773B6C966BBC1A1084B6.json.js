GS.dataCache['F3301F7544AF6346773B6C966BBC1A1084B6'] = {
    "uid": "F3301F7544AF6346773B6C966BBC1A1084B6",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "RandomPose",
        "type": "data_record",
        "order": 15,
        "category": "commonEvents",
        "id": "F3301F7544AF6346773B6C966BBC1A1084B6",
        "isFolder": false,
        "parentId": "28317CE76CAE41400519B70173C90F6241CE",
        "data": {
            "name": "RandomPose",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": true,
            "autoPreload": false,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "RandomPose",
                    "type": 1,
                    "numberVariable": {
                        "name": "RandomPose",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValueType": "number"
                }
            ],
            "commands": [
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "9153B13549F01943231AA55676A761A44F98",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 0,
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
                            "motion": "016-Posing01.mtn",
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
                    "uid": "0DD668DA6260A3498C893B471260EBD38DDD",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "RandomPose",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 1,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "D629732B34D4894DC238D65453EBFFD3ED26",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 0,
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
                            "motion": "017-Posing02.mtn",
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
                    "uid": "C2B1579435866244C01B92A59FB6D740576B",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "RandomPose",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 2,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "00A7E953304D664A083888B9DCDAFA6C594D",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 0,
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
                            "motion": "018-Posing03.mtn",
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
                    "uid": "E7CC7A207226674B9738312377801D4F7858",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "RandomPose",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 3,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "FDDCEB220D3F434FA7584F95ED042EB062F8",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 0,
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
                            "motion": "003-BodyWonder.mtn",
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
                    "uid": "566DB6554C19C34B234B77B3F12F672A94D1",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "RandomPose",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 4,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "5ED2AF029350A64CC13A2573706C38B9834B",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 0,
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
                            "motion": "004-Happy.mtn",
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
                    "uid": "DE5A2B8B890B284C82798B59D04F9A8AD632",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "RandomPose",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 5,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "8538431712B126454C289414A1B34C5DF71C",
                    "indent": 0
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 0,
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
                            "motion": "001-HeadWonder.mtn",
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
                    "uid": "D3921C281612904D2A693A23BD0CFBD5B4DF",
                    "indent": 1
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
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 1,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "59197D36144B284CFB3B88E79E86F9DF8591",
                    "indent": 0
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
                    "uid": "A02CE7832ABFE34EAF8884C3EF9030A6FDD0",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElseIf",
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
                    "uid": "35F1FAF7762906476618627221AE8DD0B97C",
                    "indent": 0
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
                    "uid": "59E106F123AFD34DF62B7C31250857631D62",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "92A9DCF695C774415A7B39760AF7E56BFE97",
                    "indent": 0
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
                            "motion": "000-Idle.mtn",
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
                    "uid": "00EDCE1B870F44480B1B0EB1DEB37CE018E5",
                    "indent": 1
                }
            ],
            "index": "F3301F7544AF6346773B6C966BBC1A1084B6",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "RandomPose",
                    "index": 0,
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
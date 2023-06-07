GS.dataCache['F774FAAE61BC664D6D280F93E3244DA0D5D0'] = {
    "uid": "F774FAAE61BC664D6D280F93E3244DA0D5D0",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "StartGame",
        "type": "data_record",
        "order": 6,
        "category": "commonEvents",
        "id": "F774FAAE61BC664D6D280F93E3244DA0D5D0",
        "isFolder": false,
        "parentId": "C6BF477F10AE084A027A58F3A3D4F77DABBB",
        "data": {
            "name": "StartGame",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": true,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 1
                    },
                    "uid": "E8E23183083B36427618DFB905C760B5AB23",
                    "indent": 0
                },
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 2
                    },
                    "uid": "2E4D781F329613496B9A904227B8FF17754D",
                    "indent": 0
                },
                {
                    "id": "gs.StopMusic",
                    "params": {
                        "layer": 0,
                        "fadeOutDuration": 15,
                        "fieldFlags": {
                            "fadeOutDuration": 0
                        }
                    },
                    "uid": "13236CAB6F41C445A90A3E8651C837D33061",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "name": "LNSM_ME07_Sleep3",
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
                    "uid": "D6120F05200C2945A229FD91696C568B6330",
                    "indent": 0
                },
                {
                    "id": "gs.EraseVideo",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 0,
                        "duration": 60,
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
                    "uid": "A64CCAE13F1AE54A5E1BED01B338C82F1778",
                    "indent": 0
                },
                {
                    "id": "gs.EraseImageMap",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 0,
                        "duration": 60,
                        "waitForCompletion": 1,
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
                            "easing.type": 1,
                            "animation.type": 1
                        }
                    },
                    "uid": "40F45D572B453245338BE7608A3C7ACEAC4D",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 120
                    },
                    "uid": "45E6873631BEF9465A785E516EA55A58F28B",
                    "indent": 0
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
                            "name": "In Game",
                            "scope": 1,
                            "index": 0,
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
                    "uid": "E6C1A8462551B548082ADA9604FA75795D26"
                },
                {
                    "id": "vn.ChangeScene",
                    "params": {
                        "scene": {
                            "uid": "7EADB8199574F64AC7287608970E896272D9",
                            "name": "Debug Screen"
                        },
                        "duration": 20,
                        "erasePictures": 1,
                        "eraseTexts": 0,
                        "eraseVideos": 0,
                        "fieldFlags": {
                            "duration": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "savePrevious": 0
                    },
                    "indent": 0,
                    "uid": "D5B3951F72676442CE6BB2069C2C684E7DA8",
                    "expanded": false
                }
            ],
            "index": "F774FAAE61BC664D6D280F93E3244DA0D5D0",
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
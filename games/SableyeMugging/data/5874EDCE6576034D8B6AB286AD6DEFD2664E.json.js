GS.dataCache['5874EDCE6576034D8B6AB286AD6DEFD2664E'] = {
    "uid": "5874EDCE6576034D8B6AB286AD6DEFD2664E",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "name": "rSound_Slap",
        "type": "data_record",
        "category": "commonEvents",
        "id": "5874EDCE6576034D8B6AB286AD6DEFD2664E",
        "isFolder": false,
        "parentId": "BD451A380FF8514FD098A00854F0B2668D69",
        "data": {
            "name": "rSound_Slap",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "random",
                            "index": 0,
                            "scope": 0,
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
                        "operation": 0,
                        "source": 1,
                        "sourceValue": 0,
                        "sourceRandom": {
                            "start": 1,
                            "end": 5
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
                    "uid": "F27160AF3B59E84A6C9BC503405B3C26A710",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "random",
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
                    "uid": "177224A216E5124BED284E948F285D2493EB",
                    "indent": 0
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "WetSlap01.ogg",
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
                    "uid": "0BD334A942F788461B6A9B5410BB662FCB6A",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "random",
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
                    "uid": "29F39A4D58B5A44A276BBAD28C755FDF799F",
                    "indent": 0
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "WetSlap02.ogg",
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
                    "uid": "DB66D57B8EFF884812580CB702B5B314FE5C",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "random",
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
                    "uid": "4F22D2BB354BC343D3384DD741F9AD20A8DF",
                    "indent": 0
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "WetSlap03.ogg",
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
                    "uid": "0BCF573B73E19345A12AB1A9A0CA365C858E",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "random",
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
                    "uid": "A73F78E24389684A348B04C1EFA90DEECB7A",
                    "indent": 0
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "WetSlap04.ogg",
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
                    "uid": "96B084A95ADBC546B539C0D745B0A883FDC3",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "random",
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
                    "uid": "8429F99E699A0040B119FB923EDF46267B41",
                    "indent": 0
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "WetSlap05.ogg",
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
                    "uid": "C60C37FD09547647061B91515249500C3028",
                    "indent": 1
                }
            ],
            "index": "5874EDCE6576034D8B6AB286AD6DEFD2664E",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "random",
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
        "order": 1,
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
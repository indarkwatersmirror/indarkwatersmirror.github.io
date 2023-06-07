GS.dataCache['2C5A4FD25B6D6048A629E878BFB7574B3EC9'] = {
    "uid": "2C5A4FD25B6D6048A629E878BFB7574B3EC9",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "SoundSwitch",
        "type": "data_record",
        "order": 3,
        "category": "commonEvents",
        "id": "2C5A4FD25B6D6048A629E878BFB7574B3EC9",
        "isFolder": false,
        "parentId": "08CE492641A31744E848FFB15E8BB6C2E73E",
        "data": {
            "name": "SoundSwitch",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/System",
                            "name": "cursor.ogg",
                            "volume": 100,
                            "playbackRate": 150
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
                    "uid": "8F9FB80D8CA0D548FE1A2DE2CAD85E470489",
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
                    "uid": "332CCCCC4C30C84B044AEEA58822ABA3AE07",
                    "indent": 0
                },
                {
                    "id": "vn.SetGameData",
                    "params": {
                        "field": 16,
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0
                    },
                    "uid": "5FAE38253FA721448638498229A70480536C",
                    "indent": 1
                },
                {
                    "id": "gs.StopMusic",
                    "params": {
                        "layer": 2,
                        "fadeOutDuration": 0,
                        "fieldFlags": {
                            "fadeOutDuration": 0
                        }
                    },
                    "uid": "1BAF54114D895146F52A837764F52CED1154",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.StopMusic",
                    "params": {
                        "layer": 0,
                        "fadeOutDuration": 0.06,
                        "fieldFlags": {
                            "fadeOutDuration": 0
                        }
                    },
                    "uid": "2D3D433E9C0BC348A0597606FB5503CF9F35",
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
                            "name": "CaveSoundsStart",
                            "index": 27,
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
                    "uid": "3162D277075D35415A6864E13DA0D9794817",
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
                            "name": "SoundSwitch",
                            "index": 28,
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
                    "uid": "D6AF09288374A644B198BEF252FBC2E6DAEC",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "FFAD33AA52A4284E09885D58858143A592D4",
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
                    "uid": "912FFA2B0D6C26424418B541462EEF868355",
                    "indent": 1
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
                    "uid": "10DA98384963784F050BAC58D1E5C72A0DBF",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "vn.SetGameData",
                    "params": {
                        "field": 16,
                        "numberValue": 100,
                        "textValue": "",
                        "switchValue": 0
                    },
                    "uid": "7BAB0B9F2120124A1B7B0B457F057055D21B",
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
                            "name": "SoundSwitch",
                            "index": 28,
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
                    "uid": "BB6A076F6974F2468C7B71D8675CAEDB0076",
                    "indent": 1
                }
            ],
            "index": "2C5A4FD25B6D6048A629E878BFB7574B3EC9",
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
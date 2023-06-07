GS.dataCache['CB8E569825E3344AD36BEF11D845250524EE'] = {
    "uid": "CB8E569825E3344AD36BEF11D845250524EE",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "name": "MusicSwitch",
        "type": "data_record",
        "category": "commonEvents",
        "id": "CB8E569825E3344AD36BEF11D845250524EE",
        "isFolder": false,
        "data": {
            "name": "MusicSwitch",
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
                    "uid": "332CCCCC4C30C84B044AEEA58822ABA3AE07",
                    "indent": 0
                },
                {
                    "id": "gs.StopMusic",
                    "params": {
                        "layer": 5,
                        "fadeOutDuration": 0.06,
                        "fieldFlags": {
                            "fadeOutDuration": 0
                        }
                    },
                    "uid": "6D0D5A9981BAC445F01A396742E5881D5F37",
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
                            "name": "MusicSwitch",
                            "index": 22,
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
                    "uid": "68F52F9F24A46944876BD4288BAC437D524A",
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
                            "name": "MusicSwitch",
                            "index": 22,
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
            "index": "CB8E569825E3344AD36BEF11D845250524EE",
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
        "order": 4,
        "parentId": "08CE492641A31744E848FFB15E8BB6C2E73E"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
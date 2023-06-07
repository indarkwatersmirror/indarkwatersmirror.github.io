GS.dataCache['F1CF59248E86F441E33BF833B46C33DA9F6C'] = {
    "uid": "F1CF59248E86F441E33BF833B46C33DA9F6C",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "MessageSwitch",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "F1CF59248E86F441E33BF833B46C33DA9F6C",
        "isFolder": false,
        "data": {
            "name": "MessageSwitch",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": true,
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
                    "uid": "3A2A65AB3A0EC745592B0AA4F903DD8DE59F",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "MessageSetting",
                            "index": 24,
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
                    "uid": "82C8FB8B7F664648997920D719A338E371AB",
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
                            "name": "MessageSetting",
                            "index": 24,
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
                    "uid": "818C45144F67D3485E3BF4D1A2AAECE85685",
                    "indent": 1
                },
                {
                    "id": "gs.SetTargetMessage",
                    "params": {
                        "id": "gameMessage_message",
                        "numberDomain": "com.degica.vnm.default",
                        "number": 0,
                        "type": 1,
                        "clear": 1
                    },
                    "uid": "46D5C81D9B58884B745B9A90F41E007FCF2A",
                    "indent": 1
                },
                {
                    "id": "gs.ClearMessage",
                    "params": {
                        "waitForCompletion": 0,
                        "duration": 0,
                        "fieldFlags": {
                            "duration": 0
                        }
                    },
                    "uid": "3BF3D0EC4805E5447C883DE32B70864E6FB6",
                    "indent": 1
                },
                {
                    "id": "gs.SetTargetMessage",
                    "params": {
                        "id": "gameMessage_message",
                        "numberDomain": "com.degica.vnm.default",
                        "number": 1,
                        "type": 1,
                        "clear": 1
                    },
                    "uid": "7EEE98AB53DCE44A2E4AFC44F807D6DC1141",
                    "indent": 1
                },
                {
                    "id": "gs.ClearMessage",
                    "params": {
                        "waitForCompletion": 0,
                        "duration": 0,
                        "fieldFlags": {
                            "duration": 0
                        }
                    },
                    "uid": "B09D5F1D3266B146CB782716483082D63227",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "36AF37CA5886F4466E8A3E92C28EE0263CCA",
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
                            "name": "MessageSetting",
                            "index": 24,
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
                    "uid": "061E485A76B86349D699F2D717674BFC00B5",
                    "indent": 1
                }
            ],
            "index": "F1CF59248E86F441E33BF833B46C33DA9F6C",
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
        "parentId": "08CE492641A31744E848FFB15E8BB6C2E73E"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
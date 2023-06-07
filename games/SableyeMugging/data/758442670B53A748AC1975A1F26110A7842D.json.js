GS.dataCache['758442670B53A748AC1975A1F26110A7842D'] = {
    "uid": "758442670B53A748AC1975A1F26110A7842D",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "PartnerSwitch",
        "type": "data_record",
        "order": 0,
        "category": "commonEvents",
        "id": "758442670B53A748AC1975A1F26110A7842D",
        "isFolder": false,
        "data": {
            "name": "PartnerSwitch",
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
                    "uid": "097CACB0133AC6433A7B5844C8432EC9E8F2",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "PartnerSwitch",
                            "index": 14,
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
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "param": {
                            "name": "PartnerType",
                            "value": 2
                        },
                        "duration": 0.06,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        },
                        "waitForCompletion": 1
                    },
                    "uid": "9BECF9757AB69547DB698FF342AB4867F973",
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
                            "name": "PartnerSwitch",
                            "index": 14,
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
                    "uid": "636270F06BB5C74A416859B4A331AE6FE6C1",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "36AF37CA5886F4466E8A3E92C28EE0263CCA",
                    "indent": 0
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "param": {
                            "name": "PartnerType",
                            "value": 0
                        },
                        "duration": 0.06,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        },
                        "waitForCompletion": 1
                    },
                    "uid": "2ED31B214B4C3546D35B05C6987AE94F2F9E",
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
                            "name": "PartnerSwitch",
                            "index": 14,
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
                    "uid": "6FF0E31006681742D8390180F20F514C4D11",
                    "indent": 1
                }
            ],
            "index": "758442670B53A748AC1975A1F26110A7842D",
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
            ],
            "conditionSwitch": {
                "name": "In Game",
                "scope": 1,
                "index": 0,
                "changed": true,
                "domain": "com.degica.vnm.default"
            }
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
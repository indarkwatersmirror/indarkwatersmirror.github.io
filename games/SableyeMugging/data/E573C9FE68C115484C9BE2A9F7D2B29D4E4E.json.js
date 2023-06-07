GS.dataCache['E573C9FE68C115484C9BE2A9F7D2B29D4E4E'] = {
    "uid": "E573C9FE68C115484C9BE2A9F7D2B29D4E4E",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Rubbing",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "E573C9FE68C115484C9BE2A9F7D2B29D4E4E",
        "isFolder": false,
        "data": {
            "name": "Rubbing",
            "startCondition": 1,
            "conditionEnabled": true,
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
                            "name": "LewdRubbingBonus",
                            "index": 14,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                        "source": 0,
                        "sourceValue": 0,
                        "sourceRandom": {
                            "start": 1,
                            "end": 1
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
                    "uid": "C135A01F12C1D3473F2A867900CFB2C639FB",
                    "indent": 0
                },
                {
                    "id": "gs.Script",
                    "params": {
                        "script": "GameManager.variableStore.numbers[7] = GameManager.variableStore.numbers[7] + Math.round(2 + GameManager.variableStore.numbers[7]/4);"
                    },
                    "uid": "75CA667D74C4274BFF185FB5B69CC0135680",
                    "indent": 0,
                    "expanded": true
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "PartnerPushLevel",
                            "index": 7,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 100,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "2C9A4BC24A5C154442199013EA19169D5163",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PartnerPushLevel",
                            "index": 7,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                        "source": 0,
                        "sourceValue": 100,
                        "sourceRandom": {
                            "start": 0,
                            "end": 0
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
                    "uid": "E23E17CC4D828648067B91B57996BD8E862D",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "PartnerPushLevel",
                            "index": 7,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 93,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "4D53284380C3F746D53BC7B7B2905E5DB729",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "SlapSound",
                            "index": 26,
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
                    "uid": "CE6CF74E2F41D248D54BA65187241EAC3184",
                    "indent": 1
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "5874EDCE6576034D8B6AB286AD6DEFD2664E",
                        "parameters": {
                            "values": []
                        }
                    },
                    "uid": "83AAE41E0B8FF44B7C09C06374EDF9A7165B",
                    "indent": 2
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
                            "name": "SlapSound",
                            "index": 26,
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
                    "uid": "9A11237E58BE9449372AAF4510C720447F7E",
                    "indent": 2
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "param": {
                            "name": "PartnerY",
                            "value": {
                                "name": "PartnerPushLevel",
                                "index": 7,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            }
                        },
                        "duration": 1.7999999999999998,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "D195F66185DB6644B35A26619A8694D8A687",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 1.2
                    },
                    "uid": "DDDDFCED65206341754A60D57E7BA573B62C",
                    "indent": 0
                }
            ],
            "index": "E573C9FE68C115484C9BE2A9F7D2B29D4E4E",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "conditionSwitch": {
                "name": "Rubbing",
                "index": 15,
                "scope": 1,
                "domain": "com.degica.vnm.default",
                "changed": true
            },
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
            "listVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "localizableStrings": {},
        "parentId": "381E59B913CDF442C62BE0C4275030B460F1"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
GS.dataCache['C2A9FCCE2560A142EF79FA642B356E89140E'] = {
    "uid": "C2A9FCCE2560A142EF79FA642B356E89140E",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Penetration",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "C2A9FCCE2560A142EF79FA642B356E89140E",
        "isFolder": false,
        "data": {
            "name": "Penetration",
            "startCondition": 1,
            "conditionEnabled": true,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
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
                            "name": "PeneStarted",
                            "index": 18,
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
                    "uid": "6EE8C34D0779E94F949A3AB6A49461CCB4EF",
                    "indent": 0
                },
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
                        "script": "GameManager.variableStore.numbers[7] = GameManager.variableStore.numbers[7] + Math.round(3 + GameManager.variableStore.numbers[7]/7);"
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
                        "numberValue": 29,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "933FDC6487D189410098CF41136CED5B1953",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "PenetratingActive",
                            "index": 17,
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
                    "uid": "3DF2ECEA4980614E914A79D62E0DDD56B428",
                    "indent": 1
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "E15C3CFD00F5B847D58B2709D6B74D2B9FAC",
                        "parameters": {
                            "values": []
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "05476B285553144B0B6B9D162FE9CCC4BDC0",
                    "indent": 2
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "A89DC4EA7C66224BC158EF96EF9EE5238026",
                        "parameters": {
                            "values": []
                        }
                    },
                    "uid": "3EA5C63E7858E24CA27859E36A188B25007A",
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
                            "name": "PenetratingActive",
                            "index": 17,
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
                    "uid": "E71AA43E1D46D24D3C3BDFF139DCD8FF18AA",
                    "indent": 2
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
                        "numberValue": {
                            "name": "PushLimit",
                            "index": 16,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
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
                        "sourceValue": {
                            "name": "PushLimit",
                            "index": 16,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
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
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "",
                            "index": 17,
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
                        "operation": 1,
                        "source": 0,
                        "sourceValue": 1,
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
                    "uid": "68A7EDCB529D144CE208A39264898C3CCE70",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PushLimit",
                            "index": 16,
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
                        "operation": 1,
                        "source": 1,
                        "sourceValue": 1,
                        "sourceRandom": {
                            "start": 0,
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
                    "uid": "7170F86F304F544363083FE5AB5AA8343865",
                    "indent": 1
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonFill",
                            "value": {
                                "name": "PartnerPushLevel",
                                "index": 7,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            }
                        },
                        "duration": 5.3999999999999995,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "F103C9D618F1C54117791336D93DBAD8BEC2",
                    "indent": 0,
                    "expanded": false
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
                        "numberValue": 80,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "F50FD15A96A9F44D1B0BC4857D7CD1E7087D",
                    "indent": 0
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "param": {
                            "name": "PartnerY",
                            "value": 100
                        },
                        "duration": 6,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "B4C247A6553CA24760998F534E48482892AE",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "vn.CallScene",
                    "params": {
                        "scene": {
                            "uid": "45C6EE4A45AF5245902831B24667A076B145",
                            "name": "Game_Stage04"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "CD0FF3E3338BA34705296DE3F157AA2E9B91",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "B8283D822119934C59881C8670D58131C138",
                    "indent": 0
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
                        "duration": 6,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "D195F66185DB6644B35A26619A8694D8A687",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 5.3999999999999995
                    },
                    "uid": "DDDDFCED65206341754A60D57E7BA573B62C",
                    "indent": 0
                }
            ],
            "index": "C2A9FCCE2560A142EF79FA642B356E89140E",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "conditionSwitch": {
                "name": "Penetrating",
                "index": 16,
                "scope": 1,
                "changed": true,
                "domain": "com.degica.vnm.default"
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
        "parentId": "46B4DEAD168F984256690CB81CEE502FADAF"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
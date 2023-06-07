GS.dataCache['98E004C02D02B1406F0A8072FF0A3E60F75E'] = {
    "uid": "98E004C02D02B1406F0A8072FF0A3E60F75E",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "name": "rSound_Touch",
        "type": "data_record",
        "category": "commonEvents",
        "id": "98E004C02D02B1406F0A8072FF0A3E60F75E",
        "isFolder": false,
        "parentId": "BD451A380FF8514FD098A00854F0B2668D69",
        "data": {
            "name": "rSound_Touch",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "Direction",
                    "numberList": {
                        "entries": []
                    },
                    "type": 2,
                    "booleanVariable": {
                        "name": "Direction",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberVariable": {
                        "name": "Confirmation Result",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValueType": "number"
                }
            ],
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
                            "start": 0,
                            "end": 9
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
                    "uid": "1D720D218804814D68192443076E468573A1",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Direction",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "64FB5B6C3827F6432A3A8919324999156862",
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
                    "uid": "8A895C4D69F05840055A36579D4C81562A80",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Swash01.ogg",
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
                    "uid": "D696D70D99F08846426B87B03A51C61AA682",
                    "indent": 2
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
                    "uid": "3B25B9EA539C9146372BA6375A069E7F1218",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Swash02.ogg",
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
                    "uid": "8C2A0A3768BFA04F8888F3F5DABF78D29F2E",
                    "indent": 2
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
                    "uid": "A560F7DD1F82884C348A65867E82D090B8F6",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Swash03.ogg",
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
                    "uid": "764627682080984DDB4A73348D9DB7E8632D",
                    "indent": 2
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
                    "uid": "5FD48DC05CEE4447A9194153D48DF48F610B",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Swash04.ogg",
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
                    "uid": "237923C82A83F647C17B3936A7625DB7AE2F",
                    "indent": 2
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
                    "uid": "E5AF11485C75B94CE77862481A7F84E178D3",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Swash05.ogg",
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
                    "uid": "E7B93A508F39B945942AA37514CA9133BC04",
                    "indent": 2
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "00EB19A528BEA949BF28C03181720C3012BB",
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
                    "uid": "54CD469B957A274B030A1701BAF5BFFFB716",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Swish01.ogg",
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
                    "uid": "29D3F22913B9194EB279D9C8BBFDF1331240",
                    "indent": 2
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
                    "uid": "E5556E0F81B98445740BDC361047FA49A2D8",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Swish02.ogg",
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
                    "uid": "12C9C6A84AF6194428499CA2078ABEB70789",
                    "indent": 2
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
                    "uid": "29042A02839B104D9F1960656FD648FD2855",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Swish03.ogg",
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
                    "uid": "D625B228485D424A846A56C86D986AD5B2CB",
                    "indent": 2
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
                    "uid": "6B29A90C2A99A14B3838A452E66FD6D48CA8",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Swish04.ogg",
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
                    "uid": "B7E52C9911C1A6493389D7E60DCE27BF2E28",
                    "indent": 2
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
                    "uid": "98724B8F1C8B6848BD2B47585DF98107E47A",
                    "indent": 1
                },
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Swish05.ogg",
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
                    "uid": "F5CEECED5C202642C81B05A0E29047691B6E",
                    "indent": 2
                }
            ],
            "index": "98E004C02D02B1406F0A8072FF0A3E60F75E",
            "booleanVariables": [
                {
                    "name": "Direction",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
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
            ],
            "listVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "order": 0,
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
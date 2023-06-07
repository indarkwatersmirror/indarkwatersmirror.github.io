GS.dataCache['939061CF5D8F2448A11A6B23D27DF09983B4'] = {
    "uid": "939061CF5D8F2448A11A6B23D27DF09983B4",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Hide UI",
        "type": "data_record",
        "order": 11,
        "category": "commonEvents",
        "id": "939061CF5D8F2448A11A6B23D27DF09983B4",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Hide UI",
            "startCondition": 0,
            "conditionEnabled": true,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Backlog Opened",
                            "index": 1,
                            "scope": 1,
                            "changed": true,
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
                    "indent": 0,
                    "uid": "F47B0730382A2841861B0224C96D8BB21A41"
                },
                {
                    "id": "gs.SetTargetMessage",
                    "params": {
                        "id": "gameMessage_message",
                        "numberDomain": "com.degica.vnm.default",
                        "number": 0,
                        "type": 1,
                        "clear": 0
                    },
                    "indent": 1,
                    "uid": "E3AAB928668A21438259BE5942854FF26EE5"
                },
                {
                    "id": "gs.GetInputData",
                    "params": {
                        "field": 132,
                        "state": 0,
                        "targetVariable": {
                            "name": "H Pressed",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "007B2B460EB77742E23875E6C8EAC515253F"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "H Pressed",
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
                    "indent": 1,
                    "uid": "5FFAA8962A7DC74406287D81D92F5C4599B9"
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
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "9BBF39816B9AD044EE682984B4925AA40CFA"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 6,
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 4,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2,
                    "uid": "3FE03E971D8D2045CC58CF45A2B4D0B633CA"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 99,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2,
                    "uid": "10DBCAEC519D0544A6092A436C6D3628741D"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 101,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2,
                    "uid": "141CCF6621DF0740FE384BC5C86FD07A0114"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 102,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2,
                    "uid": "2F182CA78DEC5648A48848C4E44760367EEC"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2,
                    "uid": "8EFAA13389FB3140857BBCC319AE1A5DF30C"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 300,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2,
                    "uid": "C698809878937143231AE0D194818D7342D4"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Visible",
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
                    "indent": 1,
                    "uid": "2BF234F74F9B534C6C6BF282008ECF05FEFC"
                },
                {
                    "id": "gs.GetInputData",
                    "params": {
                        "field": 11,
                        "state": 0,
                        "targetVariable": {
                            "name": "Mouse Pressed",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "D659251356A0124C8A6A1B2200F03B1E999B"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Mouse Pressed",
                            "index": 1,
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
                    "indent": 2,
                    "uid": "D2C6AF8E0D54444AE36B0943CA279B3AF210"
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
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 3,
                    "uid": "CCEECDE502F6D84D3C5847290287649C0DE5"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 99,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "F7B5F0EF856FC74E6D3A57F8E0AFF3D9654C"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 101,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "8F90853D1CFAE84C2E888FF1BD579D4AC7CE"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 102,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "0AEE5DF8676CB142BA2B9BF3CAA2800BDCA7"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 300,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "69BE988C1C44514D4169FCA1FEBB01DB7D72"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "F328F9F88977F94B4E8BEBE76315C34FDD7B"
                },
                {
                    "id": "vn.MessageVisibility",
                    "params": {
                        "duration": 0,
                        "waitForCompletion": true,
                        "visible": 1,
                        "animation": {
                            "type": 1,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "duration": 0
                        }
                    },
                    "indent": 3,
                    "uid": "E6160714247EE54D5F3A88040146F2570799"
                }
            ],
            "index": "939061CF5D8F2448A11A6B23D27DF09983B4",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
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
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
GS.dataCache['4CF1648F02E6354B2A5B21F1B8E58E7B517B'] = {
    "uid": "4CF1648F02E6354B2A5B21F1B8E58E7B517B",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "PushingReverse",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "4CF1648F02E6354B2A5B21F1B8E58E7B517B",
        "isFolder": false,
        "data": {
            "name": "PushingReverse",
            "startCondition": 1,
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
                            "name": "Pushing",
                            "index": 20,
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
                    "uid": "020F563D6182054A664BBAF120E5CD8F7D62",
                    "indent": 0
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
                        "numberValue": 1,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "877FD4CE7A7ED44C3B48834069BC3556EC9C",
                    "indent": 1
                },
                {
                    "id": "gs.Script",
                    "params": {
                        "script": "GameManager.variableStore.numbers[7] = GameManager.variableStore.numbers[7] - Math.round(5 + GameManager.variableStore.numbers[7]/4);"
                    },
                    "uid": "83D268A5606725480A392138CD899522EE46",
                    "indent": 2,
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
                        "numberValue": 50,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 4,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "D8D9B4463E87E64991197676A2825E63993E",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "PushActive",
                            "index": 21,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 90,
                        "textValue": "",
                        "switchValue": 1,
                        "valueType": 1,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "7AD2AA5879939746253AFC93E10518DED4E4",
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
                            "name": "PushActive",
                            "index": 21,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "9FD989C1113E474A72289122CE8ECA87C625",
                    "indent": 3
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
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "8057EAF46109364C332962811C13914EDB17",
                    "indent": 1
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
                        "sourceValue": 0,
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
                    "uid": "CCF01B432EA9584EA38B3150D21741BA4550",
                    "indent": 2
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
                        "operation": 2,
                        "source": 0,
                        "sourceValue": 1,
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
                    "uid": "63299CF21AABA24EBF599423EBFAFCE0C0BF",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "LewdRubbingBonus",
                            "index": 14,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": -10,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "94222F1F159DE34EFD3957C828B1A80C0EFB",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "FinalScene",
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
                        "operation": 2,
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
                    "uid": "515D15839D297648602B9088D8CA9DA52CB4",
                    "indent": 3
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
                    "uid": "5D86F0FA74893944243AF7B7FE1B85301C36",
                    "indent": 3
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Almost",
                            "index": 23,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 5,
                        "textValue": "",
                        "switchValue": 1,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "A82C080743E4444EBC3887343F1FEB2DDA2C",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "FinalScene",
                            "index": 17,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 1,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "8CB528CA6A71774C6B1B6AD65C85D569682E",
                    "indent": 3
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "SecretEnding",
                            "index": 8,
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
                    "uid": "3D30C63F84066147BE3949D0CF60C6EBFC7A",
                    "indent": 4
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "33675D88103D2842BE7B97704DCC7BCBF4E4",
                        "parameters": {
                            "values": []
                        }
                    },
                    "uid": "B075825E21D2004EB0193EC9078502ADCC43",
                    "indent": 5
                },
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 27
                    },
                    "uid": "1B8601AF8276D342D76A97B67F21AA484731",
                    "indent": 5
                },
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 0
                    },
                    "uid": "2F22FE1B3B7E484726795398BF013B6054BE",
                    "indent": 5
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonStage",
                            "value": 4
                        },
                        "duration": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "CBAD412B20B5C84D393A1245D161B0759691",
                    "indent": 5,
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
                            "name": "Pushing",
                            "index": 20,
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
                    "uid": "9FE7A2F33EBAD545F98AAA07A0E0BD6F3C48",
                    "indent": 5
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
                            "name": "SecretEnding",
                            "index": 8,
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
                    "uid": "FEB1067A2310C64FFA9A6BA8ABF66EEF45B7",
                    "indent": 5
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "SecretEnding",
                            "index": 8,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 1,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "12CE22BE7FC13240897B4CE552B49C32D4F9",
                    "indent": 1
                },
                {
                    "id": "gs.Script",
                    "params": {
                        "script": "GameManager.variableStore.numbers[17] = GameManager.variableStore.numbers[17] + Math.round(2 + GameManager.variableStore.numbers[17]/33);"
                    },
                    "uid": "76DA6EC16A8930437F388BF40B4548E0A122",
                    "indent": 2,
                    "expanded": true
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "FinalScene",
                            "index": 17,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 100,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "3BB3784A2291944FBB3ACEC24908769FD78B",
                    "indent": 2
                },
                {
                    "id": "vn.CallScene",
                    "params": {
                        "scene": {
                            "uid": "4AF4CEAF1C1D5748150BE7C42DA423810220",
                            "name": "Game_Ending02"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "09377BF75E208146C3293B0431BDCD055F20",
                    "indent": 3
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 24
                    },
                    "uid": "E57C148260C11444E55AADE1E2FBAF47082C",
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
                        "duration": 3,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "9D13EA788DEA24487478192315DBAA9280B3",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonFill",
                            "value": {
                                "name": "FinalScene",
                                "index": 17,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            }
                        },
                        "duration": 12,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        },
                        "waitForCompletion": 0
                    },
                    "uid": "51DEF1CA4D4B28437F2B82F8E5DABAEFFA47",
                    "indent": 1,
                    "expanded": false
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 2.4
                    },
                    "uid": "9853C1836C84B940461A9BC680102DD02E95",
                    "indent": 0
                }
            ],
            "index": "4CF1648F02E6354B2A5B21F1B8E58E7B517B",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "conditionSwitch": {
                "name": "SceneStage4",
                "index": 19,
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
        "parentId": "E12C9FFC293308481F1AAAD269FF7C80EEA6"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
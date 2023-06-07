GS.dataCache['188C11A5971AF4424F0892E22669A4A31928'] = {
    "uid": "188C11A5971AF4424F0892E22669A4A31928",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "name": "DeleteMessageBoxes",
        "type": "data_record",
        "category": "commonEvents",
        "id": "188C11A5971AF4424F0892E22669A4A31928",
        "isFolder": false,
        "parentId": "C29E979A8AABD845765823D824FA615C3553",
        "data": {
            "name": "DeleteMessageBoxes",
            "startCondition": 1,
            "conditionEnabled": false,
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
                            "name": "DeleteMessage_00",
                            "index": 20,
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
                    "uid": "37B364C11586A048C389C4C17031BC79F70C",
                    "indent": 0
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
                    "uid": "180D3AEE419A514DC31A9E812DBF30F038E6",
                    "indent": 1
                },
                {
                    "id": "gs.ClearMessage",
                    "params": {
                        "waitForCompletion": 1,
                        "duration": 15,
                        "fieldFlags": {
                            "duration": 0
                        }
                    },
                    "uid": "5255E9846B69B645191BAD52E1A9C726A4F1",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "DeleteMessage_01",
                            "index": 21,
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
                    "uid": "E9C71A707F0BD3492709DA101C204A27A593",
                    "indent": 0
                },
                {
                    "id": "gs.SetTargetMessage",
                    "params": {
                        "id": "gameMessage_message",
                        "numberDomain": "com.degica.vnm.default",
                        "number": 1,
                        "type": 1,
                        "clear": 0
                    },
                    "uid": "06D17CD28A43014D639A88031F1C85417C73",
                    "indent": 1
                },
                {
                    "id": "gs.ClearMessage",
                    "params": {
                        "waitForCompletion": 1,
                        "duration": 15,
                        "fieldFlags": {
                            "duration": 0
                        }
                    },
                    "uid": "ECBF4400602E32401578B1A7BC482421B2A5",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "DeleteMessage_00",
                            "index": 20,
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
                    "uid": "FC6667EB364373449B492DB34B1E89842F4D",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "DeleteMessage_01",
                            "index": 21,
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
                    "uid": "633BEB094C794843FD8AF594DA3A46C380A5",
                    "indent": 0
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 18
                    },
                    "uid": "4118670735B15843B83A7E434DA6F9314FF3",
                    "indent": 0
                }
            ],
            "index": "188C11A5971AF4424F0892E22669A4A31928",
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
        "order": 2,
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
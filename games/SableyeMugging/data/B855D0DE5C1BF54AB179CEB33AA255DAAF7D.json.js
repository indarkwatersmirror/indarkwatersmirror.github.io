GS.dataCache['B855D0DE5C1BF54AB179CEB33AA255DAAF7D'] = {
    "uid": "B855D0DE5C1BF54AB179CEB33AA255DAAF7D",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "UnlockSecretEnding",
        "type": "data_record",
        "order": 4,
        "category": "commonEvents",
        "id": "B855D0DE5C1BF54AB179CEB33AA255DAAF7D",
        "isFolder": false,
        "parentId": "E12C9FFC293308481F1AAAD269FF7C80EEA6",
        "data": {
            "name": "UnlockSecretEnding",
            "startCondition": 0,
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
                    "uid": "36648B2F3373C84C16287AA30107E3114AFC",
                    "indent": 0
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
                    "uid": "C553582A6722F5401B4B7245DDAC20CDC623",
                    "indent": 1
                },
                {
                    "id": "gs.MessageSettings",
                    "params": {
                        "useCharacterColor": 0,
                        "paragraphSpacing": 0,
                        "backlog": 0,
                        "bold": 1,
                        "italic": 1,
                        "linePadding": 6,
                        "lineHeight": 0,
                        "lineSpacing": -5,
                        "smallCaps": 0,
                        "underline": 0,
                        "strikeThrough": 0,
                        "autoErase": 0,
                        "waitAtEnd": 0,
                        "font": "Comic Sans MS",
                        "size": 55,
                        "outline": 0,
                        "outlineSize": 4,
                        "shadow": 0,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "outlineColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "fieldFlags": {
                            "autoErase": 0,
                            "waitAtEnd": 0,
                            "backlog": 0,
                            "font": 0,
                            "size": 0,
                            "color": 1,
                            "useCharacterColor": 1,
                            "bold": 0,
                            "italic": 0,
                            "smallCaps": 1,
                            "underline": 1,
                            "strikeThrough": 1,
                            "lineHeight": 1,
                            "lineSpacing": 0,
                            "linePadding": 0,
                            "paragraphSpacing": 1,
                            "outline": 0,
                            "outlineColor": 1,
                            "outlineSize": 1,
                            "shadow": 0,
                            "shadowColor": 1,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1
                        }
                    },
                    "uid": "E24EA09D1704964587596FB8EE9CDC85EAE6",
                    "indent": 1,
                    "expanded": false
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 20,
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
                    "uid": "72761CB81C91D84360298A667F20BC6F51A5",
                    "indent": 1
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 0,
                        "duration": 15,
                        "expressionId": null,
                        "custom": {
                            "object": {
                                "x": 0,
                                "y": 0,
                                "size": {
                                    "width": 300,
                                    "height": 100
                                }
                            }
                        },
                        "message": {
                            "lcId": null,
                            "defaultText": "I'm.. almost.. there..!!"
                        },
                        "position": 0,
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "partial": 0,
                        "fieldFlags": {
                            "duration": 1
                        },
                        "expressions": [],
                        "animations": []
                    },
                    "uid": "E33E65E05A6B52490C3925C828353CCB5BF2",
                    "indent": 1,
                    "expanded": true
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "B699D2976D3AA9433B5BCA182968FB524AA3",
                    "indent": 0
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
                    "uid": "A82DFB0995C4034C088AE41285337C7C30EA",
                    "indent": 1
                },
                {
                    "id": "gs.MessageSettings",
                    "params": {
                        "useCharacterColor": 0,
                        "paragraphSpacing": 0,
                        "backlog": 0,
                        "bold": 1,
                        "italic": 1,
                        "linePadding": 6,
                        "lineHeight": 0,
                        "lineSpacing": -5,
                        "smallCaps": 0,
                        "underline": 0,
                        "strikeThrough": 0,
                        "autoErase": 0,
                        "waitAtEnd": 0,
                        "font": "Comic Sans MS",
                        "size": 55,
                        "outline": 0,
                        "outlineSize": 4,
                        "shadow": 0,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1,
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "outlineColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "fieldFlags": {
                            "autoErase": 0,
                            "waitAtEnd": 0,
                            "backlog": 0,
                            "font": 0,
                            "size": 0,
                            "color": 1,
                            "useCharacterColor": 1,
                            "bold": 0,
                            "italic": 0,
                            "smallCaps": 1,
                            "underline": 1,
                            "strikeThrough": 1,
                            "lineHeight": 1,
                            "lineSpacing": 0,
                            "linePadding": 0,
                            "paragraphSpacing": 1,
                            "outline": 0,
                            "outlineColor": 1,
                            "outlineSize": 1,
                            "shadow": 0,
                            "shadowColor": 1,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1
                        }
                    },
                    "uid": "A3A6B5C36B4A364F588A8E245ADFA0058630",
                    "indent": 1,
                    "expanded": false
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 20,
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
                    "uid": "BF28A1FE1F6FB34B18581DE02FB72AADFC34",
                    "indent": 1
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 0,
                        "duration": 15,
                        "expressionId": null,
                        "custom": {
                            "object": {
                                "x": 0,
                                "y": 0,
                                "size": {
                                    "width": 300,
                                    "height": 100
                                }
                            }
                        },
                        "message": {
                            "lcId": null,
                            "defaultText": "!!!"
                        },
                        "position": 0,
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "partial": 0,
                        "fieldFlags": {
                            "duration": 1
                        },
                        "expressions": [],
                        "animations": []
                    },
                    "uid": "E7724BF326EB424A9559B716B00C2C81D3FD",
                    "indent": 1,
                    "expanded": true
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
                    "uid": "D6C73F47639628418E681D14872349E7FE79",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "IdleTextStage",
                            "index": 12,
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
                        "sourceValue": -3,
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
                    "uid": "04BAD4895065D24C102BDF77A5E40C23BE7F",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ActionTextStage",
                            "index": 13,
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
                        "sourceValue": -3,
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
                    "uid": "DE9093557234094925482BD831708B20F801",
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
                            "name": "Almost",
                            "index": 23,
                            "scope": 1,
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
                    "uid": "819F9FF480F4A24D3F698244061784F2C71B",
                    "indent": 0
                }
            ],
            "index": "B855D0DE5C1BF54AB179CEB33AA255DAAF7D",
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
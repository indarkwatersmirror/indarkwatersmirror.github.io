GS.dataCache['145C55426531D34D058BD7B03EA671953659'] = {
    "uid": "145C55426531D34D058BD7B03EA671953659",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "AutoText_Stage02",
        "type": "data_record",
        "order": 3,
        "category": "commonEvents",
        "id": "145C55426531D34D058BD7B03EA671953659",
        "isFolder": false,
        "data": {
            "name": "AutoText_Stage02",
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
                    "uid": "7D0D136127F0A147F59ABA816A0DE10E0BC9",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "WetMax",
                            "index": 5,
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
                    "uid": "9943D9F9749B864F4118C3D77A5E152F4B97",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "MessageStage0",
                            "index": 12,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                    "uid": "E23976DE3BCBB345A07BC39355A3FA6E7685",
                    "indent": 2
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
                    "uid": "6134695249BEB1446C59E2222005694C2163",
                    "indent": 3
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
                    "uid": "A3F20FE05A75E6460588F60642D29C173317",
                    "indent": 3,
                    "expanded": false
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
                    "uid": "DCAF4D5F60E8A24B43695C73EF59DD1F03E2",
                    "indent": 3
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 1,
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
                            "defaultText": "Y-YOU WANT TO B-BREED?!"
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
                    "uid": "1498684917B242400389CE18EBC70CD054AE",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "43D4D3F12583C247396883C703936F9FC49E",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage0",
                            "index": 12,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 12,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "06BE92E21EEBD24CC17B6D2483038D0D2E85",
                    "indent": 2
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
                    "uid": "FA225BBB239A494A9F2A7405AC55C0D14857",
                    "indent": 3
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
                    "uid": "799DF9F2325E74431849714463BA44B4D7FB",
                    "indent": 3,
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
                    "uid": "754C4C5C6C1F7641194BAB690A36895C9163",
                    "indent": 3
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 1,
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
                            "defaultText": "A-Are you some kind of pervert running around breeding strangers?!"
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
                    "uid": "76F155AF4DD3B64CDB8B2E57481EC0162FA2",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "6F1C609C222BC74A80089E024EA7D1534133",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage0",
                            "index": 12,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 22,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "AE85874955844043066BBA17DBFD505540A1",
                    "indent": 2
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
                    "uid": "37C208F008395744C7284B56D4FB3286B30D",
                    "indent": 3
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
                    "uid": "914B268777E0C1464B086E6820D90E7BC106",
                    "indent": 3,
                    "expanded": false
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
                    "uid": "227873834ACFE648896876973E8938E44917",
                    "indent": 3
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 1,
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
                            "defaultText": "I-I mean-"
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
                    "uid": "4AE35AD611CFF14CE7780A770B31622AD670",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "FA7F041D66824741496B77C1B925DBC85648",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage0",
                            "index": 12,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 30,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "0B6310A317105740FD5BAEA6BE1ED8EEED77",
                    "indent": 2
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
                    "uid": "E81CB0F68308C24ABE8845557A81D0776BDD",
                    "indent": 3
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
                    "uid": "22EFDCDD45D9624C14194BD5736CAD96D232",
                    "indent": 3,
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
                    "uid": "AFC768EF742D2246135AFCC99811CA973922",
                    "indent": 3
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 1,
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
                            "defaultText": "It's not like I've got anything against you or anything..."
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
                    "uid": "4D555A900831904A167901F625EF83566E19",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "FD01083355AE034A9B680565C587A4BF04BD",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage0",
                            "index": 12,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 35,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "38D0FCA76BA6384DF8882342C8EE629ADCE5",
                    "indent": 2
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
                    "uid": "1BDC112A24C093402C1B4BB672C4E503798F",
                    "indent": 3
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
                    "uid": "F2C85E844C614141E42B7082187FB20E1041",
                    "indent": 3,
                    "expanded": false
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
                    "uid": "9BF006572D993540896AF8252106350860A1",
                    "indent": 3
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 1,
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
                            "defaultText": "You might even be my t-type, kinda..."
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
                    "uid": "BE76C28D56FC174C7D68FD35284AF0ECCA45",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "BF6936516B8C84456F5A857793233773B655",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage0",
                            "index": 12,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 40,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "F6D0FEBA822F484DC70813B36348003D75FF",
                    "indent": 2
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
                    "uid": "32164DC13E5DE1452C4907F07CA18BA967E6",
                    "indent": 3
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
                    "uid": "8209A39937FFE7482C8850698D998510BD28",
                    "indent": 3,
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
                    "uid": "EA03228C2678A3408F6AB074E668316805FC",
                    "indent": 3
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 1,
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
                            "defaultText": "But dont think you'll get out of giving me my reward!"
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
                    "uid": "6BAC3BF51554114D8F587663945262FFBC52",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "B7738B61508AA645D4792BA2B8EC452C42E5",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "C8BF458A8377A74EAB18FD7127D42511FF9E",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "MessageStage0",
                            "index": 12,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                    "uid": "705685D28C2AD243726908035074419061E3",
                    "indent": 2
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
                    "uid": "486868FD787D044A694AD8B92CFA686D3E00",
                    "indent": 3
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
                    "uid": "262BD5AE7F13A44DA728D461217FF83A6D56",
                    "indent": 3,
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
                    "uid": "3526C0791337B7488F186C948351E311EDEC",
                    "indent": 3
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 1,
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
                            "defaultText": "You- You're really serious about this..?"
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
                    "uid": "251AF049974CF34DA5593EF1A66E881CDB89",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "E4A9CBF22923794BB08B16C968061094335E",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage0",
                            "index": 12,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 8,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "BED1BE267CFA214B93484F34EAF258CDE90F",
                    "indent": 2
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
                    "uid": "21BB39B0267B434EC63AE1693CEB26D29DF8",
                    "indent": 3
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
                    "uid": "CD5070B226B3724C1579E602D1714D1E1F10",
                    "indent": 3,
                    "expanded": false
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
                    "uid": "6B12BB15267DE84B17798E4432E798827B93",
                    "indent": 3
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 1,
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
                            "defaultText": "I- I guess I don't mind if it's just this once..."
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
                    "uid": "6DDD4F360D3A75494B5BBC7720F8D832104F",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "055F9EC44F89D8410A69CCC409122C3C7BDC",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage0",
                            "index": 12,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 13,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "126E9C803C7B064A7A5A7B66E8D270ED2421",
                    "indent": 2
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
                    "uid": "1BC799933E6B534C014AE2190EDA0EE73C9F",
                    "indent": 3
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
                    "uid": "F48DFB5604EFE84BC1697288B361BB82AF84",
                    "indent": 3,
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
                    "uid": "AE0E3A928ABC2347427BDD41E7F7C03ECE52",
                    "indent": 3
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 1,
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
                            "defaultText": "It can get a little lonely down here..."
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
                    "uid": "FE9F43F2704F8740D74B1FE8D663942FF9BD",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "AC3CDCDB265252490C3BB4260AFB0AEE65ED",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage0",
                            "index": 12,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 18,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "6B6D41B59C36084CCC489700E70987D8D578",
                    "indent": 2
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
                    "uid": "8B5FCDF0497B544B897A5CC5978A07468004",
                    "indent": 3
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
                        "size": 40,
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
                    "uid": "C877120D7D7BF34714580383F8659C2980A3",
                    "indent": 3,
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
                    "uid": "4B7F9BC6600EC148F319E855FEBDEA9DE1E2",
                    "indent": 3
                },
                {
                    "id": "gs.ShowMessage",
                    "params": {
                        "waitForCompletion": 1,
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
                            "defaultText": "It wouldn't hurt to get a little reward for defending my treasure every once in a while... Right?"
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
                    "uid": "61AB544F3E543843FB8B3BD2E8DE068CA0E3",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "4536104B9A4FB249D2795EC768B864CA363E",
                    "indent": 3
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "MessageStage0",
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
                    "uid": "44FCCF9768D6E24D1269B3B59C0F88A67152",
                    "indent": 1
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 30
                    },
                    "uid": "CA5F3B9F8826D34F587BF29367750959199C",
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
                            "name": "AutoModeText",
                            "index": 30,
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
                    "uid": "74C4F26F130F064C5028A3B1C296E68E7818",
                    "indent": 0
                }
            ],
            "index": "145C55426531D34D058BD7B03EA671953659",
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
                "name": "SceneStage2",
                "index": 11,
                "scope": 1,
                "domain": "com.degica.vnm.default",
                "changed": true
            }
        },
        "localizableStrings": {},
        "parentId": "C41CE43B8658674A732BD897CC92A6F568F8"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
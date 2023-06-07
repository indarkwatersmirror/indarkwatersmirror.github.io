GS.dataCache['8531E136927BA642162A6614DB93E6283CEC'] = {
    "uid": "8531E136927BA642162A6614DB93E6283CEC",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Stage01_Idle_Text",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "8531E136927BA642162A6614DB93E6283CEC",
        "isFolder": false,
        "data": {
            "name": "Stage01_Idle_Text",
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
                            "name": "Touching",
                            "index": 6,
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
                    "uid": "573A5A9B6050E04FD50A22D2A70D1E6EAF4A",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeScreenCursor",
                    "params": {
                        "hx": 0,
                        "hy": 0
                    },
                    "uid": "22AC088819B6A345C73ACDE24719EB2A85C9",
                    "indent": 1
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
                    "uid": "EAA2946D626EE744B29A8B470639F483A581",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Touching",
                            "index": 6,
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
                    "uid": "76620A8D348ED040FA791D63BCD2554B7509",
                    "indent": 1
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
                    "uid": "4C4B1EE22EE1A64B6A3A5A2431432ABF4840",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PausePenalty",
                            "index": 15,
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
                    "uid": "86D41BC41D0CA14F378A23200F23A07F5F61",
                    "indent": 3
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
                    "indent": 3
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
                    "uid": "6134695249BEB1446C59E2222005694C2163",
                    "indent": 4
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
                    "indent": 4,
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
                    "uid": "C1ACCFE01089E545FD0929A8DB7E2CADA0EC",
                    "indent": 4
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
                            "defaultText": "Geez, what kind of trainer are you? Grabbing me in weird places like that..."
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
                    "indent": 4,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "43D4D3F12583C247396883C703936F9FC49E",
                    "indent": 4
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
                        "numberValue": 9,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "06BE92E21EEBD24CC17B6D2483038D0D2E85",
                    "indent": 3
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
                    "uid": "FA225BBB239A494A9F2A7405AC55C0D14857",
                    "indent": 4
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
                    "indent": 4,
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
                    "uid": "DD908EE96A5CD54A9838811460FE943922AD",
                    "indent": 4
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
                            "defaultText": "I guess you're just a human s-so you probably don't know any better..."
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
                    "uid": "571C5D7E4239E443CB3997F1C926B0D6DB2E",
                    "indent": 4,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "6F1C609C222BC74A80089E024EA7D1534133",
                    "indent": 4
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
                    "uid": "AE85874955844043066BBA17DBFD505540A1",
                    "indent": 3
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
                    "indent": 4
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
                    "indent": 4,
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
                    "uid": "FA4DF53855BD67426F3A86584AC54F438A1C",
                    "indent": 4
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
                            "defaultText": "W-Why are you looking at me like that..?"
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
                    "indent": 4,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "FA7F041D66824741496B77C1B925DBC85648",
                    "indent": 4
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
                        "numberValue": 20,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "0B6310A317105740FD5BAEA6BE1ED8EEED77",
                    "indent": 3
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
                    "indent": 4
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
                    "indent": 4,
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
                    "uid": "76CF0036420282439699760144AA325975E7",
                    "indent": 4
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
                            "defaultText": "Y-You're not going to do it again... Right?"
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
                    "indent": 4,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "FD01083355AE034A9B680565C587A4BF04BD",
                    "indent": 4
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
                    "uid": "9324AF928A66054D8C2BD0B8A0FA27DD04E3",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "LovePercent",
                            "index": 9,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "BF25C8636F29B64A7A9B4FA5F0FF8AF0E744",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "PausePenalty",
                            "index": 15,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 3,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "E4017A3745F8424C98595DD4B3A6D7EC50E2",
                    "indent": 3
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "LovePercent",
                            "index": 9,
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
                        "source": 1,
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
                    "uid": "17243D7F47A39142092942C2FE5B19A9E8E0",
                    "indent": 4
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PercentBar",
                            "index": 8,
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
                            "name": "LovePercent",
                            "index": 9,
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
                    "uid": "3EB90BF2822F8740143804A19B41E645D8B9",
                    "indent": 4
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PercentBar",
                            "index": 8,
                            "scope": 1,
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
                        "operation": 3,
                        "source": 0,
                        "sourceValue": 8,
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
                    "uid": "8333D73B59D9E349776AE866EC1757E6E1AC",
                    "indent": 4
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "WetnessLevel",
                            "index": 10,
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
                            "name": "LovePercent",
                            "index": 9,
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
                    "uid": "6860E40147DA164C25496DD4E2EE635334F1",
                    "indent": 4
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "WetnessLevel",
                            "index": 10,
                            "scope": 1,
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
                        "operation": 4,
                        "source": 0,
                        "sourceValue": 10,
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
                    "uid": "03EFEC2D7262814DCF281E0176E1D283131E",
                    "indent": 4
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "437E8CDD42D1F14BA51A85F10A7D9B04EA8E",
                        "param": {
                            "name": "WetnessLevel",
                            "value": {
                                "name": "WetnessLevel",
                                "index": 10,
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
                    "uid": "540070E96360714BAD0B90160CC152FB2B6D",
                    "indent": 4,
                    "expanded": false
                },
                {
                    "id": "gs.CropPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 1,
                        "x": 0,
                        "y": -500,
                        "width": 70,
                        "height": {
                            "name": "PercentBar",
                            "index": 8,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        }
                    },
                    "uid": "DAAC52D1551AD5462979DE75BA4EFD4863A2",
                    "indent": 4
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonFill",
                            "value": {
                                "name": "LovePercent",
                                "index": 9,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            }
                        },
                        "duration": 42,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "CC78131740F6514E8E6B5E165642A1710862",
                    "indent": 4,
                    "expanded": false
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PausePenalty",
                            "index": 15,
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
                    "uid": "E852273D82412447692981D962A144D5A4CF",
                    "indent": 4
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 30
                    },
                    "uid": "CA5F3B9F8826D34F587BF29367750959199C",
                    "indent": 0
                }
            ],
            "index": "8531E136927BA642162A6614DB93E6283CEC",
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
                "name": "SceneStage1",
                "index": 10,
                "scope": 1,
                "domain": "com.degica.vnm.default",
                "changed": true
            }
        },
        "localizableStrings": {},
        "parentId": "2F7C0FD42BA701456D3B378118DDAF977D4C"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
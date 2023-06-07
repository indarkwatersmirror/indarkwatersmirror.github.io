GS.dataCache['5D809D1599107445D35B9B08337D77C93AB3'] = {
    "uid": "5D809D1599107445D35B9B08337D77C93AB3",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Stage03_Act_Text",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "5D809D1599107445D35B9B08337D77C93AB3",
        "isFolder": false,
        "data": {
            "name": "Stage03_Act_Text",
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
                    "uid": "4F19CDFC7DD5034172686D19DFBA665C4018",
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
                    "uid": "D6E8AD518A215347697A86602B36E999EAB2",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "MessageStage1a",
                            "index": 13,
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
                        "number": 0,
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
                    "uid": "0D41ED3384C3A648AC7A6EB40525421E9F99",
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
                            "defaultText": "S-Slow, slow..!!"
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
                        "time": 150
                    },
                    "uid": "43D4D3F12583C247396883C703936F9FC49E",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage1a",
                            "index": 13,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                    "uid": "E1A162D02B1172428F5BFAE61F3F25CD5D93",
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
                    "uid": "E3CA6A229F4FC84DFE7B7691AF26488B870B",
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
                    "uid": "6EB7A0C6775E18441D6B8F22EAF8E1DC766B",
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
                    "uid": "BD95B2BA6CACA543FB693D50997BD05C9D18",
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
                            "defaultText": "A-Ah..!"
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
                    "uid": "4D32586F6307E14ABD5B0DE64F386A3C5368",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 150
                    },
                    "uid": "4FEED5D03B3FC54D47894235414B73FBF2DA",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage1a",
                            "index": 13,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 7,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "48C3C5AF5D4184445419A2B856795F01BB56",
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
                    "uid": "617BE2155008114AE46808769D4EAA9CE4D2",
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
                    "uid": "424B2F9D8071A5439B8A47B7D4CD063B72B3",
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
                    "uid": "169229B4169DF9406B7956D5BCA966322F6B",
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
                            "defaultText": "I-Isn't that far enough..?"
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
                    "uid": "0C61B4846EAA214DB22A57D83DBE201E08F7",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 150
                    },
                    "uid": "900204EB4114914BE1290FC71F68C087C164",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage1a",
                            "index": 13,
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
                    "uid": "2ABF202B79B3D7479549BE52D4F27EDC2121",
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
                    "uid": "0F11986A6290A4424D6878A496434D8BC1DB",
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
                    "uid": "8D94C009603556455C18CB16C7BB3557893A",
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
                    "uid": "F48C13F76785954CFC0BD4892E8157D2F559",
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
                            "defaultText": "Argh- Ah.."
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
                    "uid": "D5ABDADF26A1F44C109999D7425EB98EC02A",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 150
                    },
                    "uid": "1C40081A8C43C24AF038EEB8FB1D8ABEAE97",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage1a",
                            "index": 13,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 16,
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
                    "uid": "172AE5F2827B944246398ED5BFCE71994F40",
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
                            "defaultText": "..I-It's not going to fit...!"
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
                        "time": 150
                    },
                    "uid": "FA7F041D66824741496B77C1B925DBC85648",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "B77B2F4714EB044F694B799220D099CA12BF",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "MessageStage1a",
                            "index": 13,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "F0986175626E08428B5BCB1630735A56AD95",
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
                    "uid": "EF5343BF811F984BCD781471FE2D52C04908",
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
                    "uid": "41FF70785AF1F24D3478280701BBE25BB36E",
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
                    "uid": "9BF33BF89AD9D048C32B8032B34838E3F9F7",
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
                            "defaultText": "Ahh~"
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
                    "uid": "FE6D90D623AEC145A54BCE174E90FD84886A",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 150
                    },
                    "uid": "2A992DF5550FB743763A4DB1B8FAAF0C56D0",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage1a",
                            "index": 13,
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
                    "uid": "06FFD2B42F64624C476A3568F16791F3752A",
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
                    "uid": "E75106156AB5A147C71A3676F7A51BA7CD0C",
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
                    "uid": "6989DAC216D67649B68872A2EBD47D8552DE",
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
                    "uid": "FF0417B951D06244D888F6634C4B5F2C7543",
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
                            "defaultText": "I-It feels so hot..."
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
                    "uid": "1DC41D9F263DC34D397A6D41D4AD21265C41",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 150
                    },
                    "uid": "518FE56D96F1244A8A58EE45A1E2480C7B77",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage1a",
                            "index": 13,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                    "uid": "02A71D075E46414084181D75E1998D781AD1",
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
                    "uid": "E3BD9E6719182649BF8BC5C537DBDBDE49AE",
                    "indent": 3
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
                    "uid": "14BC0A5F37FEB140D29BBF518C780F36CCB1",
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
                    "uid": "41242DF95104714D946941F63814450EDB66",
                    "indent": 3,
                    "expanded": false
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
                            "defaultText": "K-Keep going..."
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
                    "uid": "A36A11FF15F4A4468B69F1B589DA3B89D5ED",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 150
                    },
                    "uid": "1516A61F8CE4F14B023B3652A51F9AD28149",
                    "indent": 3
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "MessageStage1a",
                            "index": 13,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 7,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "485FBA47430EF642723B6D24508B70DC8710",
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
                    "uid": "BE3B76CF88D4A34C98685196F1490A38EEAD",
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
                    "uid": "8E4C43007ED5454B1E6BE7729700D8021B73",
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
                    "uid": "1665EE537779324DDB8B75A59F2AC271732F",
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
                            "defaultText": "J-Just a bit more...!"
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
                    "uid": "24078F3F1E53F64DFE1A7C16C8348EFC7173",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 150
                    },
                    "uid": "740998AC7FDAF8491068D7A3131F823347D3",
                    "indent": 3
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "MessageStage1a",
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
                    "uid": "CF264E838FF38442656872B19A6400F9AC80",
                    "indent": 1
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
            "index": "5D809D1599107445D35B9B08337D77C93AB3",
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
                "name": "Penetrating",
                "index": 16,
                "scope": 1,
                "changed": true,
                "domain": "com.degica.vnm.default"
            }
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
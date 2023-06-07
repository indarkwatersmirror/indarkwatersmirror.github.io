GS.dataCache['92D60B88161DA74FAD3A698866CB894AFE75'] = {
    "uid": "92D60B88161DA74FAD3A698866CB894AFE75",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "AutoText_Stage01",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "92D60B88161DA74FAD3A698866CB894AFE75",
        "isFolder": false,
        "data": {
            "name": "AutoText_Stage01",
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
                    "uid": "BDA042EA4A61A74C3E68F9C5E97D33CB1DA1",
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
                        "numberValue": 0,
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
                    "uid": "DAF93C9D070F4849326B53B9BB77ED024ADD",
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
                            "defaultText": "H-HUH?! WHAT-"
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
                    "uid": "E1A162D02B1172428F5BFAE61F3F25CD5D93",
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
                    "uid": "1A59387A31AF5348FA89B852BDE9434A2709",
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
                            "defaultText": "Ah~ Wait..."
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
                        "time": 210
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
                        "numberValue": 18,
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
                        "number": 1,
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
                    "uid": "FD2887BD27F22342605BC5A78926EF1BB5B6",
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
                            "defaultText": "W-Where are you touching me all of a sudden?"
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
                        "time": 210
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
                        "numberValue": 20,
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
                        "number": 0,
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
                    "uid": "F02C61E3836FC748248BFC35E1FFD73BDFE8",
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
                            "defaultText": "I-I'm kind of sensitive there..."
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
                        "time": 210
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
                        "numberValue": 25,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "0492769D107637484C3A450670418B5787B4",
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
                    "uid": "4C52236E5AE302406D4A3497D8D2A79B068B",
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
                    "uid": "4E2C6AA871798644E1481D94B5D466AF8A85",
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
                    "uid": "75CE50E128BF2443B8886D28780036C774A7",
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
                            "defaultText": "W-What about my reward...?"
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
                    "uid": "7A52AB6E28C7F8457C9A2F230979F257A6F4",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "6550E10E1BC5974E4B595843CEA30CEB60CD",
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
                        "numberValue": 30,
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
                    "uid": "5A7FD048720D774A473AD552CD961D9D68DF",
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
                            "defaultText": "Y-You know that I can just knock you out, right..?"
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
                            "name": "MessageStage1a",
                            "index": 13,
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
                    "uid": "0D78A5568463A245E87991D6DE20BA95BC14",
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
                    "uid": "1B3D0CB31E6B054B3D595BF8630963BBE47C",
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
                    "uid": "BCC0E30E56398340CE5BB012A7EB5D0952E6",
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
                    "uid": "78117DFA7EBDC64D6C88D288459A7F83A66F",
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
                            "defaultText": "Ahh~ H-Hey..!!"
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
                    "uid": "56BED5E88EE5944CC64856E1CA7B0DE59930",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "65A85C8C43E8644C4958A9C30F0382B3D2F9",
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
                        "numberValue": 40,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "154234991009634B35689468387FFE558847",
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
                    "uid": "FF9B380F8BB7B149D929B5E042D46763DC65",
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
                    "uid": "7F540EA2531C534ECE9B6461A350B7338B60",
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
                    "uid": "F5B12F083ACC63469C294D22F3C7CB713708",
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
                            "defaultText": "Y-You really shouldn't be doing this..."
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
                    "uid": "3E74E9397C07B7493F199DA78DDD3C7D3C3E",
                    "indent": 3,
                    "expanded": true
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 210
                    },
                    "uid": "99A2BA78143A6245DC7938A63F800AD0A79E",
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
                    "uid": "7AA8FAE87F01F145962A06D8E6FF83298CA3",
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
                        "time": 210
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
                        "numberValue": 4,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "8FFD85775D2957446F2B938910B794A12BFD",
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
                    "uid": "C7B2813423700345AC7A724545FBB046EBF2",
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
                            "defaultText": "A-Are you... Doing this on purpose..?!"
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
                        "time": 210
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
                        "numberValue": 12,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "AEF3E1530CA99846854BE4D94293BF49DAEC",
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
                    "uid": "E3BD9E6719182649BF8BC5C537DBDBDE49AE",
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
                    "uid": "197127A360B3824B3D987BA66C99B30F3747",
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
                            "defaultText": "W-What are you trying to accomplish..?"
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
                        "time": 210
                    },
                    "uid": "1516A61F8CE4F14B023B3652A51F9AD28149",
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
                    "uid": "7DC47E950F0586456C286EA4FF18EC6931C5",
                    "indent": 0
                }
            ],
            "index": "92D60B88161DA74FAD3A698866CB894AFE75",
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
                "name": "Touching",
                "index": 6,
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
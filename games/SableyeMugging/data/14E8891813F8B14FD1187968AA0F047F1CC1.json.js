GS.dataCache['14E8891813F8B14FD1187968AA0F047F1CC1'] = {
    "uid": "14E8891813F8B14FD1187968AA0F047F1CC1",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "RubbingReverse",
        "type": "data_record",
        "order": 2,
        "category": "commonEvents",
        "id": "14E8891813F8B14FD1187968AA0F047F1CC1",
        "isFolder": false,
        "data": {
            "name": "RubbingReverse",
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
                            "name": "Rubbing",
                            "index": 15,
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
                        "numberValue": 50,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "E3D4EF4A7EF8F54A5C8BEDC1BF91687CA9E5",
                    "indent": 1
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
                            "name": "SlapSound",
                            "index": 26,
                            "scope": 1,
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
                    "uid": "295686760DC0E94FF75A1BC3230D9A27A7E6",
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
                        "script": "GameManager.variableStore.numbers[7] = GameManager.variableStore.numbers[7] - Math.round(1 + GameManager.variableStore.numbers[7]/5);"
                    },
                    "uid": "83D268A5606725480A392138CD899522EE46",
                    "indent": 2,
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
                    "uid": "501744213256D741F87B20E22771D60A2EE7",
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
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 4,
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
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "LewdRubbingBonus",
                            "index": 14,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 5,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "E8A681DA30CE45422E6B29A1771F3251F99B",
                    "indent": 1
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
                        "operation": 1,
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
                    "uid": "CC93557740583240370B9BB3E1812ACDA2B4",
                    "indent": 2
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
                    "uid": "20F253167B34994532395DB164F0F249A3A8",
                    "indent": 2
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
                    "uid": "51139D9945E22949FA4990B168D948B40B00",
                    "indent": 2
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
                    "uid": "869EEE3A610BC2404B59C8E71AE313F8D4C2",
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
                    "uid": "DA1BBE18999EC0436A8B9783CF19FD4F21AA",
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
                        "numberValue": 60,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "21752159063B4444114A5D08090183828993",
                    "indent": 2
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "92DA2C068902A742C84919C7A8EDA2C49813",
                        "param": {
                            "name": "ButtonVisibility",
                            "value": 10
                        },
                        "duration": 0,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        }
                    },
                    "uid": "9F6243F36AA0C543AB3A2B38A9E29D10D860",
                    "indent": 3
                },
                {
                    "id": "gs.AddHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 27,
                        "shape": "rect",
                        "positionType": 1,
                        "actions": {
                            "onClick": {
                                "type": 3,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": "019A125D7A106845891BEB8242E9A215B151",
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": {
                                    "uid": "56FA6CF82662924A36290434D1C4AE3675C7",
                                    "name": "Game_Stage03"
                                }
                            },
                            "onEnter": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onSelect": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": {
                                    "uid": "750473584CCE68432F7B5108C03BB8B276AC",
                                    "name": "Game_Stage02"
                                }
                            },
                            "onDeselect": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onLeave": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onDrag": {
                                "type": 3,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": {
                                    "uid": "56FA6CF82662924A36290434D1C4AE3675C7",
                                    "name": "Game_Stage03"
                                }
                            },
                            "onDrop": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            },
                            "onDropReceive": {
                                "type": 0,
                                "bindValue": 0,
                                "bindValueVariable": {
                                    "scope": 0,
                                    "index": 0
                                },
                                "commonEventId": 0,
                                "label": "",
                                "switch": {
                                    "scope": 1,
                                    "index": 0
                                },
                                "scene": null
                            }
                        },
                        "dragging": {
                            "enabled": 1,
                            "variable": {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "horizontal": 0,
                            "vertical": 0,
                            "rect": {
                                "x": 1062,
                                "y": 1792,
                                "size": {
                                    "width": 341,
                                    "height": 193
                                }
                            }
                        },
                        "position": 1,
                        "box": {
                            "x": 1062,
                            "y": 1792,
                            "size": {
                                "width": 341,
                                "height": 193
                            }
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "baseGraphic": null
                    },
                    "uid": "DEAA31F63F19C641011A44A9A4BB81EEF1FB",
                    "indent": 3,
                    "expanded": false
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
                        "duration": 12,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "CF598F5336A2C74E2F283D963EF81DD9C64B",
                    "indent": 2,
                    "expanded": false
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
                        "numberValue": 100,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "6B406B455B4AD64421192ED2A660ED68FAAB",
                    "indent": 2
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 100,
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
                    "uid": "71DFFF2418AE92401E49F5C9B334D3368A3F",
                    "indent": 3
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
                    "uid": "C6EFBD447366024DBF2B9D168E44867DA042",
                    "indent": 3
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
                            "name": "WetMax",
                            "index": 5,
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
                    "uid": "1A2EA91E8C2B604DA5593B62667B13A5465E",
                    "indent": 4
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
                    "uid": "46A8B026090CB041728B9702F853B81D63A0",
                    "indent": 4
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
                    "uid": "850BD27930C6F149647B7594D1EDB6A78B6C",
                    "indent": 4
                },
                {
                    "id": "gs.CallCommonEvent",
                    "params": {
                        "commonEventId": "CE2766E73653874ECE5872A13CC654A9CC53",
                        "parameters": {
                            "values": []
                        }
                    },
                    "uid": "E0902739252B3744D288D4A89674C9DEEE44",
                    "indent": 4
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": 100,
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
                    "uid": "BB55667E0F13F44AE43920E4CB2DCCCB775C",
                    "indent": 3
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
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "0EE60E8F9D674946F61AF1B858FDD2A01FA1",
                    "indent": 2
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
                    "uid": "F0C44AD862F1D6470F0B2B33D6C3D1292248",
                    "indent": 3
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
            "index": "14E8891813F8B14FD1187968AA0F047F1CC1",
            "booleanVariables": [
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
        "parentId": "381E59B913CDF442C62BE0C4275030B460F1"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
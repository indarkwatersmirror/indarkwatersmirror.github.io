GS.dataCache['B3E62EFF1C97D14EA1191E2527DD83D67EFF'] = {
    "uid": "B3E62EFF1C97D14EA1191E2527DD83D67EFF",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Debug-Text",
        "type": "data_record",
        "order": 11,
        "category": "commonEvents",
        "id": "B3E62EFF1C97D14EA1191E2527DD83D67EFF",
        "isFolder": false,
        "parentId": "D96523E728DA4342925A36868B748F0D2A99",
        "data": {
            "name": "Debug-Text",
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
                            "name": "Switch",
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
                    "uid": "47EA5DD287DBC2495B28AAB4E3CAD5EF2312",
                    "indent": 0
                },
                {
                    "id": "gs.ShowText",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "viewport": {
                            "type": "ui"
                        },
                        "predefinedPositionId": 5,
                        "positionType": 0,
                        "number": 4,
                        "duration": 3,
                        "waitForCompletion": 1,
                        "blendMode": 0,
                        "positionOrigin": 0,
                        "origin": 0,
                        "zOrder": 3000,
                        "text": {
                            "lcId": null,
                            "defaultText": "IdleText: {GN:13}\nActText: {GN:14}"
                        },
                        "position": {
                            "x": 0,
                            "y": 0
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 0,
                            "easing.type": 1,
                            "animation.type": 1,
                            "origin": 1,
                            "positionOrigin": 1,
                            "zOrder": 0,
                            "blendMode": 1,
                            "viewport.type": 1
                        },
                        "expressions": [],
                        "animations": []
                    },
                    "uid": "4BB692A2758BD84FE68AFD956D8722E71BFA",
                    "indent": 1,
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
                            "name": "Switch",
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
                    "uid": "1E00110D32399447534AC781C2DFC2F2ECE8",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "7893784062407645C77BC7960F42AA0F4133",
                    "indent": 0
                },
                {
                    "id": "gs.RefreshText",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 4
                    },
                    "uid": "3831B3271174614EC88872D9C45F81B23A56",
                    "indent": 1
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 6
                    },
                    "uid": "3A5EF2A74B845244F549ACB170E393A317E6",
                    "indent": 0
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
                    "uid": "5421074681A377428C0BED256A27CB7A1520",
                    "indent": 0
                }
            ],
            "index": "B3E62EFF1C97D14EA1191E2527DD83D67EFF",
            "booleanVariables": [
                {
                    "name": "Switch",
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
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
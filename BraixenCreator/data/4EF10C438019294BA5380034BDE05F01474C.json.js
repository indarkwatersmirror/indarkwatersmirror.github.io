GS.dataCache['4EF10C438019294BA5380034BDE05F01474C'] = {
    "uid": "4EF10C438019294BA5380034BDE05F01474C",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "name": "ColorPickerConvertion",
        "type": "data_record",
        "category": "commonEvents",
        "id": "4EF10C438019294BA5380034BDE05F01474C",
        "isFolder": false,
        "parentId": "ROOT",
        "data": {
            "name": "ColorPickerConvertion",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [
                {
                    "label": "ColorPickerValue",
                    "type": 1,
                    "numberVariable": {
                        "name": "ColorPickerValue",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValueType": "number",
                    "numberList": {
                        "entries": []
                    }
                },
                {
                    "label": "ShadowPickerValue",
                    "type": 1,
                    "numberVariable": {
                        "name": "ShadowPickerValue",
                        "index": 1,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValueType": "number"
                }
            ],
            "commands": [
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 15,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "E2E052FC91E0504EA729DC78B6D5304BEEC7",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "24363F633F3C36466A2BABE4C8AA234571AF",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                    "uid": "683FFC58972BA64CA38887055E55B03EC7C4",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "sourceValue": -15,
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
                    "uid": "07AC60AD31758748BD9A37914C20F32DE568",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-M",
                            "scope": 1,
                            "index": 1,
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
                    "uid": "BFBF9147485E864A6B3A13440B36BF19E4E9",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-M",
                            "scope": 1,
                            "index": 1,
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
                        "sourceValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "ED9224781C28F24DED68AE9517F7269A761C",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 50,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "5618131042A3E54EB65A3BA176DE66C17AAF",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "DFF349B91DBA934CA09AA5E3DB90296C72FA",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 2,
                        "source": 0,
                        "sourceValue": 50,
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
                    "uid": "7AEC251B56914441EA5B9EE09C89A15E21EC",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                    "uid": "5B37C56232927343202BA0A693A3B2161A2C",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "sourceValue": 15,
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
                    "uid": "8CD0522A2338D24A146A4E911D1EBAC065EE",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "EyeColorLeft-Y",
                            "scope": 1,
                            "index": 1,
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
                    "uid": "77191CAB47A233498B5B8AD8233F5EAFDE25",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "EyeColorLeft-Y",
                            "scope": 1,
                            "index": 1,
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
                        "operation": 1,
                        "source": 0,
                        "sourceValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "7579F4A62EE8F84DB128B7458E84B9C9EAF3",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "C777DEF749AFA74D7D1816819989A6DE70BC",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "EyeColorLeft-Y",
                            "scope": 1,
                            "index": 1,
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
                    "uid": "55CA0FE837E38647831B3E61F816D53EE128",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 35,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 5,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "50B81FF6855281428F7B2970DD41EF64D839",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
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
                    "uid": "BEBB8815631993421F28E1C3EE011D8F3C35",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "774851018C2AA14E2A8808B39382BE5092B1",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "32EC2BA704E6F643CB39D165023516B2CB76",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 2,
                        "source": 0,
                        "sourceValue": 35,
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
                    "uid": "6E27EC1206EAF5485E581BD6D80A87084179",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                    "uid": "6872BF972BC60247EA5987243C45A4A79928",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "sourceValue": -15,
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
                    "uid": "9804706F6739D1456159D5043103B426D64D",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
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
                    "uid": "74EE8BA58BD358466F884A89AAC9DC304D71",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
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
                        "operation": 1,
                        "source": 0,
                        "sourceValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "A834A7376779E64FDD192D39B994A540EC25",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 85,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "1C2B795C845D054590188ED02294E073CC34",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "5DD5B9CA02AF694F8A288DB8541FB93080F1",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 2,
                        "source": 0,
                        "sourceValue": 85,
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
                    "uid": "C14114C5635207456C29F8948DF16A5A6A4B",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                    "uid": "804B16445607F1412A181C6345329626A954",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "sourceValue": 15,
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
                    "uid": "6704170531F2474EAD8A3005D353AEE0FCE2",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
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
                    "uid": "3E899EA22258A04D5F2920014F0F16F91442",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
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
                        "operation": 1,
                        "source": 0,
                        "sourceValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "EB13AFC48C1B6247394963D7FCE9EA180C32",
                    "indent": 1
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "4AE2AFDB8D5EE44A1F99B2737FF0992F1BA4",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
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
                    "uid": "BDF562838C53F5474F78FCF76965DA91F51D",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 15,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 3,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "C42EE8A134487941780A0A46F8E3EDD1334A",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 65,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 4,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "EE8890344807E44D4599BC620A498DC398C4",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "637EB9C325A8194E290B93C578825CB4B62D",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 2,
                        "source": 0,
                        "sourceValue": 15,
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
                    "uid": "FB6DE6DC1386C44548686305BCE46CE9AE6B",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                    "uid": "5D71A4A57FF77844455880903B5BAAC83533",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "sourceValue": 15,
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
                    "uid": "D85263A98735C84280693AE404CC1D8ACA5E",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-C",
                            "index": 3,
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
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "40DC90056930654DBB1BEDB12E913088C7DF",
                    "indent": 2
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "C617CB4882F26542A859891445F220B585D5",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "ColorPickerValue",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "546337A454280945171B5173F528052D2A96",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 2,
                        "source": 0,
                        "sourceValue": 65,
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
                    "uid": "F280423754EBF74A3B08F4840AF995801A6B",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                    "uid": "6B5B79E9900C6247D82BCD31A6D5608951AC",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "sourceValue": -15,
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
                    "uid": "AF50DB9D744FC241D81B94A67ED44E539614",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-C",
                            "index": 3,
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
                    "uid": "C99FBE7025B43642F98AEAF6499F816A11E8",
                    "indent": 2
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-C",
                            "index": 3,
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
                        "sourceValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "8F68FE1122DAF04C8E2B469826C30D11FE28",
                    "indent": 2
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "02FDDD5A12E9E14DB1797A04D7B958D130D9",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-C",
                            "index": 3,
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
                    "uid": "0E5C849E483EC2427D3A5E550F01450DFECA",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-M",
                            "scope": 1,
                            "index": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 100,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "513568BC86F9594D096BDF7842AE88139F61",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-M",
                            "scope": 1,
                            "index": 1,
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
                    "uid": "FAB61E10797AA944A489CF775D220200007A",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-M",
                            "scope": 1,
                            "index": 1,
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
                    "uid": "E89A015D535755462E485345EB713ED1119E",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-M",
                            "scope": 1,
                            "index": 1,
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
                    "uid": "740837D382A5844F4D4938300DEE467A08D5",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 100,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "2C3AEEBF37452149768807C615B4B35D5495",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
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
                    "uid": "781E281A48D52446CF5B1120E9E1022B0092",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "0FCF0EF60733F64DF05A2C86C6CD9B0E9D0B",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
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
                    "uid": "B3F587ED3B7BE54984789178C7DF6FAA6F63",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-C",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": 100,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "791F4545745ED646E3089D46283D581E3609",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-C",
                            "index": 3,
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
                    "uid": "3B7FBBA51488A342BD5B7330F9BA6B586D3C",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-C",
                            "index": 3,
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
                    "uid": "BA36AC1E6662E646B7089AC49D030E448842",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-C",
                            "index": 3,
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
                    "uid": "575BF51723EB274BC35BEEB9D86E674396F2",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ShadowPickerValue",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "1EC496B71FD205436B1882A198B796931CD5",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "ShadowPickerValue",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "AF9F726892B8034ECD2AF898C65A3EAB6B2D",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "sourceValue": 2,
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
                    "uid": "273A4ED51E5A064B5938A232B967D75CEEB5",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-M",
                            "scope": 1,
                            "index": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "0BE3CE504C85A24F7B293120D9B4DD83E64E",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-M",
                            "scope": 1,
                            "index": 1,
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
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "8BE57E897EF11549318B6B31EC4DE027D70E",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "AFAD64F03441A64C0A7B3931762D57BED97C",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "81BE680E72F0E6467A4BC7091CEB8AEC02C4",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-C",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "93D812A3966C7143473804E0FBC2A9E64497",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-C",
                            "index": 3,
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
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "7F66AC675CC0054E114832A729ECAA787728",
                    "indent": 2
                },
                {
                    "id": "gs.ConditionElseIf",
                    "params": {
                        "variable": {
                            "name": "ShadowPickerValue",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 50,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "E397F2DE339A254248593B48964FE53325FA",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "ShadowPickerValue",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "D94E252656897946A43A83031C6B61620BB7",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 2,
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
                    "uid": "1B8C150C104C24472188E8D50ECFC0D6EB0D",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                    "uid": "47AD4C126834674FA35B3B74F7F7367B00F1",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "sourceValue": 50,
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
                    "uid": "A8C551F76C9D3849209959F0A1FF69CD8F2F",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
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
                        "operation": 1,
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
                    "uid": "339CD0829CE89241717928D8DE2874503AED",
                    "indent": 1
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-M",
                            "scope": 1,
                            "index": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 4,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "5E33E45D91A773411A1A424125CC4F0C6F1C",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-M",
                            "scope": 1,
                            "index": 1,
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
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "280788AD44CA25406F1AE2462E2603E6D4B2",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 4,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "D6CB18766EAB3141961AB3E58411931FA398",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-Y",
                            "index": 2,
                            "scope": 1,
                            "changed": true,
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
                        "operation": 0,
                        "source": 0,
                        "sourceValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "24F5355B5FAC6649029B49A79991C380EEEC",
                    "indent": 2
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "ColorPicker-C",
                            "index": 3,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "numberValue": {
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 4,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "1A1FC60355F9084679897327240B79B71BD6",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "ColorPicker-C",
                            "index": 3,
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
                            "name": "ColorCalc",
                            "scope": 1,
                            "index": 0,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
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
                    "uid": "F5061AB821F22347B31AC0382422B6A19359",
                    "indent": 2
                }
            ],
            "index": "4EF10C438019294BA5380034BDE05F01474C",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "ColorPickerValue",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "ShadowPickerValue",
                    "index": 1,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
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
        "order": 11
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
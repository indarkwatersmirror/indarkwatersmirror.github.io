GS.dataCache['4929761B7CE3A343CF3B4298FA6AF27E7C15'] = {
    "uid": "4929761B7CE3A343CF3B4298FA6AF27E7C15",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "CreatorPetting",
        "type": "data_record",
        "order": 3,
        "category": "commonEvents",
        "id": "4929761B7CE3A343CF3B4298FA6AF27E7C15",
        "isFolder": false,
        "data": {
            "name": "CreatorPetting",
            "startCondition": 1,
            "conditionEnabled": true,
            "parallel": true,
            "autoPreload": false,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "CreatorPettingStart",
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
                    "uid": "C5A7B47A8322E043D07B5CA86ADE4CABEBA6",
                    "indent": 0
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "CreatorEmbarassed",
                            "index": 2,
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
                    "uid": "055A40FB6B8CC94911890262AF6A961E9117",
                    "indent": 1
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 1,
                        "fadeInTime": 300,
                        "data": {
                            "model": {
                                "name": "BraixenDefaultModel",
                                "hue": 0,
                                "opacity": 255,
                                "blending": 0,
                                "tone": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0
                                }
                            },
                            "motion": "008-PetHead.mtn",
                            "position": {
                                "x": 0,
                                "y": 0,
                                "zoom": {
                                    "x": 1,
                                    "y": 1,
                                    "d": 1
                                }
                            }
                        },
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "fadeInTime": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "2D3852DE3DC1D54D411878686C0C06FF2E41",
                    "indent": 2
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "uid": "624A7E5836E4434D646BC03136A9AD6106A0",
                    "indent": 1
                },
                {
                    "id": "vn.L2DMotion",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "loop": 1,
                        "fadeInTime": 300,
                        "data": {
                            "model": {
                                "name": "BraixenDefaultModel",
                                "hue": 0,
                                "opacity": 255,
                                "blending": 0,
                                "tone": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0
                                }
                            },
                            "motion": "009-PetHeadU.mtn",
                            "position": {
                                "x": 0,
                                "y": 0,
                                "zoom": {
                                    "x": 1,
                                    "y": 1,
                                    "d": 1
                                }
                            }
                        },
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "fadeInTime": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "B62D95BC431F404B5F4ACBC88E2AD0A0B24E",
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
                            "name": "CreatorPettingStart",
                            "index": 6,
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
                    "uid": "9E8B6B4F5460A74F6F49EE9830724BBFC23B",
                    "indent": 1
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PettingPos",
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
                            "name": "Petting",
                            "index": 7,
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
                    "uid": "93A3FC2F42EF2148E04A52938514F9E7BE38",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PettingPos",
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
                        "operation": 3,
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
                    "uid": "3684478253640540AF3B36A41BEB46582150",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PettingPos",
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
                        "operation": 4,
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
                    "uid": "E00FEB6034D864463E791D358095BF6486B5",
                    "indent": 0
                },
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "PettingPos",
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
                        "operation": 2,
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
                    "uid": "FAC5089329D9E545F61A82431094E3A2314A",
                    "indent": 0
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 0.3
                    },
                    "uid": "D89B61E58309E647E68887B447ED24747C16",
                    "indent": 0
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "param": {
                            "name": "EarLeftAngle",
                            "value": {
                                "name": "PettingPos",
                                "index": 8,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            }
                        },
                        "duration": 0.06,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        },
                        "waitForCompletion": 1
                    },
                    "uid": "01F4D72A87E8654C3C489D11E96F44EDBAD1",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "param": {
                            "name": "EarRightAngle",
                            "value": {
                                "name": "PettingPos",
                                "index": 8,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            }
                        },
                        "duration": 0.06,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        },
                        "waitForCompletion": 1
                    },
                    "uid": "0BB9E1E61E15E644087A15A190D558B124BD",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "param": {
                            "name": "ParamAngleZ",
                            "value": {
                                "name": "PettingPos",
                                "index": 8,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            }
                        },
                        "duration": 0.06,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        },
                        "waitForCompletion": 1
                    },
                    "uid": "92F249497B30E14A2449010197026D090714",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "vn.L2DParameter",
                    "params": {
                        "characterId": "FD29280E5200D147D58B7368EE73960C3456",
                        "param": {
                            "name": "ParamBodyAngleZ",
                            "value": {
                                "name": "PettingPos",
                                "index": 8,
                                "scope": 1,
                                "domain": "com.degica.vnm.default",
                                "changed": true
                            }
                        },
                        "duration": 21,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "easing.type": 1
                        }
                    },
                    "uid": "032B9B9635B32144303A0B57C989B7707CB2",
                    "indent": 0,
                    "expanded": false
                }
            ],
            "index": "4929761B7CE3A343CF3B4298FA6AF27E7C15",
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
                "name": "CreatorPetting",
                "index": 4,
                "scope": 1,
                "domain": "com.degica.vnm.default",
                "changed": true
            }
        },
        "localizableStrings": {},
        "parentId": "28317CE76CAE41400519B70173C90F6241CE"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
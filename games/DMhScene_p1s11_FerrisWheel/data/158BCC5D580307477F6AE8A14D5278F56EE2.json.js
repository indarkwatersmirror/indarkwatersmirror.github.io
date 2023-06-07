GS.dataCache['158BCC5D580307477F6AE8A14D5278F56EE2'] = {
    "uid": "158BCC5D580307477F6AE8A14D5278F56EE2",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Hide Log",
        "type": "data_record",
        "order": 12,
        "category": "commonEvents",
        "id": "158BCC5D580307477F6AE8A14D5278F56EE2",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Hide Log",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "vn.BacklogVisibility",
                    "params": {
                        "visible": 0,
                        "backgroundVisible": 1
                    },
                    "indent": 0,
                    "uid": "5BBED62A8749E240728AA80362ADD3503DEE"
                },
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 88
                    },
                    "indent": 0,
                    "uid": "25AC2C8D930817416E5B8D534043B925BE52"
                },
                {
                    "id": "gs.ErasePicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 88,
                        "duration": 0,
                        "waitForCompletion": 1,
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
                            "duration": 1
                        }
                    },
                    "indent": 0,
                    "uid": "8C677E370B9C614C448B8DB6B0E0CAD68424"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Backlog Opened",
                            "index": 1,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "793449808EA0544F860A5171C677A81411B1"
                }
            ],
            "index": "158BCC5D580307477F6AE8A14D5278F56EE2",
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
GS.dataCache['4C97B5353DB376421619C705B271311D22B4'] = {
    "uid": "4C97B5353DB376421619C705B271311D22B4",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "DeleteSaveText",
        "type": "data_record",
        "order": 18,
        "category": "commonEvents",
        "id": "4C97B5353DB376421619C705B271311D22B4",
        "isFolder": false,
        "parentId": "28317CE76CAE41400519B70173C90F6241CE",
        "data": {
            "name": "DeleteSaveText",
            "startCondition": 1,
            "conditionEnabled": true,
            "parallel": true,
            "autoPreload": false,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 150
                    },
                    "uid": "64BBE4FA49BAC342F80866919223C4758A0E",
                    "indent": 0
                },
                {
                    "id": "gs.EraseText",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 77,
                        "duration": 30,
                        "waitForCompletion": 0,
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
                            "duration": 0
                        }
                    },
                    "uid": "E7D3486189EEA04EB74A36F1815EE6F573AF",
                    "indent": 0
                }
            ],
            "index": "4C97B5353DB376421619C705B271311D22B4",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "conditionSwitch": {
                "name": "DeleteSaveText",
                "index": 14,
                "scope": 1,
                "domain": "com.degica.vnm.default",
                "changed": true
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
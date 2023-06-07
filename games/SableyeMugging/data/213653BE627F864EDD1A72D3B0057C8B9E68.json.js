GS.dataCache['213653BE627F864EDD1A72D3B0057C8B9E68'] = {
    "uid": "213653BE627F864EDD1A72D3B0057C8B9E68",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "name": "New Record",
        "type": "data_record",
        "category": "commonEvents",
        "id": "213653BE627F864EDD1A72D3B0057C8B9E68",
        "isFolder": false,
        "parentId": "C6BDB9BC3B6644427A498204F44EE6E9C9B8",
        "data": {
            "name": "New Record",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "folderPath": "Audio/Sounds/Sound Effects",
                            "name": "Sableye_Call06.ogg",
                            "volume": 100,
                            "playbackRate": 100
                        },
                        "musicEffect": 0,
                        "loop": 0,
                        "waitForCompletion": 0,
                        "fieldFlags": {
                            "sound.volume": 1,
                            "sound.playbackRate": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "1A82A6824DDD024836689ED20D7713246A43",
                    "indent": 0
                }
            ],
            "index": "213653BE627F864EDD1A72D3B0057C8B9E68",
            "booleanVariables": [
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
        },
        "order": 0
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
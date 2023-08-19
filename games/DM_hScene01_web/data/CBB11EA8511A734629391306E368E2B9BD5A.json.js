GS.dataCache['CBB11EA8511A734629391306E368E2B9BD5A'] = {
    "uid": "CBB11EA8511A734629391306E368E2B9BD5A",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "ShowLivingWithInfo",
        "type": "data_record",
        "order": 7,
        "category": "commonEvents",
        "id": "CBB11EA8511A734629391306E368E2B9BD5A",
        "isFolder": false,
        "data": {
            "name": "ShowLivingWithInfo",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.EraseImageMap",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 0,
                        "duration": 0.06,
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
                        }
                    },
                    "uid": "93E072ED6D77A243B2685042D3FBF4EBB550",
                    "indent": 0
                },
                {
                    "id": "gs.ShowPicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "viewport": {
                            "type": "ui"
                        },
                        "size": {
                            "type": 0,
                            "width": 100,
                            "height": 100
                        },
                        "visual": {
                            "type": 0,
                            "quad": {
                                "color": {
                                    "red": 255,
                                    "green": 255,
                                    "blue": 255,
                                    "alpha": 255
                                }
                            },
                            "frame": {
                                "thickness": 16,
                                "cornerSize": 16
                            },
                            "threePartImage": {
                                "orientation": 0
                            }
                        },
                        "predefinedPositionId": 0,
                        "number": 2,
                        "blendMode": 0,
                        "zOrder": 3000,
                        "duration": 3,
                        "origin": 1,
                        "waitForCompletion": 0,
                        "positionType": 1,
                        "position": {
                            "x": 0,
                            "y": 0,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 0,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false,
                                "width": 1280,
                                "height": 720
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 0
                            }
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
                            "origin": 0,
                            "duration": 0,
                            "easing.type": 0,
                            "animation.type": 1,
                            "zOrder": 0,
                            "blendMode": 1,
                            "visual.type": 0,
                            "visual.frame.thickness": 0,
                            "visual.frame.cornerSize": 1,
                            "visual.threePartImage.orientation": 1,
                            "visual.quad.color": 0,
                            "size.type": 1,
                            "size.width": 1,
                            "size.height": 1,
                            "viewport.type": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "graphic": {
                            "name": "titlescreenLWBHover",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        }
                    },
                    "uid": "08E2657009E41241217835F8684B0115E9AD",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.ShowImageMap",
                    "params": {
                        "number": 0,
                        "hotspots": [
                            {
                                "x": -12,
                                "y": 304,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": -12,
                                    "y": 304,
                                    "width": 343,
                                    "height": 53,
                                    "action": 2,
                                    "commonEventId": "F774FAAE61BC664D6D280F93E3244DA0D5D0",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
                                    "onClickSound": {
                                        "name": ""
                                    },
                                    "onHoverSound": {
                                        "name": ""
                                    },
                                    "zoom": 1,
                                    "angle": 0,
                                    "horizontalFlip": false
                                },
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
                                },
                                "size": {
                                    "width": 343,
                                    "height": 53
                                }
                            },
                            {
                                "x": -9,
                                "y": 367,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": -9,
                                    "y": 367,
                                    "width": 340,
                                    "height": 49,
                                    "action": 2,
                                    "commonEventId": "B9331CBB36ACA9466D398D333EE9316C7914",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
                                    "onClickSound": {
                                        "name": ""
                                    },
                                    "onHoverSound": {
                                        "name": ""
                                    },
                                    "zoom": 1,
                                    "angle": 0,
                                    "horizontalFlip": false
                                },
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
                                },
                                "size": {
                                    "width": 340,
                                    "height": 49
                                }
                            },
                            {
                                "x": -27,
                                "y": 427,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": -27,
                                    "y": 427,
                                    "width": 354,
                                    "height": 55,
                                    "action": 2,
                                    "commonEventId": "9F0ADB2550783345368B09D16DC6A335549F",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
                                    "onClickSound": {
                                        "name": ""
                                    },
                                    "onHoverSound": {
                                        "name": ""
                                    },
                                    "zoom": 1,
                                    "angle": 0,
                                    "horizontalFlip": false
                                },
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
                                },
                                "size": {
                                    "width": 354,
                                    "height": 55
                                }
                            },
                            {
                                "x": -14,
                                "y": 490,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": -14,
                                    "y": 490,
                                    "width": 340,
                                    "height": 53,
                                    "action": 2,
                                    "commonEventId": "6ED27436222B2549467A94C4793FE469D40B",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
                                    "onClickSound": {
                                        "name": ""
                                    },
                                    "onHoverSound": {
                                        "name": ""
                                    },
                                    "zoom": 1,
                                    "angle": 0,
                                    "horizontalFlip": false
                                },
                                "color": {
                                    "red": 0,
                                    "green": 0,
                                    "blue": 0,
                                    "alpha": 160
                                },
                                "size": {
                                    "width": 340,
                                    "height": 53
                                }
                            },
                            {
                                "x": 370,
                                "y": 596,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 370,
                                    "y": 596,
                                    "width": 445,
                                    "height": 120,
                                    "action": 2,
                                    "commonEventId": "97DED04148EC074DB7793022B23E9D4EA111",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
                                    "onClickSound": {
                                        "name": ""
                                    },
                                    "onHoverSound": {
                                        "name": ""
                                    },
                                    "zoom": 1,
                                    "angle": 0,
                                    "horizontalFlip": false
                                },
                                "color": {
                                    "red": 255,
                                    "green": 0,
                                    "blue": 255,
                                    "alpha": 130
                                },
                                "size": {
                                    "width": 445,
                                    "height": 120
                                }
                            }
                        ],
                        "ground": {
                            "name": "titlescreen",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        },
                        "hover": {
                            "name": "titlescreen-hover",
                            "hue": 0,
                            "opacity": 255,
                            "blending": 0,
                            "tone": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "grey": 0
                            }
                        },
                        "unselected": null,
                        "selected": null,
                        "selectedHover": null,
                        "duration": 0.06,
                        "origin": 0,
                        "waitForCompletion": 1,
                        "positionType": 0,
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
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "fieldFlags": {
                            "easing.type": 1,
                            "animation.type": 0,
                            "zOrder": 0,
                            "blendMode": 0,
                            "origin": 1
                        },
                        "zOrder": 500,
                        "blendMode": 0,
                        "predefinedPositionId": 0,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "expanded": false,
                    "uid": "4DA5D49830E79648446ACF1301E50D644D64"
                }
            ],
            "index": "CBB11EA8511A734629391306E368E2B9BD5A",
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
            ]
        },
        "localizableStrings": {},
        "parentId": "C6BF477F10AE084A027A58F3A3D4F77DABBB"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
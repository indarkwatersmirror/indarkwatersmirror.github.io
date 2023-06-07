GS.dataCache['EE30FAC234EED248DC294422B683D5178BBF'] = {
    "uid": "EE30FAC234EED248DC294422B683D5178BBF",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Show Message Box Thoughts",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "EE30FAC234EED248DC294422B683D5178BBF",
        "isFolder": false,
        "data": {
            "name": "Show Message Box Thoughts",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": false,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.ChangeNumberVariables",
                    "params": {
                        "target": 0,
                        "targetVariable": {
                            "name": "MessageBlock",
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
                    "uid": "4052270E28D022416D68C509F4B5CC3A8F2B",
                    "indent": 0
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "For the message box, we're going to use an image-map.\n\nFor the message body text, we're going to create a new message area and create the boundaries where where we want to display the message text in the message box.  After that, we use \"Set Message Target\" to make sure that from now on, all message commands such as \"Show Message\", etc. are displayed in that new message area.\n\nTo display the character's name we are going to use Show Text. Check \"Update Name Box\" common event for more information to find out how we can update that text if the character has changed. \n\nThe entire message box UI is done with just one image-map, so you only need to edit the following pictures for a custom message box:\n\nmsgbox_ground\nmsgbox_hover\nmsgbox_selected\n\nAnd edit the hotspot positions in the Show Image Map command as well as the Message Area and thats it."
                    },
                    "indent": 0,
                    "uid": "5BBDDED65A7BE84EBA2B55E6D9B117CD0C41",
                    "expanded": false
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "You have to edit the hotspot positions on this image-map to match with your custom messagebox image."
                    },
                    "indent": 0,
                    "uid": "79EFD0DD3AA11448853AB5C3D5DD1016DD44",
                    "expanded": true
                },
                {
                    "id": "gs.ShowImageMap",
                    "params": {
                        "number": 99,
                        "hotspots": [
                            {
                                "x": 798,
                                "y": 212,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 31,
                                    "y": 52,
                                    "width": 103,
                                    "height": 35,
                                    "action": 2,
                                    "commonEventId": "100DB9771B021145632A8756785EE9396B24",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
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
                                    "width": 85,
                                    "height": 30
                                }
                            },
                            {
                                "x": 69,
                                "y": 213,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 30,
                                    "y": 101,
                                    "width": 103,
                                    "height": 35,
                                    "action": 2,
                                    "commonEventId": "232F08772D91E44D10380D14842B92CA796A",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
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
                                    "width": 85,
                                    "height": 31
                                }
                            },
                            {
                                "x": 162,
                                "y": 212,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 29,
                                    "y": 151,
                                    "width": 103,
                                    "height": 35,
                                    "action": 2,
                                    "commonEventId": "651E26D86B1CF647633BEC272FD6CEB53A8E",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
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
                                    "width": 87,
                                    "height": 32
                                }
                            },
                            {
                                "x": 30,
                                "y": 212,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 31,
                                    "y": 203,
                                    "width": 103,
                                    "height": 35,
                                    "action": 2,
                                    "commonEventId": "79F7E7BC82CD104D3D597749604D4529D8F3",
                                    "bindToSwitch": false,
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
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
                                    "width": 32,
                                    "height": 31
                                }
                            },
                            {
                                "x": 979,
                                "y": 213,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 886,
                                    "y": 213,
                                    "width": 90,
                                    "height": 30,
                                    "action": 2,
                                    "commonEventId": "6E22FF5D1C6A79487128F7B5BAFF232629A8",
                                    "bindToSwitch": true,
                                    "switch": {
                                        "name": "Game Skip",
                                        "index": 2,
                                        "scope": 1,
                                        "domain": "com.degica.vnm.default",
                                        "changed": true
                                    },
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
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
                                    "width": 90,
                                    "height": 30
                                }
                            },
                            {
                                "x": 887,
                                "y": 212,
                                "angle": 0,
                                "zoom": 1,
                                "horizontalFlip": false,
                                "data": {
                                    "x": 1102,
                                    "y": 202,
                                    "width": 103,
                                    "height": 35,
                                    "action": 2,
                                    "commonEventId": "281DB3B355CF0747EC8BC489D060D1E2D442",
                                    "bindToSwitch": true,
                                    "switch": {
                                        "name": "Auto Message",
                                        "index": 3,
                                        "scope": 1,
                                        "domain": "com.degica.vnm.default",
                                        "changed": true
                                    },
                                    "bindEnabledState": false,
                                    "bindValueTo": false,
                                    "finish": false,
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
                                    "width": 91,
                                    "height": 31
                                }
                            }
                        ],
                        "predefinedPositionId": 5,
                        "ground": {
                            "name": "msgbox_base2",
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
                            "name": "msgbox_hovering2",
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
                        "selected": {
                            "name": "msgbox_selecting2",
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
                        "selectedHover": {
                            "name": "msgbox_selecting2",
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
                        "duration": 30,
                        "origin": 0,
                        "waitForCompletion": 0,
                        "positionType": 0,
                        "position": {
                            "x": 0,
                            "y": 0
                        },
                        "easing": {
                            "type": 1,
                            "inOut": 0
                        },
                        "blendMode": 1,
                        "zOrder": 1000,
                        "animation": {
                            "type": 1,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "easing.type": 0,
                            "animation.type": 0,
                            "origin": 1,
                            "zOrder": 0,
                            "blendMode": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "A4CCAA3728557348C32B398552015B58BC2A",
                    "expanded": false
                },
                {
                    "id": "gs.ChangeTextSettings",
                    "params": {
                        "number": 1,
                        "padding": [
                            6,
                            0,
                            6,
                            0
                        ],
                        "font": "Tallys",
                        "size": 22,
                        "outline": 0,
                        "shadow": 1,
                        "outlineColor": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 196,
                            "green": 82,
                            "blue": 50,
                            "alpha": 203
                        },
                        "fieldFlags": {
                            "font": 0,
                            "size": 0,
                            "outline": 0,
                            "outlineColor": 0,
                            "shadow": 0,
                            "shadowColor": 0,
                            "padding.0": 1,
                            "padding.1": 1,
                            "padding.2": 1,
                            "padding.3": 1,
                            "lineSpacing": 1,
                            "outlineSize": 0,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1,
                            "bold": 1,
                            "italic": 1,
                            "underline": 1,
                            "smallCaps": 1,
                            "strikeThrough": 1,
                            "color": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "lineSpacing": 0,
                        "outlineSize": 2,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1,
                        "bold": 0,
                        "italic": 0,
                        "underline": 0,
                        "smallCaps": 0,
                        "strikeThrough": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        }
                    },
                    "uid": "B6983FC95E434540FA4BFE2357B0138A09A9",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.ShowText",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "viewport": {
                            "type": "ui"
                        },
                        "predefinedPositionId": 0,
                        "positionType": 1,
                        "number": 1,
                        "duration": 30,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "positionOrigin": 0,
                        "origin": 0,
                        "zOrder": 3000,
                        "text": {
                            "lcId": "D8B0A7326F80E3435B49121637D3726D813F",
                            "defaultText": "    Save            Load                                                                                                                                           Log             Auto               Skip"
                        },
                        "position": {
                            "x": 72,
                            "y": 693
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
                            "easing.type": 0,
                            "animation.type": 1,
                            "origin": 1,
                            "positionOrigin": 0,
                            "zOrder": 0,
                            "blendMode": 1,
                            "viewport.type": 1
                        },
                        "expressions": [],
                        "animations": []
                    },
                    "uid": "DB941057471AB841FD087581FC4CA3041AE0",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 30
                    },
                    "indent": 0,
                    "uid": "99CA9EF3260CC14B499BC499607EA2CAE905"
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here you can edit the two commands below to change the position, font, etc. of the Name-Display. The Name-Display shows the name of the current speaking character."
                    },
                    "indent": 0,
                    "uid": "AB2B8DF6638A264CE47925B222037A53B2BE",
                    "expanded": true
                },
                {
                    "id": "gs.ChangeTextSettings",
                    "params": {
                        "number": 0,
                        "padding": [
                            6,
                            0,
                            6,
                            0
                        ],
                        "font": "Tallys",
                        "size": 42,
                        "outline": 0,
                        "shadow": 0,
                        "outlineColor": {
                            "red": 255,
                            "green": 90,
                            "blue": 76,
                            "alpha": 204
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 7
                        },
                        "fieldFlags": {
                            "font": 0,
                            "size": 0,
                            "outline": 0,
                            "outlineColor": 0,
                            "shadow": 0,
                            "shadowColor": 0,
                            "padding.0": 1,
                            "padding.1": 1,
                            "padding.2": 1,
                            "padding.3": 1,
                            "lineSpacing": 1,
                            "outlineSize": 0,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1,
                            "bold": 1,
                            "italic": 1,
                            "underline": 1,
                            "smallCaps": 1,
                            "strikeThrough": 1,
                            "color": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "lineSpacing": 0,
                        "outlineSize": 2,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1,
                        "bold": 0,
                        "italic": 0,
                        "underline": 0,
                        "smallCaps": 0,
                        "strikeThrough": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 0
                        }
                    },
                    "uid": "4D8A20CA7E8AF84376986BD305D303310F8D",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.ShowText",
                    "params": {
                        "viewport": {
                            "type": "ui"
                        },
                        "predefinedPositionId": 9,
                        "positionType": 1,
                        "number": 0,
                        "duration": 0,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "origin": 0,
                        "zOrder": 2000,
                        "text": {
                            "lcId": "2AB6BA3E45296549E1380FC5C4067FC97560",
                            "defaultText": "   "
                        },
                        "position": {
                            "x": 45,
                            "y": 490
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
                            "easing.type": 0,
                            "animation.type": 0,
                            "origin": 0,
                            "zOrder": 0,
                            "blendMode": 1,
                            "viewport.type": 1,
                            "positionOrigin": 1
                        },
                        "expressions": [],
                        "animations": [],
                        "numberDomain": "com.degica.vnm.default",
                        "positionOrigin": 0
                    },
                    "indent": 0,
                    "uid": "F48A2B1172D1A64C005A87A76172A5545D9C",
                    "expanded": false
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here we create the custom message area. Edit the boundaries of that message area to fit with your custom message box image."
                    },
                    "indent": 0,
                    "uid": "79C6742142FD7146A83801037647EB20A379",
                    "expanded": true
                },
                {
                    "id": "gs.CreateMessageArea",
                    "params": {
                        "number": 0,
                        "box": {
                            "x": 90,
                            "y": 550,
                            "angle": 0,
                            "zoom": 1,
                            "data": {
                                "x": 190,
                                "y": 557,
                                "width": 877,
                                "height": 152,
                                "zoom": 1,
                                "angle": 0
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 935,
                                "height": 154
                            }
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "A66D581A67A6544D627BC414A0FC10CB7EF5"
                },
                {
                    "id": "gs.SetTargetMessage",
                    "params": {
                        "id": "gameMessage_message",
                        "number": 0,
                        "type": 1,
                        "clear": 1,
                        "numberDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "56C1F29F6B426743A648D93731561AD75049"
                },
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "Here you can set the color, font, etc. of the actual message text."
                    },
                    "indent": 0,
                    "uid": "53B40BC5911DA94E0D2B3BB053357F84FA29",
                    "expanded": true
                },
                {
                    "id": "gs.MessageSettings",
                    "params": {
                        "backlog": 1,
                        "autoErase": 1,
                        "waitAtEnd": 1,
                        "font": "Rubik-Regular",
                        "size": 26,
                        "outline": 1,
                        "shadow": 0,
                        "outlineColor": {
                            "red": 237,
                            "green": 167,
                            "blue": 145,
                            "alpha": 255
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        },
                        "fieldFlags": {
                            "autoErase": 1,
                            "waitAtEnd": 1,
                            "backlog": 1,
                            "font": 0,
                            "size": 0,
                            "outline": 0,
                            "outlineColor": 0,
                            "shadow": 0,
                            "shadowColor": 1,
                            "bold": 1,
                            "italic": 0,
                            "smallCaps": 1,
                            "underline": 1,
                            "strikeThrough": 1,
                            "color": 0,
                            "lineSpacing": 0,
                            "linePadding": 0,
                            "paragraphSpacing": 1,
                            "lineHeight": 0,
                            "useCharacterColor": 1,
                            "outlineSize": 0,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "color": {
                            "red": 255,
                            "green": 255,
                            "blue": 255,
                            "alpha": 255
                        },
                        "bold": 0,
                        "italic": 0,
                        "smallCaps": 0,
                        "underline": 0,
                        "strikeThrough": 0,
                        "lineSpacing": 8,
                        "linePadding": 10,
                        "paragraphSpacing": 0,
                        "lineHeight": 48,
                        "useCharacterColor": 0,
                        "outlineSize": 3,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1
                    },
                    "uid": "67563540171B324854388FA1044331A837BA",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.ChangeTextSettings",
                    "params": {
                        "number": 7,
                        "padding": [
                            6,
                            0,
                            6,
                            0
                        ],
                        "font": "Tallys",
                        "size": 30,
                        "outline": 0,
                        "shadow": 0,
                        "outlineColor": {
                            "red": 255,
                            "green": 90,
                            "blue": 76,
                            "alpha": 204
                        },
                        "shadowColor": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 7
                        },
                        "fieldFlags": {
                            "font": 0,
                            "size": 0,
                            "outline": 0,
                            "outlineColor": 0,
                            "shadow": 0,
                            "shadowColor": 0,
                            "padding.0": 1,
                            "padding.1": 1,
                            "padding.2": 1,
                            "padding.3": 1,
                            "lineSpacing": 1,
                            "outlineSize": 0,
                            "shadowOffsetX": 1,
                            "shadowOffsetY": 1,
                            "bold": 1,
                            "italic": 1,
                            "underline": 1,
                            "smallCaps": 1,
                            "strikeThrough": 1,
                            "color": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "lineSpacing": 0,
                        "outlineSize": 2,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1,
                        "bold": 0,
                        "italic": 0,
                        "underline": 0,
                        "smallCaps": 0,
                        "strikeThrough": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "color": {
                            "red": 255,
                            "green": 0,
                            "blue": 0,
                            "alpha": 255
                        }
                    },
                    "uid": "1A7ED46745A6F54B064A4DA3C7ADB12D866F",
                    "indent": 0,
                    "expanded": false
                },
                {
                    "id": "gs.ShowText",
                    "params": {
                        "viewport": {
                            "type": "ui"
                        },
                        "predefinedPositionId": 2,
                        "positionType": 1,
                        "number": 7,
                        "duration": 0.06,
                        "waitForCompletion": 0,
                        "blendMode": 0,
                        "origin": 0,
                        "zOrder": 2000,
                        "text": {
                            "lcId": "8BA6BFBA78B29641AA791F1784E2C1A0BC9D",
                            "defaultText": "DEBUG\nPath[{GN:0005}]\nScene[{GN:0006}]\nMessageblock[{GN:0004}]"
                        },
                        "position": {
                            "x": 10,
                            "y": 10
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
                            "animation.type": 0,
                            "origin": 0,
                            "zOrder": 0,
                            "blendMode": 1,
                            "viewport.type": 1,
                            "positionOrigin": 0
                        },
                        "expressions": [],
                        "animations": [],
                        "numberDomain": "com.degica.vnm.default",
                        "positionOrigin": 0
                    },
                    "indent": 0,
                    "uid": "56D4695F1C5D00454D897781205003AAE808",
                    "expanded": false
                }
            ],
            "index": "EE30FAC234EED248DC294422B683D5178BBF",
            "booleanVariables": [
                {
                    "name": "Auto Message",
                    "index": 0,
                    "scope": 0
                },
                {
                    "name": "Skip",
                    "index": 1,
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
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86",
            "listVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "localizableStrings": {
            "D8B0A7326F80E3435B49121637D3726D813F": {
                "t": "    Save            Load                                                                                                                                           Log             Auto               Skip",
                "d": null
            },
            "2AB6BA3E45296549E1380FC5C4067FC97560": {
                "t": "   ",
                "d": null
            },
            "8BA6BFBA78B29641AA791F1784E2C1A0BC9D": {
                "t": "DEBUG\nPath[{GN:0005}]\nScene[{GN:0006}]\nMessageblock[{GN:0004}]",
                "d": null
            }
        },
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC"
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}
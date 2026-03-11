var config_data = `{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "GIANNA TEST",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026ilch",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    {"name": "auton starting position",
      "code": "as",
      "type": "radio",
      "choices": {
        "t1": "trench 1<br>",
        "b1": "bump 1<br>",
        "h": "hub<br>",
        "b2": "bump 2<br>",
        "t2": "trench 2<br>"
        }
    }
    ],
  "teleop": [
    { "name": "Fuel Scored",
      "code": "asl",
      "expectedMax": 32,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Pass from Neutral Zone",
      "code": "afs",
      "expectedMax": 60,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Climb (L1)",
      "code": "apn",
      "type": "radio",
      "choices": {
        "c": "Climbed<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Pickup from Depot",
      "code": "ac",
      "type": "bool"
    },
    { "name": "Pickup from Outpost",
      "code": "afd",
      "type": "bool"
    },
    { "name": "Pickup from Neutral Zone",
      "code": "afo",
      "type": "bool"
    },
    { "name": "Fuel Scored",
      "code": "aff",
      "expectedMax": 150,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    {"name": "unloading speed",
      "code": "tsl",
      "type": "radio",
      "choices": {
        "1": "slow<br>",
        "2": "average<br>",
        "3": "fast<br>"
        }
    },
    {"name": "shooting",
      "code": "tfs",
      "type": "radio",
      "choices": {
        "1": "few<br>",
        "2": "average<br>",
        "3": "plentiful<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
        }
    },
    { "name": "Pickup from Depot",
      "code": "pnz",
      "type": "bool"
    },
    { "name": "Feed the Outpost",
      "code": "poa",
      "type": "bool"
    },
    { "name": "Pickup from Floor",
      "code": "tfd",
      "type": "bool"
    }
  ],
 "endgame": [
    { "name": "Climb",
      "code": "tfo",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "tff",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "tc",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "ds",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Crossed Bump",
      "code": "dr",
      "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "sr",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "bmp",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "tre",
      "type": "bool"
    },
    { "name": "Was Defended",
      "code": "die",
      "type": "bool"
    },
    { "name": "accurate shooting",
      "code": "tip",
      "type": "bool"
      },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 250
    }
  ]
}';

var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "HARLEY TEST",
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
    }
  ],
  "auton": [
    { "name": "Fuel Scored",
      "code": "afs",
      "expectedMax": 32,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Climb (L1)",
      "code": "ac",
      "type": "radio",
      "choices": {
        "c": "Climbed<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Pickup from Depot",
      "code": "afd",
      "type": "bool"
    },
    { "name": "Pickup from Outpost",
      "code": "afo",
      "type": "bool"
    },
    { "name": "Pickup from Neutral Zone",
      "code": "aff",
      "type": "bool"
    },
    { "name": "Auton Accuracy",
      "code": "aac",
      "type": "radio",
      "choice": {
      "n": "Not Accurate",
      "av": "Average",
      "a": "Accurate",
      "x": "Not Observed"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [  
    {"name": "Cycle Time",
      "code": "tct",
      "type": "timer"
    },
    { "name": "Cycle Accuracy",
      "code": "tca",
      "type": "radio",
      "choices": {
        "1": "Few",
        "2": "Average",
        "3": "Plentiful",
        "x": "Not Attempted"
        },
        "defaultValue": "x"
      },
      { "name": "Teleop Amount Shot",
        "code": "tas",
        "type": "radio",
        "choices": {
        "f": "Few",
        "a": "Average",
        "p": "Plentiful",
        "x": "Not Observed"
        },
        "defaultValue": "x"
        },
      { "name": "Teleop Shooting Speed",
        "code": "tss",
        "type": "radio",
        "choices": {
        "s": "Slow",
        "a": "Average",
        "f": "Fast",
        "x": "Not Observed",
        }
        "defaultValue": "x"
      },
       { "name": "Teleop Accuracy",
      "code": "tac",
      "type": "radio",
      "choice": {
      "n": "Not Accurate",
      "av": "Average",
      "a": "Accurate",
      "x": "Not Observed"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
      { "name": "Climbing Speed",
        "code": "csp",
        "type": "timer"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
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
      "code": "dr",
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
      "code": "sr",
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
    { "name": "Crossed Trench",
      "code": "tre",
      "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Was Defended",
      "code": "def",
      "type": "bool"
    },
    { "name": "Excessive Penalties",
      "code": "pen",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 250
    }
  ]
}`;

# Spotboard Award Slide Generator

## Requirements

- Node.js 6+

## Instructions

### contest.json

Original spotboard format. See [example](./contest.json).

### award.json

Full example [here](./award.json).

```json
{
    "groups": {
        "Seoul National University": "서울대학교",
        "Korea University": "고려대학교",
        "Yonsei University": "연세대학교"
    },
    "awards": [
        {
            "rank": "대상",
            "icon": "crown_gold",
            "teams": [70]
        },
        {
            "rank": "금상",
            "icon": "medal_gold_blue",
            "teams": [2, 60, 62]
        }
    ]
}
```

### How to run

```bash
node index.js
```

### Result (award_slide.json)

Full result [here](./award_slide.json).

```json
[
    {
        "id": 70,
        "rank": "대상",
        "icon": "crown_gold",
        "name": "ACGTeam",
        "group": "서울대학교"
    },
    {
        "id": 2,
        "rank": "금상",
        "icon": "medal_gold_blue",
        "name": "hYEAHyea",
        "group": "KAIST"
    },
    {
        "id": 60,
        "rank": "금상",
        "icon": "medal_gold_blue",
        "name": "Never Give Up",
        "group": "고려대학교"
    },
    {
        "id": 62,
        "rank": "금상",
        "icon": "medal_gold_blue",
        "name": "Real Recognize Real",
        "group": "연세대학교"
    }
]
```
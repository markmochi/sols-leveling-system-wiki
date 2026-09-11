# EXP tables

These values use the v1.0.3 balanced defaults. Mastery requirements continue to round to the nearest ten.

## Player Level

Requirement for the next level: `60 × level`

Total EXP to reach level 50: **73,500**

| Reach level | Total Player EXP | Aptitude points earned |
| ---: | ---: | ---: |
| 1 | 0 | 0 |
| 2 | 60 | 3 |
| 5 | 600 | 12 |
| 10 | 2,700 | 27 |
| 15 | 6,300 | 42 |
| 20 | 11,400 | 58 |
| 25 | 18,000 | 73 |
| 30 | 26,100 | 88 |
| 35 | 35,700 | 104 |
| 40 | 46,800 | 119 |
| 45 | 59,400 | 134 |
| 50 | 73,500 | 150 |

With `longProgressionMode = true`, Player Levels use the original `70 × level^1.08` curve and require **112,670 total EXP** to reach level 50. The Guild Ledger can calculate either profile.

## Combat Masteries

Requirement for the next level: `150 × level^1.3`  
Total EXP to reach mastery level 30: **156,640 per mastery**

| Reach mastery level | Total Mastery EXP |
| ---: | ---: |
| 1 | 0 |
| 2 | 150 |
| 5 | 2,060 |
| 10 | 11,550 |
| 15 | 30,570 |
| 20 | 60,440 |
| 25 | 102,180 |
| 30 | 156,640 |

[Calculate any level range in the Guild Ledger →](../builds/planner.md){ .codex-button }

!!! note "Server configuration"
    Server owners can select Long Progression Mode and change caps or other progression settings. The in-game interface is authoritative for a customized server.

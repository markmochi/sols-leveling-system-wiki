# Sol's Leveling System

**Sol's Leveling System is a server-authoritative Minecraft RPG leveling mod with Player Levels, five Aptitude skill trees, 25 ranked Aptitude Passives, three Combat Masteries, and 18 automatic Mastery Passives.**

Fight dangerous creatures, survive hostile territory, specialize your character, and master the combat styles you actually use. Stronger modded enemies can grant more progress, while repeated farms, overkill, summoned targets, and invalid damage paths are controlled by server-side anti-exploit rules.

## Open the Leveling Screen

Press **Y** while playing to open the Leveling Screen. This is the default keybind on every supported edition.

You can also open your inventory and click the **Open Leveling** crest beside it. If another mod already uses Y, change **Open Leveling Screen** in Minecraft's Controls menu under **Sol's Leveling System**.

The Leveling Screen contains your Player Level and EXP progress, available Aptitude Points, stat previews, Aptitude allocation, ranked Passives, Combat Masteries, recent EXP sources, and confirmation prompts.

## Main features

- Player Levels 1–50 and a 150-point Aptitude budget.
- Five Aptitudes: HP – Vitality, DEF – Fortitude, DEX – Dexterity, INT – Intellect, and LUCK – Fortune.
- 25 ranked, individually toggleable Aptitude Passives.
- STR, WEAPON, and RANGE Masteries from level 1–30.
- 18 automatic, individually toggleable Mastery Passives.
- Parchment-style RPG screen with build previews, recent EXP sources, requirement checks, and confirmation prompts.
- Level-up and passive notifications, combat HUDs, item classification tooltips, and player-level nameplates.
- Server configuration and datapack support for progression, classifications, tags, passive gates, parties, and anti-farm balance.

## Five Aptitude paths

- **HP – Vitality:** Max HP, improved healing, overheal barriers, underwater endurance, persistent-hazard resistance, and Last Resort.
- **DEF – Fortitude:** Armor, Toughness, knockback resistance, lower armor wear, Guarded, Last Bastion, and damage-type Adaptation.
- **DEX – Dexterity:** Movement Speed, efficient sprinting, climbing, mobile item use, Ender Pearl Return Marks, and Flow State.
- **INT – Intellect:** increased experience-orb gain, longer beneficial effects, merchant discounts, Night Eye, Field Study, and retained lost XP.
- **LUCK – Fortune:** Loot Luck, compatible status-roll improvement, Lucky Recovery, Lucky Drop, Fateful Strike, Overconfidence, and Limit Breaker.

By the default level cap, you can fully master three Aptitudes or divide points across a hybrid build. Spending unused points is free. Removing confirmed ranks costs raw Minecraft Experience points and is briefly combat-locked. Aptitude passive ranks do not consume points; claim them when both their Player Level and Aptitude requirements are met.

## Combat Masteries

- **STR** grows from effective hostile damage dealt with an empty main hand. Its milestones empower unarmed attacks and supported bare-hand ore harvesting.
- **WEAPON** grows from recognized melee-weapon damage. Its milestones improve attack speed, opening and finishing hits, stability, and weapon damage.
- **RANGE** grows from recognized ranged attacks. Its milestones reward steady aim, point-blank control, long shots, finishing attacks, and marksmanship.

Mastery EXP uses final effective hostile health removed. Overkill is ignored, healed-back health cannot be credited twice, and one attack path feeds at most one Mastery. Supported items show their server classification in the tooltip.

## Fair Player EXP

Mob EXP is based on a spawn-time snapshot of health, defense, threat, encounter difficulty, boss status, spawn origin, and repetition. Recent damage contributors share the final reward, and nearby active party members can share it through the optional Sol's Party System integration.

Active Survival also grants a small Player EXP reward every five eligible minutes when you remain active and have recently faced hostile danger. AFK time does not count.

## Limit Breaker

Fortune's capstone is a high-risk combat wager. After one boss, elite, or hostile player deals cumulative damage equal to 30% of your Max HP, falling to 30% HP or lower can offer **All In**. Hold Sneak to accept, recover, gain a shield and temporary combat bonuses, and defeat the marked Limit before time expires.

Victory grants recovery, bonus progression, and eligible bonus loot. Failure causes a long Limit Crash that reduces damage, movement, healing, and access to Luck passives.

## Installation

Install the correct file in the `mods` folder on **both the server and every connecting client**.

| Minecraft | Loader | Minimum loader | Java |
|---|---|---:|---:|
| 1.16.5 | Forge | 36.2.39 | 8 |
| 1.20.1 | Forge | 47.2.0 | 17 |
| 1.21.1 | NeoForge | 21.1.229 | 21 |

There are no required content-mod dependencies. Do not mix Forge and NeoForge files.

## Optional integrations

- Sol's Party System for conserved nearby Player EXP sharing.
- Sol's Title System for compatible nameplate composition.
- Sol's Relic System for compatible Fortunate Critical behavior.
- Built-in modded weapon and encounter classifications, with datapack tags and JSON overrides for pack authors.

Read the complete **[Adventurer's Codex](https://markmochi.github.io/sols-leveling-system-wiki/)** for every passive, exact EXP tables, build planning, controls, commands, configuration, compatibility, and troubleshooting.

**Level. Specialize. Master your path.**

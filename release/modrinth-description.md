# Sol's Leveling System

**Sol's Leveling System is a server-authoritative Minecraft RPG leveling mod with Player Levels, five Aptitude trees with 10-rank Awakenings, 25 ranked Aptitude Passives, and three Combat Masteries with branching Skill Trees (36 Mastery Passives).**

Fight dangerous creatures, survive hostile territory, specialize your character, and master the combat styles you actually use. Stronger modded enemies grant more progress, while repeated farms, overkill, summoned targets, and invalid damage paths are controlled by server-side anti-exploit rules.

## Open the Leveling Screen

Press **Y** while playing to open the Leveling Screen. This is the default keybind on every supported edition.

You can also open your inventory and use the native **Leveling** tab. Press the configured key again to close the screen; the toggle continues to work after rebinding it in Minecraft's Controls menu.

The Leveling Screen contains your Player Level and EXP progress, available Aptitude Points, stat previews, Aptitude allocation, ranked Passives, ascending Mastery Skill Trees, recent EXP sources, and confirmation prompts.

## Main features

- Player Levels 1–50, a 150-point Aptitude budget, a balanced 73,500-EXP default curve, and optional Long Progression Mode for the legacy journey and passive gates.
- Five Aptitudes: HP – Vitality, DEF – Fortitude, DEX – Dexterity, INT – Intellect, and LUCK – Fortune.
- 25 ranked, individually toggleable Aptitude Passives culminating in five 10-rank **Awakenings** (**Last Resort**, **Adaptation**, **Flow State**, **Eidetic Memory**, and **Limit Breaker**).
- STR, WEAPON, and RANGE Masteries from level 1–30 with ascending **Skill Trees** (**36 Mastery Passives**), sequential tier choices (Lv. 5–25), **Lv. 30 Awakenings**, and Vanilla XP Level tree resets.
- Parchment-style RPG interface and ascending skill trees with confirmation prompts and concise tooltips.
- Compact hotbar-adjacent combat HUD badges, crosshair cues, distinct target outlines (Crimson, Amethyst, Emerald), item classification tooltips, and player-level nameplates.
- Server configuration and datapack support for progression, passive values, classifications, tags, gates, parties, and anti-farm balance.

## Five Aptitude paths

- **HP – Vitality:** Max HP, improved healing, up to 20% Max-HP overheal barriers, underwater endurance, persistent-hazard resistance, and **Last Resort** (Second Wind regen, Undying Surge, Absorption barrier, and Rally).
- **DEF – Fortitude:** Armor, Toughness, knockback resistance, lower armor wear, Guarded, Last Bastion, and **Adaptation** (+0.5 to +5.0 Iron Skin Toughness, dual-category damage resistance, and Immunity Surge).
- **DEX – Dexterity:** Movement Speed and Attack Speed, efficient sprinting, climbing, up to 50% mobile item handling, Ender Pearl Return Marks, and 5-stack **Flow State** (Move/Attack Speed, direct-hit Evasion, and Afterimage).
- **INT – Intellect:** increased experience-orb gain, longer beneficial effects, merchant discounts, Night Eye, Field Study, and **Eidetic Memory** (lost-XP retention, +2%–15% bonus Mastery EXP, and target **Expose**).
- **LUCK – Fortune:** a chance for an additional full chest, fishing, or mob loot-table roll; compatible state-roll improvement; Lucky Recovery; Lucky Drop; Fateful Strike; Overconfidence; and **Limit Breaker** (Fortune Favors the Bold proc boost + **All In** boss duels).

By the default level cap, you can fully master three Aptitudes or divide points across a hybrid build. Spending unused points is free. Refunding confirmed Aptitude ranks costs raw Minecraft Experience points, while resetting chosen nodes in a Mastery Skill Tree costs **4–12 Vanilla XP Levels**.

## Combat Masteries

- **STR — Brawler:** Grows from effective hostile damage dealt with an empty main hand. Choose between unarmed brawling, flurries, stagger haymakers, parries, armor-crushing blows, and lifesteal up to **Titan Hands** (**Earthshaker** shockwave), plus automatic bare-hand ore harvesting.
- **WEAPON — Warrior:** Grows from recognized melee-weapon damage. Choose fast or heavy grips, openers or finishers, defensive stance or **Bloodthirst**, armor-shredding **Sunder**, **Momentum**, or 1v1 **Duelist** up to **Weapon Master** (**Masterstroke** cleave).
- **RANGE — Ranger:** Grows from recognized ranged attacks. Choose steady aim or quick draws, longshots or point-blank shoves, piercing shots or **Hunter's Mark**, multi-arrow **Volley**, finishers, or kiting up to **Marksman** (**Deadeye** focused piercing crit).

Mastery EXP uses final effective hostile health removed. Overkill is ignored, healed-back health cannot be credited twice, and one attack path feeds at most one Mastery. Supported items show their server classification in the tooltip.

## Fair Player EXP

Mob EXP is based on a spawn-time snapshot of health, defense, threat, encounter difficulty, boss status, spawn origin, and repetition. Direct kill contributors are always included in the distribution, and nearby active party members can share it through the optional Sol's Party System integration.

Active Survival also grants a small Player EXP reward every five eligible minutes when you remain active and have recently faced hostile danger. AFK time does not count.

## Limit Breaker

Fortune's Awakening boosts your Luck procs passively and offers high-risk combat wagers. After one boss, elite, or hostile player deals cumulative damage equal to 30% of your Max HP, falling to 30% HP or lower can offer **All In**. Hold Sneak to accept, recover, gain a shield and temporary combat bonuses, and defeat the marked Limit before time expires.

Victory grants recovery, bonus progression, and eligible bonus loot. Failure causes Limit Crash, reducing damage, movement, healing, and access to Luck passives.

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
- Sol's Relic System for compatible Fortunate Critical behavior and one shared Loot Luck bonus roll when expanded Luck support is available.
- Built-in modded weapon and encounter classifications, with datapack tags and JSON overrides for pack authors.

Read the complete **[Adventurer's Codex](https://markmochi.github.io/sols-leveling-system-wiki/)** for every passive, exact EXP tables, build planning, controls, commands, configuration, compatibility, and troubleshooting.

**Level. Specialize. Master your path.**

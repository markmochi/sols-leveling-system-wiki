---
title: Combat Masteries
description: STR, WEAPON, and RANGE Mastery progression, ascending skill trees, Awakenings, classification, effective damage, and reset rules.
---

# Combat Masteries

Masteries reward how you fight rather than where you spend Aptitude Points. **STR**, **WEAPON**, and **RANGE** each begin at level 1 and reach a default cap of 30, unlocking a branching **Skill Tree** from **Lv. 5** up to a **Lv. 30 Awakening**.

## Default curve

The Mastery EXP needed to advance from Mastery level `L` is:

```text
nearest 10 of 150 × L^1.3
```

- Mastery 1 → 2 costs **150 effective damage**.
- Mastery 1 → 30 costs **156,640 Mastery EXP**.
- Progress is tracked in tenths so fractional final damage is not lost.
- Each Mastery has its own independent EXP total, level, and chosen skill tree path.
- INT's **Eidetic Memory** Awakening can grant **+2% to +15% bonus Mastery EXP**.

## The three paths

| Mastery | Earned by | Base bonus at level 30 | Skill tree identity |
|---|---|---:|---|
| **STR** *(Brawler)* | Direct hostile damage while the main hand is empty | +30% unarmed damage | Unarmed combo brawling, parries, lifesteal, **Titan Hands / Earthshaker** Awakening, plus bare-hand ore breaking |
| **WEAPON** *(Warrior)* | Direct hostile damage with a recognized melee weapon | +20% matching damage | Grip tempo vs. heavy cleaves, openers/finishers, sustain, armor shred, 1v1 dueling, **Weapon Master / Masterstroke** Awakening |
| **RANGE** *(Ranger)* | Direct hostile damage through a recognized ranged path | +20% matching damage | Draw speed vs. steady aim, range control, piercing/marks, multi-arrow volleys, kiting, **Marksman / Deadeye** Awakening |

## Ascending Skill Trees & Awakenings

Each Mastery opens an ascending bottom-to-top **Skill Tree**:

1. **Sequential Tier Choices (Lv. 5, 10, 15, 20, and 25):** Each tier offers **2 competing styles**. You must pick **1 node per tier** starting from **Lv. 5 upward**—higher tiers cannot be chosen until the previous tier has been locked in.
2. **Confirmation & Sealed Branches:** Clicking a candidate node opens a confirmation prompt showing its effect and which rival node it seals for that tier. Chosen nodes can still be toggled ON or OFF individually without losing your selection.
3. **Lv. 30 Awakening:** Reaching Mastery **Lv. 30** and completing **all 5 tier choices** awakens the capstone at the top of the tree (**Titan Hands**, **Weapon Master**, or **Marksman**), granting both permanent bonuses and a signature combat mechanic.
4. **Resetting a Mastery Tree:** Out of combat (10-second combat lock), you can reset all chosen tiers in a Mastery tree to reselect your path from Lv. 5 upward. Resetting costs **Vanilla XP Levels** based on how many tiers are currently locked in:

```text
2 + (2 × chosen tiers) Vanilla XP Levels   →   4 to 12 XP Levels
```

## Effective-damage accounting

Mastery credit is the final health actually removed after damage handling, capped to the target's health before the hit.

- Overkill does not count.
- Recovered health cannot expand the life-long credit budget.
- The target must be an eligible hostile or aggressive combat encounter.
- Players, owned creatures, training targets, and denied entities do not count.
- A target with zero spawn-origin credit does not grant Mastery EXP.
- Repeated same-type training consumes a separate persistent Mastery budget.
- One hit chooses at most one Mastery.

## How items are classified

The authoritative server resolves classification in a deliberate order:

1. explicit deny or JSON override;
2. datapack item tags;
3. vanilla use behavior and known weapon families;
4. modded class-name and capability signals;
5. attack-attribute fallback.

Possible results are `MELEE`, `RANGED`, `HYBRID`, `UNARMED`, or `EXCLUDED`.

- A hybrid weapon contributes according to the actual melee or ranged attack path.
- A direct/hitscan launcher can count as RANGE when its held item is recognized as a ranged candidate.
- Projectile state records the launch item, position, and sprint state so changing gear after firing does not rewrite the shot.
- The tooltip tells the player which Mastery the held item contributes to.

## Damage bonus caps

STR's base percentage, conditional bonuses, and flat fist damage together can add no more than **+14 damage** to one hit.

WEAPON and RANGE use one shared Leveling bonus bucket per hit. The total added damage is capped to the smallest of:

- the calculated base and conditional Mastery bonus;
- **45%** of the original hit (**70%** on **Masterstroke** and **Deadeye** signature hits); or
- **40** absolute damage.

This allows skill-tree synergies and Awakening signatures to hit decisively without letting modded multi-hundred-damage weapons scale out of control.

## STR hand-mining track

Alongside the Brawler choice tree, STR Mastery automatically unlocks three hand-mining passives beneath the tree (**Ore Breaker I** at Lv. 10, **Ore Breaker II** at Lv. 15, and **Ancient Breaker** at Lv. 20). Unlocked nodes let empty hands harvest supported blocks through normal loot tables, and **Titan Hands** accelerates hand-mining speed by **40%**.

- **Ore Breaker I** includes common stone-family blocks as well as common natural ores.
- Only successfully broken, naturally generated tracked ore grants **0.1 STR Mastery EXP** (ordinary stone can be harvested cleanly without becoming a Mastery farm).
- Player-placed ore grants no Mastery EXP.
- The default hourly cap is **10 STR Mastery EXP** from hand mining.
- Disabling a hand-mining node immediately disables harvesting for that tier.

See [Mastery passive trees](../reference/mastery-passives.md) for every tier choice, Awakening, cooldown, and exact value.

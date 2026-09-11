---
title: Combat Masteries
description: STR, WEAPON, and RANGE Mastery progression, classification, effective damage, and anti-training rules.
---

# Combat Masteries

Masteries reward how you fight, not where you spend Aptitude Points. STR, WEAPON, and RANGE each begin at level 1 and reach a default cap of 30.

## Default curve

The Mastery EXP needed to advance from Mastery level `L` is:

```text
nearest 10 of 150 × L^1.3
```

- Mastery 1 → 2 costs **150 effective damage**.
- Mastery 1 → 30 costs **156,640 Mastery EXP**.
- Progress is tracked in tenths so fractional final damage is not lost.
- Each Mastery has its own independent EXP total and level.

## The three paths

| Mastery | Earned by | Base bonus at level 30 | Milestone identity |
|---|---|---:|---|
| STR | Direct hostile damage while the main hand is empty | +30% unarmed damage | empowered fists and bare-hand ore breaking |
| WEAPON | Direct hostile damage with a recognized melee weapon | +15% matching damage | attack speed, stability, openers, finishers |
| RANGE | Direct hostile damage through a recognized ranged path | +15% matching damage | steady aim, range bands, finishers, marksmanship |

Milestone passives unlock automatically at levels 5, 10, 15, 20, 25, and 30. Every unlocked Mastery passive can be toggled separately.

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

STR's base percentage and fist flat damage together can add no more than **10 damage** to one hit.

WEAPON and RANGE use one shared Leveling bonus bucket per hit. The total added damage is capped to the smallest of:

- the calculated base and conditional Mastery bonus;
- 30% of the original hit; or
- 30 absolute damage.

This allows milestone combinations to matter without letting several conditional nodes create runaway scaling on very large modded attacks.

## STR hand-mining training

Unlocked Ore Breaker nodes let empty hands harvest supported blocks through normal loot tables. Ore Breaker I includes common stone-family blocks as well as common ores. Only successfully broken, naturally generated tracked ore can grant STR Mastery EXP; ordinary stone can be harvested but does not become a Mastery farm.

- Each eligible block grants 0.1 STR Mastery EXP.
- Player-placed ore grants none.
- The default hourly cap is 10 STR Mastery EXP from hand mining.
- Haste, Mining Fatigue, water, and airborne penalties remain relevant.
- Disabling a required passive immediately removes that ore tier.

See [Mastery passive trees](../reference/mastery-passives.md) for every milestone and exact condition.

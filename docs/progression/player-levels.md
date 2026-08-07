---
title: Player Level and EXP
description: How Player EXP, mob rewards, contribution sharing, repetition limits, and level progression work.
---

# Player Level and EXP

Player Level is the backbone of your character build. Players begin at level 1, the default cap is 50, and reaching the cap grants a total entitlement of 150 Aptitude Points.

## Default curve

The EXP needed to advance from level `L` is:

```text
nearest 10 of 70 × L^1.08
```

- Level 1 → 2 costs **70 Player EXP**.
- Level 1 → 50 costs **112,670 Player EXP** in total.
- The opening is paced so one unusually enhanced early mob should not skip the early game.
- The low exponent keeps later levels growing without turning the cap into an extreme grind.

See [EXP tables](../reference/xp-tables.md) for milestones and the interactive calculator.

## How creature EXP is valued

The server snapshots a creature when it spawns and calculates a bounded reward from:

```text
√base health × defense × threat × encounter × category × origin × repetition
```

The factors mean:

| Factor | Player-facing meaning |
|---|---|
| Base health | Tougher creatures begin with a larger pool, using square-root scaling rather than raw HP |
| Defense | Armor and Toughness raise value within a configured cap |
| Threat | Attack Damage, Movement Speed, and the mob author's normal XP reward can raise value |
| Encounter | Exceptional encounters, including the Ender Dragon, receive additional recognition |
| Category | Hostile and aggressive combatants count; harmless or invalid targets do not |
| Origin | Natural spawns receive full credit; spawners and reinforcements are reduced; unsafe artificial origins may receive zero |
| Repetition | Repeated same-type kills consume a refillable budget and eventually pay less |

Explicit boss tags add the configured boss multiplier. The default final death pool is capped at 1,000 Player EXP before contributor and repetition handling.

## Who receives the reward?

The server tracks final effective damage during the last 30 seconds by default.

- A contributor normally needs at least 5% of recent eligible damage.
- The final hitter remains eligible even with a smaller share.
- The creature's reward is divided proportionally; it is not copied for every attacker.
- Overkill is capped to the health remaining before the hit.
- Healing cannot enlarge the creature's original health budget.
- One life can pay only once.
- Offline contributors receive nothing from the final distribution.

When Sol's Party System sharing is enabled, each party's combined earned share is conserved and divided among eligible nearby members. Recipients must be alive, active, non-spectating, in the same dimension, and within the effective share radius (64 blocks by default).

## Anti-farm behavior

Each player has a persistent token bucket per creature type. The default bucket holds 20 full-credit tokens and restores one token every 15 seconds.

- Ordinary low-value kills consume at least one token.
- High-value rewards consume multiple tokens based on the contributor's share.
- A depleted ordinary bucket pays a 10% floor by default.
- A depleted high-value bucket pays 0% by default once a share reaches the high-value threshold.
- Spawner-origin reduction and repetition reduction can both apply.

This does not ban farms. It makes varied adventure and dangerous encounters the reliable path while keeping short bursts of ordinary combat useful.

## What does not award normal Player EXP?

- Players
- Invulnerable entities
- Owned or tamed creatures
- Explicit training or denied entity types
- Command, spawn-egg, bred, bucketed, converted, dispenser, and unsupported zero-credit summons by default
- A death without an eligible recent contributor
- A duplicate death event from the same life

Pack authors can add explicit valid, denied, boss, aggressive-neutral, and training classifications through tags.

## Player EXP is not Minecraft Experience

Player EXP belongs only to Sol's Leveling System. It is not the green vanilla bar and cannot be spent at an enchanting table.

| Currency | Main uses |
|---|---|
| Player EXP | Player Level and Aptitude entitlement |
| Mastery EXP | STR, WEAPON, or RANGE Mastery |
| Minecraft Experience | Enchanting, anvils, and paid Aptitude respecs; affected by INT |

## Safe persistence

Player EXP persists through normal death, logout, and dimension changes. The server owns all mutations and clamps progress at the active cap. Save migrations preserve prior levels and proportional progress when the built-in curve schema changes.

---
title: Player Level and EXP
description: How Player EXP, mob rewards, contribution sharing, repetition limits, and level progression work.
---

# Player Level and EXP

Player Level is the backbone of your character build. Players begin at level 1, the default cap is 50, and reaching the cap grants a total entitlement of 150 Aptitude Points.

## Default curve

The EXP needed to advance from level `L` is:

```text
60 × L
```

- Level 1 → 2 costs **60 Player EXP**.
- Level 1 → 50 costs **73,500 Player EXP** in total.
- This balanced curve is the v1.0.3 default and reduces the complete level-50 journey by about 35% compared with the original curve.
- Player-Level and Aptitude-rank gates across all 25 Aptitude passives were lowered to match the faster journey.

## Long Progression Mode

Server owners who prefer the original campaign length can enable `longProgressionMode` in `solslevelingsystem-common.toml`. It restores the original `70 × L^1.08` Player EXP curve—**112,670 total EXP** to level 50—and the original Player-Level and Aptitude-rank requirements for every Aptitude passive.

Changing modes does not erase Player EXP, Aptitude allocations, Masteries, or customized passive requirement lists. Existing earned Player EXP is re-read against the active curve. If the longer rules make a purchased passive temporarily ineligible, the normal rules check removes it; the passive can be claimed again for free after both legacy gates are met.

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

- A recent damage contributor normally needs at least 5% of recent eligible damage; the final hitter remains eligible even with a smaller share.
- Players who directly contribute to a kill are always included in its EXP distribution; party-recipient distance and activity checks cannot remove them after they qualify as contributors.
- The creature's reward is divided proportionally; it is not copied for every attacker.
- Overkill is capped to the health remaining before the hit.
- Healing cannot enlarge the creature's original health budget.
- One life can pay only once.
- Offline contributors receive nothing from the final distribution.

When Sol's Party System sharing is enabled, each party's combined earned share is conserved and divided among the contributing player plus eligible nearby party members. Non-contributing recipients must be alive, active, non-spectating, in the same dimension, and within the effective share radius (64 blocks by default).

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

Player EXP persists through normal death, logout, and dimension changes. v1.0.3 also preserves Aptitude allocations, purchased passives, Masteries, and persistent cooldowns through death and respawn; Forge retains pre-death recovery through a disconnect or server restart before respawn. The server owns all mutations and clamps progress at the active cap.

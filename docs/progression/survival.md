---
title: Active Survival
description: How the anti-AFK Active Survival Player EXP streak works.
---

# Active Survival

Active Survival is a small alternative Player EXP source for adventurers who remain active around real danger. It is not an AFK timer and it does not replace combat progression.

## Eligibility each second

The server advances the streak only while all of these are true:

- you are alive;
- you are not in Creative or Spectator mode;
- you are not sleeping;
- the server observed deliberate activity during the last 2 minutes;
- the server observed an eligible hostile danger during the last 5 minutes;
- Active Survival is enabled by the server.

Deliberate activity includes meaningful ground movement outside recent knockback, looking around, and recent normal player actions. Passenger motion by itself does not qualify.

Danger is refreshed by fighting eligible hostile targets or taking damage from a creature the server classifies as a real combat threat.

## Reward interval

Every 300 eligible seconds—five active minutes—the server grants:

```text
1 + min(4, floor(eligible streak hours)) Player EXP
```

| Eligible streak | Reward every five eligible minutes |
|---:|---:|
| Under 1 hour | 1 Player EXP |
| 1–2 hours | 2 Player EXP |
| 2–3 hours | 3 Player EXP |
| 3–4 hours | 4 Player EXP |
| 4+ hours | 5 Player EXP |

An ineligible moment pauses progress; it does not automatically erase the stored streak.

## What resets the streak?

- Normal player death
- Logging out within 15 seconds of combat
- An administrator resetting the `survival` area

Ordinary safe logout outside recent combat preserves the stored streak. The GUI labels the system as active or paused so you can tell whether eligible time is currently advancing.

## Why the reward is small

Active Survival is a background recognition system. Creature victories remain the main Player EXP source, while Survival rewards real travel, exploration, and extended hostile-area play without encouraging players to stand beside a harmless timer.


---
title: DEX - Dexterity
description: Exact Dexterity passive gates and mechanics for Efficient Stride, Agile Climber, Mobile Handling, Turning Point, and Flow State.
---

# DEX — Dexterity

Dexterity is the path of momentum. Its 50 base ranks grant **+0.3% movement speed and +0.2% attack speed each**—up to **+15% movement speed and +10% attack speed**—while its passives improve travel, climbing, item use, ender-pearl repositioning, and combat tempo through **Flow State**. Both base bonuses scale proportionally across vanilla and compatible modded weapons.

<div class="passive-banner"><div class="passive-banner__icon"><span>DEX</span></div><div><strong>The Wayfarer's Path</strong><p>Best for explorers, archers, skirmishers, and anyone who values speed, tempo, and evasion over standing still.</p></div></div>

## Base aptitude

| DEX | Movement speed | Attack speed |
| ---: | ---: | ---: |
| 10 | +3% | +2% |
| 25 | +7.5% | +5% |
| 40 | +12% | +8% |
| 50 | +15% | +10% |

This is an attribute bonus, so it remains active even when every passive is toggled off.

## Efficient Stride

Reduces exhaustion caused by **land sprinting and jumping**. It does not make food refill more hunger; it makes high-mobility travel consume hunger more slowly.

| Passive rank | 1 | 2 | 3 | 4 | 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| DEX required | 4 | 10 | 18 | 26 | 34 |
| Player Level | 3 | 7 | 12 | 20 | 29 |
| Exhaustion reduction | 5% | 10% | 15% | 20% | 25% |

## Agile Climber

Improves ladder, vine, and tagged climbable traversal. Rank 5 also lets you **hold Sneak without sliding down**, making construction and vertical fights safer.

| Passive rank | 1 | 2 | 3 | 4 | 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| DEX required | 6 | 12 | 20 | 28 | 36 |
| Player Level | 4 | 8 | 14 | 22 | 31 |
| Climb speed | +6% | +12% | +16% | +20% | +30% |

## Mobile Handling

Reduces vanilla's movement penalty while using items such as bows, crossbows, shields, food, and potions. **It does not shorten the item's use duration.**

| Passive rank | 1 | 2 | 3 | 4 | 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| DEX required | 10 | 16 | 23 | 30 | 38 |
| Player Level | 6 | 11 | 17 | 25 | 34 |
| Penalty reduction | 10% | 20% | 30% | 40% | 50% |
| Approx. movement while using | 28% | 36% | 44% | 52% | 60% |

The last row expresses movement relative to normal walking/sprinting speed, assuming vanilla's 20% use-item movement multiplier.

## Turning Point

After throwing an ender pearl, this passive may leave a Return Mark. While active, **Sneak + use while holding an ender pearl** returns you to your departure point without consuming the held pearl.

| Passive rank | 1 | 2 | 3 | 4 | 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| DEX required | 22 | 28 | 34 | 40 | 45 |
| Player Level | 14 | 20 | 27 | 35 | 42 |
| Mark chance | 15% | 25% | 35% | 45% | 100% |
| Mark duration | 5s | 10s | 12s | 15s | 20s |
| Cooldown | 60s | 52s | 45s | 38s | 30s |

Returning costs **6 hunger points**, deals **5 ender-pearl damage**, and applies Slowness I for 3 seconds. If the exact return spot is blocked, the server searches upward for a safe landing; if none exists, the teleport is safely refused.

## Flow State *(Awakening)*

Sprinting, sprint-jumping, climbing, and swimming build up to **5 Flow stacks**, increasing both **Movement Speed** and **Attack Speed**. Standing mostly still for more than **1 second** clears all stacks; immobilization, roots, stuns, or Slowness III+ also clear your chain. Before Lv. 8, taking direct combat damage strips 1 stack.

| Rank | DEX / Level | Stack interval | Move / stack (5 stacks) | Attack speed / stack (5 stacks) | Evasion at 5 stacks |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 28 / 22 | 3.0s | +1.0% (+5.0%) | +0.5% (+2.5%) | — |
| 2 | 30 / 24 | 2.8s | +1.2% (+6.0%) | +0.6% (+3.0%) | — |
| 3 | 32 / 26 | 2.6s | +1.4% (+7.0%) | +0.7% (+3.5%) | — |
| 4 | 34 / 28 | 2.4s | +1.6% (+8.0%) | +0.8% (+4.0%) | — |
| 5 | 36 / 31 | 2.2s | +1.8% (+9.0%) | +1.0% (+5.0%) | 8% |
| 6 | 38 / 34 | 2.0s | +2.0% (+10.0%) | +1.1% (+5.5%) | 10% |
| 7 | 40 / 37 | 1.8s | +2.2% (+11.0%) | +1.2% (+6.0%) | 12% |
| 8 | 42 / 40 | 1.7s | +2.4% (+12.0%) | +1.4% (+7.0%) | 15% |
| 9 | 44 / 42 | 1.6s | +2.6% (+13.0%) | +1.6% (+8.0%) | 18% |
| 10 | 45 / 44 | 1.5s | +3.0% (+15.0%) | +2.0% (+10.0%) | 22% *(+ Afterimage)* |

### Milestones at 5 stacks *(In the Zone)*

- **Lv. 3:** Reduces sprint exhaustion by an additional **15%**.
- **Lv. 5–10 (Evasion):** Grants an **8%–22%** chance to dodge an incoming direct melee or projectile hit (**1s** cooldown; dodging consumes **1 Flow stack**).
- **Lv. 6:** Adds **+10% air control**.
- **Lv. 8:** Direct damage **no longer strips Flow stacks** (only dodging, stopping, or heavy crowd control lowers stacks).
- **Lv. 10 (Afterimage):** Preserves sprint across short falls of **3 blocks or fewer**, and dodging a hit triggers **Afterimage**—granting **+30% Movement Speed for 2s** and **+25% bonus damage** on your next meaningful attack within **3s**.

!!! tip "Build note"
    DEX 28 opens both Turning Point and Flow State under the balanced defaults. DEX 45 and Player Level 44 complete both passive lines, while DEX 50 maximizes the permanent +15% movement and +10% attack-speed base stats. Long Progression Mode restores the original higher gates.

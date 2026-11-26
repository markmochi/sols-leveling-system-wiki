---
title: INT - Intellect
description: Exact Intellect passive gates and mechanics for Potion Proficient, Merchant's Wit, Night Eye, Field Study, and Eidetic Memory.
---

# INT — Intellect

Intellect rewards preparation, economy, exploration, and tactical study. Each base rank grants **+0.5% vanilla experience-orb gain**—up to **+25%** at rank 50—while its Awakening, **Eidetic Memory**, accelerates Mastery training and exposes enemy weak points.

<div class="passive-banner"><div class="passive-banner__icon"><span>INT</span></div><div><strong>The Scholar's Path</strong><p>Best for alchemy, enchanting, trading, cave expeditions, faster Mastery growth, and debuffing tough targets for the whole party.</p></div></div>

!!! important "Base INT vs. Eidetic Memory"
    Base Intellect ranks multiply green **vanilla XP orbs** used for enchanting, anvils, and respecs (not Player EXP). Unlocking **Eidetic Memory** separately adds a **+2% to +15% bonus to Combat Mastery EXP**.

## Potion Proficient

Extends beneficial, non-instant potion effects. Instant Health and other instant effects cannot gain duration.

| Rank | 1 | 2 | 3 | 4 | 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| INT required | 4 | 10 | 18 | 26 | 34 |
| Player Level | 3 | 7 | 12 | 20 | 29 |
| Duration | +8% | +14% | +20% | +27% | +35% |

## Merchant's Wit

Reduces the primary emerald cost after vanilla demand, reputation, and other price rules are applied. Prices round up and never fall below one emerald. The trade returns to its normal state when the screen closes.

| Rank | 1 | 2 | 3 | 4 | 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| INT required | 10 | 16 | 23 | 30 | 38 |
| Player Level | 6 | 11 | 17 | 25 | 34 |
| Discount | 5% | 8% | 12% | 16% | 25% |

## Night Eye

Adapts your vision in darkness at raw light level 7 or lower. It uses its own visual system: no potion icon and no end-of-effect flicker.

| Rank | INT / Level | Adapt time | Vision duration |
| ---: | ---: | ---: | --- |
| 1 | 16 / 10 | 10s | 60s |
| 2 | 22 / 16 | 8s | 90s |
| 3 | 28 / 23 | 6s | 5m |
| 4 | 34 / 31 | 3s | 10m |
| 5 | 40 / 40 | Immediate | Continuous in qualifying darkness |

At rank 5, Night Eye remains active through the night and in enclosed daytime darkness, caves, underwater spaces, and other places without usable skylight.

## Field Study

Defeating an eligible creature teaches you how to fight that creature type. Each stack lasts **10 minutes**, up to **5 stacks**.

| Rank | 1 | 2 | 3 | 4 | 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| INT required | 24 | 29 | 34 | 39 | 44 |
| Player Level | 18 | 24 | 30 | 36 | 42 |
| Damage per stack | +1.0% | +1.5% | +2.0% | +2.5% | +3.0% |
| At five stacks | +5.0% | +7.5% | +10.0% | +12.5% | +15.0% |

Natural kills grant a full stack. Reduced-origin creatures grant half progress; players and owned creatures grant none.

## Eidetic Memory *(Awakening)*

Intellect's 10-rank Awakening *(formerly Memory)* turns preserved knowledge into faster weapon mastery and team-wide target vulnerability:

- **Death XP Retention:** Preserves **20%–100%** of the vanilla XP that would otherwise be deleted on death after vanilla calculates dropped orbs (without duplicating orbs or interfering with `keepInventory`).
- **Quick Study (Passive Core):** Grants **+2%–15% bonus Mastery EXP** across STR, WEAPON, and RANGE.
- **Weakness Revealed (Expose):** Landing **5 / 4 / 3 consecutive hits** within **4 seconds** (minimum 0.25s between counted hits) on an eligible combat target **Exposes** it for **5s–8s**, highlighting it with an **Amethyst outline** and increasing the damage it takes from **all players** by **+8%–20%** (**20s** shared cooldown per target). Expose does not stack across multiple players; if a higher-level INT player hits an already-Exposed target, the active percentage upgrades to their higher value without extending the remaining duration.
- **Milestone (Lv. 7+):** Defeating an **Exposed** creature immediately grants **maximum (5-stack) Field Study** knowledge for that creature type.

| Rank | INT / Level | Lost XP retained | Bonus Mastery EXP | Hits to Expose | Expose bonus & duration |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 28 / 22 | 20% | +2% | 5 hits | +8% for 5s |
| 2 | 30 / 24 | 30% | +4% | 5 hits | +9% for 5s |
| 3 | 32 / 26 | 40% | +5% | 5 hits | +10% for 5s |
| 4 | 34 / 28 | 50% | +6% | 5 hits | +11% for 5s |
| 5 | 36 / 31 | 60% | +8% | 4 hits | +12% for 6s |
| 6 | 38 / 34 | 70% | +9% | 4 hits | +13% for 6s |
| 7 | 40 / 37 | 75% | +10% | 4 hits | +14% for 6s *(+ Max Field Study on kill)* |
| 8 | 42 / 40 | 80% | +12% | 4 hits | +15% for 6s *(+ Max Field Study on kill)* |
| 9 | 44 / 42 | 90% | +13% | 4 hits | +16% for 6s *(+ Max Field Study on kill)* |
| 10 | 45 / 44 | 100% | +15% | 3 hits | +20% for 8s *(+ Max Field Study on kill)* |

!!! tip "Build note"
    INT 40 unlocks continuous Night Eye and reaches Eidetic Memory 7's instant Field Study milestone. INT 45 and Player Level 44 complete every Intellect passive, retaining 100% of lost vanilla XP on death and exposing targets in just 3 hits. Long Progression Mode restores the original higher gates.

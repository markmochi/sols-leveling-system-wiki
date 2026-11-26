---
title: DEF - Fortitude
description: Exact Fortitude passive gates and mechanics for Steadfast, Tempered Armor, Guarded, Last Bastion, and Adaptation.
---

# DEF – Fortitude

<div class="passive-banner"><div class="passive-banner__icon" style="background:var(--codex-blue)"><span>DEF</span></div><div><strong>The path of armor, poise, and adaptation.</strong><p>Each rank grants +0.1 Armor and +0.05 Armor Toughness. Rank 50 totals +5 Armor and +2.5 Toughness before Adaptation's Iron Skin bonus.</p></div></div>

## Passive roadmap

| Passive | Gates by passive level (`DEF / Player`) | Effect range |
|---|---|---|
| Steadfast | `4/2 · 10/6 · 18/11 · 26/18 · 34/27` | +5% → +25% Knockback Resistance |
| Tempered Armor | `8/4 · 14/8 · 22/14 · 30/21 · 38/30` | 8% → 40% less armor durability loss |
| Guarded | `14/7 · 20/12 · 27/18 · 34/26 · 42/35` | 10% → 28% next-hit reduction; 12s → 8s recharge |
| Last Bastion | `22/14 · 28/20 · 34/27 · 40/35 · 45/42` | 6% → 20% direct-hit reduction below 30% HP |
| Adaptation *(Awakening)* | `32/28 · 34/30 · 36/32 · 38/34 · 40/36 · 42/38 · 44/40 · 45/42 · 46/44 · 48/46` | +0.5 → +5.0 Toughness; up to 40% resistance; dual tracking & Immunity Surge |

These are the v1.1.0 balanced defaults. Long Progression Mode restores the original, higher gate pairs.

## Steadfast

Levels grant +5%, +9%, +13%, +18%, or +25% Knockback Resistance while enabled. It stacks with other attribute sources, reconciled to the server's configured cap—80% by default.

## Tempered Armor

Levels reduce durability damage to each worn armor piece by 8%, 16%, 24%, 32%, or 40%.

??? info "Equipment rules"
    Each eligible armor piece is handled separately, including compatible modded armor. Fractional prevented wear uses unbiased probabilistic rounding over time. Tools, weapons, shields, and Elytra are unaffected.

## Guarded

| Level | Next eligible hit | Recharge after a valid hit |
|---:|---:|---:|
| 1 | 10% less | 12s |
| 2 | 14% less | 11s |
| 3 | 18% less | 10s |
| 4 | 22% less | 9s |
| 5 | 28% less | 8s |

The first qualifying direct hit after recharge receives the reduction, then begins a new recharge. Damage below 1 HP by default neither consumes nor benefits from Guarded.

??? info "Excluded damage"
    Damage over time and environmental hazards do not consume Guarded: Poison, Wither, starvation, fire and lava, drowning, falls, suffocation, cactus, berry bushes, void, and comparable non-direct sources are excluded.

## Last Bastion

While current health is **strictly below 30% Max HP**, eligible direct melee or projectile attacks deal **6%, 9%, 12%, 15%, or 20%** less damage.

It ends immediately at 30% HP or higher. Explosions, self-damage, Poison, Wither, starvation, void, and environmental damage are excluded.

## Adaptation *(Awakening)*

Fortitude's Awakening pairs permanent Armor Toughness with reactive damage-type resistance across five broad incoming categories: **Melee, Projectile, Explosion, Fire, and Magic**.

- **Iron Skin (Passive Core):** Grants **+0.5 to +5.0 permanent Armor Toughness** while Adaptation is enabled.
- **Adaptive Stacks:** Repeated hits of the same category build up to **3 / 4 / 5 stacks** (at Lv. 1–4 / 5–9 / 10), reducing subsequent hits of that category.
- **Milestones:**
    - **Lv. 5:** Maximum stacks increase to **4**, and stack lifetime extends to **7s**.
    - **Lv. 7:** Tracks **two damage categories simultaneously** instead of replacing your active category when hit by a second type.
    - **Lv. 10:** Maximum stacks increase to **5** (**10s** lifetime, **40%** total resistance) and unlocks **Immunity Surge**—reaching 5 stacks fully negates the next hit of that category within **3 seconds** (**20s** cooldown per category).

| Level | Iron Skin Toughness | Per stack | Max stacks | Max resistance | Categories tracked | Stack lifetime |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | +0.5 | 4.0% | 3 | 12.0% | 1 | 5s |
| 2 | +1.0 | 4.5% | 3 | 13.5% | 1 | 5s |
| 3 | +1.5 | 5.0% | 3 | 15.0% | 1 | 5s |
| 4 | +2.0 | 5.5% | 3 | 16.5% | 1 | 5s |
| 5 | +2.5 | 6.0% | 4 | 24.0% | 1 | 7s |
| 6 | +3.0 | 6.5% | 4 | 26.0% | 1 | 7s |
| 7 | +3.5 | 7.0% | 4 | 28.0% | 2 | 7s |
| 8 | +4.0 | 7.5% | 4 | 30.0% | 2 | 7s |
| 9 | +4.5 | 8.0% | 4 | 32.0% | 2 | 7s |
| 10 | +5.0 | 8.0% | 5 | 40.0% *(+ Immunity Surge)* | 2 | 10s |

The first matching hit is not reduced; it creates stack 1 after damage. Later matching hits use existing stacks. At most one stack is added every 0.75 seconds, and matching hits refresh expiry.

Environmental hazards, damage-over-time effects, falls, void, `/kill`, self-damage, and attacks from your own summoned creatures do not build stacks.

## Competing direct-hit defenses

Guarded, Last Bastion, and Adaptation's percentage resistance do **not** multiply. When several can affect the same hit, the strongest single reduction is used, capped at 40% (unless Lv. 10 Immunity Surge negates the hit outright). Iron Skin's Armor Toughness always applies through your armor calculation.

## Build notes

- Steadfast begins early and is useful for melee, shields, bows, and narrow arenas.
- Tempered Armor is long-term economy, especially valuable in modded boss campaigns with heavy durability drain.
- Guarded favors spaced heavy hits; Last Bastion covers sustained pressure below 30% HP.
- Adaptation at Lv. 7–10 excels in boss encounters that mix melee swings with projectiles or magic.

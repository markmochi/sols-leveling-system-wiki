---
title: DEF - Fortitude
description: Exact Fortitude passive gates and mechanics for Steadfast, Tempered Armor, Guarded, Last Bastion, and Adaptation.
---

# DEF – Fortitude

<div class="passive-banner"><div class="passive-banner__icon" style="background:var(--codex-blue)"><span>DEF</span></div><div><strong>The path of armor, poise, and adaptation.</strong><p>Each rank grants +0.1 Armor and +0.05 Armor Toughness. Rank 50 totals +5 Armor and +2.5 Toughness before the passive tree.</p></div></div>

## Passive roadmap

| Passive | Gates by passive level (`DEF / Player`) | Effect range |
|---|---|---|
| Steadfast | `4/2 · 10/6 · 18/11 · 26/18 · 34/27` | +5% → +25% Knockback Resistance |
| Tempered Armor | `8/4 · 14/8 · 22/14 · 30/21 · 38/30` | 8% → 40% less armor durability loss |
| Guarded | `14/7 · 20/12 · 27/18 · 34/26 · 42/35` | 10% → 28% next-hit reduction; 12s → 8s recharge |
| Last Bastion | `22/14 · 28/20 · 34/27 · 40/35 · 45/42` | 2% → 15% direct-hit reduction below 30% HP |
| Adaptation | `32/28 · 34/30 · 36/32 · 38/34 · 40/36 · 42/38 · 44/40 · 45/42 · 46/44 · 48/46` | 3% → 13.33% per matching stack; up to 40% |

These are the v1.0.3 balanced defaults. Long Progression Mode restores the original, higher gate pairs.

## Steadfast

Levels grant +5%, +9%, +13%, +18%, or +25% Knockback Resistance while enabled. It stacks with other attribute sources, but the final result is reconciled to the server's configured cap—80% by default.

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

While current health is **strictly below 30% Max HP**, eligible direct melee or projectile attacks deal 2%, 4%, 6%, 8%, or 15% less damage.

It ends immediately at 30% HP or higher. It grants no Armor and no healing. Explosions, self-damage, Poison, Wither, starvation, void, and environmental damage are excluded.

## Adaptation

Adaptation tracks one broad incoming damage category: **Melee, Projectile, Explosion, Fire, or Magic**.

| Level | Per stack | At 3 stacks | Stack lifetime |
|---:|---:|---:|---:|
| 1 | 3.0% | 9.0% | 5s |
| 2 | 3.5% | 10.5% | 5s |
| 3 | 4.0% | 12.0% | 5s |
| 4 | 4.5% | 13.5% | 5s |
| 5 | 5.0% | 15.0% | 5s |
| 6 | 5.75% | 17.25% | 5s |
| 7 | 6.5% | 19.5% | 5s |
| 8 | 7.5% | 22.5% | 5s |
| 9 | 8.5% | 25.5% | 5s |
| 10 | 13.33% | 40.0% | 10s |

The first matching hit is not reduced; it creates stack 1 after damage. Later matching hits use existing stacks. At most one stack is added every 0.75 seconds. A matching hit refreshes expiry, while a different category replaces the old adaptation and begins again at one stack.

Environmental hazards, damage-over-time effects, falls, void, `/kill`, self-damage, and attacks from your own summoned creatures do not build stacks.

## Competing direct-hit defenses

Guarded, Last Bastion, and Adaptation do **not** multiply. When several can affect the same hit, the strongest single reduction is used, capped at 40%. Build for coverage and uptime rather than expecting three percentages to stack into invulnerability.

## Build notes

- Steadfast begins early and is useful for melee, shields, bows, and narrow arenas.
- Tempered Armor is long-term economy, not immediate damage reduction.
- Guarded favors spaced heavy hits; rapid attacks repeatedly restart its recharge.
- Last Bastion covers pressure at low HP but does not replace Vitality's lethal protection.
- Adaptation is the deep specialist reward for repeated, readable damage types.

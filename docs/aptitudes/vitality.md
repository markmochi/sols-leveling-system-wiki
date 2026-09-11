---
title: HP - Vitality
description: Exact Vitality passive gates and mechanics for Recuperation, Vital Overflow, Enduring Breath, Adaptive Physique, and Last Resort.
---

# HP – Vitality

<div class="passive-banner"><div class="passive-banner__icon" style="background:var(--codex-red)"><span>HP</span></div><div><strong>The path of life, recovery, and refusal.</strong><p>Vitality grants up to +22 Max HP, then turns healing, breath, endurance, and near-death moments into a complete sustain kit.</p></div></div>

## Direct HP curve

| Vitality ranks | HP per rank | Segment total |
|---:|---:|---:|
| 1–8 | +0.75 | +6 HP |
| 9–30 | +0.50 | +11 HP |
| 31–50 | +0.25 | +5 HP |
| **Rank 50** |  | **+22 Max HP** |

The first eight ranks are highly efficient. Later ranks deliberately trade smaller direct HP gains for access to the deeper passive tree.

## Passive roadmap

| Passive | Gates by passive level (`HP / Player`) | Effect range |
|---|---|---|
| Recuperation | `6/3 · 12/7 · 20/12 · 28/19 · 36/28` | +5% → +32% healing received |
| Vital Overflow | `12/6 · 18/10 · 24/16 · 30/23 · 36/32` | 20% → 100% overheal conversion; 2% → 10% Max-HP barrier cap |
| Enduring Breath | `16/8 · 22/13 · 28/19 · 34/26 · 40/34` | +20% → +100% effective underwater air duration |
| Adaptive Physique | `24/16 · 29/22 · 34/28 · 39/35 · 45/42` | 6% → 25% persistent-hazard reduction |
| Last Resort | `30/24 · 32/26 · 34/28 · 36/30 · 38/33 · 40/36 · 41/38 · 42/40 · 44/43 · 45/45` | 5 → 30 Absorption HP; 2s → 10s; 300s → 120s cooldown |

These are the v1.0.3 balanced defaults. Long Progression Mode restores the original, higher gate pairs.

## Recuperation

| Passive level | Healing received |
|---:|---:|
| 1 | +5% |
| 2 | +10% |
| 3 | +16% |
| 4 | +23% |
| 5 | +32% |

??? info "Activation and exclusions"
    Recuperation modifies legitimate normal healing routed through the loader's healing event: food healing, natural regeneration, Regeneration, Instant Health, lifesteal, ally healing, and compatible modded healing.

    It does not create healing by itself. It does not increase Absorption, Max HP, Totem restoration, or direct administrator health changes.

## Vital Overflow

| Level | Overhealing converted | Barrier cap | Duration |
|---:|---:|---:|---:|
| 1 | 20% | 2% Max HP | 30s per grant |
| 2 | 40% | 4% Max HP | 30s per grant |
| 3 | 60% | 6% Max HP | 30s per grant |
| 4 | 80% | 8% Max HP | 30s per grant |
| 5 | 100% | 10% Max HP | 30s per grant |

??? info "How the barrier is counted"
    Ordinary healing, including Recuperation's increase, fills missing health first. Only the remaining excess is converted. Vital Overflow tracks only the Absorption it created against its cap; unrelated Absorption does not consume the allowance. Each added portion expires after 30 seconds.

## Enduring Breath

Levels grant +20%, +40%, +60%, +80%, or +100% effective underwater air duration while submerged without Water Breathing. At maximum level, the first drowning damage is briefly delayed after the air meter empties.

It does not grant Water Breathing and does not make the player permanently immune to drowning.

## Adaptive Physique

Levels reduce eligible persistent hazard damage by 6%, 10%, 14%, 19%, or 25%.

??? info "Eligible hazards"
    Fire and lava, drowning, Poison, Wither, freezing or cold damage, bleeding, and compatible persistent ailments qualify. Direct weapons, projectiles, ordinary impacts, explosions, falls, generic burst magic, void damage, and `/kill` are not persistent-hazard ticks.

## Last Resort

Last Resort triggers when valid damage crosses below 10% Max HP or would otherwise defeat you. A lethal valid hit leaves you alive at 1 HP, then grants the listed Absorption. The passive rearms only after you heal above 40% Max HP and its cooldown has expired.

| Level | Absorption HP | Duration | Damage reduction | Cooldown |
|---:|---:|---:|---:|---:|
| 1 | 5 | 2s | — | 300s |
| 2 | 6 | 4s | — | 280s |
| 3 | 8 | 5s | — | 250s |
| 4 | 10 | 5s | — | 230s |
| 5 | 10 | 5s | 40% | 200s |
| 6 | 12 | 6s | 40% | 200s |
| 7 | 14 | 7s | 40% | 200s |
| 8 | 16 | 8s | 40% | 180s |
| 9 | 18 | 9s | 40% | 160s |
| 10 | 30 | 10s | 40% | 120s |

??? warning "What Last Resort does not do"
    It does not grant a critical bonus. Void and `/kill` damage are excluded. A fatal hit cannot offer Fortune's Limit Breaker, but an eligible Last Resort can independently prevent death according to its own rules.

## Build notes

- **HP 6–12** is an efficient early splash that opens Recuperation and then Vital Overflow.
- **HP 24–30** reaches Adaptive Physique and the first Last Resort level.
- **HP 40–45** supports a complete sustain specialist with every passive family and the deepest Last Resort ranks.
- **HP 50** remains the maximum direct-health investment, although the balanced passive tree completes at HP 45.
- Recuperation and Vital Overflow directly synergize: stronger valid healing creates more potential excess after health is filled.

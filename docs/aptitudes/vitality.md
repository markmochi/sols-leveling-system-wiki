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
| Recuperation | `10/3 · 18/9 · 26/17 · 34/27 · 42/39` | +5% → +32% healing received |
| Vital Overflow | `20/7 · 25/14 · 30/22 · 35/31 · 40/42` | 20% → 100% overheal conversion; 2% → 10% Max-HP barrier cap |
| Enduring Breath | `30/15 · 34/22 · 38/30 · 43/39 · 48/47` | +20% → +100% effective underwater air duration |
| Adaptive Physique | `35/25 · 39/31 · 43/37 · 47/44 · 50/50` | 6% → 25% persistent-hazard reduction |
| Last Resort | `40/35 · 41/37 · 42/39 · 43/41 · 44/43 · 45/45 · 46/46 · 47/47 · 48/49 · 50/50` | 5 → 30 Absorption HP; 2s → 10s; 300s → 120s cooldown |

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

- **HP 8** is an efficient splash for almost any early build, but it unlocks no Vitality passive by itself.
- **HP 20–30** begins the healing/barrier core but still misses the high-end survival tools.
- **HP 40–42** supports a strong sustain hybrid with Recuperation, Vital Overflow, and the first Last Resort level.
- **HP 50** is a true specialist investment for maximum Adaptive Physique and Last Resort.
- Recuperation and Vital Overflow directly synergize: stronger valid healing creates more potential excess after health is filled.


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

The first eight ranks are highly efficient. Later ranks deliberately trade smaller direct HP gains for access to the deeper passive tree and the **Last Resort** Awakening.

## Passive roadmap

| Passive | Gates by passive level (`HP / Player`) | Effect range |
|---|---|---|
| Recuperation | `6/3 · 12/7 · 20/12 · 28/19 · 36/28` | +5% → +32% healing received |
| Vital Overflow | `12/6 · 18/10 · 24/16 · 30/23 · 36/32` | 20% → 100% overheal conversion; 4% → 20% Max-HP barrier cap |
| Enduring Breath | `16/8 · 22/13 · 28/19 · 34/26 · 40/34` | +20% → +100% effective underwater air duration |
| Adaptive Physique | `24/16 · 29/22 · 34/28 · 39/35 · 45/42` | 6% → 25% persistent-hazard reduction |
| Last Resort *(Awakening)* | `30/24 · 32/26 · 34/28 · 36/30 · 38/33 · 40/36 · 41/38 · 42/40 · 44/43 · 45/45` | 0.2% → 1.0% Max HP/s Second Wind; 1s → 5s Undying; 10% → 40% Max-HP barrier; Rally |

These are the v1.1.0 balanced defaults. Long Progression Mode restores the original, higher gate pairs.

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
| 1 | 20% | 4% Max HP | 30s per grant |
| 2 | 40% | 7% Max HP | 30s per grant |
| 3 | 60% | 10% Max HP | 30s per grant |
| 4 | 80% | 14% Max HP | 30s per grant |
| 5 | 100% | 20% Max HP | 30s per grant |

??? info "How the barrier is counted"
    Ordinary healing, including Recuperation's increase, fills missing health first. Only the remaining excess is converted. Vital Overflow tracks only the Absorption it created against its cap; unrelated Absorption does not consume the allowance. Each added portion expires after 30 seconds.

## Enduring Breath

Levels grant +20%, +40%, +60%, +80%, or +100% effective underwater air duration while submerged without Water Breathing. At maximum level, the first drowning damage is briefly delayed after the air meter empties.

It does not grant Water Breathing and does not make the player permanently immune to drowning.

## Adaptive Physique

Levels reduce eligible persistent hazard damage by 6%, 10%, 14%, 19%, or 25%.

??? info "Eligible hazards"
    Fire and lava, drowning, Poison, Wither, freezing or cold damage, bleeding, and compatible persistent ailments qualify. Direct weapons, projectiles, ordinary impacts, explosions, falls, generic burst magic, void damage, and `/kill` are not persistent-hazard ticks.

## Last Resort *(Awakening)*

Vitality's Awakening combines passive low-health recovery with an emergency death-defying surge:

- **Second Wind (Passive Core):** While enabled and below **40% Max HP**, you regenerate **0.20%–1.00% Max HP per second**. Taking valid damage pauses Second Wind for **2 seconds**.
- **Undying Surge:** When valid damage drops you below **10% Max HP** or would otherwise defeat you, Last Resort opens a **1.0s–5.0s Undying window** where lethal hits cannot drop you below **1 HP**, and grants a **10%–40% Max HP** Absorption barrier lasting **4s–10s**.
- **Milestones:**
    - **Lv. 5+:** Adds **40% damage reduction** throughout the surge duration.
    - **Lv. 8–10 (Rally):** When the Undying window ends, heals back **20% / 30% / 40%** of the damage prevented while Undying, capped at **35% Max HP**.

Last Resort rearms only after you heal above **40% Max HP** and its cooldown has expired.

| Level | Second Wind (`< 40% HP`) | Undying window | Absorption barrier | Surge duration | Damage reduction | Rally (`≤ 35% Max HP`) | Cooldown |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 0.20% HP/s | 1.0s | 10% Max HP | 4s | — | — | 300s |
| 2 | 0.25% HP/s | 1.5s | 12% Max HP | 5s | — | — | 280s |
| 3 | 0.30% HP/s | 2.0s | 14% Max HP | 5s | — | — | 260s |
| 4 | 0.35% HP/s | 2.0s | 16% Max HP | 6s | — | — | 240s |
| 5 | 0.40% HP/s | 2.5s | 20% Max HP | 6s | 40% | — | 210s |
| 6 | 0.50% HP/s | 2.5s | 22% Max HP | 7s | 40% | — | 200s |
| 7 | 0.55% HP/s | 3.0s | 24% Max HP | 7s | 40% | — | 190s |
| 8 | 0.60% HP/s | 3.0s | 26% Max HP | 8s | 40% | 20% prevented | 170s |
| 9 | 0.70% HP/s | 3.5s | 28% Max HP | 9s | 40% | 30% prevented | 150s |
| 10 | 1.00% HP/s | 5.0s | 40% Max HP | 10s | 40% | 40% prevented | 120s |

??? warning "What Last Resort does not do"
    Void and `/kill` damage are excluded. A fatal hit cannot offer Fortune's Limit Breaker, whereas an eligible Last Resort can independently prevent death according to its own rules.

## Build notes

- **HP 6–12** is an efficient early splash that opens Recuperation and then Vital Overflow.
- **HP 24–30** reaches Adaptive Physique and the first Last Resort level.
- **HP 40–45** supports a complete sustain specialist with every passive family, Second Wind scaling, and Last Resort's Rally milestone.
- **HP 50** remains the maximum direct-health investment, although the balanced passive tree completes at HP 45.
- Recuperation and Vital Overflow directly synergize: stronger valid healing creates larger overheal barriers up to 20% Max HP.

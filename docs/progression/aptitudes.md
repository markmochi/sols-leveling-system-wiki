---
title: Aptitudes and respecs
description: Aptitude points, direct stat effects, passive requirements, allocation previews, and respec costs.
---

# Aptitudes and respecs

Aptitudes are your chosen character build. They are separate from Combat Masteries: Aptitudes spend a limited point budget, while Masteries grow automatically through combat use.

## Point entitlement

At default settings, a Player Level `L` grants:

```text
floor((L - 1) × 150 / 49)
```

You start with 0 points at level 1 and reach all 150 at level 50. Most level-ups grant 3 points; some grant 4 so the complete budget arrives exactly at the cap.

Each Aptitude can reach rank 50. Therefore the default budget supports:

- three complete rank-50 trees;
- two complete trees plus a 50-point hybrid spread;
- or a broad distribution that trades capstones for more base-stat variety.

## Direct effects

| Aptitude | Effect per rank | Rank 50 total |
|---|---|---:|
| HP – Vitality | +0.75 HP for ranks 1–8, +0.5 for 9–30, +0.25 for 31–50 | +22 Max HP |
| DEF – Fortitude | +0.1 Armor and +0.05 Armor Toughness | +5 Armor, +2.5 Toughness |
| DEX – Dexterity | +0.3% Movement Speed and +0.2% Attack Speed | +15% Movement Speed and +10% Attack Speed |
| INT – Intellect | +0.5% Minecraft Experience from collected orbs | +25% XP Orb Gain |
| LUCK – Fortune | +0.04 Loot Luck, +0.4% compatible state retry, and +0.4 percentage points of full loot-table bonus-roll chance | +2 Loot Luck, +20% retry, and 20% bonus-roll chance from Fortune alone |

Fortune's state retry is not a flat +20 percentage points. It improves a failed compatible state roll by a fraction of its remaining failure chance. Its separate loot-table bonus is a direct chance for one additional full roll: Fortune supplies up to 20%, while other equipped Loot Luck can raise the shared chance to a 50% cap.

## Passive ranks are gate-based

Every Aptitude owns five passives. A passive level requires:

1. the listed Player Level; and
2. the listed rank in that passive's Aptitude.

Once both gates are met, claiming the passive rank costs **no Aptitude Points and no Minecraft Experience**. Double left-click to level it and double right-click to unlevel it. Toggle the passive when you want its rank preserved but its effect disabled.

The tables in this Codex show the lower v1.0.3 balanced gates. Enabling `longProgressionMode` restores the complete original Player-Level and Aptitude-rank gate profile.

If a respec or cap reduction makes the current passive level illegal, the server removes that passive's complete purchase and toggle state at level 0. Reaching the gates again lets you reclaim it for free.

## Free allocation versus paid respec

- Increasing a rank with unspent entitlement is free.
- Moving only upward across Aptitudes is free as long as the total stays within your entitlement.
- Any confirmed rank reduction is a paid respec.
- The GUI requests a 15-second, revision-bound price quote before confirmation.
- Allocation is blocked for 10 seconds after combat by default.
- The current source default has **no paid-respec cooldown**; an older config may still contain a legacy saved value, but the setting is retained only for compatibility.

The raw Minecraft Experience cost is:

```text
100 + (25 × refunded ranks) + (5 × Player Level)
```

At Player Level 30, refunding 10 ranks costs `100 + 250 + 150 = 500` Minecraft Experience points. This means total XP points, not the number shown as your vanilla experience level.

## Confirmation and safety

The screen edits a local preview first. On confirmation, the server checks:

- your latest progression revision;
- the active point entitlement and per-tree cap;
- current combat lock;
- exact respec quote, price, nonce, and expiry;
- sufficient Minecraft Experience;
- passive eligibility after the change.

If your state changed while the screen was open, the preview refreshes instead of applying stale values.

## Optimization rule of thumb

The direct HP curve has deliberate diminishing returns: ranks 1–8 are the most health-efficient, ranks 9–30 remain solid, and ranks 31–50 are primarily about deep Vitality specialization and late passive gates. The other four direct effects are linear, so their main breakpoints are passive requirements.

Use the [Buildcrafting guide](../builds/buildcrafting.md) and [Guild Ledger](../builds/planner.md) before paying for a large respec.

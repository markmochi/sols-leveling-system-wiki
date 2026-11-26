---
title: First ten minutes
description: A beginner-friendly quick start for Player Levels, Aptitudes, passives, and Combat Masteries.
---

# Your first ten minutes

You only need four ideas to begin: **Player EXP raises Player Level, levels grant Aptitude Points, Aptitudes unlock ranked passives and Awakenings, and combat use trains branching Mastery Skill Trees.**

## 1. Open the Codex screen

Press ++y++ by default, use the native Leveling tab in your inventory, or run:

```text
/sol leveling open
```

The Overview shows your Player Level, current and required EXP, available Aptitude Points, recent EXP sources, derived stats, held-item classification, and all three Masteries.

The configured key is a true toggle: press it again while the Leveling screen is open to close the screen, including after rebinding the control.

## 2. Earn the two kinds of progression

| Progress | How it grows | What it unlocks |
|---|---|---|
| **Player EXP** | Eligible creature defeats and Active Survival | Player Levels and Aptitude Points |
| **Mastery EXP** | Final effective hostile damage with one combat path | Mastery levels, base damage, tier choices (Lv. 5–25), and Lv. 30 Awakenings |

Minecraft Experience—the green bar used for enchanting and anvils—is a third, separate resource. INT increases XP collected from orbs, paid Aptitude respecs deduct raw vanilla XP points, and Mastery tree resets spend **4–12 Vanilla XP Levels**. Vanilla XP never turns directly into Player EXP or Mastery EXP.

## 3. Spend with a purpose

The default campaign grants **150 Aptitude Points by Player Level 50**. Every Aptitude can reach rank 50, which means you can fully master three trees or create a hybrid.

For a first character:

- Put the first **8 HP ranks** high on your list if you want an efficient early health cushion. Those eight ranks grant +6 HP total.
- Choose one main passive tree and meet its early gates instead of spreading every point evenly.
- Remember that a passive rank needs **both** its Aptitude rank and its Player Level.
- Do not choose Aptitudes based on weapon damage. STR, WEAPON, and RANGE damage comes from Masteries, which progress independently.

Open [Choose a path](../aptitudes/index.md) for a quick comparison.

## 4. Claim passives & choose Mastery tiers

Aptitude passive ranks **do not consume Aptitude Points**. When both gates turn green:

1. Open the Aptitude card.
2. Double left-click the passive node to raise it.
3. Double right-click to lower it.
4. Use the toggle when you want to keep the rank but disable its effect.
5. Hold ++shift++ over a node for its concise summary and full rules.

In **Combat Masteries**, open a Mastery's Skill Tree to choose **1 of 2 nodes** at **Lv. 5, 10, 15, 20, and 25** from the bottom upward. Each choice opens a confirmation prompt and seals the rival node for that tier; completing all 5 tiers unlocks the **Lv. 30 Awakening** at the top. You can toggle chosen nodes individually or spend Vanilla XP Levels out of combat to reset the tree.

## 5. Let your playstyle train itself

- Empty main hand → **STR Mastery**
- Recognized melee weapon → **WEAPON Mastery**
- Recognized projectile, launcher, or ranged path → **RANGE Mastery**
- Hybrid weapon → the actual melee or ranged attack path used

Hover the item to see its classification. Training targets, owned creatures, overkill, and repeatedly healed health do not provide legitimate Mastery growth.

## What survives death?

| State | After normal death |
|---|---|
| Player EXP and Player Level | Preserved |
| Aptitude ranks and available points | Preserved |
| Passive ranks and toggles | Preserved |
| STR, WEAPON, and RANGE levels & chosen tree paths | Preserved |
| Active Survival streak | Reset |
| Minecraft Experience | Vanilla rules; INT raises collected orb XP and **Eidetic Memory** can retain 20%–100% of lost XP |

## Common first mistakes

- **Waiting for a passive point:** passives are gate-based, not purchased with a second currency.
- **Trying to skip Mastery tiers:** Mastery skill trees unlock sequentially from Lv. 5 upward—pick your Lv. 5 node before Lv. 10, and so on up to the Lv. 30 Awakening.
- **Expecting kills alone to train Mastery:** Mastery follows effective damage dealt before the target dies.
- **Expecting base INT to increase Player EXP:** base INT increases collected vanilla XP orbs, while **Eidetic Memory** adds +2%–15% bonus Mastery EXP.
- **Treating both Fortune bonuses as the same roll:** its compatible state retry uses remaining-failure scaling, while its loot-table bonus is a direct chance for one additional full roll.
- **Testing on the same farm forever:** repetition credit intentionally decays and refills over time.
- **Respeccing during combat:** Aptitude respecs and Mastery tree resets are blocked for 10 seconds after combat by default.

<div class="codex-callout"><strong>Recommended next chapter:</strong> read <a href="../../progression/aptitudes/">Aptitudes & respecs</a>, then study only the one or two passive trees you plan to use.</div>

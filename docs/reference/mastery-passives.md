---
title: Mastery passive trees
description: Complete STR, WEAPON, and RANGE Mastery skill trees, tier choices, Awakenings, hand-mining track, reset costs, and damage caps.
---

# Mastery passive trees

Each Combat Mastery features an ascending **Skill Tree** from **Lv. 5** to **Lv. 30** (**36 Mastery passives** in total across STR, WEAPON, and RANGE).

- At **Lv. 5, 10, 15, 20, and 25**, pick **1 of 2 styles** in ascending order (each tier requires the previous tier to be chosen first).
- Picking a node opens a confirmation prompt and seals the rival node on that tier.
- Completing all **5 tiers** and reaching **Lv. 30** unlocks that Mastery's **Awakening** capstone.
- When Tier I and Tier II of a scaling passive are both chosen (**Iron Fists I & II**, **Balanced Grip I & II**, or **Longshot I & II**), their bonuses **stack additively**.
- Chosen nodes and automatic track passives cost **no Aptitude Points** and can be toggled ON or OFF individually.

---

## STR Mastery — Brawler & Hand Mining

Base scaling reaches **+30% unarmed damage** at Lv. 30.

### Brawler choice tree & Awakening

| Level | Choice A | Effect | Choice B | Effect |
| ---: | --- | --- | --- | --- |
| **5** | **Iron Fists I** | `+0.5` flat unarmed damage and `+15%` knockback. | **Flurry** | `+15%` unarmed Attack Speed while main hand is empty. |
| **10** | **Haymaker** | Charged unarmed hits deal `+20%` damage and inflict brief Slowness II (`1.25s` stagger, `5s` stagger cooldown). | **Iron Body** | `+3` Armor and `+10%` Knockback Resistance while main hand is empty. |
| **15** | **Adrenaline** | Defeating an eligible hostile mob unarmed grants Speed I and Haste I for `5s` (`6s` cooldown). | **Pummel** | Charged unarmed hits have a `25%` chance to apply Weakness I for `3s` (`6s` cooldown). |
| **20** | **Crushing Blows** | Unarmed hits gain `+1%` bonus damage per point of target Armor, up to `+20%`. | **Counter** | Taking a direct melee hit primes a `2s` parry window (`10s` cooldown): your next unarmed strike deals `+30%` bonus damage. |
| **25** | **Iron Fists II** | Adds `+1.5` flat unarmed damage and `+20%` knockback *(stacks additively with Iron Fists I for `+2.0` flat & `+35%` knockback)*. | **Unbreakable** | Below `50%` Max HP, unarmed attacks gain `+18%` damage and heal `6%` of final damage dealt (up to `3.0 HP`, `1.75s` cooldown). |

!!! abstract "Lv. 30 Awakening — Titan Hands *(requires all 5 tiers chosen)*"
    Grants **`+3.0` flat unarmed damage**, **`1.4x` hand-mining speed**, and **Earthshaker**: every **6th unarmed combo hit** within `2s` unleashes a `3.5`-block shockwave dealing **`60%` splash damage**, knocking nearby foes back, and slowing them for `2s`.

### Automatic Hand-Mining track

Unlocked automatically by STR level beneath the Brawler skill tree:

| Level | Passive | Effect |
| ---: | --- | --- |
| **10** | **Ore Breaker I** | Harvest common stone-family blocks and common natural ores with an empty hand. |
| **15** | **Ore Breaker II** | Adds diamond, emerald, and tagged precious ores. |
| **20** | **Ancient Breaker** | Adds Ancient Debris and tagged tier-III ores. |

Hand mining awards **0.1 STR Mastery EXP** per eligible natural ore, up to **10 STR Mastery EXP per rolling hour**. Common stone-family blocks are harvestable with Ore Breaker I without awarding ore progression, and player-placed ores never grant Mastery EXP.

Approximate default break times:

| Ore class | Normal passive | With Titan Hands (`1.4x`) |
| --- | ---: | ---: |
| Common | 1.00s | ~0.71s |
| Precious | 0.85s | ~0.61s |
| Ancient Debris | 6.00s | ~4.29s |

---

## WEAPON Mastery — Warrior

Base scaling reaches **+20% melee weapon damage** at Lv. 30.

| Level | Choice A | Effect | Choice B | Effect |
| ---: | --- | --- | --- | --- |
| **5** | **Balanced Grip I** | `+8%` melee Attack Speed while holding a melee or hybrid weapon. | **Heavy Grip** | `+12%` melee damage in exchange for `-4%` Attack Speed. |
| **10** | **Opening Strike** | `+18%` melee damage against targets above `80%` HP. | **Executioner's Edge** | `+22%` melee damage against targets below `30%` HP. |
| **15** | **Rooted Stance** | `+20%` Knockback Resistance and `+2` Armor while wielding a melee weapon. | **Bloodthirst** | Defeating an eligible hostile, non-farmed mob with a melee weapon heals `1.5 + 3% Max HP` while injured (`10s` cooldown). |
| **20** | **Balanced Grip II** | Adds `+10%` melee Attack Speed *(stacks additively with Balanced Grip I for `+18%` total)*. | **Sunder** | Charged melee hits shred `-6%` target Armor per stack for `5s`, up to `3` stacks (`-18%` Armor, `0.5s` stack cooldown). |
| **25** | **Momentum** | Consecutive melee hits on the same target within `5s` grant `+4%` damage per stack, up to `+20%` at `5` stacks. | **Duelist** | In a true **1v1** (no other hostile threats within `8` blocks), gain `+15%` melee damage and take `10%` less damage from your opponent. |

!!! abstract "Lv. 30 Awakening — Weapon Master *(requires all 5 tiers chosen)*"
    Grants **`+12%` melee damage**, **`+5%` Attack Speed**, and **Masterstroke**: charged melee hits build **Edge** (`4s` window); your **5th charged strike** deals **`+50%` bonus damage** and cleaves enemies within `2.5` blocks for **`50%` splash damage**.

---

## RANGE Mastery — Ranger

Base scaling reaches **+20% ranged damage** at Lv. 30.

| Level | Choice A | Effect | Choice B | Effect |
| ---: | --- | --- | --- | --- |
| **5** | **Steady Aim** | `+12%` ranged damage when the shot is fired while not sprinting. | **Quick Draw** | Draws bows and charges crossbows `20%` faster. |
| **10** | **Longshot I** | `+15%` ranged damage against targets `16` blocks or farther from the launch point. | **Point-Blank** | `+18%` ranged damage at `8` blocks or closer, plus a brief knockback shove (`2.5s` shove cooldown; respects target Knockback Resistance). |
| **15** | **Piercing Shot** | Fully charged critical arrows gain `+1` Pierce level. | **Hunter's Mark** | Ranged hits mark the target for `8s` with an **Emerald outline**; subsequent ranged hits from you deal `+10%` bonus damage. |
| **20** | **Longshot II** | Adds `+15%` ranged damage at `24` blocks or farther *(stacks additively with Longshot I for `+30%` total at 24+ blocks)*. | **Volley** | Fully charged bow shots have a `20%` chance to fire `2` additional fanned arrows dealing `55%` base damage (`8s` cooldown, non-pickup). |
| **25** | **Hunter's Finish** | `+22%` ranged damage against targets below `30%` HP. | **Kiting** | Landing a ranged hit grants Speed I for `2.5s` (`5s` cooldown). |

!!! abstract "Lv. 30 Awakening — Marksman *(requires all 5 tiers chosen)*"
    Grants **`+12%` ranged damage**, **`+15%` arrow velocity**, and **Deadeye**: holding a full bow draw or loaded crossbow while standing still for `1.5s` (`30` ticks) locks in a **Deadeye** shot dealing **`+40%` bonus damage** as a guaranteed critical piercing arrow (`8s` cooldown).

---

## Mastery Tree Reset pricing

You can reset all chosen tiers in one Mastery tree while out of combat to pick a new path from Lv. 5 upward. Your Mastery level, Mastery EXP, and hand-mining progress are **never** lost when resetting choices.

| Chosen tiers in that Mastery | Reset cost (Vanilla XP Levels) |
| ---: | ---: |
| 1 tier | **4 XP Levels** |
| 2 tiers | **6 XP Levels** |
| 3 tiers | **8 XP Levels** |
| 4 tiers | **10 XP Levels** |
| 5 tiers | **12 XP Levels** |

---

## Damage limits & datapack tuning

- **STR Mastery** added damage (base scaling + conditional passives + flat fist bonuses) is capped at **+14 damage** per hit.
- **WEAPON & RANGE Mastery** share one Leveling damage bucket per hit, capped by the smallest of:
    1. the calculated base + conditional bonus;
    2. **45%** of the original hit (**70%** on **Masterstroke** and **Deadeye** signature hits); or
    3. **40** absolute damage.
- Modpack authors can tune all Mastery passive values and caps through `data/solslevelingsystem/leveling/passives.json` (schema 2). See [Datapacks & tags](../admin/datapacks.md).

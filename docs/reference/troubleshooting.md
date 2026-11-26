# FAQ & troubleshooting

## How do I open the leveling screen?

Press ++y++ by default, use the native Leveling inventory tab, or run `/sol leveling open`. Press the configured key again to close the screen. Change the key in Minecraft's Controls menu if another mod already uses Y; the toggle follows the rebound key.

## Why did a kill grant less EXP?

Common reasons are a spawner or reinforcement origin, low combat contribution, repeated farming of the same entity type, or a party split. Artificial and unsafe origins may grant no credit. See [Player Level & EXP](../progression/player-levels.md).

## Why did my Mastery not increase?

Mastery uses **effective damage**, not attack count. Overkill is capped, healed health does not create a larger life budget, repeat farming is limited, and only one mastery is selected for a hit. Make sure the held item is classified as expected.

## I meet the aptitude requirement. Why is the passive locked?

Every aptitude passive has two gates: an aptitude rank and a Player Level. Hover the passive in the in-game tree to see both requirements.

## Why can I not pick a higher Mastery node yet?

Mastery Skill Trees unlock **sequentially from Lv. 5 upward**. Even if your Mastery level is already 20 or 30, you must pick 1 node at Lv. 5 first, then Lv. 10, Lv. 15, Lv. 20, and Lv. 25. Your **Lv. 30 Awakening** activates once you reach Lv. 30 and have locked in all 5 tier choices.

## Can I change my chosen Mastery nodes?

Yes. Click **Reset Tree** inside that Mastery's skill tree while out of combat. A confirmation prompt shows the **Vanilla XP Level** cost (`4–12 XP Levels` depending on how many tiers are chosen) and your current XP level. Resetting clears your tier choices so you can pick a fresh path without losing your Mastery level or Mastery EXP.

## Are passives bought with separate points?

No. Aptitude points raise HP, DEF, DEX, INT, or LUCK. Once both gates are met, Aptitude passive ranks are claimed for free and may be toggled individually. Chosen Mastery nodes and automatic STR hand-mining nodes also cost no Aptitude points.

## Do I lose progression when I die?

Player EXP, aptitude allocations, claimed passives, combat masteries, chosen Mastery tiers, and persistent cooldowns persist through ordinary death (including pre-death recovery across disconnects before respawn). Active Survival resets, while INT's **Eidetic Memory** passive retains 20%–100% of vanilla XP that would otherwise be lost on death.

## Why is the screen stuck on “Loading progression” or showing Level 1?

Ensure the server and every client run the matching **v1.1.0** JAR. If the problem remains on a heavily modded setup, capture the server log, client log, Minecraft edition, loader, dimension, and exact reconnect/death sequence.

## Why did a passive disappear after enabling Long Progression Mode?

Long Progression Mode restores the legacy higher Aptitude-rank and Player-Level gates. A purchased passive that no longer meets both gates is removed by the normal rules check, and costs no Aptitude Points to claim again once eligible. Earned Player EXP and Aptitude allocations are not reset.

## Why did my screen close during combat?

Taking damage closes the screen to prevent menu use from becoming a combat shelter. Aptitude allocation, paid Aptitude respecs, and Mastery tree resets are also blocked during the default ten-second combat window.

## Can I move my Aptitude allocation for free?

Increasing and decreasing ranks in the draft is free until the change would refund already committed Aptitude ranks through a paid respec. The interface shows a raw Minecraft Experience quote before confirmation (`100 + 25 × refunded ranks + 5 × Player Level` raw XP points).

## Why can I not hand-mine an ore?

The matching STR hand-mining passive (**Ore Breaker I / II** or **Ancient Breaker**) must be unlocked and enabled, the block must be a tagged natural block/ore, and the server must allow hand mining. Player-placed ore does not award Mastery EXP. Custom modded ores may need a datapack tag.

## Why did Limit Breaker not trigger?

Check that the passive rank is enabled, the opponent is a recognized boss/elite/hostile player, the same target dealt enough recent damage (at least 30% of your Max HP within 12s), the triggering hit was nonlethal, your health fell to 30% or less, and no cooldown or offer lockout is active. Remember that **Fortune Favors the Bold** still boosts your Luck proc chances passively even when no All In duel is active.

## My numbers differ from this wiki

This wiki documents the **v1.1.0** defaults. Servers can enable Long Progression Mode or change caps, gates, `passives.json` values, multipliers, and feature switches. Ask the server owner for its common config and datapacks.

## Server-owner diagnosis

Use `/sol leveling inspect <player>` for a readable snapshot, `/sol leveling admin audit <player>` for consistency checks, and `/sol leveling admin debugmob <entity>` to inspect a creature's EXP classification. Always use `reconcile preview` before `reconcile apply`.

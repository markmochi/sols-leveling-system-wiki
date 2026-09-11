# FAQ & troubleshooting

## How do I open the leveling screen?

Press ++y++ by default, use the native Leveling inventory tab, or run `/sol leveling open`. Press the configured key again to close the screen. Change the key in Minecraft's Controls menu if another mod already uses Y; the toggle follows the rebound key.

## Why did a kill grant less EXP?

Common reasons are a spawner or reinforcement origin, low combat contribution, repeated farming of the same entity type, or a party split. Artificial and unsafe origins may grant no credit. See [Player Level & EXP](../progression/player-levels.md).

## Why did my Mastery not increase?

Mastery uses **effective damage**, not attack count. Overkill is capped, healed health does not create a larger life budget, repeat farming is limited, and only one mastery is selected for a hit. Make sure the held item is classified as expected.

## I meet the aptitude requirement. Why is the passive locked?

Every aptitude passive has two gates: an aptitude rank and a Player Level. Hover the passive in the in-game tree to see both requirements. Mastery passives instead unlock automatically at mastery milestones.

## Are passives bought with separate points?

No. Aptitude points raise HP, DEF, DEX, INT, or LUCK. Once both gates are met, passive ranks are claimed for free and may be toggled individually.

## Do I lose progression when I die?

Player EXP, aptitude allocations, claimed passives, combat masteries, and persistent cooldowns persist through ordinary death. Active Survival resets. On Forge v1.0.3, the pre-death recovery also survives a disconnect or server restart before respawn. On a multiplayer server, the server's saved player data is authoritative.

## Why is the screen stuck on “Loading progression” or showing Level 1?

Update the server and every client to the matching v1.0.3 file. The release fixes stale progression after dimension travel, death, revive flows, or reconnecting inside another dimension, including offline-mode servers where a client's profile UUID differs from the server-authoritative UUID. If the problem remains, capture the server log, client log, Minecraft edition, loader, dimension, and exact reconnect/death sequence.

## Why did progression stop after changing dimensions?

v1.0.3 fixes invalidated Forge progression state and stale client identity after Nether or modded-dimension travel. Update both sides. Mob damage tracking, kill EXP, Mastery progress, and admin commands should continue without rejoining; report the exact dimension provider and logs if they do not.

## Why did a passive disappear after enabling Long Progression Mode?

Long Progression Mode restores the original higher Aptitude-rank and Player-Level gates. A purchased passive that no longer meets both gates is removed by the normal rules check, but costs no Aptitude Points to claim again once eligible. Earned Player EXP and Aptitude allocations are not reset.

## Why did my screen close during combat?

Taking damage closes the screen to prevent menu use from becoming a combat shelter. Aptitude allocation and paid respecs are also blocked during the default ten-second combat window.

## Can I move my allocation for free?

Increasing and decreasing ranks in the draft is free until the change would refund already committed ranks through a paid respec. The interface shows a raw Minecraft Experience quote before confirmation. Default cost is `100 + 25 × refunded ranks + 5 × Player Level` raw XP points—not experience levels.

## Why can I not hand-mine an ore?

The matching STR passive must be enabled, the block must be a tagged natural ore, and the server must allow hand mining. Player-placed ore does not qualify. Custom ores may need a datapack tag.

## Why did Limit Breaker not trigger?

Check that the passive rank is enabled, the opponent is a recognized boss/elite/hostile player, the same target dealt enough recent damage, the triggering hit was nonlethal, your health fell to 30% or less, and no cooldown or offer lockout is active.

## My numbers differ from this wiki

This wiki documents the v1.0.3 balanced defaults. Servers can enable Long Progression Mode or change caps, gates, multipliers, and feature switches. Ask the server owner for its common config and datapacks.

## Server-owner diagnosis

Use `/sol leveling inspect <player>` for a readable snapshot, `/sol leveling admin audit <player>` for consistency checks, and `/sol leveling admin debugmob <entity>` to inspect a creature's EXP classification. Always use `reconcile preview` before `reconcile apply`.

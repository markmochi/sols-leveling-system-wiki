# Configuration

The common/server configuration is generated as `solslevelingsystem-common.toml`; client presentation settings live in `solslevelingsystem-client.toml`. Stop the server before editing TOML files, keep a backup, and restart after changes.

## Progression defaults

| Setting | Default | Purpose |
| --- | ---: | --- |
| `playerLevelCap` | 50 | Maximum Player Level. |
| `aptitudeCategoryCapV2` | 50 | Maximum ranks in one aptitude. |
| `totalAptitudeBudgetV2` | 150 | Total points earned by the Player Level cap. |
| `masteryCap` | 30 | Maximum level of each combat mastery. |
| `killExperienceCap` | 1,000 | Maximum Player EXP base award for one kill. |
| `survivalExperienceEnabled` | true | Enables Active Survival. |
| `masteryEnabled` | true | Enables Mastery EXP. |
| `passivesEnabled` | true | Global passive switch. |

Changing caps or the total budget can make stored allocations inconsistent with the new rules. Use the [reconciliation workflow](commands.md#safe-reconciliation) after a deliberate rules change.

## Anti-exploit defaults

| Setting | Default | Purpose |
| --- | ---: | --- |
| `contributionWindowSeconds` | 30 | Recent-combat eligibility window. |
| `minimumContributionFraction` | 0.05 | Normal minimum contribution; final hitters remain eligible. |
| `allocationCombatLockSeconds` | 10 | Prevents allocation/respec during recent combat. |
| `respecQuoteExpirySeconds` | 15 | Time before a vanilla-XP respec quote must be refreshed. |
| `killTokenCapacity` | 20 | Full-credit repeat budget per player and entity type. |
| `killTokenRefillSeconds` | 15 | Time to restore one token. |
| `depletedKillCreditFloor` | 0.10 | Ordinary kill credit after depletion. |
| `killExperiencePerRepeatToken` | 25 | Player EXP represented by one repeat token. |
| `highValueRepeatThreshold` | 100 | Share at which strict high-value depletion begins. |
| `highValueDepletedCreditFloor` | 0 | High-value credit after depletion. |
| `masteryHealthPerRepeatToken` | 100 | Target health represented by one Mastery token. |
| `masteryDepletedCreditFloor` | 0 | Mastery credit after depletion. |

`paidRespecCooldownSeconds` remains as a legacy compatibility key, but paid resets no longer use a cooldown.

## Mob EXP and parties

| Setting | Default |
| --- | ---: |
| Base-health clamp | 4,096 |
| Defense factor cap | +0.5 |
| Threat factor cap | +2.0 |
| Boss multiplier | 3.0x |
| Reinforcement origin | 0.5x |
| Spawner origin | 0.25x |
| Party Player EXP sharing | true |
| Party share radius | 64 blocks |

Party distribution conserves the adjusted Player EXP award. It does not create extra EXP and does not share Mastery EXP.

## Passive and Limit Breaker controls

The common config exposes Player Level gate lists for every aptitude passive, the final Steadfast knockback-resistance cap (80%), Guarded's minimum damage, STR hand-mining enablement and hourly award cap, Luck origin/repetition thresholds, and Limit Breaker eligibility, reward, menu, PvP, outline, whitelist, and deny-list controls.

When changing a gate list, keep its entry count aligned with that passive's number of ranks. Invalid data should be corrected before the world is reopened to players.

## Client options

Players can configure the inventory crest position, high-contrast mode, reduced motion, notification scale/duration/anchor/sound/chat mirror, and particle density/budget. These are presentation preferences; they do not change server-authoritative progression.

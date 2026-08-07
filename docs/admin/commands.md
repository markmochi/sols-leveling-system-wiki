# Commands

Commands use the root `/sol leveling`. Default inspection permission is level 2; administrative mutation requires permission level 3. Servers can change both thresholds in the common config.

## Player and inspection

| Command | Purpose |
| --- | --- |
| `/sol leveling open` | Opens your own leveling screen. |
| `/sol leveling inspect <player>` | Opens/prints an authorized view of a player's progression. |

## Progression administration

| Command | Purpose |
| --- | --- |
| `/sol leveling admin help` | Lists administrative usages. |
| `/sol leveling admin addxp <player> <amount>` | Adds 1–1,000,000 Player EXP. |
| `/sol leveling admin setxp <player> <amount>` | Sets total Player EXP. |
| `/sol leveling admin setlevel <player> <level>` | Sets Player Level through the active curve/cap. |
| `/sol leveling admin setmastery <player> <str\|weapon\|range> <level>` | Sets one mastery level. |
| `/sol leveling admin grantpoints <player> <points>` | Grants aptitude entitlement points. |
| `/sol leveling admin reset <player> <aptitudes\|masteries\|player\|survival\|all>` | Resets only the selected progression area. |
| `/sol leveling admin audit <player>` | Reports stored progression and consistency. |
| `/sol leveling admin debugmob <entity>` | Shows the selected entity's classification and EXP inputs. |
| `/sol leveling admin reload` | Requests the normal datapack reload lifecycle. |

## Safe reconciliation

After changing progression caps or budgets:

1. Run `/sol leveling admin reconcile preview <player>`.
2. Read the proposed corrections.
3. Back up the world if the change affects many established players.
4. Run `/sol leveling admin reconcile apply <player>` only when the preview is expected.

Reconciliation is intentionally explicit. Do not use a broad reset as a substitute for reviewing a player's stored progress.

## Limit Breaker testing

| Command | Purpose |
| --- | --- |
| `/sol leveling admin limitbreaker status <player>` | Reports the current offer/challenge/cooldown state. |
| `/sol leveling admin limitbreaker clear <player>` | Clears that state. |
| `/sol leveling admin limitbreaker start <player> <entity> <level>` | Starts a rank 1–10 test challenge. |
| `/sol leveling admin limitbreaker outcome <player> <success\|failure\|neutral>` | Forces a test outcome. |

These are test/admin controls. They bypass parts of natural encounter flow and should not be exposed as ordinary player commands.


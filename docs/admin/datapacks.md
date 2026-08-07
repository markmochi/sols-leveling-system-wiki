# Datapacks & tags

Datapacks let a modpack classify weapons, eligible ores, bosses, elites, training targets, and reward exclusions without modifying the Sol's Leveling System JAR.

## Weapon classification overrides

Place JSON files under:

`data/<your_namespace>/solslevelingsystem/classification/*.json`

```json
{
  "schema_version": 1,
  "items": {
    "examplemod:greatsword": "MELEE",
    "examplemod:longbow": "RANGED",
    "examplemod:glaive": "HYBRID",
    "examplemod:training_glove": "UNARMED",
    "examplemod:utility_tool": "EXCLUDED"
  }
}
```

Valid values are `MELEE`, `RANGED`, `HYBRID`, `UNARMED`, `EXCLUDED`, and `NONE`; they are case-insensitive. A reload is transactional: malformed data is rejected and the previous valid snapshot remains active. The default safety limit is 2,048 unique overrides.

## Important item tags

All are under `solslevelingsystem`:

- `melee`, `ranged`, `hybrid`, `unarmed`, and `denied` classify mastery use;
- `mobile_handling_compatible` and `mobile_handling_excluded` control DEX use-item behavior;
- `lucky_drop_excluded` and `lucky_drop_nbt_allowed` control Fortune duplication;
- `limit_breaker_bonus_eligible`, `limit_breaker_bonus_excluded`, and `limit_breaker_bonus_nbt_allowed` control challenge loot.

## Important block tags

- `str_ore_breaker_i`
- `str_ore_breaker_ii`
- `str_ancient_breaker`
- `agile_climber_compatible`

Add modded natural ores to the appropriate STR tier. Placed-block tracking still prevents them from becoming a hand-mining Mastery farm.

## Important entity tags

- `valid`, `denied`, and `training` affect progression eligibility;
- `bosses` and `limit_breaker_elites` define worthy encounters;
- `limit_breaker_denied` excludes unsuitable targets;
- `aggressive_neutral` identifies neutral creatures behaving as hostiles.

Use standard Minecraft tag JSON with `"replace": false` unless the pack deliberately wants to replace the shipped set.

## Reload and verify

Run `/sol leveling admin reload`, then use `/sol leveling admin debugmob <entity>` for entity rules. Test a weapon against a controlled target and confirm which Mastery gains EXP. Invalid classification reloads are logged and do not replace the last known-good classification map.

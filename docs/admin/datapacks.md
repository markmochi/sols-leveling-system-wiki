# Datapacks & tags

Datapacks let a modpack tune progression and Aptitude effects or classify weapons, eligible hand-mining blocks, bosses, elites, training targets, and reward exclusions without modifying the Sol's Leveling System JAR.

## Progression and Aptitude balance

The shipped defaults live under `data/solslevelingsystem/leveling/`:

- `progression.json` defines the balanced Player curve (`coefficient: 60`, `exponent: 1.0`) and the unchanged Mastery curve.
- `aptitudes.json` schema 3 defines the five direct Aptitude effects. `dex_attack_speed_per_rank` defaults to `0.002`, or +0.2% Attack Speed per Dexterity rank.

The server validates these files transactionally. Older schema-2 Aptitude data is migrated by supplying the new Dexterity Attack Speed default; schema 1 remains supported. `longProgressionMode` intentionally overrides the Player curve and complete passive-gate profile with the built-in legacy values.

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
- `str_stone_breaker`
- `agile_climber_compatible`

Ore Breaker I unlocks both its common-ore tier and `str_stone_breaker`, which includes ordinary overworld/nether base stone, cobblestone families, sandstone, and End Stone appropriate to the Minecraft edition. Add modded ores or stone-family blocks to the matching tag. Placed-block tracking still prevents ore from becoming a hand-mining Mastery farm.

## Important entity tags

- `valid`, `denied`, and `training` affect progression eligibility;
- `bosses` and `limit_breaker_elites` define worthy encounters;
- `limit_breaker_denied` excludes unsuitable targets;
- `aggressive_neutral` identifies neutral creatures behaving as hostiles.

Use standard Minecraft tag JSON with `"replace": false` unless the pack deliberately wants to replace the shipped set.

## Reload and verify

Run `/sol leveling admin reload`, then use `/sol leveling admin debugmob <entity>` for entity rules. Test a weapon against a controlled target and confirm which Mastery gains EXP. Invalid classification reloads are logged and do not replace the last known-good classification map.

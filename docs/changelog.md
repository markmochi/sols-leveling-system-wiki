# Release notes

## v1.0.3

### New content and progression

- **Rebalanced progression is now the default.** The first level costs 60 Player EXP, and level 50 requires 73,500 total EXP instead of 112,670—about 35% less. Player-Level and Aptitude-rank gates were lowered and spread across all 25 Aptitude passives.
- **Added Long Progression Mode.** Set `longProgressionMode = true` in the common config to restore the original Player EXP curve and every original passive gate. Switching modes does not reset Player EXP, Aptitude allocations, Masteries, or customized requirement lists. A passive that no longer meets the active gates can be claimed again at no Aptitude-point cost once eligible.
- **Fortune is now complete Loot Luck.** It can grant one additional full loot-table roll from chests, fishing, player-credited mob kills, and compatible modded loot tables. Each Fortune rank adds 0.4 percentage points, reaching 20% at rank 50; other equipped Loot Luck contributes to the same chance, capped at 50%.
- When Sol's Relic System with expanded Luck support is installed, both mods use one shared loot roll instead of rolling independently. Leveling remains fully functional without Relic System.
- **Dexterity now grants +0.2% Attack Speed per rank**, reaching +10% at rank 50, alongside its Movement Speed. The proportional bonus supports vanilla and compatible modded weapons, and pack authors can tune it in the Aptitude balance datapack.
- **Ore Breaker I now harvests common stone-family blocks** with an empty hand as well as its common-ore tier.

### Interface and inventory

- Replaced the floating Leveling shortcut with native Minecraft-style inventory tabs.
- In Survival, Leveling occupies the second tab after the player inventory when installed alone, while conflicting modded tabs are moved after the reserved Sol tabs.
- In Creative, Leveling sits above Destroy Item when used alone and stacks above Sol's Title System when both mods are installed.
- The configured Leveling key is now a true toggle: press it once to open the screen and again to close it, including after rebinding.
- Fixed Survival inventory tabs drifting apart, changing order, or overlapping after repeated inventory opens with mods that reuse their tab buttons.

### EXP distribution

- Players who directly contribute to a kill are now always included in its EXP distribution. Nearby non-contributing party members must still be alive, active, eligible, in the same dimension, and within the configured radius.

### Fixed

- Fixed death-related progression loss. Player EXP, Aptitude allocations, purchased passives, Masteries, and persistent cooldowns now survive death and respawn on all supported editions. On Forge, pre-death recovery also survives a disconnect or server restart before respawn.
- Fixed progression breaking after travel through the Nether or modded dimensions. Mob damage tracking, kill EXP, Mastery progress, and admin Leveling commands continue without requiring a rejoin.
- On Minecraft 1.16.5 Forge and 1.20.1 Forge, fixed Forge invalidating the active progression capability during dimension travel.
- On Minecraft 1.16.5 Forge and 1.21.1 NeoForge, fixed the screen remaining on **Loading progression** when the client profile UUID differs from the server-authoritative UUID, including common offline-mode setups. Also fixed Level 1 or loading-stuck state after dimension travel, death, revive flows, or reconnecting inside another dimension.
- Fixed opening or closing the Leveling screen leaving the player's head and torso shifted away from the arms and legs until rejoining. This includes damage- and death-driven screen closure on every supported edition.

**No player-data migration or configuration reset is required. Existing Player EXP, Aptitude allocations, Masteries, and progression data remain compatible.**

## v1.0.2 — A UI for every adventure

### Added

- **GUI resource-pack support.** Resource packs that replace Minecraft's standard GUI or inventory backgrounds and widget buttons now automatically reskin the complete Leveling interface. Panels, text, icons, and progress bars receive a matching palette.
- Pack authors can use dedicated nine-slice surfaces and optional HEX colors for precise control. Automatic contrast protection keeps important information readable on both light and dark themes.

### Changed

- **All In / Limit Breaker now forces target-capable marked mobs to focus the activating player.** If several players mark the same mob, the first valid claimant keeps aggro. Ownership transfers only after that claim ends, preventing repeated target swapping.
- Limit Breaker's crimson mark now follows Minecraft's native model contour. The outline tracks the target's visible body parts across different entity models, poses, and sizes without filling the body.

### Fixed

- Fixed a client startup crash that could occur when **Night Eye** was used with certain rendering or optimization mods.

**No player-data migration or configuration reset is required.**

## v1.0.1 — A safer return

### Fixed

- Fixed a rare progress reset when a player died and then disconnected, or when the server stopped before the player respawned.
- Fixed the NeoForge 1.21.1 Leveling Screen being blurred, darkened, and rendered with softened font glyphs by a second vanilla menu-background pass.

**No player-data migration or configuration reset is required.**

## v1.0.0 — The first public expedition

Initial public release for:

- Minecraft 1.16.5 with Forge 36.2.39 or newer;
- Minecraft 1.20.1 with Forge 47.2.0 or newer;
- Minecraft 1.21.1 with NeoForge 21.1.229 or newer.

The three editions share the same progression contract: 50 Player Levels, 150 aptitude points, five aptitude trees, three 30-level combat masteries, Active Survival, anti-farm safeguards, optional Sol's mod integrations, server configuration, datapack classification, and administrative tooling.

See the [Adventurer's Codex](index.md) for player guidance and [Installation](getting-started/installation.md) for the exact loader and Java matrix.

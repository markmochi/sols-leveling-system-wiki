# Release notes

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

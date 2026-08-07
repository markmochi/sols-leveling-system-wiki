---
title: Install Sol's Leveling System
description: Installation and version requirements for Sol's Leveling System on Forge and NeoForge.
---

# Install the mod

Sol's Leveling System is required on **both sides** in multiplayer: install it on the dedicated server and on every connecting client. A single-player installation needs only the local `mods` folder because the integrated server loads the same file.

## Choose the exact build

| Minecraft | Loader | Minimum loader | Java | Install where? |
|---|---|---:|---:|---|
| 1.16.5 | Forge | 36.2.39 | 8 | Client and server |
| 1.20.1 | Forge | 47.2.0 | 17 | Client and server |
| 1.21.1 | NeoForge | 21.1.229 | 21 | Client and server |

!!! danger "Do not mix loaders"
    A Forge JAR does not work on NeoForge, and a build for one Minecraft version does not work on another. Match all four parts: mod version, Minecraft version, loader, and Java runtime.

## Installation steps

1. Install the correct Forge or NeoForge loader.
2. Download the Sol's Leveling System file for that exact Minecraft version.
3. Place the JAR in the instance or server `mods` folder.
4. Start the game or server once.
5. On a client, join a world and press ++y++ or use the crest beside the inventory to open the Leveling screen.

There are **no required content-mod dependencies**. Optional companion integrations activate only when their matching mod is present.

## Updating an existing world

Player progression is versioned and migrated by the server. Player Level, Aptitude allocation, passive levels and toggles, Masteries, cooldowns, and other persistent progression are stored with the player.

- Back up the world before any mod update.
- Replace only the old Sol's Leveling System JAR.
- Do not delete player data or the world config to “refresh” progression.
- Check the latest server log for a clean rules load.
- If caps or Aptitude rules changed, use the [reconciliation preview](../admin/commands.md#safe-reconciliation) before applying any destructive correction.

!!! note "Death is not a character reset"
    Normal death preserves Player EXP, Aptitudes, passive purchases, Masteries, and cooldowns. It resets the Active Survival streak. INT's Memory passive separately controls how much ordinary Minecraft Experience is retained.

## Configuration locations

After first launch, the loader creates:

- `config/solslevelingsystem-common.toml` for server and gameplay rules.
- `config/solslevelingsystem-client.toml` for each client's screen, notification, accessibility, and passive-visual preferences.

Existing TOML files keep previously saved values when defaults change. Compare an older file with the [current source defaults](../admin/configuration.md) before assuming a new installation and an upgraded server behave identically.

## Next step

Continue to the [first ten minutes](quick-start.md) and make your first informed allocation.


---
title: The leveling screen
description: Controls, pages, previews, notifications, nameplates, and accessibility settings in Sol's Leveling System.
---

# The leveling screen

The parchment screen is a live, server-backed character sheet. Values shown in parentheses are bonuses from Sol's Leveling System; the current-build panel also includes the resulting health, armor, toughness, movement speed, attack speed, XP-orb gain, Luck, and Fortune bonus-roll chance.

## Open and navigate

- Press ++y++ by default.
- Use the native Leveling tab in the inventory.
- Run `/sol leveling open`.
- Use tabs or number keys to switch Overview, Aptitudes, and Masteries.
- Use ++tab++ and ++shift+tab++ to move keyboard focus.
- Use ++enter++ or ++space++ to activate the focused control.
- Use arrow keys, Page Up/Page Down, or the mouse wheel to scroll.
- Press ++escape++ to close a confirmation first, then the screen.
- Press the configured Leveling key again to close the screen as a true toggle.

The toggle follows the key assigned in Minecraft Controls, including rebound keys. In Survival, Leveling occupies the second native-style tab after the player inventory when installed alone; reserved Sol tabs keep compatible modded tabs from overlapping it. In Creative, Leveling sits above Destroy Item when used alone and stacks above Sol's Title System when both are present.

## Three main pages

### Overview

Use this as the quick character sheet. It shows:

- Player Level, current EXP, next requirement, and available Aptitude Points.
- Active Survival state and recent progression sources.
- Current derived stats and exactly how much comes from Leveling.
- Held item and the server's Mastery classification.
- STR, WEAPON, and RANGE levels, progress, bonuses, recent gains, and next passive.

### Aptitudes

All five Aptitude cards fit on the main page. A card shows current rank, direct effect, and a link into its passive tree. The tree uses green and red requirement states and displays current passive status such as Ready, Cooldown, Re-arming, Return Mark, All In, or Limit Crash.

Allocation changes remain a preview until confirmed. Adding unused points is free. Removing confirmed ranks requests a short-lived server quote for the exact Minecraft Experience cost.

### Masteries

Each Mastery card explains how it earns EXP and its current base damage bonus. Open the tree to inspect six automatic milestone passives. Hover for the concise effect; hold ++shift++ for exact activation rules, exclusions, and shared damage caps. Click an unlocked passive to toggle it.

## Notifications and combat HUDs

The mod reports Player Level ups, Aptitude Point gains, Mastery levels, and first-time passive unlocks. Specialized HUDs also show:

- Adaptation category stacks and resistance.
- Flow State stacks and movement bonus.
- Turning Point Return Mark creation, obstruction, return, and expiry.
- Overconfidence's Ego activation.
- Limit Breaker offer, target, hold progress, timer, shield, contribution, outcome, Afterglow, cooldown, and Crash.

Opening the Leveling screen places your character into a synchronized meditation pose visible to nearby players. Taking positive damage closes the screen and ends the pose.

## Nameplates and companion display

Other players see `[Lvl N]` before your nameplate. When Sol's Title System is present, the level prefix composes with its title display rather than replacing it.

## Client-only preferences

`solslevelingsystem-client.toml` controls:

| Group | Options |
|---|---|
| Screen | inventory Leveling-tab visibility and X/Y offsets; high contrast |
| Notifications | anchor, scale, duration, sound, chat mirror, reduced motion |
| Passive visuals | particle density and per-tick particle budget |

These options never change server calculations or grant an advantage. Reduced motion and particle density affect presentation only.

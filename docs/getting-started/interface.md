---
title: The leveling screen
description: Controls, pages, ascending Mastery skill trees, compact HUDs, target outlines, nameplates, and accessibility settings in Sol's Leveling System.
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
- Press ++escape++ to close a confirmation modal first, then the screen.
- Press the configured Leveling key again to close the screen as a true toggle.

The toggle follows the key assigned in Minecraft Controls, including rebound keys. In Survival, Leveling occupies the second native-style tab after the player inventory when installed alone; reserved Sol tabs keep compatible modded tabs from overlapping it. In Creative, Leveling sits above Destroy Item when used alone and stacks above Sol's Title System when both are present.

## Three main pages

### Overview

Use this as the quick character sheet. It shows:

- Player Level, current EXP, next requirement, and available Aptitude Points.
- Active Survival state and recent progression sources.
- Current derived stats and exactly how much comes from Leveling.
- Held item and the server's Mastery classification.
- STR, WEAPON, and RANGE levels, progress, bonuses, recent gains, and next milestone.

### Aptitudes

All five Aptitude cards fit on the main page. A card shows current rank, direct effect, and a link into its passive tree (including each Aptitude's 10-rank **Awakening** capstone). The tree uses clear green and red requirement states, color-coded tooltips highlighting key numbers, mechanics, conditions, and warnings, and live **READY** / **ON COOLDOWN** status timers on every passive with a cooldown (alongside specialized states like Re-arming, Return Mark, All In, or Limit Crash).

Allocation changes remain a preview until confirmed. Adding unused points is free. Removing confirmed ranks requests a short-lived server quote for the exact raw Minecraft Experience cost.

### Masteries & Ascending Skill Trees

Each Mastery card explains how it earns EXP and its current base damage bonus. Opening a Mastery enters an ascending bottom-to-top **RPG Skill Tree** (`Lv. 5 → 10 → 15 → 20 → 25 → Lv. 30 Awakening`):

- **Visual node states:** Mastered choices glow in **Forged Gold**, your active choosing frontier highlights in **Runic Teal**, unchosen rival nodes appear as **sealed branches**, and higher unreached tiers remain **locked** until the previous tier is chosen and the level milestone is reached.
- **Confirmation modals:** Clicking a candidate node opens a confirmation prompt displaying the node icon, effect summary, and which rival node will be sealed. Clicking an already-chosen node toggles its active state ON or OFF.
- **Reset Tree:** An out-of-combat **Reset Tree** button opens a confirmation modal showing the exact **Vanilla XP Level** cost (`4–12 XP Levels`) and your current XP level before clearing your tier choices.
- **Readable, color-coded tooltips:** Hover any node for its highlighted summary and live **READY** / **ON COOLDOWN** status (for cooldown-based Masteries), or hold ++shift++ for full mechanics, cooldowns, and caps.

## Notifications, compact HUDs & target outlines

Combat feedback is designed to stay readable without cluttering the center of your screen during fights:

- **Hotbar-adjacent status strip:** Compact `16×16` icon badges with stack pips beside the hotbar track active states such as **Flow State** (up to 5 stacks + Afterimage), **Adaptation** (damage categories, up to 5 stacks + Immunity Surge), **Last Resort** (Undying / Barrier), **Turning Point** Return Mark, **Overconfidence** Ego, **Titan Hands** combo pips, and **Weapon Master** Edge pips.
- **Minimal crosshair & XP-bar cues:** Subtle crosshair indicators show **Marksman Deadeye** focus lock and **Eidetic Memory** Expose hits, paired with a brief single-line trigger toast above the XP bar when signature passives fire.
- **In-world target outlines:** Distinct model-contour outlines highlight marked enemies in combat:
    - **Crimson** — **Limit Breaker** marked target
    - **Amethyst** — **Eidetic Memory** Exposed target
    - **Emerald** — **Hunter's Mark** ranged target
- **Limit Breaker HUD:** Tracks offer prompts, Sneak-hold progress, duel timer, shield, contribution, Afterglow, cooldown, and Crash.

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

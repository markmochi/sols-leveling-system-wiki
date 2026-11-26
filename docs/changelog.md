# Release notes

## v1.1.0 — Awakenings & Mastery Skill Trees

Available for **Minecraft 1.16.5 Forge**, **1.20.1 Forge**, and **1.21.1 NeoForge**.

### Aptitude Awakening Overhaul

Every Aptitude's final passive is now a full 10-level **Awakening** with passive cores, signature triggers, and high-level milestones.

`HP — Vitality`

- **Last Resort**
    - 🆕 **Second Wind:** Passively regenerates **0.2%–1.0% Max HP/s** while below **40% HP** (pauses briefly when hit).
    - **Undying Surge:** Falling below **10% HP** or taking a lethal hit grants **1s–5s of Undying** (cannot drop below **1 HP**), followed by a **10%–40% Max HP** Absorption shield.
    - 🆕 **Milestones:** Lv. 5 adds **40% damage reduction** during the surge; Lv. 8–10 add **Rally**, healing back **20%–40%** of damage prevented during Undying (up to **35% Max HP**).

`DEF — Fortitude`

- **Adaptation**
    - 🆕 **Iron Skin:** Grants permanent **+0.5 to +5.0 Armor Toughness**.
    - 🔺 Repeated hits build **3 / 4 / 5 stacks** (at Lv. 1 / 5 / 10) for up to **40% resistance** against that damage type.
    - 🆕 **Milestones:** Lv. 7 tracks **2 damage types** at once; Lv. 10 unlocks **Immunity Surge**, negating the next matching hit within **3s** at 5 stacks (**20s** cooldown per type).

`DEX — Dexterity`

- **Flow State**
    - 🔺 Expanded to **5 stacks** with faster buildup, granting up to **+15% Movement Speed** and **+10% Attack Speed**.
    - 🆕 **Milestones:** Lv. 3 cuts sprint exhaustion by **15%** at max stacks; Lv. 5–10 grant **8%–22% Evasion**; Lv. 6 adds air control; Lv. 8 prevents direct hits from stripping stacks; Lv. 10 unlocks **Afterimage** (**+30% speed** for **2s** and **+25% damage** on your next hit after dodging).

`INT — Intellect`

- **Eidetic Memory** *(formerly Memory)*
    - 🔺 Expanded to **10 levels**, retaining **20%–100%** of lost Vanilla XP on death and granting **+2%–15% bonus Mastery EXP**.
    - 🆕 **Weakness Revealed:** Landing **5 / 4 / 3 consecutive hits** (Lv. 1 / 5 / 10) **Exposes** the enemy for **5s–8s**, making them take **+8%–20% more damage** from all players (**20s** cooldown per target). Defeating an Exposed mob at Lv. 7+ maxes out **Field Study** for that mob type.

`LUCK — Fortune`

- **Limit Breaker**
    - 🆕 **Fortune Favors the Bold:** Passively boosts the trigger chances of **Lucky Recovery**, **Lucky Drop**, and **Overconfidence** by **+5%–20%**.
    - 🔺 **All In** offer threshold raised from 30% to **40% HP**.
    - 🔺 Sneak hold to accept shortened from 1.25s to **0.5s**.
    - 🔺 Added **40% damage reduction** while holding Sneak during the offer window (still no death save).

### 🆕 Mastery Skill Tree Revamp

**STR**, **WEAPON**, and **RANGE** now feature a branching skill tree from **Lv. 5** up to a **Lv. 30 Awakening**.

- 🆕 **Branching Tier Choices:** At **Lv. 5, 10, 15, 20, and 25**, pick **1 of 2 styles** to climb to the next tier. Picking a node seals its rival for that tier, and completing all 5 tiers unlocks your **Lv. 30 Awakening**.
- 🆕 **Tree Reset:** Reset all chosen nodes in a Mastery out of combat using **4–12 Vanilla XP Levels** depending on how many tiers are picked.
- 🔺 Raised base Mastery cap bonuses for **WEAPON** and **RANGE** to **+20%**, with higher passive damage caps for late-game builds.

`STR — Brawler`

- 🆕 **Branch Nodes:** Iron Fists I / Flurry · Haymaker / Iron Body · Adrenaline / Pummel · Crushing Blows / Counter · Iron Fists II / Unbreakable.
- 🆕 **Awakening — Titan Hands:** Bonus stacking unarmed damage, faster hand-mining, and **Earthshaker** (every 6th combo hit unleashes a shockwave).
- Automatic Hand-Mining track (**Ore Breaker I/II**, **Ancient Breaker**) remains available beneath the tree.

`WEAPON — Warrior`

- 🆕 **Branch Nodes:** Balanced Grip I / Heavy Grip · Opening Strike / Executioner's Edge · Rooted Stance / Bloodthirst · Balanced Grip II / Sunder · Momentum / Duelist.
- 🆕 **Awakening — Weapon Master:** **+12% melee damage**, **+5% Attack Speed**, and **Masterstroke** (5 charged hits empower your next charged hit with a heavy cleave).

`RANGE — Ranger`

- 🆕 **Branch Nodes:** Steady Aim / Quick Draw · Longshot I / Point-Blank Control · Piercing Shot / Hunter's Mark · Longshot II / Volley · Hunter's Finish / Kiting.
- 🆕 **Awakening — Marksman:** **+12% ranged damage**, **+15% projectile speed**, and **Deadeye** (hold full draw still for **1.5s** to fire a guaranteed critical piercing shot).

### UI, HUD & Visual Improvements

- 🆕 **Ascending Mastery Tree UI:** Distinct colors for mastered paths, current choices, sealed branches, and locked tiers, with custom icons for every new Mastery passive.
- **Cleaner Combat HUD:** Replaced bulky mid-screen banners with compact hotbar status badges, minimal crosshair cues for **Deadeye** and **Exposed**, and clean single-line trigger notices.
- 🆕 **In-World Combat Outlines & Particles:** Crimson outline for **Limit Breaker**, Amethyst for **Exposed**, and Emerald for **Hunter's Mark**.
- **Clearer Tooltips & Live Cooldowns:** Removed confusing abbreviations (`DR`, `CD`, `CC`, `dmg`, `8m`), added color-coded highlights for key conditions and effects, and added live **READY** / **ON COOLDOWN** timers to every Aptitude and Mastery passive with a cooldown.

### Fixes & Compatibility

- **Modded Combat Compatibility:** Fixed Aptitude and Mastery damage bonuses and on-hit effects being skipped when combat mods like **Mine Mine no Mi** resolve damage early on the hurt event.
- **Modded Abilities & Spells Credit:** Modded abilities, spells, projectiles, area effects, explosions, and lightning now properly grant **Player EXP**, **Limit Breaker** progress, and **Aptitude** passive triggers (including damage-over-time kills), while **Masteries** remain focused on unarmed, melee weapon, and ranged weapon attacks.
- **Relic System Crit Cooperation:** Kept single-roll critical handling so **Fateful Strike** and **Sol's Relic System** work together cleanly without double-rolling.
- **Max-Level Mastery Save Persistence:** Fixed **STR**, **WEAPON**, and **RANGE** Masteries at Lv. 30 dropping back to Lv. 29 after rejoining or respawning in singleplayer and multiplayer.
- **Tooltip Overflow & Combat Cleanup:** Fixed long tooltips overflowing off-screen, ensured Tier I & II Mastery nodes stack additively, added safeguards against sustain/stagger spam and recursive cleaves, and ensured temporary stacks/marks clear cleanly on death, logout, and dimension travel.

**No world reset or player-data migration required. Existing Player EXP, aptitudes, Masteries, and custom balance datapacks remain compatible, and players can open each Mastery tree to pick their unlocked nodes right away.**

## v1.0.4

### Icon & UI Visual Refresh

- Refreshed icons across all five **Aptitudes**, three **Combat Masteries**, and all **25 Aptitude Passives** for cleaner silhouettes and better readability across dark UI panels and custom resource packs.
- Updated the inventory **Leveling** tab icon, **Limit Breaker** skull marker, notification badges, and passive requirement lock indicators across **1.16.5 Forge**, **1.20.1 Forge**, and **1.21.1 NeoForge**.

**No player-data migration or configuration reset is required.**

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

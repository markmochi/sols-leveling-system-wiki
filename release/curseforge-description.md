# Sol's Leveling System

**Turn every adventure into character growth.** Sol's Leveling System is a server-authoritative Minecraft RPG leveling mod built around Player Levels, five build-defining Aptitudes with 10-rank **Awakenings**, 25 ranked Aptitude Passives, and three use-based Combat Masteries with branching **Skill Trees** (**36 Mastery Passives** in total).

Fight dangerous creatures, stay active in hostile territory, specialize your stats, and master the combat styles you actually use. Stronger enemies are worth more, repeated farms lose value, and final effective damage—not overkill—drives mastery progress.

## Open the Leveling Screen

Press **Y** while playing to open the Leveling Screen. This is the default keybind on every supported edition.

You can also open your inventory and use the native **Leveling** tab. Press the configured key again to close the screen; the toggle continues to work after rebinding it in Minecraft's Controls menu.

The Leveling Screen contains your Player Level and EXP progress, available Aptitude Points, stat previews, Aptitude allocation, ranked Passives, ascending Mastery Skill Trees, recent EXP sources, and confirmation prompts.

## Core features

- **Player Levels 1–50** with a balanced 73,500-EXP default journey and optional Long Progression Mode for the legacy 112,670-EXP curve and passive gates.
- **150 Aptitude Points** by the default level cap: enough to master three of five Aptitudes or create a flexible hybrid.
- **Five Aptitude trees:** HP – Vitality, DEF – Fortitude, DEX – Dexterity, INT – Intellect, and LUCK – Fortune.
- **25 ranked Aptitude Passives**, culminating in five 10-rank **Awakenings** (**Last Resort**, **Adaptation**, **Flow State**, **Eidetic Memory**, and **Limit Breaker**).
- **Three Combat Masteries:** STR, WEAPON, and RANGE, each leveling from 1–30 through real combat use.
- **Branching Mastery Skill Trees (36 Mastery Passives):** Choose 1 of 2 styles sequentially at Lv. 5, 10, 15, 20, and 25 to unlock **Lv. 30 Awakenings** (**Titan Hands**, **Weapon Master**, and **Marksman**), with Vanilla XP Level tree resets out of combat.
- **Parchment & RPG Skill-Tree UI** with build previews, confirmation modals, readable tooltips, and recent EXP tracking.
- **Clean Combat HUD & Target Outlines:** Compact hotbar-adjacent status badges, minimal crosshair cues, and distinct target outlines (Crimson **Limit Breaker**, Amethyst **Exposed**, Emerald **Hunter's Mark**).
- **Exploit-resistant progression** with contribution checks, spawn-origin credit, repeat-kill limits, effective-damage accounting, and safe server-side transactions.
- **Datapack and server configuration support** for caps, curves, passive values, classifications, gates, anti-farm rules, and party sharing.

## Shape your character

Every Aptitude grants a direct stat benefit and unlocks its own passive tree:

- **HP – Vitality:** up to +22 Max HP, stronger healing, up to 20% Max-HP overheal barriers, underwater endurance, hazard resistance, and **Last Resort** (Second Wind low-HP regen, 1–5s Undying Surge, Absorption barrier, and Rally).
- **DEF – Fortitude:** Armor, Toughness, knockback resistance, reduced armor wear, Guarded, Last Bastion, and **Adaptation** (+0.5 to +5.0 Iron Skin Toughness, up to 40% resistance across two damage types, and Immunity Surge).
- **DEX – Dexterity:** Movement Speed and Attack Speed, lower sprint/jump exhaustion, faster climbing, up to 50% better movement while using items, Ender Pearl Return Marks, and 5-stack **Flow State** (up to +15% Move Speed, +10% Attack Speed, direct-hit Evasion, and Afterimage).
- **INT – Intellect:** more Minecraft Experience from collected orbs, longer beneficial effects, merchant discounts, Night Eye, Field Study, and **Eidetic Memory** (20%–100% lost-XP retention, +2%–15% bonus Mastery EXP, and consecutive-hit target **Expose**).
- **LUCK – Fortune:** a chance for an additional full chest, fishing, or mob loot-table roll; compatible state-roll improvement; Lucky Recovery; Lucky Drop; Fateful Strike; Overconfidence; and **Limit Breaker** (Fortune Favors the Bold proc boost + **All In** boss duels).

Unused Aptitude Points can be spent freely. Reclaiming confirmed Aptitude ranks costs raw Minecraft Experience points, while resetting chosen nodes in a Mastery Skill Tree costs **4–12 Vanilla XP Levels**. Aptitude passive ranks cost no points: once both requirements are met, claim them in the passive tree. Every passive can be toggled individually.

## Master the way you fight

Combat Masteries grow from final, effective hostile health removed:

- **STR — Brawler:** Grows through empty-hand combat. Choose between unarmed damage, attack-speed flurries, stagger haymakers, iron poise, kill adrenaline, parries, armor-crushing blows, and lifesteal up to **Titan Hands** (**Earthshaker** 6-hit shockwave), alongside automatic bare-hand ore breaking.
- **WEAPON — Warrior:** Grows through recognized melee and hybrid weapons. Specialize in fast or heavy grips, openers or finishers, defensive stance or hostile-kill **Bloodthirst**, armor-shredding **Sunder**, stacking **Momentum**, or true 1v1 **Duelist** up to **Weapon Master** (**Masterstroke** 5-Edge cleave).
- **RANGE — Ranger:** Grows through bows, crossbows, projectiles, firearms, throwing weapons, and configured modded ranged paths. Choose steady aim or quick draws, longshots or point-blank shoves, piercing shots or **Hunter's Mark**, multi-arrow **Volley**, finishers, or kiting up to **Marksman** (**Deadeye** focused piercing crit).

Hover a supported item to see how the server classifies it. Each attack contributes to at most one Mastery, and overkill or healed-back health cannot create extra Mastery EXP.

## Progress without standing at a grinder

Hostile mob EXP is calculated from a spawn-time snapshot of health, defenses, attack power, movement, encounter difficulty, boss status, spawn origin, and repetition. Damage contributors share the reward fairly, while the final hitter remains eligible. Spawner-born and repeated creatures are reduced by default.

Active Survival provides a small alternative source of Player EXP every five eligible minutes. It rewards players who remain active and recently face danger; AFK time does not count, and death or combat logging resets the streak.

## Limit Breaker: go All In

Fortune's Awakening passively boosts your Luck proc chances and turns desperate boss, elite, or PvP encounters into a timed wager. After one worthy enemy deals cumulative damage equal to 30% of your Max HP, a nonlethal hit that leaves you at 30% HP or lower can offer **All In**.

Hold Sneak to accept. You return to full health, gain a shield, speed, offense, and damage reduction, then race to defeat the marked Limit. Victory grants recovery, bonus progression, and eligible bonus loot. Failure causes Limit Crash: reduced damage, speed, healing, and Luck effects for a level-scaled duration.

## Multiplayer and compatibility

Sol's Leveling System must be installed on **both the server and each connecting client**. It has no required content-mod dependency.

Optional integrations include:

- **Sol's Party System:** conserved Player EXP sharing that always includes direct kill contributors while validating nearby non-contributing party recipients.
- **Sol's Title System:** level and title-friendly player nameplates.
- **Sol's Relic System:** compatible Fortunate Critical handling and one shared Loot Luck bonus roll when expanded Luck support is available.
- Built-in classification and encounter support for popular combat and adventure mods, plus tags and JSON overrides for modpack authors.

## Supported versions

| Minecraft | Loader | Minimum loader | Java |
|---|---|---:|---:|
| 1.16.5 | Forge | 36.2.39 | 8 |
| 1.20.1 | Forge | 47.2.0 | 17 |
| 1.21.1 | NeoForge | 21.1.229 | 21 |

Use the file made for your exact Minecraft version and loader. Do not mix Forge and NeoForge builds.

## Learn the system

The **[Adventurer's Codex](https://markmochi.github.io/sols-leveling-system-wiki/)** contains the quick-start guide, every Aptitude Awakening and Mastery Skill Tree node, exact progression tables, build archetypes, an interactive Guild Ledger, compatibility rules, commands, datapacks, configuration, and troubleshooting.

**Level. Specialize. Master your path.**

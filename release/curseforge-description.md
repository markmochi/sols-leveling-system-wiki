# Sol's Leveling System

**Turn every adventure into character growth.** Sol's Leveling System is a server-authoritative Minecraft RPG leveling mod built around Player Levels, five build-defining Aptitudes, 25 ranked Aptitude Passives, three use-based Combat Masteries, and 18 automatic Mastery Passives.

Fight dangerous creatures, stay active in hostile territory, specialize your stats, and master the combat styles you actually use. The system is designed for both vanilla and modded adventures: stronger enemies are worth more, repeated farms lose value, and final effective damage—not overkill—drives mastery progress.

## Core features

- **Player Levels 1–50** with a paced, long-term EXP curve.
- **150 Aptitude Points** by the default level cap: enough to master three of five Aptitudes or create a flexible hybrid.
- **Five Aptitude trees:** HP – Vitality, DEF – Fortitude, DEX – Dexterity, INT – Intellect, and LUCK – Fortune.
- **25 ranked Aptitude Passives** with clear Player Level and Aptitude requirements.
- **Three Combat Masteries:** STR, WEAPON, and RANGE, each leveling from 1–30 through real combat use.
- **18 automatic Mastery Passives** at Mastery levels 5, 10, 15, 20, 25, and 30.
- **Parchment RPG interface** with build previews, recent EXP sources, passive trees, confirmation prompts, and contextual tooltips.
- **RPG HUD feedback** for level-ups, passive unlocks, Adaptation, Flow State, Turning Point, Ego, and Limit Breaker.
- **Exploit-resistant progression** with contribution checks, spawn-origin credit, repeat-kill limits, effective-damage accounting, and safe server-side transactions.
- **Datapack and server configuration support** for caps, curves, classifications, passive gates, anti-farm rules, party sharing, and more.

## Shape your character

Every Aptitude grants a direct stat benefit and unlocks its own passive tree:

- **HP – Vitality:** up to +22 Max HP, stronger healing, overheal barriers, underwater endurance, hazard resistance, and Last Resort death protection.
- **DEF – Fortitude:** Armor, Toughness, knockback resistance, reduced armor wear, Guarded, low-health protection, and damage-type Adaptation.
- **DEX – Dexterity:** Movement Speed, lower sprint/jump exhaustion, faster climbing, better movement while using items, Ender Pearl Return Marks, and Flow State.
- **INT – Intellect:** more Minecraft Experience from collected orbs, longer beneficial effects, merchant discounts, Night Eye, creature knowledge, and retained lost XP after death.
- **LUCK – Fortune:** Loot Luck, compatible status-roll improvement, kill-based healing and drop duplication, Fortunate Criticals or Bad Luck, Overconfidence's Ego, and the high-risk Limit Breaker capstone.

Unused Aptitude Points can be spent freely. Reclaiming confirmed ranks costs raw Minecraft Experience points and is blocked briefly after combat, so builds can evolve without making choices meaningless. Aptitude passive ranks cost no points: once both requirements are met, claim them in the passive tree. Every passive can be toggled individually.

## Master the way you fight

Combat Masteries grow from final, effective hostile health removed:

- **STR Mastery** grows through empty-hand combat. It eventually unlocks empowered fists and the ability to harvest supported ores bare-handed.
- **WEAPON Mastery** grows through recognized melee weapons, including supported modded and hybrid weapons. Its tree improves attack speed, opening and finishing hits, stability, and direct weapon damage.
- **RANGE Mastery** grows through bows, crossbows, projectiles, firearms, throwing weapons, and configured modded ranged paths. Its tree rewards steady aim, point-blank control, long shots, finishing attacks, and marksmanship.

Hover a supported item to see how the server classifies it. Each attack contributes to at most one Mastery, and overkill or healed-back health cannot create extra Mastery EXP.

## Progress without standing at a grinder

Hostile mob EXP is calculated from a spawn-time snapshot of health, defenses, attack power, movement, encounter difficulty, boss status, spawn origin, and repetition. Damage contributors share the reward fairly, while the final hitter remains eligible. Spawner-born and repeated creatures are reduced by default.

Active Survival provides a small alternative source of Player EXP every five eligible minutes. It rewards players who remain active and recently face danger; AFK time does not count, and death or combat logging resets the streak.

## Limit Breaker: go All In

At Fortune 50, Limit Breaker turns a desperate boss, elite, or PvP encounter into a timed wager. After one worthy enemy deals cumulative damage equal to 30% of your Max HP, a nonlethal hit that leaves you at 30% HP or lower can offer **All In**.

Hold Sneak to accept. You return to full health, gain a shield, speed, offense, and damage reduction, then race to defeat the marked Limit. Victory grants recovery, bonus progression, and eligible bonus loot. Failure causes Limit Crash: reduced damage, speed, healing, and Luck effects for a level-scaled duration.

## Multiplayer and compatibility

Sol's Leveling System must be installed on **both the server and each connecting client**. It has no required content-mod dependency.

Optional integrations include:

- **Sol's Party System:** conserved Player EXP sharing for nearby, active party members.
- **Sol's Title System:** level and title-friendly player nameplates.
- **Sol's Relic System:** compatible Fortunate Critical handling.
- Built-in classification and encounter support for several popular combat and adventure mods, plus tags and JSON overrides for modpack authors.

## Supported versions

| Minecraft | Loader | Minimum loader | Java |
|---|---|---:|---:|
| 1.16.5 | Forge | 36.2.39 | 8 |
| 1.20.1 | Forge | 47.2.0 | 17 |
| 1.21.1 | NeoForge | 21.1.229 | 21 |

Use the file made for your exact Minecraft version and loader. Do not mix Forge and NeoForge builds.

## Learn the system

The **[Adventurer's Codex](https://markmochi.github.io/sols-leveling-system-wiki/)** contains the quick-start guide, every passive and mastery milestone, exact progression tables, build archetypes, an interactive build ledger, compatibility rules, commands, datapacks, configuration, and troubleshooting.

**Level. Specialize. Master your path.**

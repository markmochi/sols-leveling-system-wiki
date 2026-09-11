# Compatibility

Sol's Leveling System is designed to work in modpacks without making other content mods mandatory. Its integrations are **soft dependencies**: install them only if you want their features.

## Sol's companion mods

| Mod | Integration |
| --- | --- |
| Sol's Party System | Conserves and divides Player EXP among eligible, active party members in the same dimension and within the server radius. Mastery EXP remains personal. |
| Sol's Relic System | Fateful Strike cooperates with relic critical damage. When Relic System's expanded Luck support is available, it also owns the shared full loot-table bonus roll so the two mods never roll independently. |
| Sol's Title System | Optional presentation/integration hooks; neither mod is required to start. |

## Weapons from other mods

Weapon and Range Mastery use explicit item tags, built-in item types, and datapack classification overrides. The shipped defaults recognize Mine Mine no Mi and CartAddon firearms and hybrid weapons, including flintlocks, Senriku, bazookas, rifles, the scoped sniper, chakram, spears, the holy spear, and kunai.

Unknown modded equipment can be assigned as `MELEE`, `RANGED`, `HYBRID`, `UNARMED`, or `EXCLUDED` with a small datapack. See [Datapacks & tags](../admin/datapacks.md).

Dexterity's proportional Attack Speed bonus applies through Minecraft's attack-speed attribute, so vanilla and compatible modded weapons receive the same per-rank scaling rather than weapon-specific hard-coded bonuses.

## Loot tables

Fortune's bonus roll works with chest, fishing, player-credited mob, and compatible modded loot tables that expose a normal loot-table context and player Luck. It makes at most one additional full table roll, with a shared chance capped at 50%. Custom drops added after loot-table generation are separate and may not participate.

## Boss and elite recognition

The built-in tags recognize qualifying encounters from:

- vanilla Minecraft;
- L_Ender's Cataclysm;
- Mine Mine no Mi and CartAddon;
- Twilight Forest;
- Mowzie's Mobs;
- Ice and Fire;
- Mutant Beasts.

Servers can add or remove boss and elite entity IDs without modifying the mod JAR.

## Client and server requirements

The mod is required on **both client and server** for multiplayer. The server owns progression, rewards, allocation validation, and passive outcomes; the client supplies the interface, controls, effects, and synchronized presentation.

Every participant must use the same Minecraft release and matching Sol's Leveling System build. The final public v1.0.3 uses synchronized-rules protocol 21, so earlier prerelease JARs that also displayed v1.0.3 cannot be mixed with it. A 1.20.1 Forge JAR is not interchangeable with a 1.21.1 NeoForge JAR.

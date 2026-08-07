# Sol's Leveling System Adventurer's Codex

The complete player and server-owner guide for Sol's Leveling System v1.0.0.

## [Open the Adventurer's Codex](https://markmochi.github.io/sols-leveling-system-wiki/)

Learn how Player Levels, Aptitudes, ranked passives, combat Masteries, Active Survival, anti-farm progression, and Limit Breaker shape a character build.

## Report a bug

Found a problem with Sol's Leveling System? [Open a structured bug report](https://github.com/markmochi/sols-leveling-system-wiki/issues/new?template=bug_report.yml) or read the [complete reporting guide](https://markmochi.github.io/sols-leveling-system-wiki/reference/reporting-issues/).

Before submitting:

1. Search [existing issues](https://github.com/markmochi/sols-leveling-system-wiki/issues).
2. Check the [FAQ and troubleshooting guide](https://markmochi.github.io/sols-leveling-system-wiki/reference/troubleshooting/).
3. Reproduce the problem once more after restarting the game or server.
4. Include exact versions, reproduction steps, other mods, configuration changes, and the relevant log.

Remove access tokens, server addresses, player IP addresses, personal paths, and other private information before uploading logs.

## Inside the Codex

- Player Level, EXP sources, contribution rules, and repeat-farm safeguards
- All five Aptitudes and all 25 ranked passive paths
- STR, Weapon, and Range Masteries with every milestone passive
- Build archetypes and an interactive build/EXP Guild Ledger
- Limit Breaker, Active Survival, compatibility, commands, and datapacks
- Server configuration, troubleshooting, and safe progression reconciliation

## Supported versions

- Minecraft 1.16.5 — Forge
- Minecraft 1.20.1 — Forge
- Minecraft 1.21.1 — NeoForge

## Local preview

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

## Strict build

```powershell
.\.venv\Scripts\python.exe -m mkdocs build --strict
```

# Report a bug

Found something that does not work as expected? Report it through the public issue tracker so the exact version, progression state, and evidence stay together.

[Open a structured bug report](https://github.com/markmochi/sols-leveling-system-wiki/issues/new?template=bug_report.yml){ .codex-button }

## Before reporting

1. Confirm the correct Sol's Leveling System JAR is installed for your Minecraft version and loader.
2. Check [FAQ & troubleshooting](troubleshooting.md) for common progression, classification, and configuration problems.
3. Restart the game or dedicated server and reproduce the problem once more.
4. Search [existing issues](https://github.com/markmochi/sols-leveling-system-wiki/issues) to avoid opening a duplicate.

!!! warning "Keep sensitive information private"
    Remove access tokens, server addresses, personal paths, player IP addresses, authentication data, and other private information before attaching logs or configuration files.

## Information a useful report needs

### Exact versions

```text
Minecraft version:
Forge or NeoForge version:
Sol's Leveling System version:
Java version:
Singleplayer, LAN, or dedicated server:
```

Do not write only “latest.” Include the number shown in the Mods screen or startup log.

### Progression state

State the affected Player Level, Aptitude ranks, passive rank and toggle, Mastery levels, relevant cooldown, and whether the problem appeared before or after death/reconnect. For EXP reports, name the exact creature, item classification, spawn source, party state, and reward shown.

Server owners can attach redacted output from `/sol leveling admin audit <player>` or `/sol leveling admin debugmob <entity>`. Review it before posting and remove private server information.

### Reproduction steps

Describe the shortest reliable sequence:

```text
1. Join with Player Level ... and ... enabled.
2. Use ... against ...
3. Open ...
4. The problem occurs.
```

Include the expected and actual result, and say whether it happens every time.

### Logs and screenshots

- For a crash, attach the matching file from `crash-reports`.
- For other bugs, attach `logs/latest.log` from the affected client or server session.
- Show the complete leveling screen or passive detail instead of cropping out requirements and current ranks.
- For weapon classification, enable advanced tooltips with ++f3+h++ and show the full item tooltip.
- For Limit Breaker, show the target, offer/HUD state, and chat or admin status output.

## Test without unrelated mods when practical

Back up the world first. Reproduce with the correct loader and Sol's Leveling System, then add companion/content mods back in groups. If the issue requires a particular modded weapon, creature, party, title, or relic interaction, state the smallest combination that still causes it.

Never remove content mods from an important world without a backup.

## Good report titles

- `Weapon Mastery does not increase with examplemod:greatsword on Forge 1.20.1`
- `Turning Point return mark disappears immediately after reconnecting`
- `Player EXP screen becomes unavailable after dedicated-server restart`

Avoid titles such as `help`, `bug`, `broken`, or `it crashed`.


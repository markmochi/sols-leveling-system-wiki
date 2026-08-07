---
title: Sol's Leveling System Adventurer's Codex
description: Player guide to levels, aptitude skill trees, passives, combat masteries, buildcrafting, and server configuration.
hide:
  - toc
---

<section class="codex-hero">
  <div>
    <div class="codex-hero__eyebrow">The adventurer's progression codex</div>
    <h1>Every battle<br>shapes your path.</h1>
    <p class="codex-hero__lead">Earn Player EXP, forge a build through five Aptitudes, and master the combat styles you actually use. This guide turns a deep RPG system into clear decisions, one milestone at a time.</p>
    <div class="codex-actions">
      <a class="codex-button" href="getting-started/quick-start/">Begin your journey →</a>
      <a class="codex-button codex-button--ghost" href="aptitudes/">Choose an Aptitude</a>
      <a class="codex-button codex-button--ghost" href="builds/planner/">Open the Guild Ledger</a>
    </div>
  </div>
  <div class="attribute-wheel" aria-label="The five aptitude paths">
    <div class="attribute-wheel__orbit attribute-wheel__orbit--outer" aria-hidden="true"></div>
    <div class="attribute-wheel__orbit attribute-wheel__orbit--inner" aria-hidden="true"></div>
    <div class="attribute-wheel__pulse" aria-hidden="true"></div>
    <a class="attribute-wheel__core" href="aptitudes/" aria-label="Open the Aptitude Grimoire">SLS</a>
    <a class="attribute-rune attribute-rune--hp" href="aptitudes/vitality/" aria-label="Study HP Vitality"><span>HP</span></a>
    <a class="attribute-rune attribute-rune--def" href="aptitudes/fortitude/" aria-label="Study DEF Fortitude"><span>DEF</span></a>
    <a class="attribute-rune attribute-rune--dex" href="aptitudes/dexterity/" aria-label="Study DEX Dexterity"><span>DEX</span></a>
    <a class="attribute-rune attribute-rune--int" href="aptitudes/intellect/" aria-label="Study INT Intellect"><span>INT</span></a>
    <a class="attribute-rune attribute-rune--luck" href="aptitudes/fortune/" aria-label="Study LUCK Fortune"><span>LUCK</span></a>
  </div>
</section>

## Choose your chapter

<div class="path-grid">
  <div class="path-card path-card--hp"><div class="path-card__kicker">New adventurer</div><h3>Learn the core loop</h3><p>Open the screen, read your EXP, spend your first points, and understand what survives death.</p><p><a href="getting-started/quick-start/">First ten minutes →</a></p></div>
  <div class="path-card path-card--def"><div class="path-card__kicker">Specialist</div><h3>Study every tree</h3><p>Compare exact requirements, rank values, triggers, exclusions, cooldowns, and capstones.</p><p><a href="aptitudes/">Open the grimoire →</a></p></div>
  <div class="path-card path-card--dex"><div class="path-card__kicker">Buildcrafter</div><h3>Plan 150 points</h3><p>Use efficient breakpoints, passive gates, and Mastery synergy to shape a focused build.</p><p><a href="builds/buildcrafting/">Plan a build →</a></p></div>
  <div class="path-card path-card--luck"><div class="path-card__kicker">Server keeper</div><h3>Tune the campaign</h3><p>Configure progression, anti-farm behavior, parties, passives, classifications, and permissions.</p><p><a href="admin/configuration/">Enter the admin annex →</a></p></div>
</div>

## The progression loop

<div class="quest-board" aria-label="Six stages in character progression">
  <div class="quest-step"><b>QUEST I</b><strong>Face real danger</strong><span>Defeat eligible creatures or remain active near recent hostile encounters.</span></div>
  <div class="quest-step"><b>QUEST II</b><strong>Gain Player Levels</strong><span>Each level grants a share of the 150-point lifetime Aptitude budget.</span></div>
  <div class="quest-step"><b>QUEST III</b><strong>Spend Aptitude Points</strong><span>Raise direct stats and reach the gates for ranked passive abilities.</span></div>
  <div class="quest-step"><b>QUEST IV</b><strong>Claim passives</strong><span>Passive ranks are free once both the Player Level and Aptitude gates are met.</span></div>
  <div class="quest-step"><b>QUEST V</b><strong>Train by fighting</strong><span>Unarmed, melee, and ranged effective damage levels separate Masteries.</span></div>
  <div class="quest-step"><b>QUEST VI</b><strong>Refine your build</strong><span>Toggle abilities, spend vanilla XP to respec, and adapt to the campaign.</span></div>
</div>

<div class="codex-callout codex-callout--success"><strong>You do not need to memorize the system.</strong> Start with the quick guide, then return to a tree page when its next passive becomes reachable.</div>

## What the Codex covers

- Supported Forge and NeoForge editions, with exact requirements in [Installation](getting-started/installation.md)
- Player EXP, mob reward logic, contribution sharing, anti-farm behavior, and Active Survival
- All five Aptitudes, all 25 Aptitude Passives, and exact rank requirements
- STR, WEAPON, and RANGE Masteries plus all 18 milestone passives
- Point allocation, paid respecs, passive toggles, build archetypes, and optimization
- Parchment interface, keybinds, notifications, nameplates, HUD states, and accessibility
- Optional Sol integrations, modded weapon detection, encounter compatibility, tags, and datapacks
- Server configuration, commands, reconciliation, troubleshooting, and safe testing

!!! info "Default rules"
    Numbers in this Codex use the public default rules. Servers can change caps, progression resources, passive Player-Level gates, anti-farm rules, and classifications.

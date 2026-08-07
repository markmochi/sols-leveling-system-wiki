# Guild Ledger

Draft a build before spending vanilla XP on a respec. The ledger uses the public level curve, 150-point budget, aptitude caps, base bonuses, and passive gates.

## Build ledger

<form class="guild-ledger" data-build-ledger>
  <div class="guild-ledger__heading"><strong>Aptitude Draft</strong><span>Whole ranks · default caps</span></div>
  <div class="ledger-grid">
    <label>Player Level<input name="level" type="number" min="1" max="50" value="50" required></label>
    <label>HP<input name="hp" type="number" min="0" max="50" value="30" required></label>
    <label>DEF<input name="def" type="number" min="0" max="50" value="30" required></label>
    <label>DEX<input name="dex" type="number" min="0" max="50" value="30" required></label>
    <label>INT<input name="int" type="number" min="0" max="50" value="30" required></label>
    <label>LUCK<input name="luck" type="number" min="0" max="50" value="30" required></label>
  </div>
  <p><button type="submit">Seal the draft</button></p>
  <div class="ledger-result" data-ledger-result>Enter your planned ranks, then seal the draft.</div>
</form>

The passive count reports ranks whose two gates are met. You still claim and toggle those passives in the in-game aptitude tree.

## EXP ledger

<form class="guild-ledger" data-xp-ledger>
  <div class="guild-ledger__heading"><strong>Journey Estimate</strong><span>Start of level → start of level</span></div>
  <div class="ledger-grid">
    <label>Progression<select name="kind"><option value="player">Player Level</option><option value="mastery">Mastery</option></select></label>
    <label>Current level<input name="from" type="number" min="1" max="50" value="1" required></label>
    <label>Target level<input name="to" type="number" min="2" max="50" value="50" required></label>
  </div>
  <p><button type="submit">Calculate the journey</button></p>
  <div class="ledger-result" data-ledger-result>Choose a progression and level range.</div>
</form>

!!! note
    Servers may change caps, curves, and progression settings. Treat this ledger as the public default, then check the server's configuration if the numbers differ in game.

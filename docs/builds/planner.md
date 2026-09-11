# Guild Ledger

Draft a build before spending vanilla XP on a respec. The ledger uses the public v1.0.3 curves, 150-point budget, aptitude caps, base bonuses, and passive gates.

## Build ledger

<form class="guild-ledger" data-build-ledger>
  <div class="guild-ledger__heading"><strong>Aptitude Draft</strong><span>Whole ranks · default caps</span></div>
  <div class="ledger-grid">
    <label>Progression mode<select name="mode"><option value="balanced">Balanced (default)</option><option value="long">Long progression</option></select></label>
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
    <label>Progression<select name="kind"><option value="player">Player Level — balanced</option><option value="player_long">Player Level — long</option><option value="mastery">Mastery</option></select></label>
    <label>Current level<input name="from" type="number" min="1" max="50" value="1" required></label>
    <label>Target level<input name="to" type="number" min="2" max="50" value="50" required></label>
  </div>
  <p><button type="submit">Calculate the journey</button></p>
  <div class="ledger-result" data-ledger-result>Choose a progression and level range.</div>
</form>

!!! note
    Balanced is the v1.0.3 default. Long progression restores the original Player EXP curve and all original Aptitude passive gates. Server owners can also change caps and requirement lists, so the in-game screen remains authoritative for a customized server.

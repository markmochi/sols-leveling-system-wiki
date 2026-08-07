(function () {
  "use strict";

  function roundTo(value, quantum) {
    return Math.floor(value / quantum + 0.5) * quantum;
  }

  function playerRequirement(level) {
    return roundTo(70 * Math.pow(Math.max(1, level), 1.08), 10);
  }

  function masteryRequirement(level) {
    return roundTo(150 * Math.pow(Math.max(1, level), 1.3), 10);
  }

  function cumulative(requirement, target) {
    var total = 0;
    for (var level = 1; level < target; level += 1) total += requirement(level);
    return total;
  }

  function format(value) {
    return Math.round(value).toLocaleString("en-US");
  }

  function bindXpLedger() {
    var form = document.querySelector("[data-xp-ledger]");
    if (!form) return;
    var result = form.querySelector("[data-ledger-result]");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var kind = form.querySelector("[name=kind]").value;
      var from = Number(form.querySelector("[name=from]").value);
      var to = Number(form.querySelector("[name=to]").value);
      var cap = kind === "player" ? 50 : 30;
      if (!Number.isInteger(from) || !Number.isInteger(to) || from < 1 || to <= from || to > cap) {
        result.dataset.state = "error";
        result.innerHTML = "<strong>Check the levels.</strong><br><small>Choose a target above the current level and at or below the default cap.</small>";
        return;
      }
      var fn = kind === "player" ? playerRequirement : masteryRequirement;
      var needed = cumulative(fn, to) - cumulative(fn, from);
      result.dataset.state = "success";
      result.innerHTML = "<strong>" + format(needed) + " " + (kind === "player" ? "Player EXP" : "Mastery EXP") + "</strong><br><small>From the start of level " + from + " to the start of level " + to + " under the public default rules.</small>";
    });
  }

  var passives = {
    hp: [
      [[10,18,26,34,42],[3,9,17,27,39]], [[20,25,30,35,40],[7,14,22,31,42]],
      [[30,34,38,43,48],[15,22,30,39,47]], [[35,39,43,47,50],[25,31,37,44,50]],
      [[40,41,42,43,44,45,46,47,48,50],[35,37,39,41,43,45,46,47,49,50]]
    ],
    def: [
      [[5,12,20,30,40],[2,7,14,24,36]], [[10,18,26,35,44],[5,11,19,30,42]],
      [[20,27,34,42,50],[10,17,25,35,45]], [[30,35,40,46,50],[20,27,35,43,50]],
      [[40,41,42,43,44,45,46,47,48,50],[40,41,42,43,44,45,46,47,48,50]]
    ],
    dex: [
      [[5,12,20,30,40],[4,10,18,30,42]], [[8,15,23,32,42],[7,14,22,33,44]],
      [[12,20,28,36,45],[10,18,27,37,47]], [[30,35,40,46,50],[20,27,35,43,50]],
      [[40,41,42,43,44,45,46,47,48,50],[30,33,36,39,42,44,46,47,49,50]]
    ],
    int: [
      [[5,12,20,30,40],[5,11,19,30,42]], [[12,20,28,36,45],[10,18,27,37,47]],
      [[30,35,40,45,50],[20,28,36,43,50]], [[35,38,41,45,50],[30,35,40,45,50]],
      [[40,42,44,47,50],[35,39,43,47,50]]
    ],
    luck: [
      [[5,12,20,30,40],[4,10,18,30,42]], [[10,18,26,35,45],[10,17,25,35,45]],
      [[25,31,37,44,50],[20,27,35,43,50]], [[32,37,42,47,50],[30,35,40,45,50]],
      [[50,50,50,50,50,50,50,50,50,50],[45,46,46,47,47,48,48,49,49,50]]
    ]
  };

  function accessiblePassiveRanks(tree, aptitude, playerLevel) {
    return passives[tree].reduce(function (sum, passive) {
      var ranks = passive[0], levels = passive[1], unlocked = 0;
      for (var i = 0; i < ranks.length; i += 1) {
        if (aptitude >= ranks[i] && playerLevel >= levels[i]) unlocked = i + 1;
      }
      return sum + unlocked;
    }, 0);
  }

  function healthBonus(rank) {
    return Math.min(rank, 8) * 0.75 + Math.max(0, Math.min(rank, 30) - 8) * 0.5 + Math.max(0, rank - 30) * 0.25;
  }

  function bindBuildLedger() {
    var form = document.querySelector("[data-build-ledger]");
    if (!form) return;
    var result = form.querySelector("[data-ledger-result]");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var level = Number(form.querySelector("[name=level]").value);
      var ids = ["hp","def","dex","int","luck"];
      var ranks = {};
      ids.forEach(function (id) { ranks[id] = Number(form.querySelector("[name=" + id + "]").value); });
      var values = [level].concat(ids.map(function (id) { return ranks[id]; }));
      if (!values.every(Number.isInteger) || level < 1 || level > 50 || ids.some(function (id) { return ranks[id] < 0 || ranks[id] > 50; })) {
        result.dataset.state = "error";
        result.innerHTML = "<strong>Use whole numbers within the default caps.</strong>";
        return;
      }
      var entitlement = Math.floor((level - 1) * 150 / 49);
      var spent = ids.reduce(function (sum, id) { return sum + ranks[id]; }, 0);
      var over = spent - entitlement;
      var passiveRanks = ids.reduce(function (sum, id) { return sum + accessiblePassiveRanks(id, ranks[id], level); }, 0);
      result.dataset.state = over > 0 ? "error" : "success";
      result.innerHTML =
        "<strong>" + (over > 0 ? "Over budget by " + over + " points" : (entitlement - spent) + " points remain") + "</strong>" +
        "<div class=\"ledger-stats\">" +
        "<span>Budget: " + spent + " / " + entitlement + "</span>" +
        "<span>Max HP: +" + healthBonus(ranks.hp).toFixed(2).replace(/\.00$/, "") + "</span>" +
        "<span>Armor / Toughness: +" + (ranks.def * .1).toFixed(1) + " / +" + (ranks.def * .05).toFixed(2) + "</span>" +
        "<span>Movement: +" + (ranks.dex * .3).toFixed(1) + "%</span>" +
        "<span>XP Orb Gain: +" + (ranks.int * .5).toFixed(1) + "%</span>" +
        "<span>Loot Luck: +" + (ranks.luck * .04).toFixed(2) + "</span>" +
        "<span>Passive ranks available: " + passiveRanks + " / 145</span>" +
        "</div><small>Passive count means ranks whose Player Level and Aptitude requirements are met; claim them in the in-game tree.</small>";
    });
  }

  function start() { bindXpLedger(); bindBuildLedger(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
  document.addEventListener("DOMContentSwitch", start);
}());

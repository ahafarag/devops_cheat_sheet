/*
 * Renderer for the DevOps Commands reference — two views (flip cards + table).
 *
 * Each data file (loaded before this script) pushes a section onto window.COMMANDS:
 *   window.COMMANDS = window.COMMANDS || [];
 *   window.COMMANDS.push({
 *     group: 'Linux',                       // major tool — drives the filter chips
 *     category: 'Basic Linux Commands',     // sub-section heading
 *     items: [ { command: 'pwd', description: 'Print the working directory.' } ]
 *   });
 *
 * The page may set window.GUIDE_TITLE for the top-bar label.
 */
(function () {
  'use strict';

  var SECTIONS = window.COMMANDS || [];

  // Flatten into a single ordered list with a stable global number.
  var ITEMS = [];
  SECTIONS.forEach(function (sec) {
    (sec.items || []).forEach(function (it) {
      ITEMS.push({
        num: ITEMS.length + 1,
        group: sec.group || 'Other',
        category: sec.category || sec.group || 'Other',
        command: it.command,
        description: it.description
      });
    });
  });

  var GROUPS = [];
  ITEMS.forEach(function (it) { if (GROUPS.indexOf(it.group) === -1) GROUPS.push(it.group); });

  var state = { view: 'card', group: 'All', q: '' };

  var els = {};
  function $(id) { return document.getElementById(id); }

  function matches(it) {
    if (state.group !== 'All' && it.group !== state.group) return false;
    if (state.q) {
      var hay = (it.command + ' ' + it.description + ' ' + it.category).toLowerCase();
      if (hay.indexOf(state.q) === -1) return false;
    }
    return true;
  }

  function copyText(text) {
    navigator.clipboard.writeText(text);
    var t = els.toast;
    t.textContent = 'Copied: ' + text;
    t.classList.add('show');
    clearTimeout(copyText._t);
    copyText._t = setTimeout(function () { t.classList.remove('show'); }, 1400);
  }

  function buildChips() {
    var chips = ['All'].concat(GROUPS);
    els.chips.innerHTML = '';
    chips.forEach(function (g) {
      var b = document.createElement('button');
      b.className = 'chip' + (g === state.group ? ' active' : '');
      b.textContent = g;
      b.addEventListener('click', function () {
        state.group = g;
        els.chips.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
        b.classList.add('active');
        apply();
      });
      els.chips.appendChild(b);
    });
  }

  function renderCards(list) {
    if (!list.length) { els.card.innerHTML = '<div class="no-match">No commands match your search.</div>'; return; }
    var html = '';
    list.forEach(function (it) {
      // Front = the task as a question; strip any "Example:" so it doesn't leak the command.
      var question = it.description, example = '';
      var ix = question.indexOf('Example:');
      if (ix !== -1) { example = question.slice(ix + 'Example:'.length).trim(); question = question.slice(0, ix).trim(); }
      html +=
        '<button class="flip-card" type="button" aria-label="Reveal the command for: ' + escAttr(question) + '">' +
          '<div class="flip-inner">' +
            '<div class="flip-face flip-front">' +
              '<div class="card-top"><span class="card-num">#' + it.num + '</span>' +
              '<span class="card-cat">' + it.category + '</span></div>' +
              '<div class="card-question">' + question + '</div>' +
              '<div class="card-front-hint">tap to reveal command →</div>' +
            '</div>' +
            '<div class="flip-face flip-back">' +
              '<div class="card-top"><span class="card-num">#' + it.num + '</span>' +
              '<span class="card-cat">' + it.category + '</span></div>' +
              '<div class="card-answer">' + it.command + '</div>' +
              (example ? '<div class="card-example">' + example + '</div>' : '') +
              '<button class="card-copy" type="button" data-cmd="' + escAttr(it.command) + '">Copy</button>' +
            '</div>' +
          '</div>' +
        '</button>';
    });
    els.card.innerHTML = html;

    els.card.querySelectorAll('.flip-card').forEach(function (card) {
      card.addEventListener('click', function () { card.classList.toggle('flipped'); });
    });
    els.card.querySelectorAll('.card-copy').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        copyText(btn.getAttribute('data-cmd'));
      });
    });
  }

  function renderList(list) {
    if (!list.length) { els.list.innerHTML = '<div class="no-match">No commands match your search.</div>'; return; }
    var rows = '';
    var lastCat = null;
    list.forEach(function (it) {
      if (it.category !== lastCat) {
        rows += '<tr class="cat-row"><td colspan="3">' + it.group + ' · ' + it.category + '</td></tr>';
        lastCat = it.category;
      }
      rows +=
        '<tr>' +
          '<td class="col-num">' + it.num + '</td>' +
          '<td class="col-cmd"><code data-cmd="' + escAttr(it.command) + '" title="Click to copy">' + it.command + '</code></td>' +
          '<td class="col-desc">' + it.description + '</td>' +
        '</tr>';
    });
    els.list.innerHTML =
      '<table class="cmd-table"><thead><tr>' +
        '<th class="col-num">#</th><th class="col-cmd">Command</th><th>Description</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table>';

    els.list.querySelectorAll('code[data-cmd]').forEach(function (code) {
      code.addEventListener('click', function () { copyText(code.getAttribute('data-cmd')); });
    });
  }

  function escAttr(s) { return String(s).replace(/"/g, '&quot;'); }

  function apply() {
    var list = ITEMS.filter(matches);
    els.count.textContent = list.length + ' of ' + ITEMS.length + ' commands' +
      (state.group !== 'All' ? ' · ' + state.group : '') + (state.q ? ' · "' + state.q + '"' : '');
    if (state.view === 'card') { renderCards(list); } else { renderList(list); }
  }

  function setView(view) {
    state.view = view;
    els.toggle.querySelectorAll('button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-view') === view);
    });
    els.card.style.display = view === 'card' ? 'grid' : 'none';
    els.list.style.display = view === 'list' ? 'block' : 'none';
    apply();
  }

  function init() {
    els = {
      title: $('guide-title'), chips: $('cmd-chips'), search: $('cmd-search'),
      count: $('cmd-count'), card: $('card-view'), list: $('list-view'),
      toggle: $('view-toggle'), toast: $('toast')
    };
    if (!els.card || !els.list) return;
    if (els.title && window.GUIDE_TITLE) els.title.textContent = window.GUIDE_TITLE;

    buildChips();
    els.search.addEventListener('input', function () { state.q = els.search.value.trim().toLowerCase(); apply(); });
    els.toggle.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () { setView(b.getAttribute('data-view')); });
    });
    setView('card');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/*
 * Renderer for the tabbed "AREAS" guides.
 *
 * Each data file (loaded before this script) pushes an area onto window.AREAS:
 *   window.AREAS = window.AREAS || [];
 *   window.AREAS.push({ nav, number, title, color, what, topics: [{name, tag, body}] });
 *
 * The page may also set window.GUIDE_TITLE for the topbar label.
 */
(function () {
  'use strict';

  var TAGS = {
    must:     { cls: 'tag-must',     label: 'Must Know' },
    likely:   { cls: 'tag-likely',   label: 'Likely' },
    possible: { cls: 'tag-possible', label: 'Possible' },
    basic:    { cls: 'tag-basic',    label: 'Basic' },
    inter:    { cls: 'tag-inter',    label: 'Intermediate' },
    adv:      { cls: 'tag-adv',      label: 'Advanced' }
  };

  var AREAS = window.AREAS || [];
  var openedTopics = new Set();
  var totalTopics = 0;

  function el(tag, cls, html) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function showArea(idx, btn) {
    document.querySelectorAll('.area').forEach(function (a) { a.classList.remove('visible'); });
    var area = document.getElementById('area-' + idx);
    if (area) area.classList.add('visible');
    document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleTopic(id) {
    var node = document.getElementById(id);
    node.classList.toggle('open');
    if (node.classList.contains('open')) openedTopics.add(id);
    updateProgress();
  }

  function updateProgress() {
    var count = openedTopics.size;
    var pct = totalTopics > 0 ? Math.round((count / totalTopics) * 100) : 0;
    var text = document.getElementById('prog-text');
    var fill = document.getElementById('prog-fill');
    if (text) text.textContent = count + ' / ' + totalTopics + ' topics studied';
    if (fill) fill.style.width = pct + '%';
  }

  function copyCode(btn) {
    var pre = btn.closest('.code-wrap').querySelector('pre');
    navigator.clipboard.writeText(pre.textContent);
    btn.textContent = '✓';
    setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
  }

  // expose for inline onclick handlers produced below
  window.showArea = showArea;
  window.toggleTopic = toggleTopic;
  window.copyCode = copyCode;

  function render() {
    var topbar = document.getElementById('topbar');
    var main = document.getElementById('main');
    if (!topbar || !main) return;

    var titleSpan = document.getElementById('guide-title');
    if (titleSpan && window.GUIDE_TITLE) titleSpan.textContent = window.GUIDE_TITLE;

    AREAS.forEach(function (area, areaIdx) {
      // nav button
      var btn = el('button', 'nav-btn' + (areaIdx === 0 ? ' active' : ''),
        (area.nav || area.title));
      btn.addEventListener('click', function () { showArea(areaIdx, btn); });
      topbar.appendChild(btn);

      // area panel
      var areaDiv = el('div', 'area' + (areaIdx === 0 ? ' visible' : ''));
      areaDiv.id = 'area-' + areaIdx;
      var html = '<div class="area-header">' +
        '<div class="area-number" style="color:' + (area.color || 'var(--accent1)') + '">' +
        (area.number || '') + '</div>' +
        '<div class="area-title">' + area.title + '</div>' +
        '<div class="area-what">' + (area.what || '') + '</div></div>';

      (area.topics || []).forEach(function (topic, topicIdx) {
        totalTopics++;
        var id = 'topic-' + areaIdx + '-' + topicIdx;
        var meta = TAGS[topic.tag] || { cls: 'tag-possible', label: topic.tag || '' };
        html += '<div class="topic" id="' + id + '">' +
          '<div class="topic-head" onclick="toggleTopic(\'' + id + '\')">' +
          '<div><div class="topic-name">' + topic.name + '</div></div>' +
          '<div style="display:flex;gap:8px;align-items:center">' +
          '<span class="topic-tag ' + meta.cls + '">' + meta.label + '</span>' +
          '<span class="chevron">▶</span></div></div>' +
          '<div class="topic-body">' + topic.body + '</div></div>';
      });

      areaDiv.innerHTML = html;
      main.appendChild(areaDiv);
    });

    updateProgress();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();

/*
 * Renderer for the Python & Bash accordion cheat sheet.
 *
 * Each data file (loaded before this script) pushes a section onto window.SECTIONS:
 *   window.SECTIONS = window.SECTIONS || [];
 *   window.SECTIONS.push({ title, emoji, hint, memorize, python: `...`, bash: `...` });
 */
(function () {
  'use strict';

  var DATA = window.SECTIONS || [];

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function showLang(btn, lang, idx) {
    var tabs = btn.parentElement.querySelectorAll('.lang-tab');
    tabs.forEach(function (t) { t.className = 'lang-tab'; });
    btn.className = 'lang-tab ' + (lang === 'python' ? 'active-py' : 'active-bash');
    document.getElementById('code-' + idx).textContent = DATA[idx][lang];
  }

  function copyCode(idx) {
    var pre = document.getElementById('code-' + idx);
    navigator.clipboard.writeText(pre.textContent);
    var btn = pre.parentElement.querySelector('.copy-btn');
    btn.textContent = '✓ Copied';
    setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
  }

  window.showLang = showLang;
  window.copyCode = copyCode;

  function render() {
    var container = document.getElementById('sections');
    if (!container) return;

    DATA.forEach(function (s, i) {
      var div = document.createElement('div');
      div.className = 'section' + (i === 0 ? ' open' : '');
      div.innerHTML =
        '<div class="section-header" onclick="this.parentElement.classList.toggle(\'open\')">' +
          '<div>' +
            '<div class="section-title">' + s.emoji + ' ' + s.title + '</div>' +
            '<div class="section-hint">' + s.hint + '</div>' +
          '</div>' +
          '<span class="arrow">▶</span>' +
        '</div>' +
        '<div class="section-body">' +
          '<div class="memorize"><strong>🧠 Memorize:</strong> <code>' + escapeHtml(s.memorize) + '</code></div>' +
          '<div class="lang-tabs">' +
            '<button class="lang-tab active-py" onclick="showLang(this, \'python\', ' + i + ')">🐍 Python</button>' +
            '<button class="lang-tab" onclick="showLang(this, \'bash\', ' + i + ')">💻 Bash</button>' +
          '</div>' +
          '<div class="code-block">' +
            '<button class="copy-btn" onclick="copyCode(' + i + ')">Copy</button>' +
            '<pre id="code-' + i + '">' + escapeHtml(s.python) + '</pre>' +
          '</div>' +
        '</div>';
      container.appendChild(div);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();

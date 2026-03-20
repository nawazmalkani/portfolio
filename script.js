/* ================================================
   NAWAZ MALKANI — PORTFOLIO  |  script.js FINAL
   ================================================ */

// ── TYPING EFFECT ──────────────────────────────
(function () {
  var roles = ['WordPress Developer', 'Frontend Developer', 'Freelancer'];
  var el = document.getElementById('typed-text');
  if (!el) return;
  var ri = 0, ci = 0, del = false;
  function type() {
    var word = roles[ri];
    if (!del) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { del = true; return setTimeout(type, 1800); }
      setTimeout(type, 78);
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { del = false; ri = (ri + 1) % roles.length; return setTimeout(type, 420); }
      setTimeout(type, 44);
    }
  }
  setTimeout(type, 900);
})();

// ── CURSOR GLOW ────────────────────────────────
(function () {
  var glow = document.getElementById('cursorGlow');
  if (!glow) return;
  document.addEventListener('mousemove', function (e) {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
})();

// ── NAVBAR SCROLL ──────────────────────────────
(function () {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  function check() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', check, { passive: true });
  check();
})();

// ── HAMBURGER MENU ─────────────────────────────
(function () {
  var btn  = document.getElementById('hamburger');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    var open = btn.classList.toggle('open');
    menu.classList.toggle('open', open);
  });
  menu.querySelectorAll('.mob-link').forEach(function (link) {
    link.addEventListener('click', function () {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });
})();

// ── SCROLL REVEAL ──────────────────────────────
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var siblings = Array.from(
        entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')
      );
      var idx = siblings.indexOf(entry.target);
      setTimeout(function () {
        entry.target.classList.add('visible');
      }, Math.max(0, idx) * 80);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// ── ACTIVE NAV HIGHLIGHT ───────────────────────
(function () {
  var sections = document.querySelectorAll('section[id]');
  var links    = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;
  window.addEventListener('scroll', function () {
    var y = window.pageYOffset + 100;
    sections.forEach(function (sec) {
      if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
        links.forEach(function (a) { a.style.color = ''; });
        var active = document.querySelector('.nav-links a[href="#' + sec.id + '"]');
        if (active) active.style.color = 'var(--acc2)';
      }
    });
  }, { passive: true });
})();

// ── SMOOTH SCROLL ──────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.pageYOffset - 72,
      behavior: 'smooth'
    });
  });
});

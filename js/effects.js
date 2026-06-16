/* ─────────────────────────────────────────────
   EFFECTS.JS — Animations & interactions 1
   ───────────────────────────────────────────── */

/* ── Text Scramble ──────────────────────────── */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const length = newText.length;
    const promise = new Promise(r => (this.resolve = r));
    this.queue = newText.split('').map((to, i) => ({
      to,
      start: Math.floor(Math.random() * 12),
      end: Math.floor(Math.random() * 12) + 14 + i * 1.5 | 0,
      char: '',
    }));
    cancelAnimationFrame(this.frameReq);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (const item of this.queue) {
      const { to, start, end } = item;
      if (this.frame >= end) {
        complete++;
        output += to === '\n' ? '<br>' : to === ' ' ? '&nbsp;' : to;
      } else if (this.frame >= start) {
        if (!item.char || Math.random() < 0.3)
          item.char = this.chars[Math.floor(Math.random() * this.chars.length)];
        output += `<span class="scramble-char" aria-hidden="true">${item.char}</span>`;
      } else {
        output += to === '\n' ? '<br>' : '&nbsp;';
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameReq = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

/* ── Spotlight Cards ────────────────────────── */
function initSpotlight(selector) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    });
  });
}

/* ── Animated counter ───────────────────────── */
function animateCounter(el, target, duration = 1200) {
  const start = performance.now();
  const update = now => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

/* ── Scroll reveals (IntersectionObserver) ───── */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ── Counter reveal (triggers once in view) ── */
function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.count, 10);
        animateCounter(e.target, target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
}

/* ── Navigation active link ─────────────────── */
function initNav() {
  const pages = [
    { href: 'index.html',       match: ['index.html', ''] },
    { href: 'about.html',       match: ['about.html'] },
    { href: 'passions.html',    match: ['passions.html'] },
    { href: 'competences.html', match: ['competences.html', 'niveau.html'] },
  ];
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const page = pages.find(p => p.href === a.getAttribute('href'));
    if (page && page.match.includes(current)) a.classList.add('active');
  });
}

/* ── Nav scroll state ───────────────────────── */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const baseShadow = '0 8px 32px -12px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.04) inset';
  const scrolledShadow = '0 14px 40px -10px rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.04) inset';

  const onScroll = () => {
    nav.style.boxShadow = window.scrollY > 20 ? scrolledShadow : baseShadow;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Hero scramble on load ───────────────────── */
function initHeroScramble() {
  const el = document.getElementById('hero-name-scramble');
  if (!el) return;
  const finalText = el.dataset.text || el.textContent.trim();
  el.dataset.text = finalText;
  const fx = new TextScramble(el);
  // Small delay so the page is painted first
  setTimeout(() => fx.setText(finalText), 200);
}

/* ── Niveau rows directional hover fill ─────── */
function initNiveauRows() {
  document.querySelectorAll('.niveau-row').forEach(row => {
    row.addEventListener('mouseenter', e => {
      const r = row.getBoundingClientRect();
      const fromLeft = e.clientX - r.left < r.width / 2;
      row.style.setProperty('--fill-origin', fromLeft ? '0%' : '100%');
    });
  });
}

/* ── Init all ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initSpotlight('.competence-card');
  initSpotlight('.home-nav-item');
  initSpotlight('.hero-card');
  initSpotlight('.hero-stat');
  initSpotlight('.passion-item');
  initSpotlight('.niveau-nav-card');
  initCounters();
  initNav();
  initNavScroll();
  initHeroScramble();
  initNiveauRows();
});

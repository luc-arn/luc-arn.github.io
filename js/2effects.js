/* ─────────────────────────────────────────────
   EFFECTS.JS — Animations & interactions
   Sombre charcoal, accents violet 2
   ───────────────────────────────────────────── */

/* ── Hero entrance fade ─────────────────────── */
function initHeroEntrance() {
    const el = document.getElementById('hero-name-scramble');
    if (!el) return;
  
    const finalText = el.dataset.text || el.textContent.trim();
    el.dataset.text = finalText;
    el.textContent = finalText;
  
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
  
    requestAnimationFrame(() => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 80);
    });
  }
  
  /* ── Spotlight Cards (halo violet local au hover) ── */
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
  function animateCounter(el, target, duration = 1400) {
    const start = performance.now();
    const update = now => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.round(ease * target);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
  
  /* ── Scroll reveals ─────────────────────────── */
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
  
  /* ── Counter reveal ─────────────────────────── */
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
    initHeroEntrance();
  });
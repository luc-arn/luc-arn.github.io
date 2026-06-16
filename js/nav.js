/* Injects the nav and marks the active page */
(function () {
  const pages = [
    { href: 'index.html',       label: 'Accueil',     match: ['index.html', ''] },
    { href: 'about.html',       label: 'À propos',    match: ['about.html'] },
    { href: 'passions.html',    label: 'Passions',    match: ['passions.html'] },
    { href: 'competences.html', label: 'Compétences', match: ['competences.html', 'niveau.html'] },
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';

  const links = pages.map(p => {
    const isActive = p.match.includes(current);
    return `<li><a href="${p.href}"${isActive ? ' class="active"' : ''}>${p.label}</a></li>`;
  }).join('');

  const brandText = 'Lucas Arnaud';
  const brandMid = (brandText.length - 1) / 2;
  const brandSpans = [...brandText].map((ch, i) => {
    const char = ch === ' ' ? '&nbsp;' : ch;
    return `<span class="nav-brand-char" style="--offset:${i - brandMid}">${char}</span>`;
  }).join('');

  const html = `
    <nav class="nav" role="navigation" aria-label="Navigation principale">
      <div class="nav-inner">
        <a href="index.html" class="nav-brand">
          <span class="nav-brand-dot" aria-hidden="true"></span>
          <span class="nav-brand-text" aria-label="Lucas Arnaud">${brandSpans}</span>
        </a>
        <ul class="nav-links">${links}</ul>
      </div>
    </nav>`;

  const placeholder = document.getElementById('site-nav');
  if (placeholder) placeholder.outerHTML = html;
})();

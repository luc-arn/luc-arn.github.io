/* ─────────────────────────────────────────────
   NIVEAU.JS — Page dynamique par compétence/niveau
   URL : niveau.html?c=realiser&n=1
───────────────────────────────────────────── */

let _comp   = null;
let _niveau = null;
let _nNum   = 0;
let _acIdx  = 0;

const COMP_ORDER = ['realiser', 'optimiser', 'administrer', 'gerer', 'conduire', 'collaborer'];

function hasNiveau (compId, n) {
  return Boolean(COMPETENCES[compId]?.niveaux[n]);
}

function getAdjacentComp (direction) {
  const idx = COMP_ORDER.indexOf(_comp.id);
  const step = direction === 'prev' ? -1 : 1;
  for (let i = idx + step; i >= 0 && i < COMP_ORDER.length; i += step) {
    if (hasNiveau(COMP_ORDER[i], _nNum)) return COMP_ORDER[i];
  }
  return null;
}

function compNavBtn (href, label, title, side, disabled) {
  const cls = `niveau-comp-nav niveau-comp-nav--${side}`;
  if (disabled) {
    return `<span class="${cls} is-disabled" aria-hidden="true" title="${title}">${label}</span>`;
  }
  return `<a href="${href}" class="${cls}" title="${title}" aria-label="${title}">${label}</a>`;
}

function buildCompNav () {
  const prevComp = getAdjacentComp('prev');
  const nextComp = getAdjacentComp('next');

  return `
    ${compNavBtn(
      prevComp ? `niveau.html?c=${prevComp}&n=${_nNum}` : '#',
      '🢦',
      prevComp ? `Compétence précédente — ${COMPETENCES[prevComp].name}` : '',
      'prev',
      !prevComp
    )}
    ${compNavBtn(
      nextComp ? `niveau.html?c=${nextComp}&n=${_nNum}` : '#',
      '🢧',
      nextComp ? `Compétence suivante — ${COMPETENCES[nextComp].name}` : '',
      'next',
      !nextComp
    )}`;
}

function buildNiveauMeta () {
  return `
    <div class="niveau-meta">
      <span class="niveau-code">[ C.${_comp.code} ]</span>
      <h1 class="niveau-competence-name">${_comp.name}</h1>
      <span class="niveau-badge-large">Niveau ${_nNum}</span>
    </div>`;
}

/* ── Lightbox ─────────────────────────────── */
window.openLightbox = function (imgSrc) {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <div class="lightbox-inner" onclick="event.stopPropagation()">
      <button class="lightbox-close" onclick="document.querySelector('.lightbox-overlay').remove()" aria-label="Fermer">×</button>
      <img src="${imgSrc}" alt="Preuve visuelle agrandie" />
    </div>`;
  overlay.addEventListener('click', () => overlay.remove());
  document.body.appendChild(overlay);
};

/* ── Navigation entre ACs ─────────────────── */
window.goToAC = function (index) {
  if (!_niveau || index < 0 || index >= _niveau.acs.length) return;
  _acIdx = index;
  renderAC();
  window.scrollTo({ top: document.querySelector('.ac-tabs-bar').offsetTop - 80, behavior: 'smooth' });
};

/* ── Rendu d'un AC ────────────────────────── */
function renderAC () {
  const ac      = _niveau.acs[_acIdx];
  const total   = _niveau.acs.length;
  const isFirst = _acIdx === 0;
  const isLast  = _acIdx === total - 1;

  /* Onglets */
  document.querySelectorAll('.ac-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === _acIdx);
  });

  /* Preuve : image réelle si renseignée, sinon placeholder cliquable */
  const proofHTML = ac.preuve
    ? `<div class="proof-img-wrap">
         <img src="${ac.preuve}" alt="Preuve visuelle — ${ac.code}"
              class="proof-img"
              onclick="openLightbox('${ac.preuve}')" />
       </div>`
    : `<div class="proof-full" title="Remplacer par une capture d'écran">
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <rect x="2" y="5" width="28" height="22" rx="1" stroke="currentColor" stroke-width="1.4"/>
           <circle cx="11" cy="13" r="3" stroke="currentColor" stroke-width="1.4"/>
           <path d="M2 24l7-6 5 4 6-7 10 9" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
         </svg>
         <p class="label">Capture d'écran · preuve visuelle</p>
         <p class="proof-hint">Cliquer pour agrandir une fois l'image ajoutée</p>
       </div>`;

  document.getElementById('ac-content').innerHTML = `
    <div class="ac-view reveal visible">

      <div class="ac-view-header">
        <span class="ac-view-num">${ac.code}</span>
        <div class="ac-view-meta">
          <span class="ac-view-progress">${_acIdx + 1} / ${total}</span>
          <h3 class="ac-view-title">${ac.titre}</h3>
        </div>
      </div>

      <div class="ac-view-context">
        <p class="label"><span class="label-prefix">//</span> Contexte &amp; situation</p>
        ${ac.contexte
          ? `<p class="ac-view-context-text">${ac.contexte}</p>`
          : ''}
        ${ac.contexte && ac.situation
          ? '<hr class="divider ac-view-context-sep" />'
          : ''}
        ${ac.situation
          ? `<p class="ac-view-context-text">${ac.situation}</p>`
          : ''}
        ${!ac.contexte && !ac.situation
          ? `<div class="placeholder-text">
               Dans quel projet ou quelle situation as-tu mobilisé cet apprentissage ?
               Décris le contexte, les outils utilisés et ce que tu as produit — à compléter.
             </div>`
          : ''}
      </div>

      <div class="ac-view-proof">
        <p class="label"><span class="label-prefix">//</span> Preuve visuelle</p>
        ${proofHTML}
      </div>

      <div class="ac-nav">
        <button class="ac-nav-btn" onclick="goToAC(${_acIdx - 1})" ${isFirst ? 'disabled' : ''}>
          ← AC précédente
        </button>
        <span class="ac-nav-center">${ac.code}</span>
        <button class="ac-nav-btn" onclick="goToAC(${_acIdx + 1})" ${isLast ? 'disabled' : ''}>
          AC suivante →
        </button>
      </div>

    </div>`;
}

/* ── Construit les onglets AC ─────────────── */
function buildTabs () {
  return _niveau.acs.map((ac, i) => `
    <button class="ac-tab ${i === 0 ? 'active' : ''}"
            onclick="goToAC(${i})"
            title="${ac.titre}">
      ${ac.code}
    </button>`).join('');
}

/* ── HTML de navigation entre niveaux ─────── */
function buildNiveauNav () {
  const prevN = _comp.niveaux[_nNum - 1] ? _nNum - 1 : null;
  const nextN = _comp.niveaux[_nNum + 1] ? _nNum + 1 : null;

  const prevCard = prevN
    ? `<a href="niveau.html?c=${_comp.id}&n=${prevN}" class="niveau-nav-card">
         <span class="niveau-nav-card-dir">← Niveau ${prevN}</span>
         <span class="niveau-nav-card-title">${_comp.niveaux[prevN].titre}</span>
         <span class="niveau-nav-card-year">${_comp.niveaux[prevN].annee}</span>
       </a>`
    : `<div></div>`;

  const nextCard = nextN
    ? `<a href="niveau.html?c=${_comp.id}&n=${nextN}" class="niveau-nav-card next">
         <span class="niveau-nav-card-dir">Niveau ${nextN} →</span>
         <span class="niveau-nav-card-title">${_comp.niveaux[nextN].titre}</span>
         <span class="niveau-nav-card-year">${_comp.niveaux[nextN].annee}</span>
       </a>`
    : `<div></div>`;

  return `
    <div class="niveau-nav-cards">
      ${prevCard}
      <a href="competences.html" class="niveau-nav-overview">Vue d'ensemble</a>
      ${nextCard}
    </div>`;
}

/* ── Sélecteur de niveaux dans l'en-tête ─── */
function buildNiveauSelector () {
  return Object.keys(_comp.niveaux).map(n => {
    const num = parseInt(n, 10);
    return `<button class="niveau-sel-btn ${num === _nNum ? 'active' : ''}"
                    onclick="window.location.href='niveau.html?c=${_comp.id}&n=${num}'"
                    title="${_comp.niveaux[num].titre}">
              Niveau ${num} | ${_comp.niveaux[num].annee}
            </button>`;
  }).join('');
}

/* ── État « En cours » pour N3 ─────────────── */
function renderEnCours () {
  document.getElementById('niveau-main').innerHTML = `
    <div class="niveau-header container reveal visible">
      ${buildCompNav()}
      <div class="breadcrumb">
        <a href="competences.html">Compétences</a>
        <span>/</span>
        <a href="competences.html#${_comp.id}">${_comp.name}</a>
        <span>/</span>
        <span style="color:var(--ink-2)">Niveau ${_nNum}</span>
      </div>
      ${buildNiveauMeta()}
      <p class="niveau-subtitle">${_niveau.titre}</p>
      <p class="niveau-annee">Année universitaire ${_niveau.annee}</p>
      <div class="niveau-selector">${buildNiveauSelector()}</div>
    </div>

    <div class="container">
      <div class="en-cours-state">
        <span class="en-cours-badge">[ En cours ]</span>
        <p class="en-cours-title">Année non encore commencée</p>
        <p class="en-cours-desc">
          Ce niveau correspond à la 3e année de BUT Informatique (${_niveau.annee}).
          Les apprentissages critiques et leurs preuves seront documentés
          au fur et à mesure de l'avancement de cette année.
        </p>
        <a href="competences.html" class="en-cours-link">← Retour aux compétences</a>
      </div>
      ${buildNiveauNav()}
    </div>`;
}

/* ── Rendu principal ──────────────────────── */
function renderPage () {
  document.title = `${_comp.name} | Niveau ${_nNum} | Lucas Arnaud`;

  /* N3 = en cours pour les compétences qui l'ont */
  if (_nNum === 3 && _comp.hasN3) {
    renderEnCours();
    return;
  }

  document.getElementById('niveau-main').innerHTML = `
    <div class="niveau-header container reveal visible">
      ${buildCompNav()}
      <div class="breadcrumb">
        <a href="competences.html">Compétences</a>
        <span>/</span>
        <a href="competences.html#${_comp.id}">${_comp.name}</a>
        <span>/</span>
        <span style="color:var(--ink-2)">Niveau ${_nNum}</span>
      </div>
      ${buildNiveauMeta()}
      <p class="niveau-subtitle">${_niveau.titre}</p>
      <p class="niveau-annee">Année universitaire ${_niveau.annee}</p>
      <div class="niveau-selector">${buildNiveauSelector()}</div>
    </div>

    <div class="container">
      <div class="ac-tabs-bar">${buildTabs()}</div>
      <div id="ac-content"></div>
      ${buildNiveauNav()}
    </div>`;

  renderAC();
}

/* ── Init ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const cId    = params.get('c');
  const nNum   = parseInt(params.get('n'), 10);

  _comp   = COMPETENCES[cId];
  _nNum   = nNum;
  _niveau = _comp?.niveaux[nNum];
  _acIdx  = 0;

  const main = document.getElementById('niveau-main');

  if (!_comp || !_niveau) {
    main.innerHTML = `
      <div class="page-error">
        <p class="label label-accent">[ Erreur 404 ]</p>
        <p style="color:var(--ink-2);font-size:.9rem;margin-top:.5rem">Cette page n'existe pas.</p>
        <a href="competences.html" class="btn btn-ghost" style="margin-top:1.5rem">← Retour aux compétences</a>
      </div>`;
    document.title = 'Page introuvable — Lucas Arnaud';
    return;
  }

  renderPage();
});

// =========================================
//  INSTRUCTIVOS – app.js
//  Lee datos de data.json (sin localStorage)
// =========================================

const CAT_META = {
  Padres:          { emoji: '👨‍👩‍👧', label: 'Padres de Familia' },
  Docentes:        { emoji: '🎓', label: 'Docentes' },
  Administrativos: { emoji: '🏫', label: 'Administrativos' },
};

let allData  = [];
let activeTab = 'todos';

// ── FETCH DATA.JSON ───────────────────────
async function loadData() {
  try {
    const res = await fetch('data.json');
    if (!res.ok) throw new Error('No se pudo cargar data.json');
    allData = await res.json();
    init();
  } catch (err) {
    document.getElementById('appRoot').innerHTML =
      `<div class="empty"><span class="empty-icon">⚠️</span>Error cargando instructivos: ${err.message}</div>`;
  }
}

// ── INIT ──────────────────────────────────
function init() {
  renderStats();
  renderView();
  setupTabs();
  setupSearch();
}

// ── STATS BAR ─────────────────────────────
function renderStats() {
  const cats = Object.keys(CAT_META);
  const bar  = document.getElementById('stats-bar');
  const total = allData.length;
  bar.innerHTML = `
    <div class="stat-pill"><span>Total </span>${total}</div>
    ${cats.map(c => {
      const n = allData.filter(i => i.categoria === c).length;
      return `<div class="stat-pill"><span>${CAT_META[c].emoji} </span>${n}</div>`;
    }).join('')}
  `;
}

// ── TABS ──────────────────────────────────
function setupTabs() {
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.cat;
      document.getElementById('searchWrap').style.display =
        activeTab === 'todos' ? '' : 'none';
      document.getElementById('searchInput').value = '';
      renderView();
    });
  });
}

// ── SEARCH ────────────────────────────────
function setupSearch() {
  document.getElementById('searchInput').addEventListener('input', () => renderView());
}

// ── RENDER ────────────────────────────────
function renderView() {
  const root = document.getElementById('appRoot');
  const q    = (document.getElementById('searchInput').value || '').toLowerCase().trim();

  if (activeTab === 'todos') {
    renderAll(root, q);
  } else {
    renderCategory(root, activeTab);
  }
}

function renderAll(root, q) {
  const filtered = q
    ? allData.filter(i =>
        i.nombre.toLowerCase().includes(q) ||
        (i.descripcion || '').toLowerCase().includes(q))
    : allData;

  if (filtered.length === 0) {
    root.innerHTML = emptyHTML('No se encontraron instructivos para tu búsqueda.');
    return;
  }

  const sorted = [...filtered].sort((a,b) => a.categoria.localeCompare(b.categoria) || a.nombre.localeCompare(b.nombre));

  root.innerHTML = `
    <div class="item-list">
      ${sorted.map((item, i) => `
        <a class="item-card" href="${esc(item.link)}" target="_blank" rel="noopener" style="animation-delay:${i * 0.03}s">
          <div class="item-num">${i+1}</div>
          <div class="item-body">
            <span class="item-name">${esc(item.nombre)}</span>
            ${item.descripcion ? `<span class="item-desc">${esc(item.descripcion)}</span>` : ''}
          </div>
          <div class="item-tags">
            <span class="tag tag-cat">${esc(item.categoria)}</span>
            <span class="tag ${item.plataforma === 'Web' ? 'tag-web' : 'tag-app'}">${item.plataforma === 'Web' ? '🌐' : '📱'} ${esc(item.plataforma)}</span>
          </div>
          <span class="item-arrow">→</span>
        </a>
      `).join('')}
    </div>
  `;
}

function renderCategory(root, cat) {
  const meta = CAT_META[cat];
  const webItems = allData.filter(i => i.categoria === cat && i.plataforma === 'Web')
                          .sort((a,b) => a.nombre.localeCompare(b.nombre));
  const appItems = allData.filter(i => i.categoria === cat && i.plataforma === 'App')
                          .sort((a,b) => a.nombre.localeCompare(b.nombre));
  const total = webItems.length + appItems.length;

  root.innerHTML = `
    <div class="cat-section">
      <div class="cat-header">
        <span class="cat-emoji">${meta.emoji}</span>
        <span class="cat-title">${meta.label}</span>
        <span class="cat-count">${total} instructivos</span>
      </div>
      <div class="plat-grid">
        <div class="plat-col">
          <div class="plat-header">
            <span class="plat-badge web">🌐 WEB</span>
          </div>
          ${listHTML(webItems)}
        </div>
        <div class="plat-col">
          <div class="plat-header">
            <span class="plat-badge app">📱 APP</span>
          </div>
          ${listHTML(appItems)}
        </div>
      </div>
    </div>
  `;
}

function listHTML(items) {
  if (items.length === 0) return emptyHTML('Sin instructivos en esta sección.');
  return `
    <div class="item-list">
      ${items.map((item, i) => `
        <a class="item-card" href="${esc(item.link)}" target="_blank" rel="noopener" style="animation-delay:${i * 0.04}s">
          <div class="item-num">${i+1}</div>
          <div class="item-body">
            <span class="item-name">${esc(item.nombre)}</span>
            ${item.descripcion ? `<span class="item-desc">${esc(item.descripcion)}</span>` : ''}
          </div>
          <span class="item-arrow">→</span>
        </a>
      `).join('')}
    </div>
  `;
}

function emptyHTML(msg) {
  return `<div class="empty"><span class="empty-icon">📂</span>${msg}</div>`;
}

// ── UTILS ──────────────────────────────────
function esc(str) {
  return String(str || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── START ──────────────────────────────────
loadData();
// =========================================
//  INSTRUCTIVOS – app.js
//  Datos embebidos directamente (sin fetch)
//  Para agregar instructivos: edita DATA abajo
// =========================================

// ✏️ EDITA AQUÍ TUS INSTRUCTIVOS
// Agrega o quita objetos de este arreglo.
// Campos: id, nombre, categoria, plataforma, link, descripcion (opcional)
// categoria: "Padres" | "Docentes" | "Administrativos"
// plataforma: "Web" | "App"

const DATA = [
  { "id": "p-web-01", "nombre": "Ingreso a la plataforma Control Academic", "categoria": "Padres", "plataforma": "Web", "link": "https://canva.link/control-academic", "descripcion": "Cómo acceder por primera vez a Control Academic" },
  { "id": "p-web-02", "nombre": "Ingreso a la plataforma Sian 365", "categoria": "Padres", "plataforma": "Web", "link": "https://canva.link/sian365", "descripcion": "Guía de acceso a Sian 365 desde el navegador" },
  { "id": "p-web-03", "nombre": "Agenda Virtual", "categoria": "Padres", "plataforma": "Web", "link": "https://canva.link/agenda-virtual-web", "descripcion": "Consulta y gestión de la agenda escolar" },
  { "id": "p-web-04", "nombre": "PQRS", "categoria": "Padres", "plataforma": "Web", "link": "https://canva.link/pqrs", "descripcion": "Cómo radicar peticiones, quejas, reclamos y sugerencias" },
  { "id": "p-web-05", "nombre": "Comunicaciones", "categoria": "Padres", "plataforma": "Web", "link": "https://canva.link/comunicaciones-web", "descripcion": "Envío y recepción de mensajes institucionales" },
  { "id": "p-web-06", "nombre": "Tesorería", "categoria": "Padres", "plataforma": "Web", "link": "https://canva.link/tesoreria-web", "descripcion": "Consulta de estado de cuenta y pagos" },
  { "id": "p-web-07", "nombre": "Reportes – Boletín Promocional", "categoria": "Padres", "plataforma": "Web", "link": "https://canva.link/boletin-promocional", "descripcion": "Descarga del boletín promocional del estudiante" },
  { "id": "p-web-08", "nombre": "Reportes mi boletín", "categoria": "Padres", "plataforma": "Web", "link": "https://canva.link/mi-boletin", "descripcion": "Visualización del boletín de calificaciones" },
  { "id": "p-web-09", "nombre": "Aula Virtual", "categoria": "Padres", "plataforma": "Web", "link": "https://canva.link/aula-virtual-padres-web", "descripcion": "Acceso al entorno de aprendizaje virtual" },
  { "id": "p-web-10", "nombre": "Elecciones", "categoria": "Padres", "plataforma": "Web", "link": "https://canva.link/elecciones", "descripcion": "Participación en elecciones del consejo de padres" },
  { "id": "p-web-11", "nombre": "Agendamiento de citas", "categoria": "Padres", "plataforma": "Web", "link": "https://canva.link/citas", "descripcion": "Solicitud de citas con docentes y directivos" },
  { "id": "p-app-12", "nombre": "Compras y preventa", "categoria": "Padres", "plataforma": "App", "link": "https://canva.link/compras-preventa", "descripcion": "Adquisición de útiles y uniformes desde la app" },
  { "id": "p-app-13", "nombre": "Enfermería", "categoria": "Padres", "plataforma": "App", "link": "https://canva.link/enfermeria", "descripcion": "Registro y seguimiento de novedades de salud" },
  { "id": "p-app-14", "nombre": "Aula Virtual", "categoria": "Padres", "plataforma": "App", "link": "https://canva.link/aula-virtual-padres-app", "descripcion": "Acceso al aula virtual desde el dispositivo móvil" },
  { "id": "p-app-15", "nombre": "Tesorería", "categoria": "Padres", "plataforma": "App", "link": "https://canva.link/tesoreria-app", "descripcion": "Consulta de pagos y estado de cuenta desde la app" },
  { "id": "p-app-16", "nombre": "Comunicaciones", "categoria": "Padres", "plataforma": "App", "link": "https://canva.link/comunicaciones-app", "descripcion": "Recepción de circulares y mensajes en la app" },
  { "id": "p-app-17", "nombre": "Reporte de Notas", "categoria": "Padres", "plataforma": "App", "link": "https://canva.link/reporte-notas-app", "descripcion": "Consulta de calificaciones en tiempo real" },
  { "id": "p-app-18", "nombre": "Agenda Virtual", "categoria": "Padres", "plataforma": "App", "link": "https://canva.link/agenda-virtual-app", "descripcion": "Revisión de actividades y fechas importantes" },
  { "id": "p-app-19", "nombre": "Enviar excusa", "categoria": "Padres", "plataforma": "App", "link": "https://canva.link/excusa", "descripcion": "Registro de inasistencias y justificaciones" },

  { "id": "d-web-01", "nombre": "Ingreso a Control Academic", "categoria": "Docentes", "plataforma": "Web", "link": "https://canva.link/docente-control-academic", "descripcion": "Acceso a la plataforma académica para docentes" },
  { "id": "d-web-02", "nombre": "Registro de calificaciones", "categoria": "Docentes", "plataforma": "Web", "link": "https://canva.link/registro-calificaciones", "descripcion": "Ingreso y edición de notas en el sistema" },
  { "id": "d-web-03", "nombre": "Planilla de asistencia", "categoria": "Docentes", "plataforma": "Web", "link": "https://canva.link/asistencia-docente", "descripcion": "Registro diario de asistencia de estudiantes" },
  { "id": "d-web-04", "nombre": "Aula Virtual – Gestión de contenidos", "categoria": "Docentes", "plataforma": "Web", "link": "https://canva.link/aula-virtual-docente", "descripcion": "Subir tareas, evaluaciones y material didáctico" },
  { "id": "d-web-05", "nombre": "Comunicaciones institucionales", "categoria": "Docentes", "plataforma": "Web", "link": "https://canva.link/comunicaciones-docentes", "descripcion": "Envío de mensajes a padres y directivos" },
  { "id": "d-web-06", "nombre": "PQRS Docentes", "categoria": "Docentes", "plataforma": "Web", "link": "https://canva.link/pqrs-docentes", "descripcion": "Radicación de solicitudes administrativas" },
  { "id": "d-app-01", "nombre": "Asistencia desde la App", "categoria": "Docentes", "plataforma": "App", "link": "https://canva.link/asistencia-app-docente", "descripcion": "Tomar lista de estudiantes desde el móvil" },
  { "id": "d-app-02", "nombre": "Comunicaciones App", "categoria": "Docentes", "plataforma": "App", "link": "https://canva.link/comunicaciones-docente-app", "descripcion": "Notificaciones y mensajes en tiempo real" },
  { "id": "d-app-03", "nombre": "Agenda Virtual Docente", "categoria": "Docentes", "plataforma": "App", "link": "https://canva.link/agenda-docente-app", "descripcion": "Consulta de horarios y actividades académicas" },
  { "id": "d-app-04", "nombre": "Reporte de Notas App", "categoria": "Docentes", "plataforma": "App", "link": "https://canva.link/notas-docente-app", "descripcion": "Visualización rápida de calificaciones" },

  { "id": "a-web-01", "nombre": "Gestión de matrículas", "categoria": "Administrativos", "plataforma": "Web", "link": "https://canva.link/matriculas-admin", "descripcion": "Proceso completo de matrícula de estudiantes" },
  { "id": "a-web-02", "nombre": "Configuración del sistema", "categoria": "Administrativos", "plataforma": "Web", "link": "https://canva.link/configuracion-sistema", "descripcion": "Parámetros generales de Control Academic" },
  { "id": "a-web-03", "nombre": "Gestión de usuarios y roles", "categoria": "Administrativos", "plataforma": "Web", "link": "https://canva.link/usuarios-roles", "descripcion": "Creación y administración de cuentas" },
  { "id": "a-web-04", "nombre": "Informes y estadísticas", "categoria": "Administrativos", "plataforma": "Web", "link": "https://canva.link/informes-estadisticas", "descripcion": "Reportes generales de la institución" },
  { "id": "a-web-05", "nombre": "Tesorería administrativa", "categoria": "Administrativos", "plataforma": "Web", "link": "https://canva.link/tesoreria-admin", "descripcion": "Control de pagos, deudas y recaudos" },
  { "id": "a-web-06", "nombre": "Agenda y calendario institucional", "categoria": "Administrativos", "plataforma": "Web", "link": "https://canva.link/calendario-institucional", "descripcion": "Programación de eventos y fechas clave" },
  { "id": "a-app-01", "nombre": "Panel de control App", "categoria": "Administrativos", "plataforma": "App", "link": "https://canva.link/panel-admin-app", "descripcion": "Acceso rápido al resumen institucional" },
  { "id": "a-app-02", "nombre": "Comunicados masivos", "categoria": "Administrativos", "plataforma": "App", "link": "https://canva.link/comunicados-masivos", "descripcion": "Envío de notificaciones a toda la comunidad" },
  { "id": "a-app-03", "nombre": "Enfermería – Seguimiento", "categoria": "Administrativos", "plataforma": "App", "link": "https://canva.link/enfermeria-admin", "descripcion": "Monitoreo de registros de salud estudiantil" }
];

// =========================================
//  NO EDITAR DEBAJO DE ESTA LÍNEA
// =========================================

const CAT_META = {
  Padres:          { emoji: '👨‍👩‍👧', label: 'Padres de Familia' },
  Docentes:        { emoji: '🎓',      label: 'Docentes' },
  Administrativos: { emoji: '🏫',      label: 'Administrativos' },
};

let activeTab = 'todos';

function init() {
  renderStats();
  renderView();
  setupTabs();
  setupSearch();
}

function renderStats() {
  const bar = document.getElementById('stats-bar');
  bar.innerHTML = `
    <div class="stat-pill"><span>Total </span>${DATA.length}</div>
    ${Object.keys(CAT_META).map(c => {
      const n = DATA.filter(i => i.categoria === c).length;
      return `<div class="stat-pill"><span>${CAT_META[c].emoji} </span>${n}</div>`;
    }).join('')}
  `;
}

function setupTabs() {
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.cat;
      const sw = document.getElementById('searchWrap');
      sw.style.display = activeTab === 'todos' ? '' : 'none';
      document.getElementById('searchInput').value = '';
      renderView();
    });
  });
}

function setupSearch() {
  document.getElementById('searchInput').addEventListener('input', renderView);
}

function renderView() {
  const root = document.getElementById('appRoot');
  const q    = document.getElementById('searchInput').value.toLowerCase().trim();
  activeTab === 'todos' ? renderAll(root, q) : renderCategory(root, activeTab);
}

function renderAll(root, q) {
  const filtered = q
    ? DATA.filter(i => i.nombre.toLowerCase().includes(q) || (i.descripcion||'').toLowerCase().includes(q))
    : DATA;
  if (!filtered.length) { root.innerHTML = emptyHTML('No se encontraron instructivos.'); return; }
  const sorted = [...filtered].sort((a,b) => a.categoria.localeCompare(b.categoria) || a.nombre.localeCompare(b.nombre));
  root.innerHTML = `<div class="item-list">${sorted.map((item,i) => cardHTML(item, i+1, true)).join('')}</div>`;
}

function renderCategory(root, cat) {
  const meta = CAT_META[cat];
  const web  = DATA.filter(i => i.categoria === cat && i.plataforma === 'Web').sort((a,b) => a.nombre.localeCompare(b.nombre));
  const app  = DATA.filter(i => i.categoria === cat && i.plataforma === 'App').sort((a,b) => a.nombre.localeCompare(b.nombre));
  root.innerHTML = `
    <div class="cat-section">
      <div class="cat-header">
        <span class="cat-emoji">${meta.emoji}</span>
        <span class="cat-title">${meta.label}</span>
        <span class="cat-count">${web.length + app.length} instructivos</span>
      </div>
      <div class="plat-grid">
        <div class="plat-col">
          <div class="plat-header"><span class="plat-badge web">🌐 WEB</span></div>
          ${listHTML(web)}
        </div>
        <div class="plat-col">
          <div class="plat-header"><span class="plat-badge app">📱 APP</span></div>
          ${listHTML(app)}
        </div>
      </div>
    </div>`;
}

function listHTML(items) {
  if (!items.length) return emptyHTML('Sin instructivos en esta sección.');
  return `<div class="item-list">${items.map((item,i) => cardHTML(item, i+1, false)).join('')}</div>`;
}

function cardHTML(item, num, showTags) {
  return `
    <a class="item-card" href="${esc(item.link)}" target="_blank" rel="noopener" style="animation-delay:${(num-1)*0.03}s">
      <div class="item-num">${num}</div>
      <div class="item-body">
        <span class="item-name">${esc(item.nombre)}</span>
        ${item.descripcion ? `<span class="item-desc">${esc(item.descripcion)}</span>` : ''}
      </div>
      ${showTags ? `
        <div class="item-tags">
          <span class="tag tag-cat">${esc(item.categoria)}</span>
          <span class="tag ${item.plataforma==='Web'?'tag-web':'tag-app'}">${item.plataforma==='Web'?'🌐':'📱'} ${esc(item.plataforma)}</span>
        </div>` : ''}
      <span class="item-arrow">→</span>
    </a>`;
}

function emptyHTML(msg) {
  return `<div class="empty"><span class="empty-icon">📂</span>${msg}</div>`;
}

function esc(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

init();

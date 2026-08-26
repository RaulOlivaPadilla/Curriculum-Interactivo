// Datos de ejemplo — reemplaza por tu propia información
const experience = [
  {
    id: 1,
    title: 'Data Control | Prácticas Grado DAM',
    period: 'Febrero 2026 - Junio 2026',
    description: 'Manejo de diversos programas de sistema de gestión  de  versiones  como  Git  y  GitHub, manejo  de  bases  de  datos  en  MySQL Workbench  y  postgreSQL,  creación  de proyectos en Moodle y Dataflex.'
  },
  {
    id: 2,
    title: 'Confratelli S.L. | Gerente de restaurante',
    period: 'Octubre 2023- Actualidad',
    description: 'Gestión  integral  de  restaurante,  incluyendo: atención al cliente, supervisión de personal, control  de  inventarios, resolución  de conflictos  y  mantenimiento  de  la infraestructura  para  asegurar  un  ambiente agradable y seguro.'
  },
  {
    id: 3,
    title: 'Adecusa S.L. | Socorrista y monitor de natación',
    period: 'Junio 2019- Octubre 2019',
    description: 'Enseñanza  de  natación  y  supervisión  de seguridad en entornos acuáticos.'
  }
];

const projects = [
  { id: 'p1', name: 'Proyecto ZYRO', description: 'Proyecto final de Grado', link: 'ZYRO.pdf' },
  { id: 'p2', name: 'Proyecto Currículum Interactivo', description: 'Currículum interactivo desarrollado en HTML, CSS y JavaScript', link: '#' }
];

const skills = ['HTML', 'CSS', 'JavaScript', 'Java', 'Git', 'Accesibilidad'];
const softSkills = ['Trabajo bajo presión', 'Resolutivo', 'Empático', 'Trabajo en equipo', 'Gestión de conflictos', 'Liderazgo'];

function el(sel) { return document.querySelector(sel) }
function elAll(sel) { return document.querySelectorAll(sel) }

// Rellenar año en footer
el('#year').textContent = new Date().getFullYear();

// Construir timeline
const timeline = el('#timeline');
experience.forEach((exp, i) => {
  const div = document.createElement('div');
  div.className = 'item';
  div.dataset.id = exp.id;
  div.innerHTML = `<strong>${exp.title}</strong><div class="muted">${exp.period}</div><p>${exp.description}</p>`;
  div.addEventListener('click', () => {
    elAll('.timeline .item').forEach(it => it.classList.remove('active'));
    div.classList.add('active');
  });
  timeline.appendChild(div);
  if (i === 0) div.classList.add('active');
});

// Proyectos
const projectsGrid = el('#projectsGrid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><p><a href="${p.link}">Ver</a></p>`;
  projectsGrid.appendChild(card);
});

// Habilidades
const skillsList = el('#skillsList');
skills.forEach(s => {
  const li = document.createElement('li');
  li.className = 'skill-pill';
  li.textContent = s;
  skillsList.appendChild(li);
});

// Habilidades blandas
const softSkillsList = el('#softSkillsList');
softSkills.forEach(s => {
  const li = document.createElement('li');
  li.className = 'skill-pill';
  li.textContent = s;
  softSkillsList.appendChild(li);
});

// Smooth scroll para los enlaces del nav
elAll('header nav a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Ejemplo: descarga de PDF (si subes un PDF a la raiz con nombre CV.pdf)
el('#downloadPdf').addEventListener('click', (e) => {
  e.preventDefault();
  const url = 'CV.pdf';
  window.open(url, '_blank');
});

// Datos de ejemplo — reemplaza por tu propia información
const experience = [
  {
    id: 1,
    title: 'Desarrollador Frontend - Empresa X',
    period: '2023 — Presente',
    description: 'Trabajo en aplicaciones web usando HTML, CSS y JavaScript. Mejora de rendimiento y accesibilidad.'
  },
  {
    id: 2,
    title: 'Desarrollador Junior - Empresa Y',
    period: '2021 — 2023',
    description: 'Construcción de componentes reutilizables y pruebas unitarias.'
  }
];

const projects = [
  {id: 'p1', name: 'Proyecto A', description: 'Demo de proyecto A', link: '#'},
  {id: 'p2', name: 'Proyecto B', description: 'Demo de proyecto B', link: '#'}
];

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Accesibilidad'];

function el(sel){return document.querySelector(sel)}
function elAll(sel){return document.querySelectorAll(sel)}

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
  if(i===0) div.classList.add('active');
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
  li.textContent = s;
  skillsList.appendChild(li);
});

// Smooth scroll para los enlaces del nav
elAll('header nav a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// Ejemplo: descarga de PDF (si subes un PDF a la raiz con nombre CV.pdf)
el('#downloadPdf').addEventListener('click', (e) => {
  e.preventDefault();
  const url = 'CV.pdf';
  window.open(url, '_blank');
});

const translations = {
  es: {
    headerEyebrow: 'CURRÍCULUM INTERACTIVO',
    taglineRole: 'Desarrollador Multiplataforma',
    taglineValue: 'Construyendo ideas útiles',
    available: 'Disponible para nuevos retos',
    navAbout: 'Sobre mí',
    navExperience: 'Experiencia',
    navProjects: 'Proyectos',
    navSkills: 'Habilidades',
    navSoftSkills: 'Habilidades blandas',
    navContact: 'Contacto',
    downloadCv: 'Descargar CV (PDF)',
    aboutTitle: 'Sobre mí',
    aboutText1: 'Recién graduado en Desarrollo de Aplicaciones Multiplataforma con una sólida base técnica en gestión de bases de datos (MySQL, PostgreSQL), control de versiones (Git y GitHub) y programación orientada a objetos (Java). Mi valor diferencial reside en mi bagaje como gerente en el sector hostelero: sé liderar equipos, resolver conflictos en tiempo real y mantener la calma bajo presión.',
    aboutText2: 'Soy resolutivo, empático y tengo muchas ganas de demostrar mi valía en un equipo de desarrollo, aportando una visión integral que va más allá del código.',
    experienceTitle: 'Experiencia',
    projectsTitle: 'Proyectos',
    skillsTitle: 'Habilidades',
    softSkillsTitle: 'Habilidades blandas',
    contactTitle: 'Contacto',
    emailLabel: 'Email',
    phoneLabel: 'Telefono',
    footerTitle: 'Currículum Interactivo',
    viewProject: 'Ver',
    experience: [
      ['Data Control | Prácticas Grado DAM', 'Febrero 2026 - Junio 2026', 'Manejo de diversos programas de sistema de gestión de versiones como Git y GitHub, manejo de bases de datos en MySQL Workbench y postgreSQL, creación de proyectos en Moodle y Dataflex.'],
      ['Confratelli S.L. | Gerente de restaurante', 'Octubre 2023- Actualidad', 'Gestión integral de restaurante, incluyendo: atención al cliente, supervisión de personal, control de inventarios, resolución de conflictos y mantenimiento de la infraestructura para asegurar un ambiente agradable y seguro.'],
      ['Adecusa S.L. | Socorrista y monitor de natación', 'Junio 2019- Octubre 2019', 'Enseñanza de natación y supervisión de seguridad en entornos acuáticos.']
    ],
    projects: [['ZYRO', 'Proyecto final de Grado', 'ZYRO.pdf'], ['Currículum Interactivo', 'Currículum interactivo desarrollado en HTML, CSS y JavaScript', '#']],
    skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'Git', 'GitHub', 'MySQL', 'PostgreSQL'],
    softSkills: ['Trabajo bajo presión', 'Resolutivo', 'Empático', 'Trabajo en equipo', 'Gestión de conflictos', 'Liderazgo']
  },
  en: {
    headerEyebrow: 'INTERACTIVE RESUME',
    taglineRole: 'Multiplatform Developer',
    taglineValue: 'Building useful ideas',
    available: 'Available for new opportunities',
    navAbout: 'About me',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navSoftSkills: 'Soft skills',
    navContact: 'Contact',
    downloadCv: 'Download CV (PDF)',
    aboutTitle: 'About me',
    aboutText1: 'Recent graduate in Multiplatform Application Development with a strong technical foundation in database management (MySQL, PostgreSQL), version control (Git and GitHub), and object-oriented programming (Java). My differentiating value comes from my experience as a hospitality manager: I know how to lead teams, resolve conflicts in real time, and stay calm under pressure.',
    aboutText2: 'I am resourceful, empathetic, and eager to prove my value in a development team, bringing a well-rounded perspective that goes beyond code.',
    experienceTitle: 'Experience',
    projectsTitle: 'Projects',
    skillsTitle: 'Skills',
    softSkillsTitle: 'Soft skills',
    contactTitle: 'Contact',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    footerTitle: 'Interactive Resume',
    viewProject: 'View',
    experience: [
      ['Data Control | DAM Degree Internship', 'February 2026 - June 2026', 'Use of version control systems such as Git and GitHub, database management with MySQL Workbench and PostgreSQL, and project creation in Moodle and Dataflex.'],
      ['Confratelli S.L. | Restaurant Manager', 'October 2023 - Present', 'Full restaurant management, including customer service, staff supervision, inventory control, conflict resolution, and infrastructure maintenance to ensure a pleasant and safe environment.'],
      ['Adecusa S.L. | Lifeguard and Swimming Instructor', 'June 2019 - October 2019', 'Swimming instruction and safety supervision in aquatic environments.']
    ],
    projects: [['ZYRO', 'Final Degree Project', 'ZYRO.pdf'], ['Interactive Resume', 'Interactive resume developed with HTML, CSS and JavaScript', '#']],
    skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'Git', 'GitHub', 'MySQL', 'PostgreSQL'],
    softSkills: ['Working under pressure', 'Resourceful', 'Empathetic', 'Teamwork', 'Conflict management', 'Leadership']
  }
};

function el(selector) { return document.querySelector(selector); }
function elAll(selector) { return document.querySelectorAll(selector); }

const timeline = el('#timeline');
const projectsGrid = el('#projectsGrid');
const skillsList = el('#skillsList');
const softSkillsList = el('#softSkillsList');

function renderLanguage(language) {
  const translation = translations[language];
  document.documentElement.lang = language;
  document.title = language === 'es'
    ? 'Raúl Oliva Padilla — Currículum Interactivo'
    : 'Raúl Oliva Padilla — Interactive Resume';
  el('.language-switch').setAttribute('aria-label', language === 'es' ? 'Selector de idioma' : 'Language selector');
  elAll('[data-i18n]').forEach(node => {
    node.textContent = translation[node.dataset.i18n];
  });

  timeline.innerHTML = '';
  translation.experience.forEach((experience, index) => {
    const item = document.createElement('div');
    item.className = `item${index === 0 ? ' active' : ''}`;
    item.dataset.id = index + 1;
    item.innerHTML = `<strong>${experience[0]}</strong><div class="muted">${experience[1]}</div><p>${experience[2]}</p>`;
    item.addEventListener('click', () => {
      elAll('.timeline .item').forEach(current => current.classList.remove('active'));
      item.classList.add('active');
    });
    timeline.appendChild(item);
  });

  projectsGrid.innerHTML = '';
  translation.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `<h3>${project[0]}</h3><p>${project[1]}</p><p><a href="${project[2]}">${translation.viewProject}</a></p>`;
    projectsGrid.appendChild(card);
  });

  skillsList.innerHTML = '';
  translation.skills.forEach(skill => {
    const item = document.createElement('li');
    item.className = 'skill-pill';
    item.textContent = skill;
    skillsList.appendChild(item);
  });

  softSkillsList.innerHTML = '';
  translation.softSkills.forEach(skill => {
    const item = document.createElement('li');
    item.className = 'skill-pill';
    item.textContent = skill;
    softSkillsList.appendChild(item);
  });

  elAll('.language-button').forEach(button => {
    const isActive = button.dataset.language === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive);
    button.setAttribute('aria-label', button.dataset.language === language
      ? (language === 'es' ? 'Castellano seleccionado' : 'English selected')
      : (button.dataset.language === 'es' ? 'Cambiar a castellano' : 'Switch to English'));
  });
  localStorage.setItem('cv-language', language);
}

el('#year').textContent = new Date().getFullYear();
renderLanguage(localStorage.getItem('cv-language') || 'es');

elAll('.language-button').forEach(button => {
  button.addEventListener('click', () => renderLanguage(button.dataset.language));
});

elAll('header nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

el('#downloadPdf').addEventListener('click', event => {
  event.preventDefault();
  window.open('CV.pdf', '_blank');
});

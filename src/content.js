// Contenido bilingüe del CV. Editá este archivo para actualizar textos.
export const content = {
  es: {
    lang: "es",
    nav: {
      toggle: "EN",
      items: [
        { label: "Inicio", path: "/" },
        { label: "Conocimientos", path: "/skills" },
        { label: "Experiencia laboral", path: "/experience" },
        { label: "Formación académica", path: "/education" },
        { label: "Proyectos", path: "/projects" },
        { label: "Contacto", path: "/contact" },
      ],
    },
    hero: {
      name: "Matias Rolón",
      role: "Software Developer",
      location: "Moreno, Buenos Aires, Argentina",
      cta: "Hablemos",
      cvLabel: "Descargar CV",
      cvHref: "/cv-es.pdf",
    },
    profile: {
      label: "Sobre mi",
      body: [
        "Soy un desarrollador full stack con 7 años en el rubro que busca expandir su experiencia trabajando en un entorno que fomente la curiosidad y el trabajo en equipo.",
        "Mis áreas de mayor interés son el machine learning para modelos predictivos y los grandes modelos de lenguaje (LLMs), aplicándolos actualmente en el ámbito académico.",
        "En mi tiempo libre me apasiona leer ciencia ficción, hacer deporte y descubrir nuevas tecnologías.",
      ],
    },
    skills: {
      label: "Conocimientos",
      groups: [
        { title: "Lenguajes / Frameworks", items: ["Python", "Django", "FastAPI", "Serverless", "React", "NextJS"] },
        { title: "AWS", items: ["Lambda", "DynamoDB", "SQS", "CloudWatch", "ECS", "API Gateway"] },
        { title: "Bases de datos", items: ["MySQL", "PostgreSQL", "MongoDB"] },
        { title: "Herramientas", items: ["Git / GitHub", "Docker", "Claude Code"] },
        { title: "Otros", items: ["GraphQL", "Machine Learning", "scikit-learn", "NLP", "pandas"] },
        { title: "Idiomas", items: ["Inglés (B1)"] },
      ],
    },
    experience: {
      label: "Experiencia laboral",
      items: [
        {
          role: "Team Leader",
          company: "E2E Travel Solutions",
          logo: "/e2e.jpeg",
          url: "https://www.e2etravelsolutions.com/",
          period: "Sep 2024 — Presente",
          bullets: [
            "Liderazgo de un equipo de 4 personas, asignando tareas y haciendo seguimiento de las entregas. Uso de ClickUp.",
            "Diseño de la arquitectura de soluciones backend (Python) y AWS.",
            "Definición de prioridades técnicas junto a Producto y coordinación con otras áreas (QA, Infraestructura) para destrabar dependencias.",
            "Revisión de código y buenas prácticas.",
          ],
        },
        {
          role: "Full Stack Developer",
          company: "Tije Travel",
          logo: "/tije.png",
          url: "https://www.linkedin.com/company/tije-travel/posts/?feedView=all",
          period: "Abr 2021 — Sep 2024",
          bullets: [
            "Desarrollo de APIs backend en Python (Django, FastAPI, Serverless) para sistemas de ventas del sector turístico.",
            "Proyectos frontend con React, utilizando librerías como Material UI.",
            "Despliegue y operación de servicios en AWS (Lambda, DynamoDB, ECS, SQS, CloudWatch).",
          ],
        },
        {
          role: "DBA",
          company: "Inrots Corporation",
          logo: "/inrots.png",
          url: "https://www.inrots.com/",
          period: "Ene 2019 — Mar 2021",
          bullets: [
            "Administración de bases de datos SQL Server: consultas, triggers, optimización y mantenimiento.",
            "Automatización de procesos y reportes en Excel con macros VBA.",
            "Desarrollo de interfaces web con HTML5 y CSS3.",
            "Soporte técnico a usuarios y resolución de incidencias.",
          ],
        },
      ],
    },
    education: {
      label: "Formación académica",
      items: [
        {
          title: "Licenciatura en Sistemas de Información",
          place: "Universidad Nacional de Luján",
          logo: "/unlu.png",
          url: "https://www.unlu.edu.ar/carg-sistemas-1713.html",
          period: "En progreso — 38/41 materias completadas",
        },
        {
          title: "Analista Programador Universitario",
          place: "Universidad Nacional de Luján",
          logo: "/unlu.png",
          period: "Mar 2015 — Feb 2021",
        },
      ],
    },
    projects: {
      label: "Proyectos actuales",
      items: [
        {
          name: "ri-query-optimization-by-rag",
          url: "https://github.com/matiasrolon/ri-query-optimization-by-rag",
          description:
            "Retroalimentación por pseudo-relevancia generativa: Enmarcada dentro del área de Recuperación de Información, se propone realizar una comparación entre los métodos básicos de expansión de consultas y uno nuevo basado en la generación de términos adicionales a través del uso de un LLM contextualizado.",
          tags: ["Information Retrieval", "LLM", "Query Expansion", "RAG", "Python"],
        },
      ],
    },
    contact: {
      label: "Contacto",
      //heading: "Hablemos",
      body: "¿Tenés una oportunidad, un proyecto o simplemente querés charlar de tecnología? Estas son mis vías de contacto.",
      items: [
        { label: "Email", value: "matirolon96@gmail.com", href: "mailto:matirolon96@gmail.com", icon: "email" },
        { label: "LinkedIn", value: "linkedin.com/in/matiasrolon", href: "https://linkedin.com/in/matirolon", icon: "linkedin" },
        { label: "GitHub", value: "github.com/matiasrolon", href: "https://github.com/matirolon", icon: "github" },
      ],
    },
    footer: {
      text: "Construido con React 19 + Vite.",
    },
  },

  en: {
    lang: "en",
    nav: {
      toggle: "ES",
      items: [
        { label: "Home", path: "/" },
        { label: "Skills", path: "/skills" },
        { label: "Experience", path: "/experience" },
        { label: "Education", path: "/education" },
        { label: "Projects", path: "/projects" },
        { label: "Contact", path: "/contact" },
      ],
    },
    hero: {
      name: "Matias Rolón",
      role: "Software Developer",
      location: "Buenos Aires, Argentina",
      cta: "Let's talk",
      cvLabel: "Download CV",
      cvHref: "/cv-en.pdf",
    },
    profile: {
      label: "About me",
      body: [
        "I am a full stack developer with 7 years in the field looking to expand my experience working in an environment that fosters curiosity and teamwork.",
        "My main area of interest, both professionally and academically, is machine learning for predictive models and NLP tasks, with a growing focus on large language models (LLMs) and their applications.",
        "In my free time, I am passionate about reading sci-fi, staying active through sports, and discovering emerging technologies.",
      ],
    },
    skills: {
      label: "Skills",
      groups: [
        { title: "Languages / Frameworks", items: ["Python", "Django", "FastAPI", "Serverless", "React", "NextJS"] },
        { title: "AWS", items: ["Lambda", "DynamoDB", "SQS", "CloudWatch", "ECS", "API Gateway"] },
        { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
        { title: "Tools", items: ["Git / GitHub", "Docker", "Claude Code"] },
        { title: "Others", items: ["GraphQL", "Machine Learning", "scikit-learn", "NLP", "pandas"] },
        { title: "Languages", items: ["English (B1)"] },
      ],
    },
    experience: {
      label: "Work Experience",
      items: [
        {
          role: "Team Leader",
          company: "E2E Travel Solutions",
          logo: "/e2e.jpeg",
          url: "https://www.e2etravelsolutions.com/",
          period: "Sep 2024 — Present",
          bullets: [
            "Lead a team of 4 developers, assigning tasks and tracking deliverables. Use of ClickUp.",
            "Design backend (Python) and AWS solution architecture.",
            "Define technical priorities with Product and coordinate with other areas (QA, Infrastructure) to unblock dependencies.",
            "Review code and ensure quality standards and best practices.",
          ],
        },
        {
          role: "Full Stack Developer",
          company: "Tije Travel",
          logo: "/tije.png",
          url: "https://www.linkedin.com/company/tije-travel/posts/?feedView=all",
          period: "Apr 2021 — Sep 2024",
          bullets: [
            "Backend API development in Python (Django, FastAPI, Serverless) for travel-booking systems.",
            "Built user interfaces with React, using libraries such as Material UI.",
            "Deployment and operation of services on AWS (Lambda, DynamoDB, ECS, SQS, CloudWatch).",
          ],
        },
        {
          role: "DBA",
          company: "Inrots Corporation",
          logo: "/inrots.png",
          url: "https://www.inrots.com/",
          period: "Jan 2019 — Mar 2021",
          bullets: [
            "SQL Server database administration: queries, triggers, optimization and maintenance.",
            "Process and report automation in Excel using VBA macros.",
            "Web interface development with HTML5 and CSS3.",
            "Technical support to users and incident resolution.",
          ],
        },
      ],
    },
    education: {
      label: "Education",
      items: [
        {
          title: "Bachelor's Degree in Information Systems",
          place: "Universidad Nacional de Luján",
          logo: "/unlu.png",
          url: "https://www.unlu.edu.ar/carg-sistemas-1713.html",
          period: "In progress — 38/41 courses completed",
        },
        {
          title: "University Programmer Analyst (intermediate degree)",
          place: "Universidad Nacional de Luján",
          logo: "/unlu.png",
          period: "Mar 2015 — Feb 2021",
        },
      ],
    },
    projects: {
      label: "Current Projects",
      items: [
        {
          name: "ri-query-optimization-by-rag",
          url: "https://github.com/matiasrolon/ri-query-optimization-by-rag",
          description:
            "Generative Pseudo-Relevance Feedback: Framed within Information Retrieval, this research compares basic query expansion methods with a novel approach based on generating additional terms using a contextualized LLM.",
          tags: ["Information Retrieval", "LLM", "Query Expansion", "RAG", "Python"],
        },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Let's talk",
      body: "Have an opportunity, a project, or just want to talk tech? Here's how to reach me.",
      items: [
        { label: "Email", value: "matirolon96@gmail.com", href: "mailto:matirolon96@gmail.com", icon: "email" },
        { label: "LinkedIn", value: "linkedin.com/in/matiasrolon", href: "https://linkedin.com/in/matiasrolon", icon: "linkedin" },
        { label: "GitHub", value: "github.com/matiasrolon", href: "https://github.com/matiasrolon", icon: "github" },
      ],
    },
    footer: {
      text: "Built with React 19 + Vite.",
    },
  },
};

// Contenido bilingüe del CV. Editá este archivo para actualizar textos.
export const content = {
  es: {
    lang: "es",
    nav: {
      toggle: "EN",
      items: [
        { label: "Inicio", sectionId: "home" },
        { label: "Conocimientos", sectionId: "skills" },
        { label: "Experiencia laboral", sectionId: "experience" },
        { label: "Formación académica", sectionId: "education" },
        { label: "R&D", sectionId: "projects" },
        { label: "Contacto", sectionId: "contact" },
      ],
    },
    hero: {
      name: "Matias Rolón",
      role: "Software Engineer",
      location: "Moreno, Buenos Aires, Argentina",
      cta: "Hablemos",
      cvLabel: "Descargar CV",
      cvHref: "./cv-matias-rolon-software-engineer-es.pdf",
    },
    profile: {
      label: "Sobre mi",
      body: [
        "Soy un ingeniero de software con más de 5 años de experiencia, liderando equipos en los últimos 3 años, con foco en la integración y mejora de productos B2B y B2C para el sector turístico, aplicando arquitecturas escalables en AWS.",
        "Mi experiencia técnica incluye principalmente el desarrollo de APIs utilizando todo tipo de frameworks (FastAPI, Django, Serverless), la optimización de performance de las mismas y la creación de dashboards en AWS QuickSight para el análisis de ventas y KPIs.",
        "Actualmente desarrollo y aprendo sobre aplicaciones con LLMs tanto en el ámbito académico como en proyectos personales y poseo bases sólidas de machine learning, en especial para modelos predictivos (fraude, bancarrota).",
        "Soy Analista Programador Universitario y estoy cursando la parte final de la Licenciatura en Sistemas de Información.",
        "En mi tiempo libre me apasiona leer ciencia ficción y hacer deporte.",
      ],
    },
    skills: {
      label: "Conocimientos",
      groups: [
        { title: "Lenguajes", icon: "code", items: ["Python", "SQL", "JavaScript"] },
        { title: "IA/ML", icon: "sparkles", items: ["LLMs", "prompt engineering", "OpenAI API", "scikit-learn", "pandas"] },
        { title: "Backend", icon: "server", items: ["Django", "FastAPI", "Serverless Framework", "GraphQL"] },
        { title: "Cloud (AWS)", icon: "cloud", items: ["Lambda", "DynamoDB", "SQS", "CloudWatch", "ECS", "API Gateway", "QuickSight"] },
        { title: "Bases de datos", icon: "database", items: ["PostgreSQL", "Supabase", "MySQL", "SQL Server", "MongoDB", "Redis"] },
        { title: "Frontend", icon: "layout", items: ["React", "Next.js", "Redux","Material UI"] },
        { title: "Herramientas", icon: "tools", items: ["Git/GitHub", "Docker", "Claude Code", "ClickUp"] },
        { title: "Idiomas", icon: "globe", items: ["Español (nativo)", "Inglés (Conversacional - B1)"] },
      ],
    },
    experience: {
      label: "Experiencia laboral",
      items: [
        {
          company: "E2E Travel Solutions",
          logo: "./e2e.jpeg",
          url: "https://www.e2etravelsolutions.com/",
          period: "Abr 2021 — Oct 2026",
          roles: [
            {
              role: "Tech Lead",
              period: "Mar 2024 — Oct 2026",
              bullets: [
                "Liderazgo de un equipo de 3 desarrolladores: asignación de tareas, seguimiento de entregas (ClickUp) y code reviews. Definición de prioridades técnicas junto a Producto y el área de QA.",
                "Diseño de la arquitectura backend de microservicios sobre AWS (ECS, API Gateway) para sistemas de venta online de vuelos y hoteles.",
                "Desarrollo de dashboards de Business Intelligence en AWS QuickSight para el seguimiento de ventas y KPIs del área comercial.",
              ],
            },
            {
              role: "Full Stack Developer",
              period: "Abr 2021 — Feb 2024",
              bullets: [
                "Desarrollo de APIs REST en Python (FastAPI, Django, Serverless Framework) con test unitarios.",
                "Desarrollo frontend con React, utilizando librerías como Redux y Material UI.",
                "Despliegue y operación en AWS (Lambda, DynamoDB, SQS, CloudWatch).",
              ],
            },
          ],
        },
        {
          role: "Database Administrator (DBA)",
          company: "Inrots Corporation",
          logo: "./inrots.png",
          url: "https://www.inrots.com/",
          period: "Ene 2019 — Mar 2021",
          bullets: [
            "Administración de bases de datos SQL Server: consultas, triggers, optimización y mantenimiento.",
            "Automatización de reportes con VBA en Excel y creación de interfaces web (HTML y CSS).",
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
          logo: "./unlu.png",
          url: "https://www.unlu.edu.ar/carg-sistemas-1713.html",
          period: "En progreso — 38/41 materias completadas",
        },
        {
          title: "Analista Programador Universitario",
          place: "Universidad Nacional de Luján",
          logo: "./unlu.png",
          period: "Mar 2015 — Feb 2021",
        },
      ],
    },
    projects: {
      label: "R&D",
      subtitle: "Investigación y desarrollo enfocado en las áreas que más me interesan actualmente.",
      repoLabel: "Repo",
      siteLabel: "Sitio",
      items: [
        {
          name: "Retroalimentación por pseudo-relevancia generativa",
          category: "Recuperación de Información",
          categoryColor: "blue",
          url: "https://github.com/matiasrolon/ri-query-optimization-by-rag",
          repoUrl: "https://github.com/matiasrolon/ri-query-optimization-by-rag",
          description:
            "Enmarcada dentro del área de Recuperación de Información, se propone realizar una comparación entre los métodos básicos de expansión de consultas y uno nuevo basado en la generación de términos adicionales a través del uso de un LLM contextualizado. El objetivo es optimizar la consulta original del usuario, formando una nueva que obtenga mejores resultados",
          tags: ["LLM", "Query Expansion", "RAG", "Python"],
        },
        {
          name: "Predicción de bancarrota mediante métodos de ensamble",
          category: "Machine Learning",
          categoryColor: "green",
          url: "https://github.com/matiasrolon/bankruptcy-prediction-ensemble",
          repoUrl: "https://github.com/matiasrolon/bankruptcy-prediction-ensemble",
          description:
            "Notebook de ML que predice bancarrota de empresas usando el dataset \"American Companies Bankruptcy Prediction\" (Kaggle). Incluye EDA con detección de outliers y correlaciones (Spearman), preprocesamiento (eliminación de variables redundantes, escalado, manejo de desbalanceo de clases), y entrenamiento de 4 modelos calibrados (Logistic Regression, Random Forest, MLP, SVC) combinados en un ensamble soft-voting. Se prioriza el recall (minimizar falsos negativos), y se incluye un breve análisis final incluyendo qué variables del dataset afectan más la predicción.",
          tags: ["Python", "Colab", "scikit-learn", "XGBoost", "Logistic Regression", "Ensemble Methods"],
        },
        {
          name: "Primatica Web",
          category: "Programación Web",
          categoryColor: "orange",
          siteUrl: "https://www.primatica.com.ar/",
          description:
            "Tienda web para un emprendimiento de impresiones 3D, totalmente administrable por el cliente. Desarrollada en React con infraestructura gratuita, utilizando Supabase para la base de datos y API, y Cloudinary para el almacenamiento de imágenes.",
          tags: ["React", "Supabase", "Cloudinary", "PostgreSQL", "E-commerce"],
        },
      ],
    },
    contact: {
      label: "Contacto",
      //heading: "Hablemos",
      body: "¿Tenés una oportunidad, un proyecto o simplemente querés charlar de tecnología? Estas son mis vías de contacto.",
      items: [
        { label: "Email", value: "matirolon96@gmail.com", href: "https://mail.google.com/mail/?view=cm&to=matirolon96@gmail.com", icon: "email" },
        { label: "LinkedIn", value: "linkedin.com/in/matiasrolon", href: "https://linkedin.com/in/matiasrolon", icon: "linkedin" },
        { label: "GitHub", value: "github.com/matiasrolon", href: "https://github.com/matiasrolon", icon: "github" },
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
        { label: "Home", sectionId: "home" },
        { label: "Skills", sectionId: "skills" },
        { label: "Experience", sectionId: "experience" },
        { label: "Education", sectionId: "education" },
        { label: "R&D", sectionId: "projects" },
        { label: "Contact", sectionId: "contact" },
      ],
    },
    hero: {
      name: "Matias Rolón",
      role: "Software Engineer",
      location: "Buenos Aires, Argentina",
      cta: "Let's talk",
      cvLabel: "Download CV",
      cvHref: "./cv-matias-rolon-software-engineer-en.pdf",
    },
    profile: {
      label: "About me",
      body: [
        "I am a software engineer with 5+ years of experience, leading teams over the past 3 years, focused on integrating and improving B2B and B2C products for the travel industry using scalable AWS architectures.",
        "My technical experience mainly includes developing APIs across various frameworks (FastAPI, Django, Serverless), optimizing their performance, and building dashboards in AWS QuickSight for sales and KPI analysis.",
        "I currently build and learn about LLM applications across both academic and personal projects, backed by a solid foundation in machine learning, particularly for predictive models (fraud, bankruptcy).",
        "I am a University Programmer Analyst and am currently in the final stage of a Bachelor's Degree in Information Systems.",
        "In my free time, I am passionate about reading sci-fi and staying active through sports.",
      ],
    },
    skills: {
      label: "Skills",
      groups: [
        { title: "Languages", icon: "code", items: ["Python", "SQL", "JavaScript"] },
        { title: "AI/ML", icon: "sparkles", items: ["LLMs", "prompt engineering", "OpenAI API", "scikit-learn", "pandas"] },
        { title: "Backend", icon: "server", items: ["Django", "FastAPI", "Serverless Framework", "GraphQL"] },
        { title: "Cloud (AWS)", icon: "cloud", items: ["Lambda", "DynamoDB", "SQS", "CloudWatch", "ECS", "API Gateway", "QuickSight"] },
        { title: "Databases", icon: "database", items: ["PostgreSQL", "Supabase", "MySQL", "SQL Server", "MongoDB", "Redis"] },
        { title: "Frontend", icon: "layout", items: ["React", "Next.js", "Redux","Material UI"] },
        { title: "Tools", icon: "tools", items: ["Git/GitHub", "Docker", "Claude Code", "ClickUp"] },
        { title: "Languages", icon: "globe", items: ["Spanish (Native)", "English (Conversational - B1)"] },
      ],
    },
    experience: {
      label: "Work Experience",
      items: [
        {
          company: "E2E Travel Solutions",
          logo: "./e2e.jpeg",
          url: "https://www.e2etravelsolutions.com/",
          period: "Apr 2021 — Oct 2026",
          roles: [
            {
              role: "Tech Lead",
              period: "Mar 2024 — Oct 2026",
              bullets: [
                "Led a team of 3 developers: task assignment, delivery tracking (ClickUp) and code reviews.",
                "Defined technical priorities with Product and coordinated with the QA team.",
                "Designed a microservices backend architecture on AWS (ECS, API Gateway) for online booking systems for flights, hotels and other travel products.",
                "Built Business Intelligence dashboards in AWS QuickSight to track sales, bookings and KPIs for the commercial team.",
              ],
            },
            {
              role: "Full Stack Developer",
              period: "Apr 2021 — Feb 2024",
              bullets: [
                "Developed REST APIs in Python (Django, FastAPI, Serverless) with unit tests.",
                "Built frontend projects with React, using libraries such as Redux and Material UI.",
                "Deployed and operated services on AWS (Lambda, DynamoDB, SQS, CloudWatch).",
              ],
            },
          ],
        },
        {
          role: "Database Administrator (DBA)",
          company: "Inrots Corporation",
          logo: "./inrots.png",
          url: "https://www.inrots.com/",
          period: "Jan 2019 — Mar 2021",
          bullets: [
            "Administered SQL Server databases: queries, triggers, optimization and maintenance.",
            "Automated reports with VBA in Excel and built web interfaces (HTML and CSS).",
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
          logo: "./unlu.png",
          url: "https://www.unlu.edu.ar/carg-sistemas-1713.html",
          period: "In progress — 38/41 courses completed",
        },
        {
          title: "University Programmer Analyst (intermediate degree)",
          place: "Universidad Nacional de Luján",
          logo: "./unlu.png",
          period: "Mar 2015 — Feb 2021",
        },
      ],
    },
    projects: {
      label: "R&D",
      subtitle: "Research and development focused on topics I am currently exploring.",
      repoLabel: "Repo",
      siteLabel: "Website",
      items: [
        {
          name: "Generative Pseudo-Relevance Feedback",
          category: "Information Retrieval",
          categoryColor: "blue",
          url: "https://github.com/matiasrolon/ri-query-optimization-by-rag",
          repoUrl: "https://github.com/matiasrolon/ri-query-optimization-by-rag",
          description:
            "Framed within Information Retrieval, this research compares basic query expansion methods with a novel approach based on generating additional terms using a contextualized LLM. The goal is to optimize the user's original query, creating a new one that achieves better results.",
          tags: ["LLM", "Query Expansion", "RAG", "Python"],
        },
        {
          name: "Bankruptcy Prediction by Ensemble Methods",
          category: "Machine Learning",
          categoryColor: "green",
          url: "https://github.com/matiasrolon/bankruptcy-prediction-ensemble",
          repoUrl: "https://github.com/matiasrolon/bankruptcy-prediction-ensemble",
          description:
            "ML notebook predicting corporate bankruptcy using the \"American Companies Bankruptcy Prediction\" dataset (Kaggle). Includes EDA with outlier detection and Spearman correlations, preprocessing (feature selection, scaling, class imbalance handling), and training 4 calibrated models (Logistic Regression, Random Forest, MLP, SVC) combined in a soft-voting ensemble.  Recall is prioritized (minimizing false negatives), and we include a brief final analysis to explain key predictive features.",
          tags: ["Python", "Colab", "scikit-learn", "XGBoost", "Logistic Regression", "Ensemble Methods"],
        },
        {
          name: "Primatica Web",
          category: "Web Development",
          categoryColor: "orange",
          siteUrl: "https://www.primatica.com.ar/",
          description:
            "Web store for a 3D printing venture, fully manageable by the client. Built on React with free-tier infrastructure, using Supabase for the database and API, and Cloudinary for image storage.",
          tags: ["React", "Supabase", "Cloudinary", "PostgreSQL", "E-commerce"],
        },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Let's talk",
      body: "Have an opportunity, a project, or just want to talk tech? Here's how to reach me.",
      items: [
        { label: "Email", value: "matirolon96@gmail.com", href: "https://mail.google.com/mail/?view=cm&to=matirolon96@gmail.com", icon: "email" },
        { label: "LinkedIn", value: "linkedin.com/in/matiasrolon", href: "https://linkedin.com/in/matiasrolon", icon: "linkedin" },
        { label: "GitHub", value: "github.com/matiasrolon", href: "https://github.com/matiasrolon", icon: "github" },
      ],
    },
    footer: {
      text: "Built with React 19 + Vite.",
    },
  },
};

export default function Projects({ t }) {
  return (
    <section className="section" id="projects">
      <h2 className="section__title">// {t.projects.label}</h2>
      {t.projects.subtitle && (
        <p className="section__subtitle">{t.projects.subtitle}</p>
      )}
      <div className="projects__grid">
        {t.projects.items.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-card__header">
              <h3 className="project-card__title">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                  <svg
                    className="project-card__icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </h3>
            </div>
            <p className="project-card__desc">{project.description}</p>
            {project.tags && (
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

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
                <a
                  href={project.siteUrl || project.repoUrl || project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              {project.category && (
                <span
                  className={`project-card__category project-card__category--${project.categoryColor || "blue"}`}
                >
                  {project.category}
                </span>
              )}
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
            <div className="project-card__actions">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <svg
                    className="project-btn__icon"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>{t.projects.repoLabel || "Repo"}</span>
                </a>
              )}
              {project.siteUrl && (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <svg
                    className="project-btn__icon"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>{project.siteLabel || t.projects.siteLabel || "Sitio"}</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

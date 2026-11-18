import { useState } from "react";

export default function Experience({ t }) {
  return (
    <section className="section" id="experience">
      <h2 className="section__title">// {t.experience.label}</h2>
      <ol className="timeline">
        {t.experience.items.map((job, index) => (
          <ExperienceItem
            job={job}
            defaultOpen={index === 0}
            key={job.company + (job.role || "")}
          />
        ))}
      </ol>
    </section>
  );
}

function CompanyName({ company, url }) {
  if (!url) return company;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="timeline__link"
      onClick={(e) => e.stopPropagation()}
    >
      {company}
      <svg
        className="timeline__link-icon"
        width="12"
        height="12"
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
  );
}

function ExperienceItem({ job, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <li className="timeline__item">
      <div
        className="timeline__head"
        onClick={() => setIsOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsOpen((prev) => !prev);
        }}
      >
        <div className="timeline__head-left">
          {job.logo && (
            <img src={job.logo} alt={job.company} className="timeline__logo" />
          )}
          <div>
            <h3>
              {job.role ? (
                <>
                  {job.role}{" "}
                  <span className="timeline__company">
                    — <CompanyName company={job.company} url={job.url} />
                  </span>
                </>
              ) : (
                <CompanyName company={job.company} url={job.url} />
              )}
            </h3>
            <span className="timeline__period">{job.period}</span>
          </div>
        </div>
        <span className={`timeline__toggle ${isOpen ? "is-open" : ""}`} aria-hidden="true">
          ▸
        </span>
      </div>
      <div className={`timeline__details ${isOpen ? "is-open" : ""}`}>
        {job.roles ? (
          <div className="timeline__roles">
            {job.roles.map((roleItem) => (
              <div className="timeline__role" key={roleItem.role}>
                <div className="timeline__role-head">
                  <h4 className="timeline__role-title">{roleItem.role}</h4>
                  <span className="timeline__period">{roleItem.period}</span>
                </div>
                <ul className="bullets">
                  {roleItem.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="bullets">
            {job.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

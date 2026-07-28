import { useState } from "react";

export default function Education({ t }) {
  return (
    <section className="section" id="education">
      <h2 className="section__title">// {t.education.label}</h2>
      <ol className="timeline">
        {t.education.items.map((edu) => (
          <EducationItem edu={edu} key={edu.title} />
        ))}
      </ol>
    </section>
  );
}

function EducationItem({ edu }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDetails = Boolean(edu.description || (edu.bullets && edu.bullets.length > 0));

  return (
    <li className="timeline__item">
      <div
        className="timeline__head"
        onClick={() => hasDetails && setIsOpen((prev) => !prev)}
        role={hasDetails ? "button" : undefined}
        tabIndex={hasDetails ? 0 : undefined}
        onKeyDown={(e) => {
          if (hasDetails && (e.key === "Enter" || e.key === " ")) {
            setIsOpen((prev) => !prev);
          }
        }}
        style={{ cursor: hasDetails ? "pointer" : "default" }}
      >
        <div className="timeline__head-left">
          {edu.logo && (
            <img src={edu.logo} alt={edu.place} className="timeline__logo" />
          )}
          <div>
            <h3>
              {edu.url ? (
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline__link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {edu.title}
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
              ) : (
                edu.title
              )}{" "}
              <span className="timeline__company">— {edu.place}</span>
            </h3>
            <span className="timeline__period">{edu.period}</span>
          </div>
        </div>
        {hasDetails && (
          <span className={`timeline__toggle ${isOpen ? "is-open" : ""}`} aria-hidden="true">
            ▸
          </span>
        )}
      </div>
      {hasDetails && (
        <div className={`timeline__details ${isOpen ? "is-open" : ""}`}>
          {edu.description && <p className="timeline__desc">{edu.description}</p>}
          {edu.bullets && (
            <ul className="bullets">
              {edu.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </li>
  );
}

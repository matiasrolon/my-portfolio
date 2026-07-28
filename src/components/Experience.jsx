import { useState } from "react";

export default function Experience({ t }) {
  return (
    <section className="section" id="experience">
      <h2 className="section__title">// {t.experience.label}</h2>
      <ol className="timeline">
        {t.experience.items.map((job, index) => (
          <ExperienceItem job={job} defaultOpen={index === 0} key={job.company + job.role} />
        ))}
      </ol>
    </section>
  );
}

function ExperienceItem({ job, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <li className="timeline__item">
      <div className="timeline__head" onClick={() => setIsOpen((prev) => !prev)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setIsOpen((prev) => !prev); }}>
        <div className="timeline__head-left">
          {job.logo && (
            <img src={job.logo} alt={job.company} className="timeline__logo" />
          )}
          <div>
            <h3>
              {job.role} <span className="timeline__company">— {job.company}</span>
            </h3>
            <span className="timeline__period">{job.period}</span>
          </div>
        </div>
        <span className={`timeline__toggle ${isOpen ? "is-open" : ""}`} aria-hidden="true">
          ▸
        </span>
      </div>
      <div className={`timeline__details ${isOpen ? "is-open" : ""}`}>
        <ul className="bullets">
          {job.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

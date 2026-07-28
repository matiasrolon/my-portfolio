export default function Experience({ t }) {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">// {t.experience.label}</h2>
      <ol className="timeline">
        {t.experience.items.map((job) => (
          <li className="timeline__item" key={job.company + job.role}>
            <div className="timeline__head">
              <h3>
                {job.role} <span className="timeline__company">— {job.company}</span>
              </h3>
              <span className="timeline__period">{job.period}</span>
            </div>
            <ul className="bullets">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Education({ t }) {
  return (
    <section className="section" id="education">
      <h2 className="section-title">// {t.education.label}</h2>
      <ul className="edu-list">
        {t.education.items.map((edu) => (
          <li className="edu-item" key={edu.title}>
            <h3>{edu.title}</h3>
            <p className="edu-item__place">{edu.place}</p>
            <p className="edu-item__period">{edu.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

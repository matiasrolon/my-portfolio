export default function Extra({ t }) {
  return (
    <section className="section" id="extra">
      <h2 className="section-title">// {t.extra.label}</h2>
      <ul className="edu-list">
        {t.extra.items.map((item) => (
          <li className="edu-item" key={item.title}>
            <h3>{item.title}</h3>
            <p className="edu-item__place">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Skills({ t }) {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">// {t.skills.label}</h2>
      <div className="skills__list">
        {t.skills.groups.map((group) => (
          <div className="skills__group" key={group.title}>
            <h3 className="skills__title">{group.title}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li className="tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

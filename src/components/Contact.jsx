export default function Contact({ t }) {
  return (
    <section className="section section--contact" id="contact">
      <h2 className="section-title">// {t.contact.label}</h2>
      <h3 className="contact__heading">{t.contact.heading}</h3>
      <p className="contact__body">{t.contact.body}</p>
      <ul className="contact-list">
        {t.contact.items.map((item) => (
          <li className="contact-list__item" key={item.label}>
            <a href={item.href} target="_blank" rel="noreferrer">
              <span className="contact-list__label">{item.label}</span>
              <span className="contact-list__value">{item.value}</span>
              <span className="contact-list__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

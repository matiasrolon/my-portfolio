import { Link } from "react-router-dom";

export default function Header({ t }) {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="hero__avatar">
          <img src="./avatar.jpg" alt={t.hero.name} className="hero__avatar-img" />
        </div>

        <div className="hero__text">
          <p className="eyebrow">// {t.hero.role.toLowerCase()}</p>
          <h1 className="hero__name">
            {t.hero.name}
            <span className="cursor" aria-hidden="true">
              _
            </span>
          </h1>
          <p className="hero__location">{t.hero.location}</p>
          <div className="hero__actions">
            <Link to="/contact" className="hero__cta">
              {t.hero.cta} ↓
            </Link>
            <a href={t.hero.cvHref} download className="hero__cv-btn">
              {t.hero.cvLabel} ⤓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

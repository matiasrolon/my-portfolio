export default function Header({ t }) {
  return (
    <section className="hero-section" id="home">
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
            <a
              href="#contact"
              className="hero__cta"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>{t.hero.cta}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="hero__btn-icon">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
            <a href={t.hero.cvHref} download className="hero__cv-btn">
              <span>{t.hero.cvLabel}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="hero__btn-icon">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

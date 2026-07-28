import { useState } from "react";

export default function Header({ t, lang, onToggleLang, showHero }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__bar">
        <a href="#/" className="brand" aria-label="Inicio">
          mr<span className="brand__dot">.</span>
        </a>

        <div className="header__actions">
          <button
            type="button"
            className="lang-switch"
            onClick={onToggleLang}
            aria-label="Toggle language / Cambiar idioma"
          >
            <span className={lang === "es" ? "lang-switch__opt is-active" : "lang-switch__opt"}>ES</span>
            <span className="lang-switch__sep">/</span>
            <span className={lang === "en" ? "lang-switch__opt is-active" : "lang-switch__opt"}>EN</span>
          </button>

          <button
            type="button"
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span className="hamburger__line" />
            <span className="hamburger__line" />
            <span className="hamburger__line" />
          </button>
        </div>
      </div>

      {/* Overlay menu */}
      <nav className={`nav-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <ul className="nav-overlay__list">
          {t.nav.links.map((link) => (
            <li key={link.path}>
              <a
                href={`#${link.path}`}
                className="nav-overlay__link"
                onClick={closeMenu}
              >
                <span className="nav-overlay__marker">//</span> {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {showHero && (
        <div className="hero">
          <div className="hero__avatar" aria-hidden="true">
            <span>MR</span>
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
            <a href="#/contacto" className="hero__cta">
              {t.hero.cta} ↓
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

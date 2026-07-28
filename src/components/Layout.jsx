import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "./Footer";

export default function Layout({ t, lang, onToggleLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="page">
      <header className="topbar">
        <button
          type="button"
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger__line" />
          <span className="hamburger__line" />
          <span className="hamburger__line" />
        </button>

        <Link to="/" className="brand">
          mr<span className="brand__dot">.</span>
        </Link>

        <nav className="topbar__nav" aria-label="Main navigation">
          {t.nav.items.map((item) => (
            <Link
              to={item.path}
              className={`topbar__nav-link ${location.pathname === item.path ? "is-active" : ""}`}
              key={item.path}
            >
              {item.label}
            </Link>
          ))}
        </nav>

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
      </header>

      {/* Sidebar overlay */}
      <div
        className={`sidebar-overlay ${menuOpen ? "is-visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar menu */}
      <nav className={`sidebar ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
        <div className="sidebar__header">
          <span className="brand">
            mr<span className="brand__dot">.</span>
          </span>
          <button
            type="button"
            className="sidebar__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className="sidebar__nav">
          {t.nav.items.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`sidebar__link ${location.pathname === item.path ? "is-active" : ""}`}
              >
                <span className="sidebar__link-marker">//</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      <Footer t={t} />
    </div>
  );
}

import { useState, useEffect, useCallback } from "react";
import Footer from "./Footer";

export default function Layout({ t, lang, onToggleLang, theme, onToggleTheme, children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Close menu when clicking a nav link
  const handleNavClick = useCallback((e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = t.nav.items.map((item) => item.sectionId);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "home");
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of sectionIds) {
      if (id === "home") {
        // Observe the hero section
        const heroEl = document.querySelector(".hero-section");
        if (heroEl) observer.observe(heroEl);
      } else {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, [t.nav.items]);

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

        <a
          href="#home"
          className="brand"
          onClick={(e) => handleNavClick(e, "home")}
        >
          mr<span className="brand__dot">.</span>
        </a>

        <nav className="topbar__nav" aria-label="Main navigation">
          {t.nav.items.map((item) => (
            <a
              href={`#${item.sectionId}`}
              className={`topbar__nav-link ${activeSection === item.sectionId ? "is-active" : ""}`}
              key={item.sectionId}
              onClick={(e) => handleNavClick(e, item.sectionId)}
            >
              {item.label}
            </a>
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

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          {theme === "dark" ? "☀️" : "🌙"}
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
            <li key={item.sectionId}>
              <a
                href={`#${item.sectionId}`}
                className={`sidebar__link ${activeSection === item.sectionId ? "is-active" : ""}`}
                onClick={(e) => handleNavClick(e, item.sectionId)}
              >
                <span className="sidebar__link-marker">//</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        {children}
      </main>

      <Footer t={t} />
    </div>
  );
}

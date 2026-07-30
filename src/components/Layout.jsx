import { useState, useEffect, useCallback } from "react";
import Footer from "./Footer";

const navIcons = {
  home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar__link-icon">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  skills: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar__link-icon">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  experience: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar__link-icon">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  education: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar__link-icon">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  projects: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar__link-icon">
      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55A2 2 0 0 0 6.51 23.5h10.98a2 2 0 0 0 1.79-2.95l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
      <line x1="8.5" y1="2" x2="15.5" y2="2" />
      <line x1="7" y1="16" x2="17" y2="16" />
    </svg>
  ),
  contact: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar__link-icon">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22 6 12 13 2 6" />
    </svg>
  ),
};

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
                {navIcons[item.sectionId]}
                <span>{item.label}</span>
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

import { useEffect, useState } from "react";
import { content } from "./content";
import { useHashRouter } from "./useHashRouter";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Extra from "./components/Extra";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function getInitialLang() {
  const saved = typeof window !== "undefined" ? window.__cvLang : null;
  if (saved) return saved;
  const browserLang = typeof navigator !== "undefined" ? navigator.language : "es";
  return browserLang && browserLang.toLowerCase().startsWith("en") ? "en" : "es";
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [path] = useHashRouter();
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    window.__cvLang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const renderPage = () => {
    switch (path) {
      case "/perfil":
        return <Profile t={t} />;
      case "/conocimientos":
        return <Skills t={t} />;
      case "/experiencia":
        return <Experience t={t} />;
      case "/formacion":
        return <Education t={t} />;
      case "/extra":
        return <Extra t={t} />;
      case "/contacto":
        return <Contact t={t} />;
      default:
        return null; // Hero is shown in the Header
    }
  };

  const isHome = path === "/";

  return (
    <div className="page">
      <Header t={t} lang={lang} onToggleLang={toggleLang} showHero={isHome} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer t={t} />
    </div>
  );
}

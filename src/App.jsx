import { useEffect, useState } from "react";
import { content } from "./content";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function getInitialLang() {
  const saved = typeof window !== "undefined" ? window.__cvLang : null;
  if (saved) return saved;
  const browserLang = typeof navigator !== "undefined" ? navigator.language : "es";
  return browserLang && browserLang.toLowerCase().startsWith("en") ? "en" : "es";
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    window.__cvLang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  return (
    <Layout t={t} lang={lang} onToggleLang={toggleLang}>
      <Header t={t} />
      <Profile t={t} />
      <Skills t={t} />
      <Experience t={t} />
      <Education t={t} />
      <Projects t={t} />
      <Contact t={t} />
    </Layout>
  );
}

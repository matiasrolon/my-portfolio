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

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return "dark";
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [theme, setTheme] = useState(getInitialTheme);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    window.__cvLang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <Layout t={t} lang={lang} onToggleLang={toggleLang} theme={theme} onToggleTheme={toggleTheme}>
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

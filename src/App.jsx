import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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

function HomePage({ t }) {
  return (
    <>
      <Header t={t} />
      <Profile t={t} />
    </>
  );
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
    <Routes>
      <Route element={<Layout t={t} lang={lang} onToggleLang={toggleLang} />}>
        <Route path="/" element={<HomePage t={t} />} />
        <Route path="/skills" element={<Skills t={t} />} />
        <Route path="/experience" element={<Experience t={t} />} />
        <Route path="/education" element={<Education t={t} />} />
        <Route path="/projects" element={<Projects t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
      </Route>
    </Routes>
  );
}

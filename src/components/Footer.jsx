export default function Footer({ t }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} Matias Rolón</span>
      <span>{t.footer.text}</span>
    </footer>
  );
}

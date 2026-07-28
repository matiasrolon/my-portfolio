import { SocialIcon } from "./Contact";

export default function Footer({ t }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__top">
        <span>© {year} Matias Rolón</span>
        <span>{t.footer.text}</span>
      </div>
      <div className="footer__socials">
        <a href="mailto:matirolon96@gmail.com" className="footer__social-link" aria-label="Email" title="Email">
          <SocialIcon type="email" size={18} />
        </a>
        <a href="https://linkedin.com/in/matirolon" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="LinkedIn" title="LinkedIn">
          <SocialIcon type="linkedin" size={18} />
        </a>
        <a href="https://github.com/matirolon" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="GitHub" title="GitHub">
          <SocialIcon type="github" size={18} />
        </a>
      </div>
    </footer>
  );
}

import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiReact } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <p className="footer-text">
          © 2026 <span className="footer-highlight">Shubham Soni</span>
          {' · '}Built with{' '}
          <SiReact style={{ color: '#61DAFB', verticalAlign: 'middle' }} /> React,{' '}
          <span className="footer-highlight">Bootstrap</span> &amp; Framer Motion
        </p>
        <div className="d-flex justify-content-center gap-3 mt-2">
          <a href="https://github.com/soni015972" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/webdeveloper-shubham-soni-08753924a/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#0A66C2'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

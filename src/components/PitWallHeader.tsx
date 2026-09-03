import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const PitWallHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'EXPERIENCIA', href: '#experiencia' },
    { name: 'PROYECTOS', href: '#proyectos' },
    { name: 'STACK', href: '#stack' },
    { name: 'EDUCACIÓN', href: '#educacion' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(8, 8, 12, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.25s ease',
        padding: '1.1rem 0',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--f1-red)',
              borderRadius: '1px',
            }}
          />
          <div style={{ fontFamily: 'var(--font-f1)', fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', letterSpacing: '0.08em' }}>
            TINEO <span className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 400 }}>// 88</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                letterSpacing: '0.05em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}

          {/* Status Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--green-sector)', padding: '3px 8px', background: 'rgba(0, 230, 118, 0.05)', borderRadius: '3px', border: '1px solid rgba(0, 230, 118, 0.15)' }}>
            <span className="status-dot"></span>
            DRS: ACTIVE
          </div>

          {/* Download CV */}
          <a
            href="./cv-tineo-franco-fs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              borderBottom: '1px solid var(--f1-red)',
              paddingBottom: '2px',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            CV.PDF <ArrowUpRight size={12} style={{ color: 'var(--f1-red)' }} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#08080c',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                padding: '6px 0',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="./cv-tineo-franco-fs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: 'var(--f1-red)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 600,
              paddingTop: '6px',
            }}
          >
            DESCARGAR CV (PDF) →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 821px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

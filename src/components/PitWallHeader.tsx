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
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Stack', href: '#stack' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(10, 10, 15, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.25s ease',
        padding: '1.2rem 0',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--team-ferrari)' }} />
          <span style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff', letterSpacing: '-0.01em' }}>
            Jean Franco Tineo <span className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 400 }}>// 88</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}

          {/* Download CV */}
          <a
            href="./cv-tineo-franco-fs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '6px 14px',
              backgroundColor: 'rgba(225, 6, 0, 0.1)',
              border: '1px solid rgba(225, 6, 0, 0.3)',
              borderRadius: '4px',
              color: '#ffffff',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--team-ferrari)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(225, 6, 0, 0.1)')}
          >
            CV.PDF <ArrowUpRight size={13} />
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
            backgroundColor: '#0a0a0f',
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
                fontSize: '0.9rem',
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
              color: 'var(--team-ferrari)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 600,
              paddingTop: '6px',
            }}
          >
            Descargar CV (PDF) →
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

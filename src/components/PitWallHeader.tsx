import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Activity, Award, Code2, FolderGit2, Mail } from 'lucide-react';

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
    { name: 'INICIO', href: '#hero', icon: <Activity className="w-4 h-4" /> },
    { name: 'SECTORES (EXP)', href: '#experiencia', icon: <Award className="w-4 h-4" /> },
    { name: 'TELEMETRÍA (PROYECTOS)', href: '#proyectos', icon: <FolderGit2 className="w-4 h-4" /> },
    { name: 'GARAGE (STACK)', href: '#stack', icon: <Code2 className="w-4 h-4" /> },
    { name: 'CONTACTO', href: '#contacto', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(10, 10, 14, 0.92)' : 'rgba(10, 10, 14, 0.65)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Top Telemetry Ticker Bar */}
      <div
        style={{
          backgroundColor: '#07070a',
          borderBottom: '1px solid rgba(225, 6, 0, 0.2)',
          padding: '4px 1.5rem',
          fontSize: '0.7rem',
          fontFamily: "var(--font-f1)",
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#8e8ea8',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#00e676' }}>
            <span className="drs-indicator"></span>
            DRS: ENABLED
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ color: '#00f0ff' }}>STATUS: READY TO RACE</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span>LOCATION: PERÚ</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ color: 'var(--f1-red)', fontWeight: 700 }}>DRIVER: #88 TINEO</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span>LATENCY: 12ms</span>
        </div>
      </div>

      {/* Navigation Content */}
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.5rem' }}>
        {/* Brand / Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--f1-red)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontFamily: 'var(--font-f1)',
              color: '#ffffff',
              boxShadow: '0 0 12px rgba(225, 6, 0, 0.5)',
              transform: 'skewX(-10deg)',
            }}
          >
            JF
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-f1)', fontWeight: 700, fontSize: '1.05rem', color: '#ffffff', letterSpacing: '0.05em' }}>
              TINEO <span style={{ color: 'var(--f1-red)' }}>F1</span>
            </div>
            <div style={{ fontSize: '0.65rem', color: '#8e8ea8', fontFamily: 'var(--font-f1)' }}>FULL STACK TELEMETRY</div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#d0d0e0',
                textDecoration: 'none',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-f1)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--f1-red)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d0d0e0')}
            >
              <span style={{ color: 'var(--f1-red)', opacity: 0.8 }}>{link.icon}</span>
              {link.name}
            </a>
          ))}
          <a
            href="./cv-tineo-franco-fs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '6px 14px',
              backgroundColor: 'rgba(225, 6, 0, 0.15)',
              border: '1px solid var(--f1-red)',
              borderRadius: '4px',
              color: '#ffffff',
              textDecoration: 'none',
              fontFamily: 'var(--font-f1)',
              fontSize: '0.75rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
              transform: 'skewX(-6deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--f1-red)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(225, 6, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(225, 6, 0, 0.15)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <i className="fa-solid fa-download"></i> DESCARGAR CV
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
            padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#0a0a0e',
            borderBottom: '1px solid var(--f1-red)',
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
                fontFamily: 'var(--font-f1)',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <span style={{ color: 'var(--f1-red)' }}>{link.icon}</span>
              {link.name}
            </a>
          ))}
          <a
            href="./cv-tineo-franco-fs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              padding: '10px',
              backgroundColor: 'var(--f1-red)',
              color: '#ffffff',
              textAlign: 'center',
              textDecoration: 'none',
              fontFamily: 'var(--font-f1)',
              fontWeight: 700,
              borderRadius: '4px',
              marginTop: '8px',
            }}
          >
            DESCARGAR CV (PDF)
          </a>
        </div>
      )}

      {/* Inline styles for media query */}
      <style>{`
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 869px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

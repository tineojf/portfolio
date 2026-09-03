import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl: string;
  teamBadgeClass: string;
  teamName: string;
  teamBorderColor: string;
}

export const TelemetryProjectCard: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const projects: Project[] = [
    {
      id: 'ventamon',
      title: 'Ventamon Mobile & Chat IA',
      category: 'MOBILE & IA',
      description: 'Aplicación móvil en React Native y backend Express/TypeScript. Chat conversacional con IA para asistencia guiada.',
      stack: ['React Native', 'TypeScript', 'Express', 'OpenAI API'],
      githubUrl: 'https://github.com/tineojf',
      teamBadgeClass: 'team-badge-aston',
      teamName: 'ASTON MARTIN IA',
      teamBorderColor: 'var(--team-aston)',
    },
    {
      id: 'nss',
      title: 'NSS SaaS ISO 9001 Backend',
      category: 'BACKEND',
      description: 'Arquitectura SaaS Backend en Java Spring Boot y MySQL para trazabilidad y cumplimiento de auditorías de calidad ISO 9001.',
      stack: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
      githubUrl: 'https://github.com/tineojf',
      teamBadgeClass: 'team-badge-ferrari',
      teamName: 'FERRARI SAAS',
      teamBorderColor: 'var(--team-ferrari)',
    },
    {
      id: 'spotify',
      title: 'API Spotify Music Manager',
      category: 'BACKEND',
      description: 'API RESTful para gestión de canciones, perfiles de usuario y listas de reproducción públicas y privadas.',
      stack: ['Express', 'TypeScript', 'Prisma ORM'],
      githubUrl: 'https://github.com/tineojf/express_project',
      teamBadgeClass: 'team-badge-alpine',
      teamName: 'ALPINE API',
      teamBorderColor: 'var(--team-alpine)',
    },
    {
      id: 'pagos',
      title: 'API & Web Pagos de Servicios',
      category: 'FULL STACK',
      description: 'Plataforma para registro de pagos, servicios recurrentes y control de morosidad.',
      stack: ['Django / Express', 'TypeScript', 'MySQL'],
      githubUrl: 'https://github.com/tineojf/rest_project',
      teamBadgeClass: 'team-badge-mercedes',
      teamName: 'MERCEDES FULLSTACK',
      teamBorderColor: 'var(--team-mercedes)',
    },
    {
      id: 'trivia',
      title: 'Trivia F1 Engine',
      category: 'PYTHON',
      description: 'Motor interactivo en Python para simulación de cuestionarios en tiempo real sobre la Fórmula 1.',
      stack: ['Python 3', 'CLI Flow'],
      githubUrl: 'https://github.com/tineojf/trivia_silabuz',
      teamBadgeClass: 'team-badge-mclaren',
      teamName: 'MCLAREN ENGINE',
      teamBorderColor: 'var(--team-mclaren)',
    },
  ];

  const filtered = filter === 'ALL' ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="proyectos" style={{ padding: '70px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-custom">
        
        {/* Header & Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', marginBottom: '2rem' }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="section-subtitle">// PROYECTOS Y SOLUCIONES</span>
            <h2 className="section-title">
              Proyectos Destacados <span style={{ color: 'var(--team-ferrari)' }}>.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['ALL', 'MOBILE & IA', 'BACKEND', 'FULL STACK', 'PYTHON'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="font-mono"
                style={{
                  padding: '4px 10px',
                  fontSize: '0.72rem',
                  borderRadius: '4px',
                  border: filter === cat ? '1px solid var(--team-ferrari)' : '1px solid var(--border-subtle)',
                  background: filter === cat ? 'rgba(225, 6, 0, 0.12)' : 'transparent',
                  color: filter === cat ? '#ffffff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '1.25rem' }}>
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="f1-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                borderTop: `3px solid ${proj.teamBorderColor}`,
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span className={`team-badge ${proj.teamBadgeClass}`} style={{ fontSize: '0.65rem' }}>
                    {proj.teamName}
                  </span>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                  {proj.title}
                </h3>

                <p style={{ color: '#a0a0b2', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                  {proj.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                {proj.stack.map((s) => (
                  <span key={s} className="font-mono text-muted" style={{ fontSize: '0.68rem' }}>
                    #{s}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

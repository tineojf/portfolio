import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl: string;
  tag: string;
}

export const TelemetryProjectCard: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const projects: Project[] = [
    {
      id: 'ventamon',
      title: 'Ventamon Mobile & IA Chat',
      category: 'MOBILE & IA',
      description: 'App móvil en React Native y backend Express/TypeScript. Chat conversacional con IA para asistencia guiada en tiempo real.',
      stack: ['React Native', 'TypeScript', 'Express', 'OpenAI API'],
      githubUrl: 'https://github.com/tineojf',
      tag: 'MOBILE / IA',
    },
    {
      id: 'nss',
      title: 'NSS SaaS ISO 9001 Backend',
      category: 'BACKEND',
      description: 'Arquitectura SaaS Backend en Java Spring Boot y MySQL para trazabilidad y cumplimiento de auditorías de calidad ISO 9001.',
      stack: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
      githubUrl: 'https://github.com/tineojf',
      tag: 'ENTERPRISE SAAS',
    },
    {
      id: 'spotify',
      title: 'API Spotify Music Manager',
      category: 'BACKEND',
      description: 'API RESTful para gestión de canciones, perfiles de usuario y playlists con estado público y privado.',
      stack: ['Express', 'TypeScript', 'Prisma ORM'],
      githubUrl: 'https://github.com/tineojf/express_project',
      tag: 'API REST',
    },
    {
      id: 'pagos',
      title: 'API & Web Pagos de Servicios',
      category: 'FULL STACK',
      description: 'Plataforma para registro de pagos, servicios recurrentes y control de morosidad.',
      stack: ['Django / Express', 'TypeScript', 'MySQL'],
      githubUrl: 'https://github.com/tineojf/rest_project',
      tag: 'FULL STACK',
    },
    {
      id: 'trivia',
      title: 'Trivia F1 Engine',
      category: 'PYTHON',
      description: 'Motor interactivo en Python para simulación de cuestionarios en tiempo real sobre la Fórmula 1.',
      stack: ['Python 3', 'CLI Flow'],
      githubUrl: 'https://github.com/tineojf/trivia_silabuz',
      tag: 'PYTHON ENGINE',
    },
  ];

  const filtered = filter === 'ALL' ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="proyectos" style={{ padding: '70px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-custom">
        
        {/* Header & Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <span className="font-mono text-muted" style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              // TELEMETRY LOGS
            </span>
            <h2 className="font-f1" style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 700 }}>
              Proyectos Destacados <span style={{ color: 'var(--f1-red)' }}>.</span>
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
                  fontSize: '0.7rem',
                  borderRadius: '3px',
                  border: filter === cat ? '1px solid var(--f1-red)' : '1px solid var(--border-subtle)',
                  background: filter === cat ? 'var(--f1-red-soft)' : 'transparent',
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
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="f1-pill f1-pill-cyan" style={{ fontSize: '0.65rem' }}>
                    {proj.tag}
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

                <h3 className="font-f1" style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {proj.title}
                </h3>

                <p style={{ color: '#9a9ab0', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
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

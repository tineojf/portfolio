import React, { useState } from 'react';
import { ExternalLink, Terminal, Cpu, Database, Layers, Code2 } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  telemetryCode: string;
  statusBadge: string;
}

export const TelemetryProjectCard: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const projects: Project[] = [
    {
      title: 'Ventamon - Mobile App & Chat IA',
      category: 'MOBILE & IA',
      description: 'Aplicación móvil en React Native con backend en Express y TypeScript. Integra un chat conversacional inteligente con IA para guías y asistencia interactiva.',
      stack: ['React Native', 'TypeScript', 'Express', 'OpenAI API', 'Node.js'],
      githubUrl: 'https://github.com/tineojf',
      telemetryCode: 'TELEMETRY: VT-IA-01',
      statusBadge: 'FEATURED 🚀',
    },
    {
      title: 'NSS - SaaS Backend ISO 9001',
      category: 'BACKEND SAAS',
      description: 'Arquitectura Backend en Java (Spring Boot) y MySQL creada para el cumplimiento estricto de auditorías y trazabilidad de acciones preventivas bajo norma ISO 9001.',
      stack: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'REST API'],
      githubUrl: 'https://github.com/tineojf',
      telemetryCode: 'TELEMETRY: NSS-ISO-9001',
      statusBadge: 'ENTERPRISE 🏆',
    },
    {
      title: 'API - Spotify Music Platform',
      category: 'BACKEND',
      description: 'API REST para registro de canciones, usuarios y playlists con control de privacidad público/privado.',
      stack: ['Express', 'TypeScript', 'Prisma ORM', 'Node.js'],
      githubUrl: 'https://github.com/tineojf/express_project',
      telemetryCode: 'TELEMETRY: SP-API-03',
      statusBadge: 'COMPLETED',
    },
    {
      title: 'API & Web - Pagos de Servicios',
      category: 'FULL STACK',
      description: 'Sistema integral para la creación de servicios, programación de pagos y alertas de morosidad en tiempo real.',
      stack: ['Django / Express', 'TypeScript', 'MySQL', 'JavaScript'],
      githubUrl: 'https://github.com/tineojf/rest_project',
      telemetryCode: 'TELEMETRY: PAY-SYS-02',
      statusBadge: 'COMPLETED',
    },
    {
      title: 'Trivia F1 Engine',
      category: 'PYTHON',
      description: 'Motor interactivo en Python para simulaciones de trivias F1 en tiempo real con cronómetros y evaluación condicional.',
      stack: ['Python 3', 'CLI Logic', 'Time Functions'],
      githubUrl: 'https://github.com/tineojf/trivia_silabuz',
      telemetryCode: 'TELEMETRY: F1-TRIVIA-00',
      statusBadge: 'F1 ENGINE 🏁',
    },
  ];

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.category.includes(filter));

  return (
    <section id="proyectos" style={{ padding: '80px 0', borderTop: '1px solid var(--border-carbon)', backgroundColor: 'rgba(10, 10, 14, 0.4)' }}>
      <div className="container-custom">
        
        {/* Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div className="f1-badge f1-badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <Terminal size={14} /> PIT LANE TELEMETRY DATA
          </div>
          <h2 className="font-f1 text-gradient-f1" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '0.75rem' }}>
            PROYECTOS & TELEMETRÍA TÉCNICA
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem' }}>
            Registro de soluciones de software desarrolladas, desde arquitecturas SaaS empresariales hasta apps móviles con Inteligencia Artificial.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {['ALL', 'MOBILE & IA', 'BACKEND SAAS', 'FULL STACK', 'PYTHON'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '6px 14px',
                fontFamily: 'var(--font-f1)',
                fontSize: '0.75rem',
                fontWeight: 700,
                borderRadius: '4px',
                border: filter === cat ? '1px solid var(--f1-red)' : '1px solid var(--border-carbon)',
                backgroundColor: filter === cat ? 'var(--f1-red)' : 'rgba(255,255,255,0.03)',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="f1-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.75rem' }}>
              <div>
                {/* Card Header Top */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-f1)', fontSize: '0.68rem', color: 'var(--cyan-telemetry)' }}>
                    {project.telemetryCode}
                  </span>
                  <span className="f1-badge f1-badge-red" style={{ fontSize: '0.65rem' }}>
                    {project.statusBadge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-f1" style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p style={{ color: '#a0a0b8', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Stack Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.7rem',
                        padding: '3px 8px',
                        borderRadius: '3px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-carbon)',
                        color: '#d0d0e0',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '12px', paddingTop: '1rem', borderTop: '1px solid var(--border-carbon)' }}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-f1)',
                      fontSize: '0.75rem',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--f1-red)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                  >
                    <i className="fa-brands fa-github"></i> REPOSITORIO
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

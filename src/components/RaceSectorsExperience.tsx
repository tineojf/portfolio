import React from 'react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  teamName: string;
  teamBadgeClass: string;
  teamBorderColor: string;
  highlights: string[];
  skills: string[];
}

export const RaceSectorsExperience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 'nss',
      role: 'Full Stack Developer',
      company: 'New Stage Solutions | NSS',
      location: 'España (Remoto)',
      period: 'Septiembre 2025 - Marzo 2026',
      teamName: 'SCUDERIA SAAS',
      teamBadgeClass: 'team-badge-ferrari',
      teamBorderColor: 'var(--team-ferrari)',
      highlights: [
        'Diseñar y desarrollar la arquitectura del backend para una plataforma SaaS, implementando lógica compleja para el cumplimiento de normativas de calidad ISO 9001.',
        'Diseñar y optimizar esquemas de bases de datos relacionales en MySQL, garantizando la integridad de los datos y la trazabilidad de acciones preventivas.',
      ],
      skills: ['Java', 'Spring Boot', 'MySQL', 'SaaS', 'ISO 9001', 'Docker'],
    },
    {
      id: 'ventamon',
      role: 'Software Developer',
      company: 'Ventamon EIRL',
      location: 'Perú (Híbrido)',
      period: 'Marzo 2025 - Agosto 2025',
      teamName: 'MCLAREN MOBILE & IA',
      teamBadgeClass: 'team-badge-mclaren',
      teamBorderColor: 'var(--team-mclaren)',
      highlights: [
        'Construir el backend escalable de la aplicación mediante TypeScript y Express, gestionando la persistencia de datos y la sincronización en tiempo real.',
        'Diseñar y desarrollar una aplicación móvil utilizando React Native, integrando un chat interactivo basado en Inteligencia Artificial para asistencia.',
      ],
      skills: ['TypeScript', 'Express', 'React Native', 'OpenAI IA', 'Node.js'],
    },
    {
      id: 'peruanito',
      role: 'IT Support Technician',
      company: 'Tuberías Peruanito SAC',
      location: 'Perú (Híbrido)',
      period: 'Junio 2024 - Diciembre 2025',
      teamName: 'MERCEDES INFRASTRUCTURE',
      teamBadgeClass: 'team-badge-mercedes',
      teamBorderColor: 'var(--team-mercedes)',
      highlights: [
        'Gestionar la infraestructura local e híbrida y servicios de Microsoft 365, asegurando la disponibilidad continua de los sistemas de información.',
        'Ejecutar labores de soporte técnico avanzado, incluyendo la configuración de redes, el mantenimiento de servidores locales y la resolución de incidencias de hardware.',
      ],
      skills: ['Microsoft 365', 'Redes & Servers', 'Infraestructura Híbrida', 'Hardware'],
    },
  ];

  return (
    <section id="experiencia" style={{ padding: '70px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-custom">
        
        {/* Clean Section Header */}
        <div className="section-header">
          <span className="section-subtitle">// HISTORIAL PROFESIONAL</span>
          <h2 className="section-title">
            Experiencia Laboral <span style={{ color: 'var(--team-ferrari)' }}>.</span>
          </h2>
        </div>

        {/* Experience Items List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="f1-card"
              style={{
                padding: '1.5rem 1.75rem',
                borderLeft: `4px solid ${exp.teamBorderColor}`,
              }}
            >
              {/* Header Info */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', marginBottom: '0.75rem' }}>
                <div>
                  <span className={`team-badge ${exp.teamBadgeClass}`} style={{ marginRight: '10px', fontSize: '0.68rem' }}>
                    {exp.teamName}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', display: 'inline-block' }}>
                    {exp.role} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>@ {exp.company}</span>
                  </h3>
                </div>

                <div className="font-mono text-muted" style={{ fontSize: '0.78rem' }}>
                  {exp.location} | {exp.period}
                </div>
              </div>

              {/* Highlights */}
              <ul style={{ paddingLeft: '1.2rem', color: '#b8b8cc', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                {exp.highlights.map((h, i) => (
                  <li key={i} style={{ marginBottom: '4px' }}>{h}</li>
                ))}
              </ul>

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.skills.map((s) => (
                  <span key={s} className="font-mono text-muted" style={{ fontSize: '0.7rem', padding: '3px 8px', background: 'rgba(255,255,255,0.03)', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
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

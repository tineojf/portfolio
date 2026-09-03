import React from 'react';

interface ExperienceItem {
  id: string;
  sectorCode: string;
  isFastestLap?: boolean;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  skills: string[];
}

export const RaceSectorsExperience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 'nss',
      sectorCode: 'SECTOR 03 // FASTEST LAP ⚡',
      isFastestLap: true,
      role: 'Full Stack Developer',
      company: 'New Stage Solutions | NSS',
      location: 'España (Remoto)',
      period: '09/2025 - 03/2026',
      highlights: [
        'Diseño y desarrollo de la arquitectura backend para plataforma SaaS en cumplimiento con la normativa de calidad ISO 9001.',
        'Diseño y optimización de esquemas de bases de datos relacionales en MySQL, garantizando la trazabilidad de acciones preventivas.',
      ],
      skills: ['Java', 'Spring Boot', 'MySQL', 'SaaS', 'ISO 9001', 'Docker'],
    },
    {
      id: 'ventamon',
      sectorCode: 'SECTOR 02',
      role: 'Software Developer',
      company: 'Ventamon EIRL',
      location: 'Perú (Híbrido)',
      period: '03/2025 - 08/2025',
      highlights: [
        'Construcción del backend escalable en TypeScript y Express, gestionando persistencia y sincronización en tiempo real.',
        'Desarrollo de aplicación móvil con React Native e integración de chat interactivo basado en IA (OpenAI API).',
      ],
      skills: ['TypeScript', 'Express', 'React Native', 'OpenAI IA', 'Node.js'],
    },
    {
      id: 'peruanito',
      sectorCode: 'SECTOR 01',
      role: 'IT Support Technician',
      company: 'Tuberías Peruanito SAC',
      location: 'Perú (Híbrido)',
      period: '06/2024 - 12/2025',
      highlights: [
        'Gestión de infraestructura local e híbrida y servicios de Microsoft 365, asegurando disponibilidad de sistemas.',
        'Soporte técnico avanzado, mantenimiento de servidores locales, configuración de redes y resolución de incidencias.',
      ],
      skills: ['Microsoft 365', 'Redes & Servers', 'Infraestructura Híbrida'],
    },
  ];

  return (
    <section id="experiencia" style={{ padding: '70px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-custom">
        
        {/* Minimal Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="font-mono text-muted" style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            // CAREER TIMELINE
          </span>
          <h2 className="font-f1" style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 700 }}>
            Experiencia Laboral <span style={{ color: 'var(--f1-red)' }}>.</span>
          </h2>
        </div>

        {/* Experience Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="f1-card"
              style={{
                padding: '1.5rem 1.75rem',
                borderLeft: exp.isFastestLap ? '3px solid var(--f1-red)' : '1px solid var(--border-subtle)',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', marginBottom: '0.75rem' }}>
                <div>
                  <span className="font-mono" style={{ fontSize: '0.7rem', color: exp.isFastestLap ? 'var(--f1-red)' : 'var(--cyan-telemetry)', fontWeight: 500, marginRight: '10px' }}>
                    {exp.sectorCode}
                  </span>
                  <h3 className="font-f1" style={{ fontSize: '1.2rem', color: '#ffffff', display: 'inline-block' }}>
                    {exp.role} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>@ {exp.company}</span>
                  </h3>
                </div>

                <div className="font-mono text-muted" style={{ fontSize: '0.75rem' }}>
                  {exp.location} | {exp.period}
                </div>
              </div>

              {/* Highlights */}
              <ul style={{ paddingLeft: '1.2rem', color: '#b0b0c5', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                {exp.highlights.map((h, i) => (
                  <li key={i} style={{ marginBottom: '4px' }}>{h}</li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.skills.map((s) => (
                  <span key={s} className="f1-pill">
                    {s}
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

import React, { useState } from 'react';
import { Calendar, MapPin, Zap, CheckCircle2, ChevronRight, Trophy } from 'lucide-react';

interface ExperienceItem {
  id: string;
  sectorNumber: number;
  isFastestLap?: boolean;
  role: string;
  company: string;
  location: string;
  period: string;
  badgeText: string;
  highlights: string[];
  skills: string[];
}

export const RaceSectorsExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'SAAS' | 'MOBILE_IA' | 'INFRA'>('ALL');

  const experiences: ExperienceItem[] = [
    {
      id: 'nss',
      sectorNumber: 3,
      isFastestLap: true,
      role: 'Full Stack Developer',
      company: 'New Stage Solutions | NSS',
      location: 'España (Remoto)',
      period: 'Septiembre 2025 - Marzo 2026',
      badgeText: 'FASTEST LAP ⚡ | SAAS ARCHITECTURE',
      highlights: [
        'Diseñar y desarrollar la arquitectura del backend para una plataforma SaaS, implementando lógica compleja para el cumplimiento de normativas de calidad ISO 9001.',
        'Diseñar y optimizar esquemas de bases de datos relacionales en MySQL, garantizando la integridad de los datos y la trazabilidad de acciones preventivas.',
      ],
      skills: ['Java', 'Spring Boot', 'MySQL', 'SaaS', 'ISO 9001', 'REST API', 'Docker'],
    },
    {
      id: 'ventamon',
      sectorNumber: 2,
      role: 'Software Developer',
      company: 'Ventamon EIRL',
      location: 'Perú (Híbrido)',
      period: 'Marzo 2025 - Agosto 2025',
      badgeText: 'SECTOR 2 🏎️ | MOBILE & IA INTEGRATION',
      highlights: [
        'Construir el backend escalable de la aplicación mediante TypeScript y Express, gestionando la persistencia de datos y la sincronización en tiempo real.',
        'Diseñar y desarrollar una aplicación móvil utilizando React Native, integrando un chat interactivo basado en Inteligencia Artificial para asistencia y guías espirituales.',
      ],
      skills: ['TypeScript', 'Express', 'React Native', 'OpenAI IA', 'Real-Time Sync', 'Node.js'],
    },
    {
      id: 'peruanito',
      sectorNumber: 1,
      role: 'IT Support Technician',
      company: 'Tuberías Peruanito SAC',
      location: 'Perú (Híbrido)',
      period: 'Junio 2024 - Diciembre 2025',
      badgeText: 'SECTOR 1 🔧 | INFRASTRUCTURE & NETWORK',
      highlights: [
        'Gestionar la infraestructura local e híbrida y servicios de Microsoft 365, asegurando la disponibilidad continua de los sistemas de información.',
        'Ejecutar labores de soporte técnico avanzado, incluyendo la configuración de redes, el mantenimiento de servidores locales y la resolución de incidencias de hardware.',
      ],
      skills: ['Microsoft 365', 'Redes & Servers', 'Infraestructura Híbrida', 'Soporte Avanzado', 'Hardware'],
    },
  ];

  return (
    <section id="experiencia" style={{ padding: '80px 0', borderTop: '1px solid var(--border-carbon)' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div className="f1-badge f1-badge-red" style={{ marginBottom: '0.75rem' }}>
            <Trophy size={14} /> RACE CAREER SECTORS
          </div>
          <h2 className="font-f1 text-gradient-f1" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '0.75rem' }}>
            EXPERIENCIA LABORAL DE CARRERA
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem' }}>
            Telemetría de la trayectoria profesional y evolución técnica dividida por sectores de rendimiento.
          </p>
        </div>

        {/* Sectors Display Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="f1-card"
              style={{
                padding: '2rem',
                borderLeft: exp.isFastestLap ? '4px solid var(--f1-red)' : '4px solid #00f0ff',
                backgroundColor: exp.isFastestLap ? 'rgba(20, 15, 20, 0.9)' : 'var(--bg-card)',
              }}
            >
              {/* Card Header: Sector & Period */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-f1)',
                        fontWeight: 900,
                        fontSize: '0.85rem',
                        color: exp.isFastestLap ? 'var(--f1-red)' : 'var(--cyan-telemetry)',
                        padding: '2px 8px',
                        background: exp.isFastestLap ? 'rgba(225, 6, 0, 0.15)' : 'rgba(0, 240, 255, 0.1)',
                        borderRadius: '4px',
                        border: `1px solid ${exp.isFastestLap ? 'rgba(225, 6, 0, 0.3)' : 'rgba(0, 240, 255, 0.3)'}`,
                      }}
                    >
                      {exp.badgeText}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>

                  <h3 className="font-f1" style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '4px' }}>
                    {exp.role} <span style={{ color: 'var(--f1-red)' }}>@ {exp.company}</span>
                  </h3>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-f1)',
                    fontSize: '0.8rem',
                    color: 'var(--green-sector)',
                    background: 'rgba(0, 230, 118, 0.08)',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 230, 118, 0.2)',
                  }}
                >
                  <Calendar size={14} /> {exp.period}
                </div>
              </div>

              {/* Highlights List */}
              <div style={{ marginBottom: '1.5rem' }}>
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '0.75rem', color: '#d0d0e0', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    <CheckCircle2 size={18} style={{ color: exp.isFastestLap ? 'var(--f1-red)' : 'var(--cyan-telemetry)', shrink: 0, marginTop: '2px' }} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '1rem', borderTop: '1px dashed var(--border-carbon)' }}>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: 'var(--font-f1)',
                      fontSize: '0.72rem',
                      padding: '4px 10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-carbon)',
                      borderRadius: '4px',
                      color: '#b0b0c8',
                    }}
                  >
                    #{skill}
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

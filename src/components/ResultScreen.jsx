import React from 'react';
import { ExternalLink, RotateCcw, BookOpen, Briefcase } from 'lucide-react';
import './ResultScreen.css';

export default function ResultScreen({ resultCourse, nucleoInfo, onReset }) {
  if (!resultCourse) return null;

  const isNest = resultCourse.nucleo === 'nest';
  const accentColor = isNest ? 'var(--nest-color)' : 'var(--netda-color)';
  const lightColor = isNest ? 'var(--nest-color-light)' : 'var(--netda-color-light)';

  return (
    <div className="result-screen fade-in" style={{ '--dynamic-color': accentColor, '--dynamic-light': lightColor }}>
      <div className="result-header">
        <h2 className="result-subtitle">A tua Licenciatura Ideal é:</h2>
        <h1 className="result-title" style={{ color: accentColor }}>
          {resultCourse.title}
        </h1>
      </div>

      <div className="result-content">
        <div className="info-card">
          <div className="card-header">
            <BookOpen className="card-icon" />
            <h3>O que vais aprender?</h3>
          </div>
          <ul className="info-list">
            {resultCourse.themes.map((theme, i) => (
              <li key={i}>{theme}</li>
            ))}
          </ul>
        </div>

        <div className="info-card">
          <div className="card-header">
            <Briefcase className="card-icon" />
            <h3>O que podes ser?</h3>
          </div>
          <ul className="info-list">
            {resultCourse.careers.map((career, i) => (
              <li key={i}>{career}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Núcleo Banner */}
      <div className={`nucleo-banner ${isNest ? 'banner-nest' : 'banner-netda'}`}>
        <div className="nucleo-content">
          <span className="nucleo-badge">Apoio Estudantil</span>
          <h2 className="nucleo-name">{nucleoInfo.name}</h2>
          <p className="nucleo-fullname">{nucleoInfo.fullName}</p>
        </div>
        <div className="nucleo-pattern"></div>
      </div>

      <div className="action-buttons">
        <a 
          href="https://www.iscte-iul.pt/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn action-btn-primary"
          style={{ backgroundColor: accentColor }}
        >
          Saber mais no site do Iscte <ExternalLink size={18} />
        </a>
        
        <button onClick={onReset} className="btn btn-outline" style={{ borderColor: accentColor, color: accentColor }}>
          Refazer Quiz <RotateCcw size={18} />
        </button>
      </div>
    </div>
  );
}

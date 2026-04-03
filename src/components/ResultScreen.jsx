import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink, RotateCcw, BookOpen, Briefcase, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import './ResultScreen.css';

export default function ResultScreen({ resultCourse, nucleoInfo, onReset }) {
  if (!resultCourse) return null;

  const isNest = resultCourse.nucleo === 'nest';
  const accentColor = isNest ? 'var(--nest-color)' : 'var(--netda-color)';
  const lightColor = isNest ? 'var(--nest-color-light)' : 'var(--netda-color-light)';

  // Trigger confetti on mount
  useEffect(() => {
    const defaults = { startVelocity: 25, spread: 90, ticks: 100, zIndex: 0 };

    // Small elegant pop from the left
    confetti({
      ...defaults,
      particleCount: 30,
      angle: 60,
      origin: { x: 0.1, y: 0.7 },
      colors: [accentColor, '#ffffff']
    });

    // Small elegant pop from the right
    confetti({
      ...defaults,
      particleCount: 30,
      angle: 120,
      origin: { x: 0.9, y: 0.7 },
      colors: [accentColor, '#ffffff']
    });
  }, [accentColor]);



  return (
    <div className="result-screen fade-in" style={{ '--dynamic-color': accentColor, '--dynamic-light': lightColor }}>


      <div className="result-header">
        <h2 className="result-subtitle">A tua Licenciatura Ideal é:</h2>
        <h1 className="result-title" style={{ color: accentColor }}>
          {resultCourse.title}
        </h1>
        {resultCourse.description && (
          <p className="result-description">
            {resultCourse.description}
          </p>
        )}
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

      <div className={`nucleo-banner ${isNest ? 'banner-nest' : 'banner-netda'}`}>
        <div className="nucleo-content">
          <span className="nucleo-badge">Apoio Estudantil</span>
          <h2 className="nucleo-name">{nucleoInfo.name}</h2>
          <p className="nucleo-fullname">{nucleoInfo.fullName}</p>
          
          {nucleoInfo.flavorText && (
            <p className="nucleo-flavor-text">{nucleoInfo.flavorText}</p>
          )}

          <div className="nucleo-social-links">
            {nucleoInfo.instagram && (
              <a href={nucleoInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Globe size={18} /> Instagram
              </a>
            )}
            {nucleoInfo.linktree && (
              <a href={nucleoInfo.linktree} target="_blank" rel="noopener noreferrer" className="social-btn">
                <ExternalLink size={18} /> Linktree
              </a>
            )}
          </div>
        </div>
        <div className="nucleo-pattern"></div>
        {nucleoInfo.logoFile && (
          <div className="nucleo-logo-container">
            <img src={`${import.meta.env.BASE_URL}${nucleoInfo.logoFile}`} alt={`Logo ${nucleoInfo.name}`} className="result-nucleo-logo" onError={(e) => e.target.style.display='none'} />
          </div>
        )}
      </div>

      <div className="action-buttons">

        <a 
          href={resultCourse.link || "https://www.iscte-iul.pt/"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn action-btn-primary"
          style={{ backgroundColor: '#FBB702', color: '#ffffff', border: 'none' }}
        >
          Saber mais no site <ExternalLink size={18} />
        </a>
        
        <button onClick={onReset} className="btn btn-outline" style={{ borderColor: accentColor, color: accentColor }}>
          Refazer Quiz <RotateCcw size={18} />
        </button>
      </div>
    </div>
  );
}

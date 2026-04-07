import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './WelcomeScreen.css';

export default function WelcomeScreen({ onStart, t, lang }) {
  return (
    <div className="welcome-screen fade-in">
        {/* Animated Background Orbs */}
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>

        <div className="content-card glass-panel">
          <div className="tech-badge">
            <Sparkles size={14} className="sparkle-icon" />
            Iscte-IUL • Sintra
          </div>
          <h1 className="title">
            {lang === 'pt' ? (
              <>Descobre a Tua <br/><span className="highlight">Licenciatura Ideal</span></>
            ) : (
              <>Discover Your <br/><span className="highlight">Ideal Degree</span></>
            )}
          </h1>
          <p className="description">
            {t.welcomeSubtitle}
          </p>
          <button className="btn btn-primary start-btn" onClick={onStart}>
            {t.start} <ArrowRight size={20} className="arrow-icon" />
          </button>
        </div>
      </div>
  );
}

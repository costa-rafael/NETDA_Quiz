import React from 'react';
import { ArrowRight } from 'lucide-react';
import './WelcomeScreen.css';

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen fade-in">
        <div className="content-card">
          <div className="tech-badge">Iscte-IUL • Escola de Tecnologias Digitais Aplicadas</div>
          <h1 className="title">
            Descobre a Tua <span className="highlight">Licenciatura Ideal</span>
          </h1>
          <p className="description">
            Responde a 10 perguntas rápidas sobre os teus interesses e fica a saber qual o curso que melhor se adapta a ti.
          </p>
          <button className="btn btn-primary start-btn" onClick={onStart}>
            Começar Quiz <ArrowRight size={20} />
          </button>
        </div>
      </div>
  );
}

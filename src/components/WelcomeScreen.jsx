import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './WelcomeScreen.css';

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen fade-in">
      <div className="bg-pattern"></div>
      <div className="content-card">
        <div className="icon-wrapper">
          <Sparkles className="icon-sparkle" size={32} />
        </div>
        <h1 className="title">
          Descobre a Tua <span className="highlight">Licenciatura Ideal</span>
        </h1>
        <p className="subtitle">
          Iscte-IUL Escola de Tecnologias Digitais Aplicadas (Sintra)
        </p>
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

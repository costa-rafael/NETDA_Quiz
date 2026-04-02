import React from 'react';
import { ArrowRight } from 'lucide-react';
import './WelcomeScreen.css';

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen fade-in">
      <div className="bg-pattern"></div>
      <div className="content-card">
        <div className="logos-wrapper">
          <img src={`${import.meta.env.BASE_URL}iscte-sintra.png`} alt="Logo Iscte Sintra" className="logo-iscte" />
          <img src={`${import.meta.env.BASE_URL}netda-logo.png`} alt="Logo NETDA" className="logo-netda" />
        </div>
        <h1 className="title">
          Descobre a Tua <br className="mobile-break" /><span className="highlight">Licenciatura Ideal</span>
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

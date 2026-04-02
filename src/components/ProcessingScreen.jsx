import React, { useEffect } from 'react';
import './ProcessingScreen.css';

export default function ProcessingScreen({ onFinished }) {
  useEffect(() => {
    // Simulate calculation time
    const timer = setTimeout(() => {
      onFinished();
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className="processing-screen fade-in">
      <div className="loader-container">
        <div className="cyber-radar">
          <div className="radar-circle"></div>
          <div className="radar-circle-2"></div>
        </div>
        <h2 className="loading-text">A calcular o teu futuro digital...</h2>
        <p className="loading-subtext">A cruzar os teus interesses com os nossos cursos...</p>
      </div>
    </div>
  );
}

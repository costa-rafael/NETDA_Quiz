import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ProcessingScreen from './components/ProcessingScreen';
import ResultScreen from './components/ResultScreen';
import CircuitBackground from './components/CircuitBackground';
import { cursos, questions, nucleos } from './data';
import { uiTranslations } from './translations';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [finalScores, setFinalScores] = useState(null);
  const [winningCourse, setWinningCourse] = useState(null);
  const [lang, setLang] = useState('pt');

  const t = uiTranslations[lang];

  const startQuiz = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (scores) => {
    setFinalScores(scores);
    setCurrentScreen('processing');
  };

  const handleProcessingComplete = () => {
    if (!finalScores) return;

    let maxScore = -1;
    let winnerId = null;

    Object.entries(finalScores).forEach(([courseId, score]) => {
      if (score > maxScore) {
        maxScore = score;
        winnerId = courseId;
      }
    });

    const winner = cursos.find(c => c.id === winnerId) || cursos[0];
    
    setWinningCourse(winner);
    setCurrentScreen('result');
  };

  const resetQuiz = () => {
    setFinalScores(null);
    setWinningCourse(null);
    setCurrentScreen('welcome');
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="app-container">
      <CircuitBackground />
      
      <div className="lang-toggle-container">
        <button onClick={toggleLanguage} className="lang-toggle">
          <span className={lang === 'pt' ? 'lang-active' : ''}>PT</span>
          <span className="lang-sep">/</span>
          <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
        </button>
      </div>

      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={startQuiz} lang={lang} t={t} />
      )}
      
      {currentScreen === 'quiz' && (
        <QuizScreen 
          questions={questions} 
          onComplete={handleQuizComplete} 
          lang={lang}
          t={t}
        />
      )}
      
      {currentScreen === 'processing' && (
        <ProcessingScreen onFinished={handleProcessingComplete} lang={lang} t={t} />
      )}
      
      {currentScreen === 'result' && winningCourse && (
        <ResultScreen 
          resultCourse={winningCourse} 
          nucleoInfo={nucleos[winningCourse.nucleo]}
          onReset={resetQuiz} 
          lang={lang}
          t={t}
        />
      )}
    </div>
  );
}

export default App;

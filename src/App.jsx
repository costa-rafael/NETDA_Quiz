import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ProcessingScreen from './components/ProcessingScreen';
import ResultScreen from './components/ResultScreen';
import { cursos, questions, nucleos } from './data';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [finalScores, setFinalScores] = useState(null);
  const [winningCourse, setWinningCourse] = useState(null);

  const startQuiz = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (scores) => {
    setFinalScores(scores);
    setCurrentScreen('processing');
  };

  const handleProcessingComplete = () => {
    // Calculate winner
    if (!finalScores) return;

    let maxScore = -1;
    let winnerId = null;

    Object.entries(finalScores).forEach(([courseId, score]) => {
      if (score > maxScore) {
        maxScore = score;
        winnerId = courseId;
      }
    });

    // Default to the first one just in case
    const winner = cursos.find(c => c.id === winnerId) || cursos[0];
    
    setWinningCourse(winner);
    setCurrentScreen('result');
  };

  const resetQuiz = () => {
    setFinalScores(null);
    setWinningCourse(null);
    setCurrentScreen('welcome');
  };

  return (
    <div className="app-container">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={startQuiz} />
      )}
      
      {currentScreen === 'quiz' && (
        <QuizScreen 
          questions={questions} 
          onComplete={handleQuizComplete} 
        />
      )}
      
      {currentScreen === 'processing' && (
        <ProcessingScreen onFinished={handleProcessingComplete} />
      )}
      
      {currentScreen === 'result' && winningCourse && (
        <ResultScreen 
          resultCourse={winningCourse} 
          nucleoInfo={nucleos[winningCourse.nucleo]}
          onReset={resetQuiz} 
        />
      )}
    </div>
  );
}

export default App;

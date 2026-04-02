import React, { useState } from 'react';
import './QuizScreen.css';

export default function QuizScreen({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [scores, setScores] = useState({});

  const currentQuestion = questions[currentIndex];
  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;

  const handleOptionSelect = (pointsArray) => {
    if (animating) return;
    setAnimating(true);

    // Update scores
    const newScores = { ...scores };
    pointsArray.forEach(courseId => {
      newScores[courseId] = (newScores[courseId] || 0) + 1;
    });
    setScores(newScores);

    // Proceed to next question or complete
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setAnimating(false);
      } else {
        onComplete(newScores);
      }
    }, 400); // Wait for transition
  };

  return (
    <div className={`quiz-screen fade-in ${animating ? 'fade-out' : ''}`}>
      <div className="progress-container">
        <div className="progress-text">
          <span>Pergunta {currentIndex + 1} de {questions.length}</span>
        </div>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-text">{currentQuestion.text}</h2>
        
        <div className="options-grid">
          {currentQuestion.options.map((option, index) => (
            <button 
              key={index} 
              className="option-card"
              onClick={() => handleOptionSelect(option.points)}
              disabled={animating}
            >
              <div className="option-marker">{String.fromCharCode(65 + index)}</div>
              <span className="option-text">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

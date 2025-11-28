import React, { useState, useEffect } from 'react';
import { ALL_QUESTIONS } from './constants';
import { Question, QuizState, UserAnswers } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

const QUESTIONS_PER_ATTEMPT = 10;

export default function App() {
  const [gameState, setGameState] = useState<QuizState>('welcome');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});

  // Helper to shuffle array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startQuiz = () => {
    // Select random questions
    const shuffled = shuffleArray(ALL_QUESTIONS);
    const selected = shuffled.slice(0, QUESTIONS_PER_ATTEMPT);
    
    setActiveQuestions(selected);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setGameState('playing');
  };

  const handleSelectAnswer = (answerKey: string) => {
    const currentQ = activeQuestions[currentQuestionIndex];
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: answerKey
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFinish = () => {
    setGameState('results');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto">
        {gameState === 'welcome' && (
          <div className="animate-fadeIn">
            <WelcomeScreen onStart={startQuiz} />
          </div>
        )}

        {gameState === 'playing' && activeQuestions.length > 0 && (
          <div className="animate-slideUp">
            <QuizScreen
              question={activeQuestions[currentQuestionIndex]}
              currentIndex={currentQuestionIndex}
              totalQuestions={activeQuestions.length}
              selectedAnswer={userAnswers[activeQuestions[currentQuestionIndex].id]}
              onSelectAnswer={handleSelectAnswer}
              onNext={handleNext}
              onPrev={handlePrev}
              onFinish={handleFinish}
            />
          </div>
        )}

        {gameState === 'results' && (
          <div className="animate-fadeIn">
            <ResultScreen 
              questions={activeQuestions}
              userAnswers={userAnswers}
              onRetry={startQuiz}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

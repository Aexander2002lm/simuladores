import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Question } from '../types';

interface QuizScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer?: string;
  onSelectAnswer: (answerKey: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onFinish: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  onPrev,
  onFinish
}) => {
  const isLastQuestion = currentIndex === totalQuestions - 1;

  // Calculate progress percentage
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="max-w-3xl mx-auto w-full">
      {/* Progress Bar */}
      <div className="mb-6 bg-gray-200 rounded-full h-2.5 w-full">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Pregunta {currentIndex + 1} de {totalQuestions}
        </span>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-tight">
          {question.text}
        </h2>

        <div className="space-y-4">
          {question.options.map((option) => (
            <button
              key={option.key}
              onClick={() => onSelectAnswer(option.key)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 group
                ${selectedAnswer === option.key 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                }`}
            >
              <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5
                ${selectedAnswer === option.key ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300 group-hover:border-blue-400'}`}>
                {selectedAnswer === option.key && <CheckCircle2 size={14} />}
              </div>
              <span className={`text-lg ${selectedAnswer === option.key ? 'text-blue-900 font-medium' : 'text-gray-700'}`}>
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className={`flex items-center px-6 py-3 rounded-xl font-medium transition-colors
            ${currentIndex === 0 
              ? 'text-gray-400 cursor-not-allowed bg-gray-100' 
              : 'text-gray-700 bg-white hover:bg-gray-50 shadow-sm'
            }`}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Anterior
        </button>

        {isLastQuestion ? (
          <button
            onClick={onFinish}
            className="flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-lg shadow-green-200 transition-transform transform hover:scale-105"
          >
            Finalizar Intento
            <CheckCircle2 className="w-5 h-5 ml-2" />
          </button>
        ) : (
          <button
            onClick={onNext}
            className="flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-200 transition-transform transform hover:scale-105"
          >
            Siguiente
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;

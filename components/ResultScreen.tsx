import React, { useState } from 'react';
import { Question, UserAnswers } from '../types';
import { CheckCircle, XCircle, RotateCcw, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

interface ResultScreenProps {
  questions: Question[];
  userAnswers: UserAnswers;
  onRetry: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ questions, userAnswers, onRetry }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  let correctCount = 0;
  questions.forEach(q => {
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const score = (correctCount / questions.length) * 100;
  
  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full pb-10">
      {/* Score Summary */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Resumen de Resultados</h2>
        <div className="text-gray-500 mb-6">Has completado el intento</div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                className="text-gray-200"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={440}
                strokeDashoffset={440 - (440 * score) / 100}
                className={`${score >= 60 ? 'text-green-500' : 'text-orange-500'} transition-all duration-1000 ease-out`}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className={`text-4xl font-bold ${score >= 60 ? 'text-green-600' : 'text-orange-500'}`}>
                {score.toFixed(0)}%
              </span>
            </div>
          </div>
          
          <div className="text-left space-y-3">
             <div className="flex items-center gap-2 text-green-700 bg-green-50 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">{correctCount} Correctas</span>
             </div>
             <div className="flex items-center gap-2 text-red-700 bg-red-50 px-4 py-2 rounded-lg">
                <XCircle className="w-5 h-5" />
                <span className="font-semibold">{questions.length - correctCount} Incorrectas</span>
             </div>
          </div>
        </div>

        <button
          onClick={onRetry}
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-200"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Intentar de nuevo
        </button>
      </div>

      {/* Detailed Review */}
      <h3 className="text-xl font-bold text-gray-800 mb-4 px-2">Revisión Detallada</h3>
      <div className="space-y-4">
        {questions.map((q, index) => {
          const isCorrect = userAnswers[q.id] === q.correctAnswer;
          const isExpanded = expandedId === q.id;
          const userAnswerText = q.options.find(o => o.key === userAnswers[q.id])?.text || "No respondida";
          const correctAnswerText = q.options.find(o => o.key === q.correctAnswer)?.text;

          return (
            <div 
              key={q.id} 
              className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-300
                ${isExpanded ? 'ring-2 ring-blue-100' : 'hover:shadow-md'}
                ${isCorrect ? 'border-green-200' : 'border-red-200'}
              `}
            >
              <button 
                onClick={() => toggleExpand(q.id)}
                className="w-full text-left p-4 flex items-start gap-4"
              >
                <div className={`flex-shrink-0 mt-1 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                  {isCorrect ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-medium text-gray-400 mb-1">Pregunta {index + 1}</span>
                  </div>
                  <h4 className="text-gray-800 font-medium pr-8">{q.text}</h4>
                  
                  {!isExpanded && (
                     <div className="mt-2 text-sm">
                        <span className="text-gray-500">Tu respuesta: </span>
                        <span className={`font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                           {userAnswerText}
                        </span>
                     </div>
                  )}
                </div>

                <div className="flex-shrink-0 mt-1 text-gray-400">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 md:px-14 md:pb-6 space-y-4 animate-fadeIn">
                   {/* Answer Comparison */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-2">
                      <div className={`p-3 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                         <p className="text-gray-500 text-xs uppercase tracking-wide font-bold mb-1">Tu Respuesta</p>
                         <p className={`${isCorrect ? 'text-green-800' : 'text-red-800'} font-medium`}>{userAnswerText}</p>
                      </div>
                      
                      {!isCorrect && (
                        <div className="p-3 rounded-lg border bg-green-50 border-green-100">
                           <p className="text-gray-500 text-xs uppercase tracking-wide font-bold mb-1">Respuesta Correcta</p>
                           <p className="text-green-800 font-medium">{correctAnswerText}</p>
                        </div>
                      )}
                   </div>

                   {/* Feedback */}
                   <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                         <p className="text-blue-900 font-semibold text-sm mb-1">Retroalimentación:</p>
                         <p className="text-blue-800 text-sm">{q.feedback}</p>
                      </div>
                   </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultScreen;

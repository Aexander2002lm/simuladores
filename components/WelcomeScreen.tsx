import React from 'react';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-blue-100 p-4 rounded-full">
          <BookOpen className="w-16 h-16 text-blue-600" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Simulador de Metodología
      </h1>
      
      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        Pon a prueba tus conocimientos sobre metodología de investigación. 
        Este simulador te presentará <strong>10 preguntas</strong> aleatorias seleccionadas 
        de nuestro banco de preguntas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div className="flex items-center mb-2">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span className="font-semibold text-gray-700">10 Preguntas</span>
          </div>
          <p className="text-sm text-gray-500">Cada intento consta de 10 preguntas seleccionadas al azar.</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 text-blue-500 mr-2" />
            <span className="font-semibold text-gray-700">Sin Límite</span>
          </div>
          <p className="text-sm text-gray-500">Tómate tu tiempo para analizar cada pregunta con calma.</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div className="flex items-center mb-2">
            <BookOpen className="w-5 h-5 text-purple-500 mr-2" />
            <span className="font-semibold text-gray-700">Revisión</span>
          </div>
          <p className="text-sm text-gray-500">Obtén retroalimentación detallada al finalizar tu intento.</p>
        </div>
      </div>

      <button
        onClick={onStart}
        className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-200"
      >
        Comenzar Intento
      </button>
    </div>
  );
};

export default WelcomeScreen;

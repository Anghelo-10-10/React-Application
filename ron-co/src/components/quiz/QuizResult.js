// components/quiz/QuizResult.jsx
import React from 'react';
import { HOUSE_COLORS } from '../../utils/constants';

const QuizResult = ({ result, onReset }) => {
  const houseColors = HOUSE_COLORS[result.house];

  return (
    <div className="text-center space-y-6">
      <h2 
        className="text-2xl font-bold" 
        style={{ color: houseColors.primary }}
      >
        ¡Perteneces a {result.house}!
      </h2>
      <p className="text-gray-300">{result.description}</p>
      <div className="space-y-4">
        <h3 className="text-white font-semibold">Tus rasgos dominantes:</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {result.traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 rounded-full text-sm"
              style={{ 
                backgroundColor: houseColors.primary,
                color: 'white'
              }}
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={onReset}
        className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-md"
      >
        Realizar el quiz nuevamente
      </button>
    </div>
  );
};

export default QuizResult;
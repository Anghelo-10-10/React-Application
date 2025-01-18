// components/quiz/QuizQuestion.jsx
import React from 'react';

const QuizQuestion = ({ question, onAnswer, progress }) => {
  return (
    <div className="space-y-6">
      <div className="relative w-full h-2 bg-slate-700 rounded">
        <div
          className="absolute h-full bg-yellow-600 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
      <h2 className="text-xl text-white font-bold">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.house}
            onClick={() => onAnswer(option.house)}
            className="w-full text-left bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-md transition-colors"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
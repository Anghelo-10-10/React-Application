// components/quiz/HouseQuiz.jsx
import React from 'react';
import { useQuiz } from '../../hooks/useQuiz';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

const HouseQuiz = () => {
  const {
    isQuizActive,
    currentQuestion,
    questionData,
    result,
    handleAnswer,
    resetQuiz,
    progress
  } = useQuiz();

  if (!isQuizActive && !result) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-lg max-w-lg w-full p-6">
        {isQuizActive ? (
          <QuizQuestion
            question={questionData}
            onAnswer={handleAnswer}
            progress={progress}
          />
        ) : (
          <QuizResult result={result} onReset={resetQuiz} />
        )}
      </div>
    </div>
  );
};

export default HouseQuiz;
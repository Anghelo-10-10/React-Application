// hooks/useQuiz.js
import { useState, useCallback } from 'react';
import { QUIZ_QUESTIONS, HOUSES } from '../utils/constants';

/**
 * Hook personalizado para manejar la lógica del quiz de casas
 * @returns {Object} Objeto con el estado y funciones del quiz
 */
export const useQuiz = () => {
  // Estados del quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [isQuizActive, setIsQuizActive] = useState(false);

  // Iniciar el quiz
  const startQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setIsQuizActive(true);
  }, []);

  // Procesar respuesta
  const handleAnswer = useCallback((answer) => {
    setAnswers(prev => [...prev, answer]);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calcular resultado final
      calculateResult();
    }
  }, [currentQuestion]);

  // Calcular la casa resultante
  const calculateResult = useCallback(() => {
    const housePoints = answers.reduce((acc, house) => {
      acc[house] = (acc[house] || 0) + 1;
      return acc;
    }, {});

    // Encontrar la casa con más puntos
    const winningHouse = Object.entries(housePoints).reduce((a, b) => 
      (a[1] > b[1] ? a : b)
    )[0];

    // Calcular características dominantes
    const traits = determineTraits(answers);

    setResult({
      house: winningHouse,
      traits,
      answersDistribution: housePoints
    });
    setIsQuizActive(false);
  }, [answers]);

  // Determinar rasgos característicos basados en las respuestas
  const determineTraits = useCallback((userAnswers) => {
    const traits = {
      courage: 0,    // Gryffindor
      ambition: 0,   // Slytherin
      loyalty: 0,    // Hufflepuff
      wisdom: 0      // Ravenclaw
    };

    userAnswers.forEach(house => {
      switch (house) {
        case HOUSES.GRYFFINDOR:
          traits.courage++;
          break;
        case HOUSES.SLYTHERIN:
          traits.ambition++;
          break;
        case HOUSES.HUFFLEPUFF:
          traits.loyalty++;
          break;
        case HOUSES.RAVENCLAW:
          traits.wisdom++;
          break;
        default:
          break;
      }
    });

    return traits;
  }, []);

  // Reiniciar el quiz
  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setIsQuizActive(false);
  }, []);

  return {
    currentQuestion,
    questionData: QUIZ_QUESTIONS[currentQuestion],
    totalQuestions: QUIZ_QUESTIONS.length,
    isQuizActive,
    result,
    startQuiz,
    handleAnswer,
    resetQuiz,
    progress: ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100
  };
};
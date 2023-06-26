import { useContext } from 'react';

import { QuizType } from '@/types/quiz';
import { QuizDispatchContext, QuizStateContext } from '@/utils/QuizContext';

export const useQuizState = () => {
  const quizState = useContext(QuizStateContext);
  if (!quizState) throw new Error('quiz 상태를 가져올 수 없습니다');
  return quizState;
};

export const useQuizDispatch = () => {
  const dispatch = useContext(QuizDispatchContext);
  const { quizData } = useContext(QuizStateContext);

  if (!dispatch) throw new Error('quiz 상태를 업데이트 할 수 없습니다');

  const addScore = (result: 'correct' | 'incorrect') => {
    dispatch({
      type: result === 'correct' ? 'addScoreCorrect' : 'addScoreIncorrect',
      count: 0,
      quizData,
    });
  };

  const setTimer = (timer: number) => {
    dispatch({ type: 'setTimer', count: timer, quizData });
  };

  const fetchQuizData = (quizData: QuizType[]) => {
    dispatch({ type: 'updateQuizData', count: 0, quizData });
  };

  const resetScore = () => {
    dispatch({
      type: 'scoreInit',
      count: 0,
      quizData: [],
    });
  };

  return { addScore, setTimer, fetchQuizData, resetScore };
};

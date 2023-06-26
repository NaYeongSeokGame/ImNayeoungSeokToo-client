import { useContext } from 'react';

import { QuizDispatchContext, QuizStateContext } from '@/utils/QuizContext';

export const useQuizState = () => {
  const quizState = useContext(QuizStateContext);
  if (!quizState) throw new Error('quiz 상태를 가져올 수 없습니다');
  return quizState;
};

export const useQuizDispatch = () => {
  const dispatch = useContext(QuizDispatchContext);
  if (!dispatch) throw new Error('quiz 상태를 업데이트 할 수 없습니다');

  const addScore = (result: 'correct' | 'incorrect') => {
    dispatch({
      type: result === 'correct' ? 'addScoreCorrect' : 'addScoreIncorrect',
      count: 0,
    });
  };

  const setTimer = (timer: number) => {
    dispatch({ type: 'setTimer', count: timer });
  };

  return { addScore, setTimer };
};

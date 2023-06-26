import { Dispatch, createContext, useReducer } from 'react';

import { QuizType } from '@/types/quiz';

type QuizStateType = {
  timer: number;
  scoreCorrect: number;
  scoreIncorrect: number;
  quizData: QuizType[];
};

type QuizAction = {
  quizData: QuizType[];
  type:
    | 'setTimer'
    | 'addScoreCorrect'
    | 'addScoreIncorrect'
    | 'scoreInit'
    | 'updateQuizData';
  count: number;
};

const initQuizState = {
  timer: 3,
  scoreCorrect: 0,
  scoreIncorrect: 0,
  quizData: [],
};

export const QuizStateContext = createContext<QuizStateType>(initQuizState);

export const QuizDispatchContext = createContext<Dispatch<QuizAction> | null>(
  null,
);

const reducer = (state: QuizStateType, action: QuizAction): QuizStateType => {
  switch (action.type) {
    case 'setTimer':
      return { ...state, timer: action.count };
    case 'scoreInit':
      return { ...state, scoreCorrect: 0, scoreIncorrect: 0 };
    case 'addScoreCorrect':
      return { ...state, scoreCorrect: state.scoreCorrect + 1 };
    case 'addScoreIncorrect':
      return { ...state, scoreIncorrect: state.scoreIncorrect + 1 };
    case 'updateQuizData':
      return { ...state, quizData: action.quizData };
  }
};

export const QuizStateProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [state, dispatch] = useReducer(reducer, initQuizState);

  return (
    <QuizDispatchContext.Provider value={dispatch}>
      <QuizStateContext.Provider value={state}>
        {children}
      </QuizStateContext.Provider>
    </QuizDispatchContext.Provider>
  );
};

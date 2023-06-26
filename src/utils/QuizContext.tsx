import { Dispatch, createContext, useReducer } from 'react';

const initQuizState = {
  timer: 3,
  scoreCorrect: 0,
  scoreIncorrect: 0,
};

type QuizStateType = typeof initQuizState;

type QuizAction = {
  type: 'setTimer' | 'addScoreCorrect' | 'addScoreIncorrect' | 'scoreInit';
  count: number;
};

export const QuizStateContext = createContext(initQuizState);

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

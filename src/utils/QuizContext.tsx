import { createContext, useState } from 'react';

export const QuizStateContext = createContext({
  timer: 0,
});

export const QuizSetStateContext = createContext<{
  setTimer: React.Dispatch<React.SetStateAction<number>> | null;
}>({ setTimer: null });

export const QuizStateProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [timer, setTimer] = useState(3);

  return (
    <QuizSetStateContext.Provider value={{ setTimer }}>
      <QuizStateContext.Provider value={{ timer }}>
        {children}
      </QuizStateContext.Provider>
    </QuizSetStateContext.Provider>
  );
};

import React, { useEffect, useState } from 'react';

import QuizImg from '@/components/quiz/QuizImg.tsx';
import { Quiz } from '@/types/Quiz.ts';

const QuizContent = ({
  quizList,
  isTimeout,
  isNext,
  isShowAnswer,
  setGameEnd,
}: QuizProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const isLastIdx = currentIdx > quizList.length - 1;

  useEffect(() => {
    if (isLastIdx && isTimeout) {
      setGameEnd(true);
      return;
    }
    if (!isNext) return;
    setCurrentIdx(currentIdx + 1);
  }, [currentIdx, isLastIdx, isNext, isTimeout, setGameEnd]);

  return (
    <>
      {isTimeout || isShowAnswer ? (
        <span>{quizList[currentIdx].answer}</span>
      ) : (
        <QuizImg imageUrl={quizList[currentIdx].imageUrl} />
      )}
    </>
  );
};

export default QuizContent;

type QuizProps = {
  quizList: Quiz[];
  isNext: boolean;
  isTimeout: boolean;
  isShowAnswer: boolean;
  setGameEnd: (isEnd: boolean) => void;
};

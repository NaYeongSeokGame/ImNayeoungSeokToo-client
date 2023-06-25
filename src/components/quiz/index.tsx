import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
    <QuizContentWrapper>
      {isTimeout || isShowAnswer ? (
        <QuizText>{quizList[currentIdx].answer}</QuizText>
      ) : (
        <QuizImg url={quizList[currentIdx].imageUrl} />
      )}
    </QuizContentWrapper>
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

const QuizContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.75rem;
  height: 23rem;
  border-radius: 20px;
  border: 5px;
  border: 5px solid #000000;
  box-shadow: 1px 4px 2px 0px #0000001a;
`;

const QuizText = styled.div`
  color: #000;
  font-size: 5rem;
  font-family: Pretendard;
  font-weight: 700;
`;

const QuizImg = styled.div<{ url: string }>`
  width: 100%;
  margin: 0.875rem 0.625rem;
  background: ${(props) => `url(${props.url}) center/contain no-repeat`};
  border-radius: 20px;
`;

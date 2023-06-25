import { useState } from 'react';
import styled from 'styled-components';

import QuizAnswer from './QuizAnswer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const QuizImg = styled.div`
  border: 3px solid black;
  width: 300px;
  height: 360px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  width: 300px;
`;
const Button = styled.button`
  height: 70px;
  width: 70px;
  background-color: white;
  border: 3px solid black;
  border-radius: 8px;
`;

const QuizAnswerButton = () => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [isAnswerButtonClicked, setIsAnswerButtonClicked] =
    useState<boolean>(false);
  const [isMomentAnswerButtonClicked, setIsMomentAnswerButtonClicked] =
    useState<boolean>(false);

  const preset: Preset = {
    presetPin: 232323,
    isPrivate: false,
    title: '테스트 프리셋',
    quizList: [
      {
        imageUrl: '',
        answer: '안유진',
      },
      {
        imageUrl: '',
        answer: '이은지',
      },
      {
        imageUrl: '',
        answer: '미미',
      },
      {
        imageUrl: '',
        answer: '이영지',
      },
    ],
  };

  const handleAnswerButtonClick = (): void => {
    setIsAnswerButtonClicked(true);
  };

  const handleMomentAnswerButtonClick = (): void => {
    setIsMomentAnswerButtonClicked(true);
  };

  if (isAnswerButtonClicked || isMomentAnswerButtonClicked) {
    return (
      <QuizAnswer
        index={index}
        setIndex={setIndex}
        setIsAnswerButtonClicked={setIsAnswerButtonClicked}
        score={score}
        setScore={setScore}
        preset={preset}
        isMomentAnswerButtonClicked={isMomentAnswerButtonClicked}
        setIsMomentAnswerButtonClicked={setIsMomentAnswerButtonClicked}
      />
    );
  }

  return (
    <Container>
      <h1>문제 {index + 1}</h1>
      <QuizImg>image {index + 1}</QuizImg>
      <ButtonContainer>
        <Button onClick={handleMomentAnswerButtonClick}>잠깐 보기</Button>
        <Button>일시 정지</Button>
        <Button onClick={handleAnswerButtonClick}>정답 공개</Button>
      </ButtonContainer>
      <div>{score}</div>
    </Container>
  );
};

export default QuizAnswerButton;

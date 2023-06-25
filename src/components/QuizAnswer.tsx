import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const AnswerText = styled.div`
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
const QuizAnswer = ({
  index,
  setIndex,
  setIsAnswerButtonClicked,
  score,
  setScore,
  preset,
  isMomentAnswerButtonClicked,
  setIsMomentAnswerButtonClicked,
}: QuizAnswerProps) => {
  const currentQuiz = preset.quizList[index];

  const handleAnswer = (isCorrect: boolean): void => {
    setIndex((prevIndex) => prevIndex + 1);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setIsAnswerButtonClicked(false);
  };

  const handleGoBack = (): void => {
    setIsMomentAnswerButtonClicked(false);
  };

  return (
    <Container>
      <h1>문제 {index + 1}</h1>
      <AnswerText>{currentQuiz.answer}</AnswerText>
      <ButtonContainer>
        {isMomentAnswerButtonClicked ? (
          <Button>뒤로가기</Button>
        ) : (
          <>
            <Button onClick={() => handleAnswer(true)}>O</Button>
            <Button onClick={() => handleAnswer(false)}>X</Button>
          </>
        )}
      </ButtonContainer>
      <div>{score /*삭제 예정*/}</div>
    </Container>
  );
};
export default QuizAnswer;

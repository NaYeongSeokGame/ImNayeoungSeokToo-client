import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const AnswerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18.75rem;
  height: 23rem;
  flex-shrink: 0;
  border-radius: 20px;
  border: 5px solid #000;
  background: #fff;
  box-shadow: 1px 4px 2px 0px rgba(0, 0, 0, 0.1);

  color: #000;
  font-size: 5rem;
  font-family: Pretendard;
  font-weight: 700;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.25rem;
  margin-left: 4.375rem;
  margin-right: 4.375rem;
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;
  background-color: white;
  border: 5px solid #000;
  border-radius: 20px;
`;

const GoBackButton = styled.button`
  width: 13.75rem;
  height: 4rem;
  flex-shrink: 0;
  color: #7443ff;
  background-color: white;
  border: 5px solid black;
  border-radius: 20px;
  font-weight: 700;
  font-size: 1.125rem;
  margin-top: 1.25rem;
`;
const QuizAnswer = ({
  index,
  setIndex,
  setIsAnswerButtonClicked,
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
          <GoBackButton onClick={handleGoBack}>뒤로가기</GoBackButton>
        ) : (
          <>
            <Button onClick={() => handleAnswer(true)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="11"
                  stroke="#7443FF"
                  stroke-width="10"
                />
              </svg>
            </Button>
            <Button onClick={() => handleAnswer(false)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="23.2727"
                  width="12.3422"
                  height="32.9126"
                  transform="rotate(45 23.2727 0)"
                  fill="#FF0000"
                />
                <rect
                  x="7.62939e-06"
                  y="8.72726"
                  width="12.3422"
                  height="32.9126"
                  transform="rotate(-45 7.62939e-06 8.72726)"
                  fill="#FF0000"
                />
              </svg>
            </Button>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
};
export default QuizAnswer;

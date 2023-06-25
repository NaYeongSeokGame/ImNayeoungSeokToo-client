import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ScoreContainer = styled.div`
  border: 3px solid black;
  width: 300px;
  height: 360px;
  border-radius: 8px;
  font-size: 50px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CorrectScore = styled.div`
  color: #7443ff;
`;

const Button = styled.button`
  height: 70px;
  width: 200px;
  color: #7443ff;
  background-color: white;
  border: 3px solid black;
  border-radius: 8px;
  font-weight: 700;
  font-size: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 300px;
`;
const QuizResult = ({
  score,
  totalQuiz,
  handleHomeButtonClick,
}: QuizListResultProps) => (
  <Container>
    <ScoreContainer>
      <CorrectScore>{score}</CorrectScore>/{totalQuiz}
    </ScoreContainer>
    <ButtonContainer>
      <Button onClick={handleHomeButtonClick}>돌아가기</Button>
    </ButtonContainer>
  </Container>
);

export default QuizResult;

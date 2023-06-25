import styled from 'styled-components';

interface QuizListResultProps {
  score: number;
  totalQuiz: number;
  handleHomeButtonClick: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ScoreContainer = styled.div`
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
  font-size: 5rem;
  font-weight: 700;
`;

const CorrectScore = styled.div`
  color: #7443ff;
`;

const Button = styled.button`
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
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  </Container>
);

export default QuizResult;

import { useNavigate } from 'react-router-dom';

import { useQuizDispatch } from '@/hooks/useQuizContext';
import { useQuizState } from '@/hooks/useQuizContext';

import * as styles from './QuizResult.style';

const QuizResult = () => {
  const { scoreCorrect, scoreIncorrect } = useQuizState();
  const { fetchQuizData, resetScore } = useQuizDispatch();
  const navigation = useNavigate();
  const totalScore = scoreCorrect + scoreIncorrect;

  const redirectToLobby = () => {
    navigation('/');
    fetchQuizData([]);
    resetScore();
  };
  return (
    <>
      <styles.Title />
      <styles.QuestionResult>
        <styles.Result>
          <styles.ResultCorrect>{scoreCorrect}</styles.ResultCorrect>/
          {totalScore}
        </styles.Result>
      </styles.QuestionResult>
      <styles.LobbyButton onClick={redirectToLobby}>홈으로</styles.LobbyButton>
    </>
  );
};

export default QuizResult;

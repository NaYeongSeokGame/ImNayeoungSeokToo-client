import { useAtomValue, useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { quizPlayStateAtom, terminateQuizGameAtom } from '@/stores/quiz';

import * as styles from './QuizResult.style';

const QuizResult = () => {
  const navigate = useNavigate();

  const { totalScore, quizList } = useAtomValue(quizPlayStateAtom);
  const terminateQuizGame = useSetAtom(terminateQuizGameAtom);

  const totalQuizAmount = quizList.length;

  const redirectToLobby = () => {
    terminateQuizGame();
    navigate('/', { replace: true });
  };
  return (
    <>
      <styles.Title />
      <styles.QuestionResult>
        <styles.Result>
          <styles.ResultCorrect>{totalScore}</styles.ResultCorrect>/
          {totalQuizAmount}
        </styles.Result>
      </styles.QuestionResult>
      <styles.LobbyButton onClick={redirectToLobby}>홈으로</styles.LobbyButton>
    </>
  );
};

export default QuizResult;

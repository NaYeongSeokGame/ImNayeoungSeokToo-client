import { useQuizState } from '@/hooks/useQuizContext';

import * as styles from './QuizResult.style';

const QuizResult = () => {
  const { scoreCorrect, scoreIncorrect } = useQuizState();
  const totalScore = scoreCorrect + scoreIncorrect;
  return (
    <>
      <styles.Title />
      <styles.QuestionResult>
        <styles.Result>
          <styles.ResultCorrect>{scoreCorrect}</styles.ResultCorrect>/
          {totalScore}
        </styles.Result>
      </styles.QuestionResult>
    </>
  );
};

export default QuizResult;

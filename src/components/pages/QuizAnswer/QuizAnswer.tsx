import { useAtom, useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as CorrectButtonSvg } from '@/assets/images/correctButton.svg';
import { ReactComponent as WrongButtonSvg } from '@/assets/images/wrongButton.svg';
import { controlCurrentScoreAtom, quizPlayStateAtom } from '@/stores/quiz';

import * as styles from './QuizAnswer.style';

const QuizAnswer = () => {
  const navigate = useNavigate();

  const { quizList, presetPin } = useAtomValue(quizPlayStateAtom);
  const [{ currentIndex, isTerminated }, updateCurrentScore] = useAtom(
    controlCurrentScoreAtom,
  );

  const nextRoundUrl = isTerminated
    ? `/quiz/${presetPin}/result`
    : `/quiz/${presetPin}`;

  const currentQuizAnswer = quizList[currentIndex].answer || '';

  const submitQuizResult = (isCorrect: boolean) => {
    updateCurrentScore({ isCorrect, quizIndex: currentIndex });
    navigate(nextRoundUrl, { replace: true });
  };

  return (
    <>
      <styles.Title />
      <styles.QuestionAnswer>
        <styles.Answer>{currentQuizAnswer}</styles.Answer>
      </styles.QuestionAnswer>
      <styles.ButtonSection>
        <CorrectButtonSvg onClick={() => submitQuizResult(true)} />
        <WrongButtonSvg onClick={() => submitQuizResult(false)} />
      </styles.ButtonSection>
    </>
  );
};

export default QuizAnswer;

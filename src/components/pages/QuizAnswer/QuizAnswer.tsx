import { useAtom, useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { controlCurrentScoreAtom, quizPlayStateAtom } from '@/stores/quiz';

import * as styles from './QuizAnswer.style';

const QuizAnswer = () => {
  const navigate = useNavigate();

  const { quizList } = useAtomValue(quizPlayStateAtom);
  const [{ currentIndex, isTerminated }, updateCurrentScore] = useAtom(
    controlCurrentScoreAtom,
  );

  const nextRoundUrl = isTerminated ? `/quiz/result` : `/quiz`;

  const currentQuizAnswer = quizList[currentIndex].answer || '';
  const currentQuizImageUrl = quizList[currentIndex].imageUrl || '';
  const submitQuizResult = (isCorrect: boolean) => {
    updateCurrentScore({ isCorrect, quizIndex: currentIndex });
    navigate(nextRoundUrl, { replace: true });
  };

  return (
    <>
      <styles.TitleBox>
        <styles.Title>
          <span>{currentIndex + 1}</span>
          <span>번째</span>
          {` 퀴즈`}
        </styles.Title>
        <styles.Subtitle>
          이번 문제의 <span>정답</span>은...
        </styles.Subtitle>
      </styles.TitleBox>
      <styles.AnswerSection>
        <styles.AnswerImage src={currentQuizImageUrl} />
        <styles.Answer>{currentQuizAnswer}</styles.Answer>
      </styles.AnswerSection>
      <styles.ButtonSection>
        정답을 맞추셨나요?
        <styles.ButtonBox>
          <styles.AnswerButton correct onClick={() => submitQuizResult(true)}>
            정답
          </styles.AnswerButton>
          <styles.AnswerButton onClick={() => submitQuizResult(false)}>
            오답
          </styles.AnswerButton>
        </styles.ButtonBox>
      </styles.ButtonSection>
    </>
  );
};

export default QuizAnswer;

import { useAtomValue } from 'jotai';
import { useAtom } from 'jotai/index';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as PauseButtonSvg } from '@/assets/images/pauseButton.svg';
import { ReactComponent as QuestionButtonSvg } from '@/assets/images/questionButton.svg';
import { ReactComponent as StopButtonSvg } from '@/assets/images/stopButton.svg';
import QuizHintModal from '@/components/main/QuizHintModal';
import useModal from '@/hooks/useModal';
import useTimer from '@/hooks/useTimer';
import { modalStateAtom } from '@/stores/modal';
import { quizPlayStateAtom } from '@/stores/quiz';

import * as styles from './QuizPlay.style';

const QuizPlay = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const [{ timeToSolveQuiz }] = useAtom(quizPlayStateAtom);
  const { leftSecond, isRunning, start, stop } = useTimer({
    initTimeLimit: timeToSolveQuiz,
    startImmediately: true,
  });

  const { isOpen } = useAtomValue(modalStateAtom);
  const { quizList, currentIndex } = useAtomValue(quizPlayStateAtom);

  // FIXME : 추후 업데이트 시 정답이 아닌 "힌트" 를 제공하도록 해야 함.
  const { imageUrl, answer: currentQuizAnswer = '' } = quizList[currentIndex];
  const quizAnswerUrl = `/quiz/answer`;

  // FIXME : 추후 업데이트 시 정답이 아닌 "힌트" 를 제공하도록 해야 함.
  const openHintModal = () =>
    openModal(<QuizHintModal answer={currentQuizAnswer} />);

  const redirectAnswerPage = () => navigate(quizAnswerUrl, { replace: true });

  const toggleTimer = () => (isRunning ? stop() : start());

  useEffect(() => {
    if (leftSecond <= 0 && isRunning) {
      redirectAnswerPage();
    }
  }, [leftSecond, isRunning]);

  useEffect(() => {
    isOpen ? stop() : start();
  }, [isOpen]);

  return (
    <>
      <styles.Title>
        <span>{currentIndex + 1}</span>
        <span>번째 </span>
        퀴즈
      </styles.Title>
      <styles.QuizGuide>
        시간 내에 <span>정답</span>을 말하세요!
        <styles.QuizTimerImageBox>
          <div>{Math.ceil(leftSecond)}</div>
        </styles.QuizTimerImageBox>
      </styles.QuizGuide>

      <styles.QuizTimerBar
        value={timeToSolveQuiz - leftSecond}
        max={timeToSolveQuiz}
      />
      <styles.QuestionImage imageUrl={imageUrl} />
      <styles.ButtonSection>
        <QuestionButtonSvg onClick={openHintModal} />
        <PauseButtonSvg onClick={toggleTimer} />
        <StopButtonSvg onClick={redirectAnswerPage} />
      </styles.ButtonSection>
    </>
  );
};

export default QuizPlay;

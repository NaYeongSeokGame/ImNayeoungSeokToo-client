import { useAtomValue } from 'jotai';
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
  const { leftSecond, isRunning, start, stop } = useTimer({
    initTimeLimit: 3,
    startImmediately: true,
  });

  const { isOpen } = useAtomValue(modalStateAtom);
  const { quizList, presetPin, currentIndex } = useAtomValue(quizPlayStateAtom);

  // FIXME : 추후 업데이트 시 정답이 아닌 "힌트" 를 제공하도록 해야 함.
  const { imageUrl, answer: currentQuizAnswer = '' } = quizList[currentIndex];
  const quizAnswerUrl = `/quiz/${presetPin}/answer`;

  // FIXME : 추후 업데이트 시 정답이 아닌 "힌트" 를 제공하도록 해야 함.
  const openHintModal = () =>
    openModal(<QuizHintModal answer={currentQuizAnswer} />);

  const redirectAnswerPage = () => 
    navigate(quizAnswerUrl, { replace: true });

  useEffect(() => {
    if (leftSecond <= 0 && isRunning) {
      redirectAnswerPage()
    }
  }, [leftSecond, isRunning]);

  useEffect(() => {
    isOpen ? stop() : start();
  }, [isOpen]);

  return (
    <>
      <styles.Title />
      <styles.QuestionImage imageUrl={imageUrl} />
      <styles.ButtonSection>
        <QuestionButtonSvg onClick={openHintModal} />
        <PauseButtonSvg onClick={stop} />
        <StopButtonSvg onClick={redirectAnswerPage} />
      </styles.ButtonSection>
      <styles.Countdown currentCount={leftSecond}>
        {leftSecond}
      </styles.Countdown>
    </>
  );
};

export default QuizPlay;

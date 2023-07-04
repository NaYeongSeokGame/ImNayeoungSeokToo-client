import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as PauseButtonSvg } from '@/assets/images/pauseButton.svg';
import { ReactComponent as QuestionButtonSvg } from '@/assets/images/questionButton.svg';
import { ReactComponent as StopButtonSvg } from '@/assets/images/stopButton.svg';
import QuizHintModal from '@/components/main/QuizHintModal';
import useModal from '@/hooks/useModal';
import { modalStateAtom } from '@/stores/modal';
import { controlCurrentScoreAtom, quizPlayStateAtom } from '@/stores/quiz';

import * as styles from './QuizPlay.style';

type GameType = 'playing' | 'paused' | 'stopped';

const QuizPlay = () => {
  const { openModal } = useModal();
  const navigation = useNavigate();

  const { isOpen } = useAtomValue(modalStateAtom);
  const { quizList, presetPin } = useAtomValue(quizPlayStateAtom) 
  const [{ currentIndex, isTerminated }, updateCurrentScore] =
    useAtom(controlCurrentScoreAtom);

  const quizAnswerUrl = `/quiz/${presetPin}/${currentIndex}/answer`;

  const [currentCount, setCurrentCount] = useState(3800);
  const [gameState, setGameState] = useState<GameType>('playing');

  const displayedCount = Math.floor(currentCount / 1000);

  // FIXME : 추후 업데이트 시 정답이 아닌 "힌트" 를 제공하도록 해야 함.
  const {imageUrl, answer: currentQuizAnswer = ''} = quizList[currentIndex];

  const openHintModal = () => {
    setGameState('paused');
    openModal(
      <QuizHintModal answer={currentQuizAnswer} />,
    );
  };

  const countTimer = () => {
    const countdown = setInterval(() => {
      setCurrentCount((prev) => prev - 100);
    }, 100);
    return countdown;
  };

  useEffect(() => {
    const countdown = countTimer();
    if (displayedCount <= 0 || gameState === 'stopped') {
      clearInterval(countdown);
      navigation(quizAnswerUrl);
    }
    if (gameState === 'paused') {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [displayedCount, gameState, navigation, quizAnswerUrl]);

  const onPause = () => {
    setGameState(gameState === 'playing' ? 'paused' : 'playing');
  };

  const onStop = () => {
    setGameState('stopped');
  };

  useEffect(() => {
    !isOpen && setGameState('playing');
  }, [isOpen]);

  return (
    <>
      <styles.Title />
      <styles.QuestionImage
        imageUrl={imageUrl}
      />
      <styles.ButtonSection>
        <QuestionButtonSvg onClick={openHintModal} />
        <PauseButtonSvg onClick={onPause} />
        <StopButtonSvg onClick={onStop} />
      </styles.ButtonSection>
      <styles.Countdown currentCount={currentCount}>
        {displayedCount}
      </styles.Countdown>
    </>
  );
};

export default QuizPlay;

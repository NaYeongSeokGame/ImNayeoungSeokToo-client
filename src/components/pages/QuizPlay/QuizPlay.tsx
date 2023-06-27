import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ReactComponent as PauseButtonSvg } from '@/assets/images/pauseButton.svg';
import { ReactComponent as QuestionButtonSvg } from '@/assets/images/questionButton.svg';
import { ReactComponent as StopButtonSvg } from '@/assets/images/stopButton.svg';
import QuizHintModal from '@/components/main/QuizHintModal';
import useModal from '@/hooks/useModal';
import { useQuizState } from '@/hooks/useQuizContext';
import { modalStateAtom } from '@/stores/atoms';

import * as styles from './QuizPlay.style';

type GameType = 'playing' | 'paused' | 'stopped';

const QuizPlay = () => {
  const { presetPin, seq } = useParams();
  const { isOpen } = useAtomValue(modalStateAtom);
  const { openModal } = useModal();
  const quizState = useQuizState();
  const navigation = useNavigate();

  const quizAnswerUrl = `/quiz/${presetPin}/${seq}/answer`;

  const [currentCount, setCurrentCount] = useState(3800);
  const [gameState, setGameState] = useState<GameType>('playing');

  const displayedCount = Math.floor(currentCount / 1000);

  const openHintModal = () => {
    setGameState('paused');
    openModal(
      <QuizHintModal answer={quizState.quizData[Number(seq)]?.answer} />,
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
        imageUrl={quizState.quizData[Number(seq)]?.imageUrl}
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

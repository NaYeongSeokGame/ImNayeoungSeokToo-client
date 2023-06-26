import { useState } from 'react';

import { ReactComponent as PauseButtonSvg } from '@/assets/images/pauseButton.svg';
import { ReactComponent as QuestionButtonSvg } from '@/assets/images/questionButton.svg';
import { ReactComponent as StopButtonSvg } from '@/assets/images/stopButton.svg';

import * as styles from './QuizPlay.style';

const QuizPlay = () => {
  const [currentCount, setCurrentCount] = useState(3000);
  const displayedCount = Math.floor(currentCount / 1000);
  return (
    <>
      <styles.Title />
      <styles.QuestionImage imageUrl="https://nayeongseokgame-s3.s3.ap-northeast-2.amazonaws.com/preset/64984bdcafed34155563ccc1/%EB%82%98%EC%98%81%EC%84%9D.jfif" />
      <styles.ButtonSection>
        <QuestionButtonSvg />
        <PauseButtonSvg />
        <StopButtonSvg />
      </styles.ButtonSection>
      <styles.Countdown currentCount={currentCount}>
        {displayedCount}
      </styles.Countdown>
    </>
  );
};

export default QuizPlay;

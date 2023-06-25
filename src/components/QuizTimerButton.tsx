import { useState } from 'react';
import { styled } from 'styled-components';

import minusIcon from '@/assets/icons/minus.svg';
import plusIcon from '@/assets/icons/plus.svg';
import { DefaultButtonStyle, QCountText } from '@/styles/Common';

const QuizTimerButton = () => {
  const [timer, setTimer] = useState(3);

  const minusSeconds = () => {
    setTimer((timer) => (timer ? timer - 1 : 0));
  };

  const plusSeconds = () => {
    setTimer((timer) => (timer ? timer + 1 : 3));
  };

  return (
    <TimerContainer>
      <TimerChangeButton
        imgUrl={minusIcon}
        onClick={minusSeconds}
      ></TimerChangeButton>
      <QCountText>{timer}</QCountText>
      <TimerChangeButton
        imgUrl={plusIcon}
        onClick={plusSeconds}
      ></TimerChangeButton>
    </TimerContainer>
  );
};

export default QuizTimerButton;

const TimerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  min-width: 240px;
  height: 68px;
  border: 5px solid black;
  border-radius: 20px;

  * {
    flex: 1;
    text-align: center;
  }
`;

const TimerChangeButton = styled.button<{ imgUrl?: string }>`
  ${DefaultButtonStyle}
  width: 30px;
  height: 30px;
  ${(props) =>
    props.imgUrl &&
    `background-image: url(${props.imgUrl});
    background-repeat: no-repeat;
    background-position: center;
  `}
`;

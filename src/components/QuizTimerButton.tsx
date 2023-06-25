import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';
import { styled } from 'styled-components';

import minusIcon from '@/assets/icons/minus.svg';
import plusIcon from '@/assets/icons/plus.svg';
import { DefaultButtonStyle, QCountText } from '@/styles/Common';
import { ChangedQuizTimer } from '@/types/quiz';

type QuizTimerButtonProps = unknown;

const QuizTimerButton = forwardRef(function (
  _: QuizTimerButtonProps,
  ref: ForwardedRef<ChangedQuizTimer>,
) {
  const [timer, setTimer] = useState(3);

  const minusSeconds = () => {
    setTimer((timer) => (timer ? timer - 1 : 0));
  };

  const plusSeconds = () => {
    setTimer((timer) => (timer ? timer + 1 : 3));
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        getTimer() {
          return timer;
        },
      };
    },
    [timer],
  );

  return (
    <TimerContainer>
      <TimerChangeButton imgUrl={minusIcon} onClick={minusSeconds} />
      <QCountText>{timer}</QCountText>
      <TimerChangeButton imgUrl={plusIcon} onClick={plusSeconds} />
    </TimerContainer>
  );
});

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

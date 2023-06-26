import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const formatNumber = (number: number) => {
  return Math.ceil(number);
};

const Timer = ({
  delay,
  isPause,
  isGameEnd,
  isNext,
  setTimeout,
}: TimerProps) => {
  const [currentTime, setCurrentTime] = useState(delay);
  const countTimer = () => {
    const countdown = setInterval(() => {
      setCurrentTime((prev) => prev - 0.1);
    }, 100);
    return countdown;
  };

  useEffect(() => {
    const countdown = countTimer();
    if (formatNumber(currentTime) <= 0 && !isGameEnd) {
      clearInterval(countdown);
      setTimeout(true);
    }
    if (isPause || isGameEnd) {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [currentTime, isPause]);

  useEffect(() => {
    setTimeout(false);
    if (isGameEnd) return;
    if (isNext) {
      setCurrentTime(delay);
    }
  }, [isNext]);

  return <TimerWrapper>{formatNumber(currentTime)}</TimerWrapper>;
};

export default Timer;

type TimerProps = {
  delay: number;
  isPause: boolean;
  isNext: boolean;
  isGameEnd: boolean;
  setTimeout: (isTimeout: boolean) => void;
};

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

import { useCallback, useEffect, useRef, useState } from 'react';

function useTimer({ initTimeLimit = 0, startImmediately = false }) {
  const [leftSecond, setLeftSecond] = useState(initTimeLimit);
  const [isRunning, setIsRunning] = useState(startImmediately);
  const [progressValue, setProgressValue] = useState(initTimeLimit);

  // NOTE : 100ms 간격으로 시간을 줄이는 TimerId Ref, 매 랜더링마다 최신의 Id를 바라보도록 함.
  const timerRef = useRef<NodeJS.Timer | undefined>(undefined);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>();

  const start = useCallback(() => setIsRunning(true), []);
  const stop = useCallback(() => setIsRunning(false), []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setLeftSecond((prev) => prev - 1);
    }, 1000);

    if (!isRunning || leftSecond <= 0) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, leftSecond]);

  useEffect(() => {
    const animateProgress = (time: DOMHighResTimeStamp) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const currentTime = time - startTimeRef.current;
      setProgressValue(currentTime / 1000);

      if (leftSecond > 0 && isRunning) {
        animationRef.current = requestAnimationFrame(animateProgress);
      }
    };

    animationRef.current = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(animationRef.current);
  }, [leftSecond, isRunning]);

  return { leftSecond, isRunning, progressValue, start, stop };
}

export default useTimer;

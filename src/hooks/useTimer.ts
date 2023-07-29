import { useCallback, useEffect, useRef, useState } from 'react';

function useTimer({ initTimeLimit = 0, startImmediately = false }) {
  const [leftSecond, setLeftSecond] = useState(initTimeLimit);
  const [isRunning, setIsRunning] = useState(startImmediately);

  // NOTE : 100ms 간격으로 시간을 줄이는 TimerId Ref, 매 랜더링마다 최신의 Id를 바라보도록 함.
  const timerRef = useRef<number>(initTimeLimit);
  const previousTimeRef = useRef<number>();

  const start = useCallback(() => setIsRunning(true), []);
  const stop = useCallback(() => setIsRunning(false), []);

  const timer = useCallback(
    (time: DOMHighResTimeStamp) => {
      if (!previousTimeRef.current) previousTimeRef.current = time;
      const deltaTime = time - previousTimeRef.current;

      if (isRunning) {
        setLeftSecond((prev) => prev - deltaTime / 1000);
      }
      previousTimeRef.current = time;
      if (leftSecond > 0) {
        timerRef.current = requestAnimationFrame(timer);
      }
    },
    [isRunning, leftSecond],
  );

  useEffect(() => {
    timerRef.current = requestAnimationFrame(timer);
    return () => cancelAnimationFrame(timerRef.current);
  }, []);

  return { leftSecond, isRunning, start, stop };
}

export default useTimer;

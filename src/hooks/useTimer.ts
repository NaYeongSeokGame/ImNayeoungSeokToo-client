import { useCallback, useEffect, useState } from 'react';

function useTimer(initSecond = 0) {
  const [currentSecond, setCurrentSecond] = useState(initSecond);
  const [isRunning, setIsRunning] = useState(false);

  const start = useCallback(() => setIsRunning(true), []);
  const stop = useCallback(() => setIsRunning(false), []);

  useEffect(() => {
    let timerId: NodeJS.Timer | undefined;

    if (isRunning) {
      timerId = setInterval(() => setCurrentSecond((prev) => prev + 1), 1000);
      return;
    }

    if (timerId) clearInterval(timerId);

    return () => clearInterval(timerId);
  }, [isRunning]);

  return { currentSecond, start, stop };
}

export default useTimer;

import { useSetAtom } from 'jotai';
import { useState } from 'react';

import useGetPresetByPin from '@/hooks/useGetPresetByPin.ts';
import { startQuizGameAtom } from '@/stores/quiz';

const usePresetSetting = ({
  initDelayBeforeStart = 3,
  initTimeToSolveQuiz = 3,
  presetPin,
  thumbnailUrl,
}: UsePresetSettingProps) => {
  const setStartQuizGame = useSetAtom(startQuizGameAtom);
  const presetData = useGetPresetByPin(presetPin);
  const [delayBeforeStart, setDelayBeforeStart] =
    useState(initDelayBeforeStart);
  const [timeToSolveQuiz, setTimeToSolveQuiz] = useState(initTimeToSolveQuiz);

  const handleDelayBeforeStart = (diff: number) => {
    const changedResult = delayBeforeStart + diff;
    if (changedResult < 3 || changedResult > 10) return;
    setDelayBeforeStart(changedResult);
  };
  const handleTimeToSolveQuiz = (diff: number) => {
    const changeResult = timeToSolveQuiz + diff;
    setTimeToSolveQuiz(changeResult);
  };
  const startQuizGame = async () => {
    if (!presetData) return;
    // 추가로 리액트 쿼리로 고치면
    setStartQuizGame({
      quizList: presetData.quizList,
      presetPin,
      thumbnailUrl,
      delayBeforeStart,
      timeToSolveQuiz,
    });
  };

  return { handleDelayBeforeStart, handleTimeToSolveQuiz, startQuizGame };
};

export default usePresetSetting;

interface UsePresetSettingProps {
  initDelayBeforeStart?: number;
  initTimeToSolveQuiz?: number;
  presetPin: string;
  thumbnailUrl: string;
}

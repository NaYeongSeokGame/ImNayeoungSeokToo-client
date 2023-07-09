import { useSetAtom } from 'jotai';
import { useState } from 'react';

import QuizRepository from '@/apis/quiz.ts';
import { startQuizGameAtom } from '@/stores/quiz';

const usePresetSetting = ({
  initDelayBeforeStart = 3,
  initTimeToSolveQuiz = 3,
  presetPin,
  thumbnailUrl,
}: UsePresetSettingProps) => {
  const setStartQuizGame = useSetAtom(startQuizGameAtom);
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
    // 추가로 리액트 쿼리로 고치면
    const { quizList } = await QuizRepository.getQuizByPinAsync(presetPin);
    setStartQuizGame({
      quizList,
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

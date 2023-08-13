import { atom } from 'jotai';

import { CreatedQuizStateType, QuizPlayStateType } from '@/types/atom/quiz';

export const quizPlayStateAtom = atom<QuizPlayStateType>({
  isPlaying: false,
  presetPin: '',
  thumbnailUrl: '',
  quizList: [],
  currentIndex: 0,
  totalScore: 0,
  delayBeforeStart: 3,
  timeToSolveQuiz: 3,
});

export const STORAGE_KEY = 'createdQuiz';

const getInitialValue = (): CreatedQuizStateType => {
  const item = localStorage.getItem(STORAGE_KEY);
  if (item !== null) {
    const parsed = JSON.parse(item);
    if (isCreatedQuizStateType(parsed)) {
      return parsed;
    }
  }
  return { presetList: [] };
};

export const createdQuizPresetAtom = atom<CreatedQuizStateType>(
  getInitialValue(),
);

const isCreatedQuizStateType = (obj: object): obj is CreatedQuizStateType => {
  return 'presetList' in obj;
};

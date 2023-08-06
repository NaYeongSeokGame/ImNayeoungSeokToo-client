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
const getInitialValue = () => {
  const item = localStorage.getItem(STORAGE_KEY);
  if (item !== null) {
    return JSON.parse(item);
  }
  return [];
};

export const createdQuizPresetAtom = atom<CreatedQuizStateType>({
  presetList: getInitialValue(),
});

import { atom } from 'jotai';

import { QuizPlayStateType } from '@/types/atom/quiz';

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

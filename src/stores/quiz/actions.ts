import { atom } from 'jotai';

import { quizPlayStateAtom } from '@/stores/quiz';
import type {
  UpdateCurrentScoreType,
  UpdateQuizPresetType,
} from '@/types/atom/quiz';

export const controlPlayingStateAtom = atom(
  (get) => get(quizPlayStateAtom).isPlaying,
  (get, set, updatedPlayingState: boolean) => {
    const prevAtom = get(quizPlayStateAtom);
    set(quizPlayStateAtom, { ...prevAtom, isPlaying: updatedPlayingState });
  },
);

export const controlCurrentScoreAtom = atom(
  null,
  (get, set, update: UpdateCurrentScoreType) => {
    const prevAtom = get(quizPlayStateAtom);
    const totalScore = prevAtom.totalScore + Number(update.isCorrect);
    set(quizPlayStateAtom, {
      ...prevAtom,
      totalScore,
      currentIndex: prevAtom.currentIndex + 1,
    });
  },
);

export const initQuizPresetDataAtom = atom(
  null,
  (get, set, update: UpdateQuizPresetType) => {
    const prevAtom = get(quizPlayStateAtom);
    set(quizPlayStateAtom, { ...prevAtom, ...update });
  },
);

export const resetQuizStateAtom = atom(
  null,
  (get, set, _) => {
    set(quizPlayStateAtom, {
      isPlaying: false,
      presetPin: '',
      thumbnailUrl: '',
      quizList: [],
      currentIndex: 0,
      totalScore: 0,
      delayBeforeStart: 3,
      timeToSolveQuiz: 3,
    })
  }
)
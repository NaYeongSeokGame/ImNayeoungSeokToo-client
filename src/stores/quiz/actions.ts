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
    if (prevAtom.isPlaying == updatedPlayingState)
      throw new Error('업데이트하려는 게임 상태가 동일합니다.')

    set(quizPlayStateAtom, { ...prevAtom, isPlaying: updatedPlayingState });
  },
);

export const controlCurrentScoreAtom = atom(
  null,
  (get, set, update: UpdateCurrentScoreType) => {
    const prevAtom = get(quizPlayStateAtom);

    if (!prevAtom.isPlaying)
      throw new Error('게임이 시작하기 전에 스코어를 변경할 수 없습니다.')

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
    if (prevAtom.isPlaying)
      throw new Error('게임이 진행 중인 상황에서 프리셋을 업데이트 할 수 없습니다.')

    set(quizPlayStateAtom, { ...prevAtom, ...update });
  },
);

export const resetQuizStateAtom = atom(
  null,
  (get, set, _) => {
    const prevAtom = get(quizPlayStateAtom);

    if (!prevAtom.isPlaying) {
      throw new Error('아직 게임이 시작되지 않은 상태입니다.')
    }

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
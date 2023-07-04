import { atom } from 'jotai';

import { quizPlayStateAtom } from '@/stores/quiz';
import type {
  UpdateCurrentScoreType,
  UpdateQuizStartType,
} from '@/types/atom/quiz';

export const startQuizGameAtom = atom(
  null,
  (get, set, update: UpdateQuizStartType) => {
    const prevAtom = get(quizPlayStateAtom);
    if (prevAtom.isPlaying)
      throw new Error('업데이트하려는 게임 상태가 동일합니다.');

    set(quizPlayStateAtom, {
      ...prevAtom,
      ...update,
      isPlaying: true,
      currentIndex: 0,
      totalScore: 0,
    });
  },
);

export const terminateQuizGameAtom = atom(null, (get, set, _) => {
  const prevAtom = get(quizPlayStateAtom);

  if (!prevAtom.isPlaying) {
    throw new Error('아직 게임이 시작되지 않은 상태입니다.');
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
  });
});

export const controlCurrentScoreAtom = atom(
  (get) => {
    const { currentIndex, totalScore, quizList } = get(quizPlayStateAtom);
    // NOTE : 현재 라운드가 마지막임을 알리는 flag isTerminated
    const isTerminated = quizList.length <= currentIndex;
    return { currentIndex, totalScore, isTerminated };
  },
  (get, set, update: UpdateCurrentScoreType) => {
    const prevAtom = get(quizPlayStateAtom);

    if (!prevAtom.isPlaying)
      throw new Error('게임이 시작하기 전에 스코어를 변경할 수 없습니다.');

    const totalScore = prevAtom.totalScore + Number(update.isCorrect);
    set(quizPlayStateAtom, {
      ...prevAtom,
      totalScore,
      currentIndex: prevAtom.currentIndex + 1,
    });
  },
);

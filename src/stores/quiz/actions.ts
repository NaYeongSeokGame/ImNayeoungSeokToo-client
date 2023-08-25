import { atom } from 'jotai';

import {
  STORAGE_KEY,
  createdQuizPresetAtom,
  quizPlayStateAtom,
} from '@/stores/quiz';
import type {
  CreatedQuizStateType,
  UpdateCurrentScoreType,
  UpdateQuizStartType,
} from '@/types/atom/quiz';
import { QuizPresetType } from '@/types/quiz';

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

export const terminateQuizGameAtom = atom(null, (get, set) => {
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
    const isTerminated = quizList.length <= currentIndex + 1;
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

type ActionType = 'ADD' | 'MODIFY' | 'DELETE';
type CreatedQuizPresetActionType = {
  type: ActionType;
  item: QuizPresetType;
};

export const createdQuizPresetAtomWithLocalStorage = atom(
  (get) => get(createdQuizPresetAtom),
  (get, set, newPresetAction: CreatedQuizPresetActionType) => {
    const prevAtom = get(createdQuizPresetAtom);
    const newValue = createdQuizPresetReducer(prevAtom, newPresetAction);
    set(createdQuizPresetAtom,  newValue);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
  },
);

const createdQuizPresetReducer = (
  state: CreatedQuizStateType,
  action: CreatedQuizPresetActionType,
): CreatedQuizStateType => {
  switch (action.type) {
    case 'ADD': {
      return { ...state, presetList: [...state.presetList, action.item] };
    }
    case 'MODIFY': {
      return {
        ...state,
        presetList: state.presetList.map((preset) =>
          preset.presetPin === action.item.presetPin ? action.item : preset,
        ),
      };
    }
    case 'DELETE': {
      return {
        ...state,
        presetList: state.presetList.filter(
          (preset) => preset.presetPin !== action.item.presetPin,
        ),
      };
    }
    default: {
      return { ...state };
    }
  }
};

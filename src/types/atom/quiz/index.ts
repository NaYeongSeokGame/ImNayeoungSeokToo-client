import { QuizType } from '@/types/quiz';

export interface QuizPlayStateType {
  /** 현재 게임이 진행 중임을 나타내는 isPlaying */
  isPlaying: boolean;
  /** 사용된 퀴즈 프리셋 PIN 을 담은 presetPin */
  presetPin: string | null;
  /** 퀴즈 목록에서 보여줄 썸네일 이미지 thumbnailUrl */
  thumbnailUrl: string;
  /** 퀴즈 프리셋에서 제공하는 퀴즈 목록 quizList */
  quizList: QuizType[];
  /** 현재 풀이 중인 문제 인덱스 currentIndex */
  currentIndex: number;
  /** 풀이자가 맞춘 총 문제 갯수 totalScore */
  totalScore: number;
  /** 게임을 시작하기 전 설정한 딜레이 시간 delayBeforeStart */
  delayBeforeStart: number;
  /** 다음 문제로 넘어가기 위해 주어진 시간 timeToSolveQuiz */
  timeToSolveQuiz: number;
}

export type UpdateQuizStartType = Pick<
  QuizPlayStateType,
  | 'presetPin'
  | 'thumbnailUrl'
  | 'quizList'
  | 'delayBeforeStart'
  | 'timeToSolveQuiz'
>;

export type UpdateCurrentScoreType = { isCorrect: boolean; quizIndex: number };

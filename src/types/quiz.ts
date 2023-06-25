export interface Preset {
  presetPin: number;
  isPrivate: boolean;
  title: string;
  quizzes: Quiz[];
}

export interface Quiz {
  imageUrl: string;
  answer: string;
}

export interface ChangedQuizTimer {
  getTimer: () => number;
}

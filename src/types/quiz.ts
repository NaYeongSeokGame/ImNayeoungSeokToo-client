export interface QuizType {
  imageUrl: string;
  answer: string;
}

export type QuizTypeWithPin = QuizType & {
  presetPin: string;
};

export interface QuizPresetType {
  isPrivate: boolean;
  title: string;
}

export type GetQuizListOutput = QuizTypeWithPin & {
  quizList: QuizType[];
};

export interface PostCreateNewPresetInput {
  images: File[];
  answers: string[];
  title: string;
  isPrivate: boolean;
}

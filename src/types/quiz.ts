export interface QuizType {
  imageUrl: string;
  answer: string;
}

export interface QuizPresetPinType {
  presetPin: string;
}

export type QuizTypeWithPin = QuizType & QuizPresetPinType;

export interface QuizPresetType {
  isPrivate: boolean;
  title: string;
}

export interface CreatePresetType {
  images: File[];
  answers: string[];
  title: string;
  isPrivate: boolean;
}

export interface CreateQuizType {
  image: File | null;
  answer: string;
}

export type CreateQuizWithUrlType = CreateQuizType & { imageUrl: string };

export type CreatePresetWithUrlType = CreatePresetType & {
  imageUrls: string[];
};

export type GetQuizListOutput = QuizTypeWithPin & {
  quizList: QuizType[];
};

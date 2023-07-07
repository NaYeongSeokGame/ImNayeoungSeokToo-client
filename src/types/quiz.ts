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
  presetPin: string;
  thumbnailUrl?: string; //Fix : 추후 추가되면 ?제거
  hashtagList?: string[];//Fix : 추후 추가되면 ?제거
}

export type QuizPresetTypeWithPin = QuizPresetType & QuizPresetPinType;

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

export type PlayableQuizPresetType = QuizPresetType & { quizList: QuizType[] };

export interface PaginationType {
  limit: number;
  page: number;
}

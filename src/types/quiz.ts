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
  thumbnailUrl: string; 
  hashtagList?: string[] ;
}

export interface CreatePresetType {
  images: File[];
  answers: string[];
  title: string;
  isPrivate: boolean;
  hashtagList: string[];
  hintList: string[];
}

export interface CreateQuizType {
  image: File;
  answer: string;
}

export type CreateQuizWithUrlType = CreateQuizType & {
  imageUrl: string;
  hint: string;
};

export type CreatePresetWithUrlType = CreatePresetType & {
  imageUrls: string[];
  hashtagList: string[];
  hintList: string[];
};

export type GetQuizListOutput = QuizTypeWithPin & {
  quizList: QuizType[];
  isPrivate: boolean;
  thumbnailUrl: string;
  title: string;
  hashtagList: string[];
};

export type PlayableQuizPresetType = QuizPresetType & { quizList: QuizType[] };

export interface PaginationType {
  limit: number;
  page: number;
}

export interface PresetPageType {
  results: QuizPresetType[];
  page: number;
  nextPage: number | null;
}

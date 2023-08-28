export interface QuizType {
  imageUrl: string;
  answer: string;
}

export interface QuizPresetPinType {
  presetPin: string;
}

export type QuizTypeWithPin = QuizType & QuizPresetPinType;

export type PlayableQuizPresetType = QuizPresetType & { quizList: QuizType[] };

export interface QuizPresetType {
  isPrivate: boolean;
  title: string;
  presetPin: string;
  thumbnailUrl: string; 
  hashtagList?: string[] ;
}

export interface CreateQuizWithUrlType {
  image: File | null;
  answer: string;
  imageUrl: string; 
  hint: string; 
};

export interface CreatePresetType {
  images: File[];
  answers: string[];
  title: string;
  isPrivate: boolean;
}

export type CreatePresetWithUrlType = CreatePresetType & {
  imageUrls: string[];
  hashtagList: string[];
  hintList: string[];
};

export interface PaginationType {
  limit: number;
  page: number;
}

export interface PresetPageType {
  results: QuizPresetType[];
  page: number;
  nextPage: number | null;
}

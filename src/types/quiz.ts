export type Preset = {
  presetPin: number;
  isPrivate: boolean;
  title: string;
  quizList: Quiz[]
};

export type Quiz = {
  imageUrl: string;
  answer: string;
}

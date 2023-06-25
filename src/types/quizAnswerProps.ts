interface QuizAnswerProps {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsAnswerButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  preset: Preset;
  isMomentAnswerButtonClicked: boolean;
  setIsMomentAnswerButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

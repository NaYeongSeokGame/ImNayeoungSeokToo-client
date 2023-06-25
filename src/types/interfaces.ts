

export interface QuizFileAndAnswer {
  file? : File;
  answer: string;
}


export interface QuizButtonProps {
  contents : QuizFileAndAnswer;
  onClick : any;
  index : number;
}

export interface QuizButtonGridProps{
  fileAndAnswer : QuizFileAndAnswer[];
  addContent : any;
}
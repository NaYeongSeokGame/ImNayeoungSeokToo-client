import { ReactComponent as CorrectButtonSvg } from '@/assets/images/correctButton.svg';
import { ReactComponent as WrongButtonSvg } from '@/assets/images/wrongButton.svg';

import * as styles from './CreateQuiz.style';

interface QuizAnswerProps {
  answer: string;
}

const CreateQuiz = ({ answer = '송민호' }: QuizAnswerProps) => {
  return (
    <>
      <styles.Title />
      <styles.QuestionAnswer>
        <styles.Answer>{answer}</styles.Answer>
      </styles.QuestionAnswer>
      <styles.ButtonSection>
        <CorrectButtonSvg />
        <WrongButtonSvg />
      </styles.ButtonSection>
    </>
  );
};

export default CreateQuiz;

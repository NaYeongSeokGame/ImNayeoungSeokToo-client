import { ReactComponent as CorrectButtonSvg } from '@/assets/images/correctButton.svg';
import { ReactComponent as WrongButtonSvg } from '@/assets/images/wrongButton.svg';

import * as styles from './QuizAnswer.style';

interface QuizAnswerProps {
  answer: string;
}

// FIXME : 테스트를 위한 임시 props 삽입
const QuizAnswer = ({ answer = '송민호' }: QuizAnswerProps) => {
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

export default QuizAnswer;

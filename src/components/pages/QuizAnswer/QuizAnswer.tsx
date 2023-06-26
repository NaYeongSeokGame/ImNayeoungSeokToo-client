import { useNavigate, useParams } from 'react-router-dom';

import { ReactComponent as CorrectButtonSvg } from '@/assets/images/correctButton.svg';
import { ReactComponent as WrongButtonSvg } from '@/assets/images/wrongButton.svg';

import * as styles from './QuizAnswer.style';

interface QuizAnswerProps {
  answer: string;
}

// FIXME : 테스트를 위한 임시 props 삽입
const QuizAnswer = ({ answer = '송민호' }: QuizAnswerProps) => {
  const { presetPin, seq } = useParams();
  const navigation = useNavigate();
  const nextRoundUrl = `/quiz/${presetPin}/${Number(seq) + 1}`;

  const onCorrectClick = () => {
    navigation(nextRoundUrl);
  };

  const onWrongClick = () => {
    navigation(nextRoundUrl);
  };

  return (
    <>
      <styles.Title />
      <styles.QuestionAnswer>
        <styles.Answer>{answer}</styles.Answer>
      </styles.QuestionAnswer>
      <styles.ButtonSection>
        <CorrectButtonSvg onClick={onCorrectClick} />
        <WrongButtonSvg onClick={onWrongClick} />
      </styles.ButtonSection>
    </>
  );
};

export default QuizAnswer;

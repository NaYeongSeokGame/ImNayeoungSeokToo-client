import { useNavigate, useParams } from 'react-router-dom';

import { ReactComponent as CorrectButtonSvg } from '@/assets/images/correctButton.svg';
import { ReactComponent as WrongButtonSvg } from '@/assets/images/wrongButton.svg';
import { useQuizDispatch } from '@/hooks/useQuizContext';

import * as styles from './QuizAnswer.style';

interface QuizAnswerProps {
  answer: string;
}

// FIXME : 테스트를 위한 임시 props 삽입
const QuizAnswer = ({ answer = '송민호' }: QuizAnswerProps) => {
  const { addScore } = useQuizDispatch();
  const { presetPin, seq } = useParams();
  const navigation = useNavigate();
  const nextRoundUrl = `/quiz/${presetPin}/${Number(seq) + 1}`;

  const onCorrectClick = () => {
    addScore('correct');
    navigation(nextRoundUrl);
  };

  const onWrongClick = () => {
    addScore('incorrect');
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

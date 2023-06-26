import { useNavigate, useParams } from 'react-router-dom';

import { ReactComponent as CorrectButtonSvg } from '@/assets/images/correctButton.svg';
import { ReactComponent as WrongButtonSvg } from '@/assets/images/wrongButton.svg';
import { useQuizState } from '@/hooks/useQuizContext';
import { useQuizDispatch } from '@/hooks/useQuizContext';

import * as styles from './QuizAnswer.style';

interface QuizAnswerProps {
  answer: string;
}

// FIXME : 테스트를 위한 임시 props 삽입
const QuizAnswer = ({ answer = '송민호' }: QuizAnswerProps) => {
  const { presetPin, seq } = useParams();
  const navigation = useNavigate();
  const quizState = useQuizState();

  console.log(quizState.quizData);

  const { quizData } = quizState;
  const { addScore } = useQuizDispatch();
  const nextRoundUrl =
    quizData.length < Number(seq) + 1
      ? `/quiz/${presetPin}/${Number(seq) + 1}`
      : `/quiz/${presetPin}/result`;

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
        <styles.Answer>{quizData[Number(seq)].answer ?? answer}</styles.Answer>
      </styles.QuestionAnswer>
      <styles.ButtonSection>
        <CorrectButtonSvg onClick={onCorrectClick} />
        <WrongButtonSvg onClick={onWrongClick} />
      </styles.ButtonSection>
    </>
  );
};

export default QuizAnswer;

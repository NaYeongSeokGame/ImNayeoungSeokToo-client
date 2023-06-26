import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import QuizRepository from '@/apis/quiz';
import { ReactComponent as CorrectButtonSvg } from '@/assets/images/correctButton.svg';
import { ReactComponent as WrongButtonSvg } from '@/assets/images/wrongButton.svg';
import { useQuizDispatch } from '@/hooks/useQuizContext';
import { GetQuizListOutput } from '@/types/quiz';

import * as styles from './QuizAnswer.style';

interface QuizAnswerProps {
  answer: string;
}

// FIXME : 테스트를 위한 임시 props 삽입
const QuizAnswer = ({ answer = '송민호' }: QuizAnswerProps) => {
  const { presetPin, seq } = useParams();
  const { data } = useQuery(['Quiz', presetPin], () =>
    QuizRepository.getQuizByPinAsync(presetPin ?? ''),
  );

  const { quizList } = data as GetQuizListOutput;
  const { addScore } = useQuizDispatch();
  const navigation = useNavigate();
  const nextRoundUrl =
    quizList.length > Number(seq)
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
        <styles.Answer>{quizList[Number(seq)].answer ?? answer}</styles.Answer>
      </styles.QuestionAnswer>
      <styles.ButtonSection>
        <CorrectButtonSvg onClick={onCorrectClick} />
        <WrongButtonSvg onClick={onWrongClick} />
      </styles.ButtonSection>
    </>
  );
};

export default QuizAnswer;

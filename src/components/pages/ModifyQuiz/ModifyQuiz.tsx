import { useLocation } from 'react-router-dom';

import QuizForm from '@/components/main/QuizForm/QuizForm';
import useGetPresetByPin from '@/hooks/useGetPresetByPin';

import * as styles from './ModifyQuiz.style';

const ModifyQuiz = () => {
  const { state } = useLocation();
  const presetPin = state.presetPin ?? '';

  const originData = useGetPresetByPin(presetPin);

  return (
    <styles.Wrapper>
      <styles.Title>
        <styles.PointTitle>퀴즈 프리셋 수정</styles.PointTitle>하기
      </styles.Title>
      {originData && (<QuizForm originData={originData} presetPin={presetPin}/>)}
    </styles.Wrapper>
  );
};

export default ModifyQuiz;

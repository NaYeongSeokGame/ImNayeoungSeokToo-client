import React from 'react';

import * as styles from './CreateQuizImage.style';

interface CreateQuizImageType {
  index: number
  url: string;
  answer?: string;
  hint?: string;
  removeQuiz: (index: number) => void;
  modifyQuiz: (index: number) => void;
}
const CreateQuizImage = ({
  index,
  url,
  answer,
  hint,
  removeQuiz,
  modifyQuiz,
}: CreateQuizImageType) => {
  return (
    <styles.CreateQuizWrapper image={url}>
      <styles.QuizModifyWrapper>
        <styles.ModifyButton onClick={() => modifyQuiz(index)}>
          수정하기
        </styles.ModifyButton>
        <styles.ModifyButton onClick={() => removeQuiz(index)}>
          삭제하기
        </styles.ModifyButton>
      </styles.QuizModifyWrapper>
      <styles.AnswerText>정답 : {answer}</styles.AnswerText>
      <styles.HintText>힌트 : {hint}</styles.HintText>
    </styles.CreateQuizWrapper>
  );
};

export default CreateQuizImage;

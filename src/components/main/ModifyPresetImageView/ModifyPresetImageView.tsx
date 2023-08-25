import * as styles from './ModifyPresetImageView.style';

interface ModifyPresetImageViewType {
  index: number;
  url: string;
  title?: string;
  startQuiz: (index: number) => void;
  removeQuiz: (index: number) => void;
  modifyQuiz: (index: number) => void;
}
const ModifyPresetImageView = ({
  index,
  url,
  title,
  startQuiz,
  removeQuiz,
  modifyQuiz,
}: ModifyPresetImageViewType) => {
  return (
    <styles.ModifyPresetWrapper image={url}>
      <styles.QuizModifyWrapper>
        <styles.ModifyButton onClick={() => startQuiz(index)}>
          시작하기
        </styles.ModifyButton>
        <styles.ModifyButton onClick={() => modifyQuiz(index)}>
          수정하기
        </styles.ModifyButton>
        <styles.ModifyButton onClick={() => removeQuiz(index)}>
          삭제하기
        </styles.ModifyButton>
      </styles.QuizModifyWrapper>
      <styles.PresetNameText>{title}</styles.PresetNameText>
    </styles.ModifyPresetWrapper>
  );
};

export default ModifyPresetImageView;

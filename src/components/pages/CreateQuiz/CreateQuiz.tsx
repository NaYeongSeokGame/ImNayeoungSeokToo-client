import {useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ToggleButton from '@/components/common/ToggleButton/ToggleButton';
import useModal from '@/hooks/useModal';
import { theme } from '@/styles/theme';
import { CreatePresetWithUrlType } from '@/types/quiz';

import * as styles from './CreateQuiz.style';

const CreateQuiz = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const [presetData, setPresetData] = useState<CreatePresetWithUrlType>({
    images: [],
    imageUrls: [],
    answers: [],
    hintLists: [],
    hashtagLists: [],
    title: '',
    isPrivate: false,
  });

  return (
    <styles.CreateQuizWrapper>
      <styles.Title>
        <styles.PointTitle>새로운 퀴즈</styles.PointTitle> 만들기
      </styles.Title>
      <styles.GetPresetButton>기존 퀴즈 복사해서 만들기</styles.GetPresetButton>
      <styles.NameLabel>
        퀴즈 이름 <styles.InfoLabel>(최대 50글자)</styles.InfoLabel>
      </styles.NameLabel>
      <styles.NameInput />
      <styles.NameLabelWrapper>
        <styles.NameLabel>퀴즈 비공개</styles.NameLabel>
        <ToggleButton
          onColor={theme.colors.darkblue400}
          offColor={theme.colors.gray400}
        />
      </styles.NameLabelWrapper>
      <styles.InfoLabel>
        (친구들끼리 플레이를 원한다면 비공개를 설정하세요)
      </styles.InfoLabel>
      <styles.NameLabel>해시태그</styles.NameLabel>
      <styles.InfoLabel>
        (퀴즈를 나타낼 수 있는 해시태그를 만들어주세요)
      </styles.InfoLabel>
      <styles.NameInput />

      <div>
        <styles.NameLabel>출제 문항</styles.NameLabel>
        <styles.InfoLabel>3/10</styles.InfoLabel>
      </div>
      {presetData.answers &&
        presetData.answers.map((index, answer) => (
          <img src={presetData.imageUrls[0]} />
        ))}
      <styles.UploadQuizWrapper>
        <styles.UploadText src="/src/assets/images/uploadQuizText.svg" />
        <styles.ArrowIcon src="/src/assets/icons/arrowIcon.svg" />
        <styles.UploadQuizButton>추가하기</styles.UploadQuizButton>
      </styles.UploadQuizWrapper>
      <styles.AddNewQuizButton>퀴즈 생성하기</styles.AddNewQuizButton>
    </styles.CreateQuizWrapper>
  );
};

export default CreateQuiz;

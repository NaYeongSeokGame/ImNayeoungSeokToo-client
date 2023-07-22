import {useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ToggleButton from '@/components/common/ToggleButton/ToggleButton';
import useModal from '@/hooks/useModal';
import { theme } from '@/styles/theme';
import { CreatePresetWithUrlType, CreateQuizWithUrlType } from '@/types/quiz';

import * as styles from './CreateQuiz.style';
import AddQuizModal from '@/components/main/AddQuizModal';
import CreateQuizImage from '@/components/main/CreateQuizImageView/CreateQuizImage';
import { toast } from 'react-toastify';
import QuizRepository from '@/apis/quiz';
import copyClipboard from '@/utils/copyClipboard';
import GameStartModal from '@/components/main/GameStartModal';
import HashtagInput from '@/components/main/HastagInput/HashtagInput';

const CreateQuiz = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const [presetData, setPresetData] = useState<CreatePresetWithUrlType>({
    images: [],
    imageUrls: [],
    answers: [],
    hintLists: [],
    hashtagList: [],
    title: '',
    isPrivate: false,
  });

  const openAddQuizModal = () =>
    openModal(<AddQuizModal storeNewQuiz={storeNewQuiz} />);

  const storeNewQuiz = useCallback(
    ({ answer, image, imageUrl }: CreateQuizWithUrlType) => {
      if (!answer || !image || !imageUrl) return;
      setPresetData((prev) => ({
        ...prev,
        images: [...prev.images, image],
        answers: [...prev.answers, answer],
        imageUrls: [...prev.imageUrls, imageUrl],
      }));
    },
    [presetData],
  );

  const removeCurrentQuiz = (index: number) => {
    console.log(index);
    setPresetData((prev) => ({
      ...prev,
      images: [...prev.images.slice(0, index), ...prev.images.slice(index + 1)],
      answers: [
        ...prev.answers.slice(0, index),
        ...prev.answers.slice(index + 1),
      ],
      imageUrls: [
        ...prev.imageUrls.slice(0, index),
        ...prev.imageUrls.slice(index + 1),
      ],
    }));
  };

  const modifyCurrentQuiz = (index: number) => {
    console.log(index);
    openModal(<AddQuizModal storeNewQuiz={storeNewQuiz} />);
  };
  
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const title = event.target.value;
    if(title.length > 50){
      toast.error("프리셋 제목은 50글자 이상 지정할 수 없습니다. ");
      return;
    }
    setPresetData((prev)=>({...prev, 
      title : event.target.value,
    }))
    console.log(presetData);
  }
  
  const handleToggle=(status: boolean)=>{
    setPresetData((prev)=>({...prev, 
      isPrivate : status,
    }))
  };

  const handleHashtag=(hashtagList : string[])=>{
    setPresetData((prev)=>({
      ...prev,
      hashtagList
    }));
  }

  const submitQuizData = async () => {
    const { answers, images, title, isPrivate} = presetData;

    const isEmpty = !answers.length || !images.length;
    const isNotSame = answers.length !== images.length;

    if (!isEmpty && isNotSame) {
      toast.error('최소 1개 이상의 퀴즈를 등록해야 합니다.');
      return;
    }

    if (!title) {
      toast.error('퀴즈 프리셋 이름은 반드시 등록해야 합니다.');
      return;
    }

    const formData = new FormData();
    images.map((image) => formData.append('images', image));
    answers.map((answer) => formData.append('answers', answer));
    formData.append('title', title);
    formData.append('isPrivate', JSON.stringify(isPrivate));

    try {
      const { presetPin } = await QuizRepository.postCreateNewPresetAsync({
        answers,
        images,
        title,
        isPrivate,
      });
      await copyClipboard(presetPin);
      toast.success('프리셋을 생성하여 PIN을 복사했습니다.');
      // FIXME : 백엔드에서 썸네일 이미지를 받아오는 로직이 추가되면 수정 필요
      openModal(
        <GameStartModal
          presetPin={presetPin}
          title={title}
          thumbnailUrl={'test'}
        />,
      );
      navigate(`/`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <styles.CreateQuizWrapper>
      <styles.Title>
        <styles.PointTitle>새로운 퀴즈</styles.PointTitle> 만들기
      </styles.Title>
      <styles.GetPresetButton>기존 퀴즈 복사해서 만들기</styles.GetPresetButton>
      <styles.NameLabel>
        퀴즈 이름 <styles.InfoLabel>(최대 50글자)</styles.InfoLabel>
      </styles.NameLabel>
      <styles.NameInput onChange={handleTitle} value={presetData.title}>
      </styles.NameInput>
      <styles.NameLabelWrapper>
        <styles.NameLabel>퀴즈 비공개</styles.NameLabel>
        <ToggleButton
          onColor={theme.colors.darkblue400}
          offColor={theme.colors.gray400}
          toggleState={handleToggle}
        />
      </styles.NameLabelWrapper>
      <styles.InfoLabel>
        (친구들끼리 플레이를 원한다면 비공개를 설정하세요)
      </styles.InfoLabel>
      <styles.NameLabel>해시태그</styles.NameLabel>
      <styles.InfoLabel>
        (퀴즈를 나타낼 수 있는 해시태그를 만들어주세요)
      </styles.InfoLabel>
      <HashtagInput hashtag={presetData.hashtagList} setHashtag={handleHashtag}/>
      <div>
        <styles.NameLabel>출제 문항</styles.NameLabel>
        <styles.CountLabel> ( {presetData.answers.length} ) </styles.CountLabel>
      </div>
      <styles.QuizListWrapper>
      {presetData.answers &&
        presetData.answers.map((answer, index) => 
         <CreateQuizImage key={index} index={index} answer={answer}  url={presetData.imageUrls[index]} hint={presetData.hintLists[index]} removeQuiz={removeCurrentQuiz} modifyQuiz={modifyCurrentQuiz}/>
      )}
      <styles.AddQuizWrapper>
        <styles.UploadText src="/src/assets/images/uploadQuizText.svg" />
        <styles.ArrowIcon src="/src/assets/icons/arrowIcon.svg" />
        <styles.UploadQuizButton onClick={openAddQuizModal}>추가하기</styles.UploadQuizButton>
      </styles.AddQuizWrapper>
      </styles.QuizListWrapper>
      <styles.AddNewQuizButton onClick={submitQuizData}>퀴즈 생성하기</styles.AddNewQuizButton>
    </styles.CreateQuizWrapper>
  );
};

export default CreateQuiz;

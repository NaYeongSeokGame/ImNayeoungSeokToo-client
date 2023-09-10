import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import QuizRepository from '@/apis/quiz';
import AddQuizModal from '@/components/main/AddQuizModal';
import CreateQuizImage from '@/components/main/CreateQuizImageView/CreateQuizImage';
import GameStartModal from '@/components/main/GameStartModal';
import HashtagInput from '@/components/main/HastagInput';
import ToggleButton from '@/components/main/ToggleButton/ToggleButton';
import useModal from '@/hooks/useModal';
import { createdQuizPresetAtomWithLocalStorage } from '@/stores/quiz';
import { theme } from '@/styles/theme';
import { CreatePresetWithUrlType, CreateQuizWithUrlType } from '@/types/quiz';
import copyClipboard from '@/utils/copyClipboard';

import * as styles from './CreateQuiz.style';

const CreateQuiz = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const [presetData, setPresetData] = useState<CreatePresetWithUrlType>({
    images: [], //미사용
    imageUrls: [], //미사용
    answers: [], //미사용
    hintList: [], //미사용
    hashtagList: [],
    title: '',
    isPrivate: false,
  });

  const [quizList, setQuizList] = useState<CreateQuizWithUrlType[]>([]);
  const setCreatedPreset = useSetAtom(createdQuizPresetAtomWithLocalStorage);

  const updateQuiz = (data: CreateQuizWithUrlType, index: number) => {
    const newQuizList = [...quizList];
    newQuizList[index] = data;
    setQuizList(newQuizList);
  };

  const openAddQuizModal = () => {
    openModal(<AddQuizModal updateQuiz={updateQuiz} index={quizList.length} />);
  };

  const modifyCurrentQuiz = (index: number) => {
    openModal(
      <AddQuizModal
        updateQuiz={updateQuiz}
        index={index}
        initialData={quizList[index]}
      />,
    );
  };

  const removeCurrentQuiz = (index: number) => {
    setQuizList((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;
    if (title.length > 50) {
      toast.error('퀴즈 프리셋 제목은 50글자 이상 지정할 수 없습니다. ');
      return;
    }
    setPresetData((prev) => ({ ...prev, title: event.target.value }));
  };

  const handleToggle = (status: boolean) => {
    setPresetData((prev) => ({ ...prev, isPrivate: status }));
  };

  const handleHashtag = (hashtagList: string[]) => {
    setPresetData((prev) => ({
      ...prev,
      hashtagList,
    }));
  };

  const savePresetDataAndGameStart = async (presetPin: string) => {
    const { isPrivate, thumbnailUrl, title } =
      await QuizRepository.getQuizByPinAsync(presetPin);
    setCreatedPreset({
      type: 'ADD',
      item: { presetPin, isPrivate, thumbnailUrl, title },
    });

    openModal(
      <GameStartModal
        presetPin={presetPin}
        title={title}
        thumbnailUrl={thumbnailUrl}
      />,
    );
  };

  const submitQuizData = async () => {
    const { hashtagList, title, isPrivate } = presetData;
    const images = quizList.map((value) => value.image);
    const answers = quizList.map((value) => value.answer);
    const hintList = quizList.map((value) => value.hint);

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

    try {
      const { presetPin } = await QuizRepository.postCreateNewPresetAsync({
        answers,
        images,
        title,
        isPrivate,
        hashtagList: hashtagList ?? [],
        hintList,
      });
      await copyClipboard(presetPin);
      toast.success('퀴즈 프리셋을 생성하여 PIN을 복사했습니다.');
      savePresetDataAndGameStart(presetPin);
      navigate(`/`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <styles.CreateQuizWrapper>
      <styles.Title>
        <styles.PointTitle>퀴즈 프리셋</styles.PointTitle> 만들기
      </styles.Title>
      <styles.GetPresetButton>
        기존 퀴즈 프리셋 복사해서 만들기
      </styles.GetPresetButton>
      <styles.NameLabelWrapper>
        <styles.InputWrapper>
          <styles.NameLabel>
            퀴즈 이름 <styles.InfoLabel>(최대 50글자)</styles.InfoLabel>
          </styles.NameLabel>
          <styles.NameInput
            onChange={handleTitle}
            value={presetData.title}
          ></styles.NameInput>
        </styles.InputWrapper>

        <styles.InputWrapper>
          <styles.PrivateWrapper>
            <styles.NameLabel>퀴즈 비공개</styles.NameLabel>
            <ToggleButton
              onColor={theme.colors.darkblue400}
              offColor={theme.colors.gray400}
              toggleState={handleToggle}
            />
          </styles.PrivateWrapper>
          <styles.InfoLabel>
            (친구들끼리 플레이를 원한다면 비공개를 설정하세요)
          </styles.InfoLabel>
        </styles.InputWrapper>

        <styles.InputWrapper>
          <styles.NameLabel>해시태그</styles.NameLabel>
          <styles.InfoLabel>
            (퀴즈를 나타낼 수 있는 해시태그를 만들어주세요)
          </styles.InfoLabel>
          <HashtagInput
            hashtag={presetData.hashtagList}
            setHashtag={handleHashtag}
          />
        </styles.InputWrapper>
      </styles.NameLabelWrapper>

      <div>
        <styles.NameLabel>출제 문항</styles.NameLabel>
        <styles.CountLabel> ( {quizList.length} ) </styles.CountLabel>
      </div>
      <styles.QuizListWrapper>
        {quizList &&
          quizList.map((quiz, index) => (
            <CreateQuizImage
              key={index}
              index={index}
              answer={quiz.answer}
              url={quiz.imageUrl}
              hint={quiz.hint}
              removeQuiz={removeCurrentQuiz}
              modifyQuiz={modifyCurrentQuiz}
            />
          ))}
        {quizList.length < 10 && (
          <styles.AddQuizWrapper>
            <styles.UploadText src="/src/assets/images/uploadQuizText.svg" />
            <styles.ArrowIcon src="/src/assets/icons/arrowIcon.svg" />
            <styles.UploadQuizButton onClick={openAddQuizModal}>
              추가하기
            </styles.UploadQuizButton>
          </styles.AddQuizWrapper>
        )}
      </styles.QuizListWrapper>
      <styles.AddNewQuizButton onClick={submitQuizData}>
        프리셋 생성하기
      </styles.AddNewQuizButton>
    </styles.CreateQuizWrapper>
  );
};

export default CreateQuiz;

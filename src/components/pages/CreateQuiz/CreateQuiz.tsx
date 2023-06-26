import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import QuizRepository from '@/apis/quiz';
import { ReactComponent as MinusIconSvg } from '@/assets/icons/minusIcon.svg';
import { ReactComponent as PlusIconSvg } from '@/assets/icons/plusIcon.svg';
import { ReactComponent as PurplePlusIconSvg } from '@/assets/icons/purplePlusIcon.svg';
import AddQuizModal from '@/components/main/AddQuizModal';
import useModal from '@/hooks/useModal';
import { CreatePresetWithUrlType, CreateQuizWithUrlType } from '@/types/quiz';
import copyClipboard from '@/utils/copyClipboard';

import * as styles from './CreateQuiz.style';

const CreateQuiz = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const [quizAmount, setQuizAmount] = useState(1);
  const [presetData, setPresetData] = useState<CreatePresetWithUrlType>({
    images: [],
    imageUrls: [],
    answers: [],
    title: '',
    isPrivate: false,
  });

  const handleQuizAmount = (diff: 1 | -1) => {
    const changedResult = quizAmount + diff;
    if (changedResult < 1 || changedResult > 9) {
      toast.error('퀴즈 수량은 1개 이상 9개 이하만 가능합니다.');
      return;
    }
    setQuizAmount((prev) => prev + diff);
    setPresetData((prev) => ({
      ...prev,
      images: [...prev.images.slice(0, changedResult)],
      answers: [...prev.answers.slice(0, changedResult)],
      imageUrls: [...prev.imageUrls.slice(0, changedResult)],
    }));
  };

  const handlePresetTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPresetData((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const removeCurrentQuiz = (index: number) => {
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

  const submitQuizData = async () => {
    const { answers, images, title, isPrivate } = presetData;

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
      navigate(`/quiz/${presetPin}/loading`);
    } catch (error) {
      console.error(error);
    }
  };

  const openAddQuizModal = () =>
    openModal(<AddQuizModal storeNewQuiz={storeNewQuiz} />);

  const leftEmptySlotAmount = quizAmount - presetData.images.length;

  return (
    <>
      <styles.Title />
      <styles.PresetNameInput
        placeholder="퀴즈 이름"
        value={presetData.title}
        onChange={handlePresetTitleInput}
      />
      <styles.QuizAmountCounter>
        <PlusIconSvg onClick={() => handleQuizAmount(1)} />
        {quizAmount}
        <MinusIconSvg onClick={() => handleQuizAmount(-1)} />
      </styles.QuizAmountCounter>
      <styles.QuizGridSection>
        {/** FIXME : 구조 개선 필요 */}
        {presetData.imageUrls.map((imageUrl, index) => {
          const currentIndexAnswer = presetData.answers[index];
          return (
            <styles.QuizSlotWrapper onClick={() => removeCurrentQuiz(index)}>
              <styles.QuizSlot imageUrl={imageUrl} />
              <p>{currentIndexAnswer}</p>
            </styles.QuizSlotWrapper>
          );
        })}
        {/** FIXME : 구조 개선 필요 */}
        {Array.from({ length: leftEmptySlotAmount }).map((_, index) => {
          const isFirstSlot = !presetData.images.length && index === 0;
          return (
            <styles.EmptyQuizSlotWrapper
              isFirst={isFirstSlot}
              onClick={openAddQuizModal}
            >
              <styles.EmptyQuizSlot isFirst={isFirstSlot}>
                {isFirstSlot ? <PurplePlusIconSvg /> : <PlusIconSvg />}
              </styles.EmptyQuizSlot>
              <p>정답</p>
            </styles.EmptyQuizSlotWrapper>
          );
        })}
      </styles.QuizGridSection>
      <styles.CreatePresetBtn onClick={submitQuizData}>
        CREATE QUIZ
      </styles.CreatePresetBtn>
    </>
  );
};

export default CreateQuiz;

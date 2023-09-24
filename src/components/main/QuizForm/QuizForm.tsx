import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import QuizRepository from '@/apis/quiz';
import ArrowIconUrl from '@/assets/icons/arrowIcon.svg';
import UploadTextUrl from '@/assets/images/uploadQuizText.svg';
import AddQuizModal from '@/components/main/AddQuizModal';
import CreateQuizImage from '@/components/main/CreateQuizImageView';
import HashtagInput from '@/components/main/HastagInput';
import ToggleButton from '@/components/main/ToggleButton/ToggleButton';
import useModal from '@/hooks/useModal';
import { createdQuizPresetAtomWithLocalStorage } from '@/stores/quiz';
import { theme } from '@/styles/theme';
import {
  CreateQuizWithUrlType,
  GetQuizListOutput,
  QuizPresetType,
  QuizType,
} from '@/types/quiz';

import * as styles from './QuizForm.style';

interface QuizFormProps {
  presetPin?: string;
  originData?: GetQuizListOutput;
}

const convertURLtoFile = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split('.').pop(); // url 구조에 맞게 수정할 것
  const filename = url.split('/').pop() ?? 'noname'; // url 구조에 맞게 수정할 것
  const metadata = { type: `image/${ext}` };
  return new File([data], filename, metadata);
};

const convertQuizList = (quizList: QuizType[]) => {
  return Promise.all(
    quizList.map((quiz) =>
      convertURLtoFile(quiz.imageUrl).then((imageFile) => {
        return {
          hint: quiz.hint,
          image: imageFile,
          answer: quiz.answer,
          imageUrl: quiz.imageUrl,
        };
      }),
    ),
  );
};

const QuizForm = ({ originData }: QuizFormProps) => {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const [presetData, setPresetData] = useState<QuizPresetType>({
    isPrivate: originData?.isPrivate ?? false,
    title: originData?.title ?? '',
    presetPin: originData?.presetPin ?? '',
    thumbnailUrl: originData?.thumbnailUrl ?? '',
    hashtagList: originData?.hashtagList ?? [],
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
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setQuizList((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
    }
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
      hashtagList: hashtagList,
    }));
  };

  const savePresetData = async (presetPin: string) => {
    const { isPrivate, thumbnailUrl, title } =
      await QuizRepository.getQuizByPinAsync(presetPin);
    setCreatedPreset({
      type: 'MODIFY',
      item: { presetPin, isPrivate, thumbnailUrl, title },
    });
  };

  const submitQuizData = async () => {
    const { hashtagList, title, isPrivate } = presetData;
    const images = quizList.map((value) => value.image);
    const answers = quizList.map((value) => value.answer);
    const hints = quizList.map((value) => value.hint);

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
      const { presetPin } = await QuizRepository.patchPresetAsync({
        answers,
        images,
        title,
        isPrivate,
        hashtagList: hashtagList ?? [],
        hintList: hints,
      });

      savePresetData(presetPin);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (originData) {
      (async () => {
        const list = await convertQuizList(originData.quizList);
        setQuizList(list);
      })();
    }
  }, [originData]);

  return (
    <>
      <styles.NameLabelWrapper>
        <styles.InputWrapper>
          <styles.NameLabel>
            퀴즈 프리셋 이름 <styles.InfoLabel>(최대 50글자)</styles.InfoLabel>
          </styles.NameLabel>
          <styles.NameInput
            onChange={handleTitle}
            value={presetData.title}
          ></styles.NameInput>
        </styles.InputWrapper>

        <styles.InputWrapper>
          <styles.PrivateWrapper>
            <styles.NameLabel>퀴즈 프리셋 비공개</styles.NameLabel>
            <ToggleButton
              onColor={theme.colors.darkblue400}
              offColor={theme.colors.gray400}
              toggleState={handleToggle}
              defaultValue={presetData.isPrivate}
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
            hashtag={presetData.hashtagList ?? []}
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
            <styles.UploadText src={UploadTextUrl} />
            <styles.ArrowIcon src={ArrowIconUrl} />
            <styles.UploadQuizButton onClick={openAddQuizModal}>
              추가하기
            </styles.UploadQuizButton>
          </styles.AddQuizWrapper>
        )}
      </styles.QuizListWrapper>
      <styles.AddNewQuizButton onClick={submitQuizData}>
        퀴즈 수정하기
      </styles.AddNewQuizButton>
    </>
  );
};

export default QuizForm;

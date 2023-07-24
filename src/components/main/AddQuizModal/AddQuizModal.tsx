import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import useModal from '@/hooks/useModal';
import { CreateQuizWithUrlType } from '@/types/quiz';
import previewImage from '@/utils/previewImage';

import * as styles from './AddQuizModal.style';

interface AddQuizModalProps {
  storeNewQuiz: ({ answer, image, imageUrl }: CreateQuizWithUrlType) => void;
}

const AddQuizModal = ({ storeNewQuiz }: AddQuizModalProps) => {
  const { closeModal } = useModal();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [quizData, setQuizData] = useState<CreateQuizWithUrlType>({
    image: null,
    answer: '',
    imageUrl: '',
    hint: '',
  });

  const openFileUploadDialog = () => fileInputRef.current?.click();

  useEffect(() => {
    openFileUploadDialog();
  }, []);

  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const [uploadedFile] = e.target.files ?? [];
    if (!uploadedFile) return;

    const imageUrl = await previewImage(uploadedFile);

    setQuizData((prev) => ({
      ...prev,
      image: uploadedFile,
      imageUrl: imageUrl || '',
    }));
  };

  const handleAnswerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizData((prev) => ({
      ...prev,
      answer: e.target.value,
    }));
  };
  const handleHintInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizData((prev) => ({
      ...prev,
      hint: e.target.value,
    }));
  };

  const removeUploadedFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      setQuizData((prev) => ({ ...prev, image: null, imageUrl: '' }));
    }
  };

  const verifySubmitQuiz = () => {
    const { image, answer, imageUrl, hint } = quizData;
    if (!image || !answer || !imageUrl) {
      toast.error('이미지, 정답 모두 업로드 해야 합니다!');
      return;
    }
    storeNewQuiz({ image, answer, imageUrl, hint });
    closeModal();
  };

  // 제출 완료용 버튼 Components
  const SubmitQuizButton = useCallback(
    () => (
      <styles.SubmitButton onClick={verifySubmitQuiz}>
        저장하기
      </styles.SubmitButton>
    ),
    [quizData],
  );

  return (
    <styles.Section>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleUploadFile}
      />
      <styles.ButtonWrapper>
        <styles.SettingButton onClick={openFileUploadDialog}>
          이미지 재선택
        </styles.SettingButton>
        <styles.SettingButton onClick={removeUploadedFile}>
          삭제
        </styles.SettingButton>
      </styles.ButtonWrapper>
      
      <styles.UploadSection>
        {quizData.imageUrl && (
          <styles.UploadImage src={quizData.imageUrl} alt="image" />
        )}
      </styles.UploadSection>
      <styles.AnswerSection>
        <styles.NormalText>위 사진에 대해서 <styles.PointText>설명</styles.PointText>해주세요.</styles.NormalText>
        <styles.OptionBox>
          <styles.AnswerLabel>이름</styles.AnswerLabel>
            <styles.AnswerInput
              value={quizData.answer}
              onChange={handleAnswerInput}
            />
        </styles.OptionBox>
        <styles.InfoText>퀴즈의 정답이 됩니다. </styles.InfoText>

        <styles.OptionBox>
          <styles.AnswerLabel>힌트</styles.AnswerLabel>
            <styles.AnswerInput
              value={quizData.hint}
              onChange={handleHintInput}
            />
        </styles.OptionBox>
        <styles.InfoText>문제를 풀 때 힌트로 쓸 수 있어요</styles.InfoText>
      </styles.AnswerSection>
      <SubmitQuizButton />
    </styles.Section>
  );
};

export default AddQuizModal;

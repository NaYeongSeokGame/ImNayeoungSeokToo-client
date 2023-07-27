import { useCallback, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { ReactComponent as PlusIconSvg } from '@/assets/icons/plusIcon.svg';
import ModalTemplate from '@/components/common/ModalTemplate';
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
  });

  const openFileUploadDialog = () => fileInputRef.current?.click();

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

  const removeUploadedFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      setQuizData((prev) => ({ ...prev, image: null, imageUrl: '' }));
    }
  };

  const verifySubmitQuiz = () => {
    const { image, answer, imageUrl } = quizData;
    if (!image || !answer || !imageUrl) {
      toast.error('이미지, 정답 모두 업로드 해야 합니다!');
      return;
    }
    storeNewQuiz({ image, answer, imageUrl });
    closeModal();
  };

  // 제출 완료용 버튼 Components
  const SubmitQuizButton = useCallback(
    () => (
      <styles.SubmitButton onClick={verifySubmitQuiz}>완료</styles.SubmitButton>
    ),
    [quizData],
  );

  return (
    <ModalTemplate buttons={[<SubmitQuizButton />]}>
      <styles.Section>
        <styles.OptionBox>
          <p>이미지 추가하기</p>
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleUploadFile}
          />
          <styles.UploadSection
            onClick={quizData.image ? removeUploadedFile : openFileUploadDialog}
          >
            {quizData.imageUrl ? (
              <img src={quizData.imageUrl} alt="image" />
            ) : (
              <PlusIconSvg />
            )}
          </styles.UploadSection>
        </styles.OptionBox>
        <styles.OptionBox>
          <p>정답 입력하기</p>
          <styles.AnswerInput
            placeholder="정답 입력"
            value={quizData.answer}
            onChange={handleAnswerInput}
          />
        </styles.OptionBox>
      </styles.Section>
    </ModalTemplate>
  );
};

export default AddQuizModal;

import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';

import { QuizFileAndAnswer } from '@/types/imageUploadmodal';
import previewImage from '@/utils/previewImage';

type UploadModalProps = {
  setQuizPreset: React.Dispatch<React.SetStateAction<QuizFileAndAnswer[]>>;
};

const UploadModal = ({ setQuizPreset }: UploadModalProps) => {
  const [quizImage, setQuizImage] = useState<File>();
  const [preview, setPreview] = useState<string | null>(null);

  const answerRef = useRef<HTMLInputElement | null>(null);
  const answer = answerRef.current?.value;

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setQuizImage(file);

    const previewURL = await previewImage(file);
    setPreview(previewURL);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!quizImage) {
      // TODO: toast 같은 안내 메시지 처리
      console.log('파일을 업로드해주세요');
      return;
    }

    if (answer?.trim() === '') {
      console.log('정답을 확인해주세요');
      return;
    }

    answer && setQuizPreset((prev) => [...prev, { file: quizImage, answer }]);
  };

  return (
    <ModalContainer>
      <Form onSubmit={handleSubmit}>
        {!preview && (
          <ImageLabel htmlFor="imageUploader">
            출제할 인물을 업로드 해주세요
          </ImageLabel>
        )}
        {preview ? (
          <img src={preview} />
        ) : (
          <ImageUploader
            id="imageUploader"
            type="file"
            accept=".jpg,.png,.jpeg"
            onChange={handleUploadImage}
          />
        )}
        <AnswerInput type="text" placeholder="정답" ref={answerRef} />
        <SubmitButton>저장</SubmitButton>
      </Form>
    </ModalContainer>
  );
};

export default UploadModal;

const ModalContainer = styled.div``;

const Form = styled.form``;

const ImageLabel = styled.label``;

const ImageUploader = styled.input``;

const AnswerInput = styled.input``;

const SubmitButton = styled.button``;

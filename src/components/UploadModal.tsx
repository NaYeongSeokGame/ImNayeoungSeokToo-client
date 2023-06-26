import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';

import { QuizFileAndAnswer } from '@/types/interfaces';
import previewImage from '@/utils/previewImage';

type UploadModalProps = {
  setQuizPreset: React.Dispatch<React.SetStateAction<QuizFileAndAnswer[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UploadModal = ({ setQuizPreset, setIsModalOpen }: UploadModalProps) => {
  const [quizImage, setQuizImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string>('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState<boolean>(false);

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setQuizImage(file);

    const previewURL = await previewImage(file);
    setPreview(previewURL);

    if (quizImage && answer.trim().length !== 0) {
      setIsSubmitEnabled(true);
    }
  };

  const handleAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);

    if (quizImage && answer.trim().length !== 0) {
      setIsSubmitEnabled(true);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!quizImage) {
      // TODO: toast 같은 안내 메시지 처리
      console.log('파일을 업로드해주세요');
      return;
    }

    if (answer.trim().length === 0) {
      // TODO: toast 같은 안내 메시지 처리
      console.log('정답을 확인해주세요');
      return;
    }

    setQuizPreset((prev) => [...prev, { file: quizImage, answer }]);
    setIsModalOpen(false);
  };

  return (
    <ModalContainer>
      <Form onSubmit={handleSubmit}>
        {!preview && (
          <ImageLabel htmlFor="imageUploader">이미지 추가하기</ImageLabel>
        )}
        {preview ? (
          <PreviewImage src={preview} />
        ) : (
          <ImageUploader
            id="imageUploader"
            type="file"
            accept=".jpg,.png,.jpeg"
            onChange={handleUploadImage}
            required
          />
        )}
        <div>
          <AnswerLabel>정답란 입력하기</AnswerLabel>
          <AnswerInput
            type="text"
            placeholder="정답을 입력해주세요"
            value={answer}
            onChange={handleAnswer}
            required
          />
        </div>
        <SubmitButton disabled={!isSubmitEnabled}>완료</SubmitButton>
      </Form>
    </ModalContainer>
  );
};

export default UploadModal;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 800px;
  background-color: #97979780;
  position: fixed;
  top: 0;
`;

const Form = styled.form`
  position: relative;
  width: 300px;
  height: 376px;
  border-radius: 20px;
  border: 5px solid #000;
  background-color: #fff;
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ImageLabel = styled.label`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 400px;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const ImageUploader = styled.input`
  width: 240px;
  height: 144px;
  margin-bottom: 1rem;

  &::file-selector-button {
    width: 240px;
    height: 144px;
    border-radius: 20px;
    border: 5px solid black;
    cursor: pointer;
    background-color: #fff;
    box-sizing: border-box;
  }
`;

const AnswerLabel = styled(ImageLabel)`
  width: 100%;
  margin-bottom: 0.5rem;
`;

const AnswerInput = styled.input`
  width: 240px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  border: 5px solid black;
  text-align: center;

  &::placeholder::focus {
    color: transparent;
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  bottom: -6rem;
  width: 160px;
  height: 64px;
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.primaryPurple};
  font-size: 32px;
  font-weight: 400;
  border-radius: 20px;
  border: 5px solid black;
  cursor: pointer;
`;

const PreviewImage = styled.img`
  display: block;
  width: 240px;
  height: 144px;
  margin-bottom: 1rem;
`;

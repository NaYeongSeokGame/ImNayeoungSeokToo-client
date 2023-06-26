import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';

import { QuizFileAndAnswer } from '@/types/interfaces';
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
        <InputContainer>
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
            />
          )}
        </InputContainer>
        <AnswerLabel>정답란 입력하기</AnswerLabel>
        <AnswerInput
          type="text"
          placeholder="정답을 입력해주세요"
          ref={answerRef}
        />
        <SubmitButton>완료</SubmitButton>
      </Form>
    </ModalContainer>
  );
};

export default UploadModal;

const ModalContainer = styled.div`
  width: 300px;
  height: 376px;
  border-radius: 20px;
  border: 5px solid #000;
  background-color: #fff;
`;

const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageLabel = styled.label`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 400px;
  font-family: LOTTERIA CHAB;
`;

const ImageUploader = styled.input`
  width: 240px;
  height: 144px;
  margin-bottom: 1rem;

  &::file-selector-button {
    width: 240px;
    height: 144px;
    padding: 10px;
    background-color: #f1f1f1;
    border: none;
    border-radius: 4px;
    color: #333;
  }
`;

const AnswerLabel = styled(ImageLabel)`
  width: 100%;
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
  width: 160px;
  height: 64px;
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.primaryPurple};
  font-size: 32px;
  font-weight: 400;
  border-radius: 20px;
  border: 5px solid black;
`;

const InputContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
`;

const PreviewImage = styled.img`
  display: block;
  width: 240px;
  height: 144px;
  margin-bottom: 1rem;
`;

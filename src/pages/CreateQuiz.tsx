import { env } from 'process';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import AddQuizButtonGrid from '@/components/AddQuizButtonGrid';
import Logo from '@/components/Logo';
import UploadModal from '@/components/UploadModal';
import { QuizFileAndAnswer } from '@/types/interfaces';

import plusLogo from '../assets/icons/+_black.svg';

const CreateQuiz = () => {
  const [count, setCount] = useState<number>(3);
  const [title, setTitle] = useState<string>('퀴즈이름');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [quizPreset, setQuizPreset] = useState<QuizFileAndAnswer[]>([]);
  useEffect(() => {
    const temp = [];
    for (let i: number = 0; i < count; i++) {
      temp.push({ answer: '' });
    }
    setQuizPreset(temp);
  }, []);

  const handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onPlusClicked = () => {
    if (count > 8) {
      alert('문제는 최대 9개까지 생성할 수 있습니다');
    }
    setCount(count + 1);
    setQuizPreset([...quizPreset, { answer: '' }]);
  };

  const onMinusClicked = () => {
    if (count > 3) {
      setCount(count - 1);
      const n_arr = [...quizPreset];
      n_arr.pop();
      setQuizPreset(n_arr);
    } else {
      alert('3개 이상 문제를 만들어주세요. ');
    }
  };

  const addContent = (event: React.MouseEvent<HTMLElement>) => {
    const id = event.currentTarget.id; //index 값
    console.log(id);
    //모달오픈
    setIsModalOpen(true);
  };

  const uploadNewQuiz = () => {
    //api에 업로드
  };

  return (
    <CreateQuizLayout>
      <Logo />
      <QuizTitleInput
        type="text"
        onChange={handleInputText}
        value={title}
      ></QuizTitleInput>
      <QuizCounter>
        <CounterMinus onClick={onMinusClicked}>-</CounterMinus>
        <Count>{count}</Count>
        <CounterPlus onClick={onPlusClicked}>
          <img src={plusLogo}></img>
        </CounterPlus>
      </QuizCounter>

      <QuizGridLayout>
        <AddQuizButtonGrid fileAndAnswer={quizPreset} addContent={addContent} />
      </QuizGridLayout>
      <CreateQuizButton>CREATE QUIZ</CreateQuizButton>
      {isModalOpen && (
        <UploadModal
          setQuizPreset={setQuizPreset}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </CreateQuizLayout>
  );
};

export default CreateQuiz;

const CreateQuizLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuizTitleInput = styled.input`
  width: 14rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 20px;
  border: 5px solid #000;
  background: #fff;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.1);

  text-align: center;
  font-size: 1.125rem;
  font-family: LOTTERIA CHAB;
  margin-top: 1.88rem;
  margin-bottom: 0.5rem;
`;

const QuizCounter = styled.div`
  width: 14rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  border: 5px solid #000;
  background: #fff;
`;
const QuizGridLayout = styled.div`
  height: 24.62rem;
  margin-top: 0.63rem;
`;

const CounterPlus = styled.p`
  width: 1.90906rem;
  height: 1.875rem;
  cursor: pointer;
`;
const CounterMinus = styled.p`
  width: 1.90906rem;
  height: 1.875rem;
  cursor: pointer;
`;
const Count = styled.p`
  font-size: 2.625rem;
  font-family: Pretendard;
  font-weight: 700;
`;

const CreateQuizButton = styled.button`
  width: 13.75rem;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 20px;
  border: 5px solid #000;
  background: #fff;
  color: #000;
  margin-top: 1.75rem;
  font-size: 1.125rem;
  font-family: LOTTERIA CHAB;
  cursor: pointer;
`;

import { env } from 'process';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import AddQuizButton from '@/components/AddQuizButton';
import AddQuizButtonGrid from '@/components/AddQuizButtonGrid';
import { QuizFileAndAnswer } from '@/types/interfaces';

const CreateQuiz = () => {
  const [count, setCount] = useState<number>(3);
  const [title, setTitle] = useState<string>('');
  const [fileAndAnswer, setFileAndAnswer] = useState<QuizFileAndAnswer[]>([]);

  useEffect(() => {
    renderQuizButton(count);
  }, []);

  const renderQuizButton = (count: number) => {
    setCount(count); //데이터 입력 중에 추가했을 때는?
    const temp = [];
    for (let i: number = 0; i < count; i++) {
      temp.push({ answer: '' });
    }
    setFileAndAnswer(temp);
  };

  const handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onPlusClicked = () => {
    if(count >8){
      alert("문제는 최대 9개까지 생성할 수 있습니다");
    }
    renderQuizButton(count + 1);
  };

  const onMinusClicked = () => {
    if (count > 4) {
      renderQuizButton(count - 1);
    } else {
      alert('3개 이상 문제를 만들어주세요. ');
    }
  };
  const addContent = (event: React.MouseEvent<HTMLElement>) => {
    const id = event.currentTarget.id; //index 값
    console.log(id);
    //모달오픈
  };
  const uploadNewQuiz = () => {
    //api에 업로드
  };
  return (
    <CreateQuizLayout>
      <QuizTitleLayout>
        <QuizTitleInput
          type="text"
          placeholder="퀴즈 이름을 입력해주세요 "
          onChange={handleInputText}
          value={title}
        ></QuizTitleInput>
      </QuizTitleLayout>
      <QuizCounter>
        <button onClick={onMinusClicked}>-</button>
        {count}
        <button onClick={onPlusClicked}>+</button>
      </QuizCounter>


      <AddQuizButtonGrid
        fileAndAnswer={fileAndAnswer}
        addContent={addContent}
      />
      <button>홈 화면으로 돌아가기</button>
    </CreateQuizLayout>
  );
};

export default CreateQuiz;

const CreateQuizLayout = styled.div`
margin : 0 auto;
  padding: 50px 0px;
  width: 30vw;
  height: 100vh;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const QuizTitleInput = styled.input``;
const QuizTitleLayout = styled.div`
  margin: 0 auto;
`;

const QuizCounter = styled.div``;

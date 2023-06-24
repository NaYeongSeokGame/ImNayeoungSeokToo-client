import React, { useEffect, useState } from 'react';

import AddQuizButton from '@/components/AddQuizButton';

const CreateQuiz = () => {
  const [count, setCount] = useState<number>(3);
  const [title, setTitle] = useState<string>("");

  
  const createButton = (count: number) => {
    const ret = [];
    for (let i = 0; i < count; i++) {
      ret.push(
        <AddQuizButton
          image="https://picsum.photos/seed/picsum/200/300"
          answer={'test' + i}
        />,
      );
    }
    return ret;
  };

  const handleInputText = (event:any)=>{
    setTitle(event.target.value);
  }

  const onPlusClicked = () => {
    setCount(count + 1);
  };
  const onMinusClicked = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert('1개 이상 문제를 만들어주세요. ');
    }
  };

  const uploadNewQuiz = ()=>{
    //api에 업로드 
  }

  return (
    <div>
      <div>
        <button onClick={onMinusClicked}>-</button>
        {count}
        <button onClick={onPlusClicked}>+</button>
      </div>
      <div>{createButton(count).map((i) => i)}</div>
      <input type="text" placeholder='퀴즈 이름을 입력해주세요 ' onChange={handleInputText} value={title}></input>
      <button>홈 화면으로 돌아가기</button>
    </div>
  );
};

export default CreateQuiz;

import React, { useEffect, useState } from "react";

const CreateQuiz = () => {
  const [quizCount, setQuizCount] = useState(9);
  const createButton =()=>{
  }

  const onPlusClicked=()=>{
    setQuizCount(quizCount +1);
  }
  const onMinusClicked=()=>{
    if(quizCount > 1){
      setQuizCount(quizCount-1);
    }else{
      alert("1개 이상 문제를 만들어주세요. ");
    }
  }

  return (
    <div>
      <button onClick={onMinusClicked}>-</button>    
      {quizCount}
      <button onClick={onPlusClicked}>+</button>    

      <div>
      </div>
    </div>
  );
};

export default CreateQuiz;

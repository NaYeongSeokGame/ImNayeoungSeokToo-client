import React from 'react';

interface QuizProps {
  image: string | undefined;
  answer: string | undefined;
}

//360 * 800

const AddQuizButton = (props: QuizProps) => {
  const addContent = () => {
    //모달오픈
  };

  return (
    <div onClick={addContent}>
      {props.image ? <img src={props.image}></img> : <h1>+</h1>}
      {props.answer ? <p>{props.answer}</p> : <p>답을 입력해주세요</p>}
    </div>
  );
};

export default AddQuizButton;

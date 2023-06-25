import { styled } from 'styled-components';
import React from 'react';
import { fileURLToPath } from 'url';
import { QuizButtonProps, QuizFileAndAnswer } from '@/types/interfaces';


const AddQuizButton = (props : QuizButtonProps) => {
  return (
    <div onClick={props.onClick} id={props.index.toString()} >
      {props.contents.file ? <img  src={URL.createObjectURL(props.contents.file)}></img> : <h1  >+</h1>}
      {props.contents.answer ? <p>{props.contents.answer}</p> : <p>답을 입력해주세요</p>}
    </div>
  );
};

export default AddQuizButton;

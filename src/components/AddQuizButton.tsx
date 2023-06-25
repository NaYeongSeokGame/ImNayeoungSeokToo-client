import React from 'react';
import { styled } from 'styled-components';
import { isStyledComponent } from 'styled-components';
import { fileURLToPath } from 'url';

import { QuizButtonProps, QuizFileAndAnswer } from '@/types/interfaces';

const AddQuizButton = (props: QuizButtonProps) => {
  return (
    <QuizButtonLayout onClick={props.onClick} id={props.index.toString()}>
      <FileItem>
        {props.contents.file ? (
          <img src={URL.createObjectURL(props.contents.file)}></img>
        ) : (
          <h1>+</h1>
        )}
      </FileItem>
      <AnswerItem>
        {props.contents.answer ? (
          <p>{props.contents.answer}</p>
        ) : (
          <p>정답</p>
        )}
      </AnswerItem>
    </QuizButtonLayout>
  );
};

export default AddQuizButton;

const QuizButtonLayout = styled.div`
  width: 30%;
 padding: 1px;
  margin: 3px;
`;

const FileItem = styled.div`
  text-align: center;
  width : 102px;
  margin : 0 auto;
  border-radius: 5px;
  border: solid 5px purple;
 
`;

const AnswerItem = styled.div`
  text-align: center;
`;

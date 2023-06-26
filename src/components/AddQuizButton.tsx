import React from 'react';
import { styled } from 'styled-components';
import { isStyledComponent } from 'styled-components';
import { fileURLToPath } from 'url';

import { QuizButtonProps, QuizFileAndAnswer } from '@/types/interfaces';
import purplePlus from '../assets/icons/+_purple.svg';
import blackPlus from '../assets/icons/+_black.svg';

const AddQuizButton = (props: QuizButtonProps) => {
  return (
    <QuizButtonLayout onClick={props.onClick} id={props.index.toString()}>
      <FileItem>
        {props.contents.file ? (
          <img src={URL.createObjectURL(props.contents.file)}></img>
        ) : (
          (props.index == 0) ? <img src={purplePlus}></img> : <img src={blackPlus}></img>
        )}
      </FileItem>

      <AnswerItem>
        {props.contents.answer ? <p>{props.contents.answer}</p> : <p>정답</p>}
      </AnswerItem>
    </QuizButtonLayout>
  );
};

export default AddQuizButton;

const QuizButtonLayout = styled.div`
  margin-right: 0.17rem;
  margin-left : 0.17rem;
  margin-bottom: 0.56rem;
`;

const FileItem = styled.div`
  width: 6.375rem;
  height: 6.75rem;
  padding-top : 2.1rem;
  padding-left : 2rem;
  border-radius: 20px;
  border: 5px solid #000000;
  background: #fff;
  box-shadow: 1px 4px 2px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.06rem;
`;

const FileItemFirst = styled.div`
  width: 6.375rem;
  height: 6.75rem;
  border-radius: 20px;
  border: 5px solid #7443ff;
  background: #fff;
  box-shadow: 1px 4px 2px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.06rem;
`;

const AnswerItem = styled.div`
  color: #000000;
  font-size: 1rem;
  font-family: LOTTERIA CHAB;
  text-align : center;
`;

const AnswerItemFirst = styled.div`
  color: #7443ff;
  font-size: 1rem;
  font-family: LOTTERIA CHAB;
  text-align : center;
`;

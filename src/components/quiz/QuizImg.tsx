import React from 'react';
import styled from 'styled-components';

import { Quiz } from '@/types/Quiz.ts';

const QuizImg = ({ imageUrl }: QuizImgProps) => {
  return (
    <QuizImgWrapper>
      <StyledImg url={imageUrl} />
    </QuizImgWrapper>
  );
};

export default QuizImg;

type QuizImgProps = Pick<Quiz, 'imageUrl'>;

const QuizImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.75rem;
  height: 23rem;
  border-radius: 20px;
  border: 5px;
  border: 5px solid #000000;
  box-shadow: 1px 4px 2px 0px #0000001a;
`;

const StyledImg = styled.div<{ url: string }>`
  width: 100%;
  margin: 0.875rem 0.625rem;
  background: ${(props) => `url(${props.url}) center/contain`};
  border-radius: 20px;
`;

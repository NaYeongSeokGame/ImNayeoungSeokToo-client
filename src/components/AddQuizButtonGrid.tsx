import React from 'react';
import { styled } from 'styled-components';

import { QuizButtonGridProps } from '@/types/interfaces';

import AddQuizButton from './AddQuizButton';

const AddQuizButtonGrid = (p: QuizButtonGridProps) => {
  return (
    <QuizGridLayout>
      {p.fileAndAnswer &&
        p.fileAndAnswer.map((v, i) => (
          <AddQuizButton
            key={i}
            index={i}
            contents={v}
            onClick={p.addContent}
          />
        ))}
    </QuizGridLayout>
  );
};

export default AddQuizButtonGrid;

const QuizGridLayout = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap; // 복수의 행
  margin: 0 1rem 0 1rem;
  cursor: pointer;
`;

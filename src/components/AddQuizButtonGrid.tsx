import React from 'react';
import AddQuizButton from './AddQuizButton';
import { QuizButtonGridProps } from '@/types/interfaces';

const AddQuizButtonGrid = (p: QuizButtonGridProps) => {
  
  return (
        <div>
          {p.fileAndAnswer &&
            p.fileAndAnswer.map((v, i) => (
              <AddQuizButton key={i} index={i} contents={v} onClick={p.addContent}/>
            ))}
        </div>
  );
};

export default AddQuizButtonGrid;
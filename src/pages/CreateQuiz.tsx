import { useState } from 'react';

import UploadModal from '@/components/UploadModal';
import { QuizFileAndAnswer } from '@/types/imageUploadmodal';

const CreateQuiz = () => {
  const [quizPreset, setQuizPreset] = useState<QuizFileAndAnswer[]>([]);

  // eslint 룰적용으로 quizPreset 임시 사용
  const preset = () =>
    quizPreset.map((quiz, idx) => (
      <div key={`${idx}-${quiz.answer}`}>{quiz.answer}</div>
    ));

  return (
    <div>
      <>{preset}</>
      <UploadModal setQuizPreset={setQuizPreset} />
    </div>
  );
};

export default CreateQuiz;

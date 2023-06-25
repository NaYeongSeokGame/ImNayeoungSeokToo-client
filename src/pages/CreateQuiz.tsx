import { useState } from 'react';

import UploadModal from '@/components/UploadModal';
import { QuizFileAndAnswer } from '@/types/imageUploadmodal';

const CreateQuiz = () => {
  const [quizPreset, setQuizPreset] = useState<QuizFileAndAnswer[]>([]);
  return (
    <div>
      <h1>create Quiz</h1>
      <UploadModal setQuizPreset={setQuizPreset} />
    </div>
  );
};

export default CreateQuiz;

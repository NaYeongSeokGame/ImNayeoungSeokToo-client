import { useState } from 'react';

import UploadModal from '@/components/UploadModal';
import { QuizFileAndAnswer } from '@/types/imageUploadmodal';

const CreateQuiz = () => {
  const [quizPreset, setQuizPreset] = useState<QuizFileAndAnswer[]>([]);
  return (
    <div>
      <UploadModal setQuizPreset={setQuizPreset} />
    </div>
  );
};

export default CreateQuiz;

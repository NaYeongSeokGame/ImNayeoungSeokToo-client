import { useContext } from 'react';

import Modal from '@/components/Modal';
import QuizPreset from '@/components/QuizPreset';
import useModal from '@/hooks/useModal';
import { QuizStateContext } from '@/utils/QuizContext';

const PrepareQuiz = () => {
  const { isOpen, onClose, onOpen } = useModal();
  const { timer } = useContext(QuizStateContext);

  return (
    <>
      <div>timer: {timer}</div>
      <button onClick={onOpen}>click</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <QuizPreset title={'title'} imgUrl="" />
      </Modal>
    </>
  );
};

export default PrepareQuiz;

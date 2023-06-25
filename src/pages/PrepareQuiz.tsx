import Modal from '@/components/Modal';
import QuizPreset from '@/components/QuizPreset';
import useModal from '@/hooks/useModal';

const PrepareQuiz = () => {
  const { isOpen, onClose, onOpen } = useModal();

  return (
    <>
      <button onClick={onOpen}>click</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <QuizPreset title={'title'} imgUrl="" />
      </Modal>
    </>
  );
};

export default PrepareQuiz;

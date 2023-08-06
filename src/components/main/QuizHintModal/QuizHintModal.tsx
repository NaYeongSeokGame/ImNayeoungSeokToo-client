import Modal from '@/components/common/modal/ModalTemplate';
import useModal from '@/hooks/useModal';

import * as styles from './QuizHintModal.style';

interface QuizHintModalProps {
  answer: string;
}

const QuizHintModal = ({ answer }: QuizHintModalProps) => {
  const { closeModal } = useModal();

  return (
    <Modal>
      <Modal.MainContent>
        <styles.Wrapper>
          <h5>힌트</h5>
          <styles.HintSection>
            <styles.Hint>{answer}</styles.Hint>
          </styles.HintSection>
        </styles.Wrapper>
      </Modal.MainContent>
      <Modal.Button title="나가기" colorScheme="pink" onClick={closeModal} />,
    </Modal>
  );
};

export default QuizHintModal;

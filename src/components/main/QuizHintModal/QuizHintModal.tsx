import Modal from '@/components/common/modal';
import useModal from '@/hooks/useModal';

import * as styles from './QuizHintModal.style';

interface QuizHintModalProps {
  hint: string;
}

const QuizHintModal = ({ hint }: QuizHintModalProps) => {
  const { closeModal } = useModal();

  return (
    <Modal>
      <Modal.MainContent>
        <styles.Wrapper>
          <h5>힌트</h5>
          <styles.HintSection>
            <styles.Hint>{hint}</styles.Hint>
          </styles.HintSection>
        </styles.Wrapper>
      </Modal.MainContent>
      <Modal.Button title="나가기" colorScheme="pink" onClick={closeModal} />,
    </Modal>
  );
};

export default QuizHintModal;

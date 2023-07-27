import ModalTemplate from '@/components/common/ModalTemplate';
import ModalButton from '@/components/common/buttons/ModalButton/ModalButton';
import useModal from '@/hooks/useModal';

import * as styles from './QuizHintModal.style';

interface QuizHintModalProps {
  answer: string;
}

const QuizHintModal = ({ answer }: QuizHintModalProps) => {
  const { closeModal } = useModal();

  return (
    <ModalTemplate
      buttons={[
        <ModalButton
          title="나가기"
          colorScheme="darkblue"
          onClick={closeModal}
        />,
      ]}
    >
      <styles.Wrapper>
        <h5>힌트</h5>
        <styles.HintSection>
          <styles.Hint>{answer}</styles.Hint>
        </styles.HintSection>
      </styles.Wrapper>
    </ModalTemplate>
  );
};

export default QuizHintModal;

import React from 'react';

import { ReactComponent as ReturnButtonSvg } from '@/assets/images/returnButton.svg';
import ModalTemplate from '@/components/common/ModalTemplate';
import useModal from '@/hooks/useModal';

import * as styles from './QuizHintModal.style';

interface QuizHintModalProps {
  answer: string;
}

const QuizHintModal = ({ answer }: QuizHintModalProps) => {
  const { closeModal } = useModal();

  return (
    <ModalTemplate
      title="힌트"
      button={<ReturnButtonSvg onClick={closeModal} />}
    >
      <styles.HintSection>
        <styles.Hint>{answer}</styles.Hint>
      </styles.HintSection>
    </ModalTemplate>
  );
};

export default QuizHintModal;

import * as styles from './ ModalButton.style';

interface ModalButtonProps {
  title: string;
  onClick: () => void;
  colorScheme: string;
}

const ModalButton = ({ title, onClick, colorScheme }: ModalButtonProps) => {
  return (
    <styles.ButtonWrapper onClick={onClick} colorScheme={colorScheme}>
      {title}
    </styles.ButtonWrapper>
  );
};

export default ModalButton;

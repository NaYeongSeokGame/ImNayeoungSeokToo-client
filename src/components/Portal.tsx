import { createPortal } from 'react-dom';

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return createPortal(children, modalRoot);
};

export default ModalPortal;

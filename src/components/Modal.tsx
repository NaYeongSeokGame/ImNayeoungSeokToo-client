import React from 'react';
import { styled } from 'styled-components';

interface Modal {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: Modal) => {
  return (
    isOpen && (
      <div>
        <Overlay onClick={onClose} />
        <ModalContent>{children}</ModalContent>
      </div>
    )
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

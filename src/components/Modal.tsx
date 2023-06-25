import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return <ModalContainer></ModalContainer>;
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;

  align-items: center;
  justify-content: center;
  position: fixed;
`;

export default Modal;

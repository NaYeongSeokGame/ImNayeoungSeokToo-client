import React, { useState } from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';

import Modal from '../Modal';

const NavigationContainer = styled.nav`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ConfigButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
`;

const ConfigImage = styled.img`
  width: 35px;
  height: 35px;
`;

const DialogButton = styled.button`
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`;

function Navigation(): JSX.Element {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <NavigationContainer>
      <ConfigButton>
        {isOpenModal && <Modal onClickToggleModal={onClickToggleModal} />}
        <DialogButton onClick={onClickToggleModal}>
          <ConfigImage
            src="https://i.pinimg.com/564x/23/8b/7f/238b7f2849994039b217c3eeb3706001.jpg"
            alt="설정"
          />
        </DialogButton>
      </ConfigButton>
    </NavigationContainer>
  );
}

export default Navigation;

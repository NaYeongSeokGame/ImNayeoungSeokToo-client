import React from 'react';
import styled from 'styled-components';

const CustomizeButton = styled.button`
  text-align: center;
  font-size: 20%;
  border-radius: 50px;
  padding: 15px;
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
`;

function Navigation(): JSX.Element {
  return (
    <ButtonBlock>
      <CustomizeButton>문제 생성</CustomizeButton>
    </ButtonBlock>
  );
}

export default Navigation;

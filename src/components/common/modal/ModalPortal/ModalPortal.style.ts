import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow-y: hidden;
  z-index: 999;
  background-color: rgba(151, 151, 151, 0.8);
`;

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      min-height: 100vh;
      align-items: center;

      background-color: ${theme.colors.black};
    `;
  }}
`;

export const Background = styled.main`
  width: 22.5rem;
  height: 50rem;

  margin: auto;
  background-image: url(/src/assets/images/background.svg);
  background-size: cover;

  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 700px;
  margin: auto;

  box-shadow: 0px 0px 5px rgba(165, 165, 165, 0.25);
`;

export const HintSection = styled.section`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.white};
      padding: 8.5rem 0;
    `;
  }}
`;

export const Hint = styled.h5`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.black};
      text-align: center;
      font-size: 6rem;
    `;
  }}
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 1.875rem;
`;

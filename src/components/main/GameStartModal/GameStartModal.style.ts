import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      padding: 4rem 1.5rem;

      display: flex;
      flex-direction: column;
      gap: 3.75rem 0;

      border-radius: 0.8rem;
      background-color: ${theme.colors.white};

      background-image: url(/src/assets/images/background.svg);
      background-size: cover;
    `;
  }}
`;

export const StartDelayCounter = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;

      width: 14rem;
      padding: 0.25rem 1.25rem;
      margin: 0 auto;

      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;

      font-size: 2.625rem;
      font-family: 'Pretendard';
      font-weight: 700;

      & > svg {
        margin: auto 0;
      }
    `;
  }}
`;

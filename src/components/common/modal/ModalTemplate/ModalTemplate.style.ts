import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 18.75rem;
      margin: auto;
      padding: 1.8125rem 1.375rem;
      gap: 1.625rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      background-color: ${theme.colors.gray100};
      box-shadow: 0px 0px 5px rgba(165, 165, 165, 0.25);
      border-radius: 4px 4px 48px 4px;
      border: 1px double ${theme.colors.black};
      border-width: 0.1875rem;
    `;
  }}
`;

export const ButtonSection = styled.div`
  ${({ theme }) => {
    return css`
      height: 3.5rem;
      gap: 1.2rem;

      display: inline-flex;
      align-self: flex-end;
      justify-content: center;
      align-items: center;

      background-color: ${theme.colors.cremewhite};
      border-radius: 50px;
      border: 0.0625rem double ${theme.colors.black};
      border-width: 0.1875rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      transform: rotate(-30deg);

      button {
        font-size: 0.75rem;
        width: 3rem;
        height: 3rem;
      }
    `;
  }}
`;

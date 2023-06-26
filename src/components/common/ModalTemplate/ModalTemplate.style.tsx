import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 18.75rem;
  margin: auto;

  box-shadow: 0px 0px 5px rgba(165, 165, 165, 0.25);
`;

export const Header = styled.span`
  ${({ theme }) => {
    return css`
      font-size: 1.125rem;
      padding: 0.5rem 3rem;
      margin: auto auto 0.875rem auto;

      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;
    `;
  }}
`;

export const Section = styled.section`
  ${({ theme }) => {
    return css`
      max-width: 18.75rem;
      margin: 0 auto;

      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;
      background-color: ${theme.colors.white};
    `;
  }}
`;

export const Button = styled.div`
  margin: 1.25rem auto auto;
`;

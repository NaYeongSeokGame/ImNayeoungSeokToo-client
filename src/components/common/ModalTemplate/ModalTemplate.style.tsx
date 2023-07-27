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

export const SectionWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      margin: 0 auto;

      border: 1px double ${theme.colors.black};
      border-width: 0.1875rem;
      border-radius: 6px 6px 16px 6px;
      background-color: ${theme.colors.gray200};
    `;
  }}
`;

export const Section = styled.section`
  ${({ theme }) => {
    return css`
      margin: 0 auto;
      padding: 0.5625rem 1.625rem;

      border-radius: 4px 4px 12px 4px;
      background-color: ${theme.colors.dark};
    `;
  }}
`;

export const Article = styled.article`
  ${({ theme }) => {
    return css`
      width: 100%;

      color: ${theme.colors.darkblue900};
      text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      background-color: ${theme.colors.gray100};
      overflow: hidden;
    `;
  }}
`;

export const Button = styled.div`
  margin: 1.25rem auto auto;
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

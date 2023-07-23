import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.625rem;

      max-width: 18.75rem;
      margin: auto;
      background-color: ${theme.colors.gray100};
      box-shadow: 0px 0px 5px rgba(165, 165, 165, 0.25);
      border-radius: 4px 4px 48px 4px;
      border: 1px double ${theme.colors.black};
      border-width: 0.1875rem;

      padding: 1.8125rem 1.375rem;
    `;
  }}
`;

export const Header = styled.span`
  ${({ theme }) => {
    return css`
      font-size: 1.125rem;
      padding: 0.5rem 3rem;
      margin: auto auto 0.875rem auto;

      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;
    `;
  }}
`;

export const SectionWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      margin: 0 auto;

      border-radius: 6px 6px 16px 6px;
      border: 1px double ${theme.colors.black};
      border-width: 0.1875rem;
      background-color: ${theme.colors.gray200};
    `;
  }}
`;

export const Section = styled.section`
  ${({ theme }) => {
    return css`
      margin: 0 auto;

      border-radius: 4px 4px 12px 4px;
      background-color: ${theme.colors.dark};
      padding: 0.5625rem 1.625rem;
    `;
  }}
`;
export const Article = styled.article`
  ${({ theme }) => {
    return css`
      width: 100%;
      background-color: ${theme.colors.gray100};
      color: ${theme.colors.darkblue900};
      text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      overflow: hidden;
    `;
  }}
`;

export const Button = styled.div`
  margin: 1.25rem auto auto;
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: inline-flex;
      align-self: flex-end;

      gap: 1.5rem;
      justify-content: center;
      align-items: center;

      width: 7.75rem;
      height: 3.5rem;
      transform: rotate(-30deg);

      background-color: ${theme.colors.cremewhite};
      border-radius: 50px;
      border: 1px double ${theme.colors.black};
      border-width: 0.1875rem;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      button {
        font-size: 0.75rem;
        width: 3rem;
        height: 3rem;
      }
    `;
  }}
`;

import { css, styled } from 'styled-components';

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

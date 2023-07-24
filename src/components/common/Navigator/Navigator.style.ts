import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => {
    return css`
      display: flex;
      gap: 0 2rem;

      width: 100%;
      padding: 0.75rem;

      position: sticky;
      bottom: 0;

      background-color: ${theme.colors.white};
    `;
  }}
`;

export const Section = styled.div<{ isSelected?: boolean }>`
  ${({ theme, isSelected }) => {
    const { colors, fonts } = theme;
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 3.75rem;
      gap: 0.125rem 0;

      & > p {
        color: ${isSelected ? colors.darkblue800 : colors.gray700};
        font-size: ${fonts.deco4.fontFamily};
        font-size: 0.625rem;
        font-weight: ${fonts.deco4.fontFamily};
        line-height: ${fonts.deco4.lineHeight};
      }

      & > svg {
        color: ${isSelected ? colors.darkblue800 : colors.gray700};
      }
    `;
  }}
`;

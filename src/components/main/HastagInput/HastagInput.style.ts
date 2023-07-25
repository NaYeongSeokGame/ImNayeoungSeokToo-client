import { css, styled } from 'styled-components';

export const HastagInputWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      height: 2rem;
      padding: 0.5rem;
      align-items: center;
      gap: 0.5rem;
      overflow-x: auto;

      font-family: ${theme.fonts.caption.fontFamily};
      font-size: ${theme.fonts.caption.fontSize}rem;
      font-weight: ${theme.fonts.caption.fontWeight};
      line-height: ${theme.fonts.caption.lineHeight};

      color: ${theme.colors.white};
      background-color: transparent;
      border: 1px solid ${theme.colors.white};
      border-radius: 0.5rem;

      &::placeholder {
        color: ${theme.colors.black};
      }
    `;
  }}
`;

export const HashtagInner = styled.p`
  ${({ theme }) => {
    return css`
      display: flex;
      width: auto;
      height: 1.5rem;
      flex-shrink: 0;
      align-items: center;

      font-family: ${theme.fonts.body2R.fontFamily};
      font-size: ${theme.fonts.body2R.fontSize}rem;
      font-weight: ${theme.fonts.body2R.fontWeight};

      color: ${theme.colors.white};
      background-color: ${theme.colors.darkblue400};
      padding: 0.25rem;
      border-radius: 0.25rem;
      &:after {
        content: 'x';
        color: ${theme.colors.black};
      }
    `;
  }}
`;
export const HastagInput = styled.input`
  ${({ theme }) => {
    return css`
      flex-shrink: 0;

      border: none;
      font-family: ${theme.fonts.caption.fontFamily};
      font-size: ${theme.fonts.caption.fontSize}rem;
      font-weight: ${theme.fonts.caption.fontWeight};
      line-height: ${theme.fonts.caption.lineHeight};
      color: ${theme.colors.white};
      background-color: transparent;
    `;
  }}
`;

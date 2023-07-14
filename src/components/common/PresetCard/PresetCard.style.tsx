import { css, styled } from 'styled-components';

export const PresetWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;

      width: 9.75rem;
      height: 14.5rem;

      background-image: url(/src/assets/images/PresetTemplate/PresetCard.svg);
    `;
  }}
`;

export const Image = styled.div<{ imageurl: string }>`
  ${({ theme, imageurl }) => {
    return css`
      width: 7.25rem;
      height: 8.75rem;

      margin-top: 1.18rem;
      margin-left: 1.25rem;
      background-image: url(${imageurl});
      background-size: cover;
    `;
  }}
`;

export const TitleText = styled.div`
  ${({ theme }) => {
    return css`
      margin-top: 1.43rem;

      font-family: ${theme.fonts.deco3.fontFamily};
      font-size: ${theme.fonts.deco3.fontSize}px;
      font-weight: ${theme.fonts.deco3.fontWeight};
      color: ${theme.colors.white};
      text-align: center;
    `;
  }}
`;

export const HashtagWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      padding-top: 0.66rem;
    `;
  }}
`;

export const HashtagText = styled.div`
  ${({ theme }) => {
    return css`
      height: 1rem;
      margin: 1rem auto;
      padding: 0 0.75rem;
      font-size: ${theme.fonts.deco4.fontSize}px;
      font-family: ${theme.fonts.deco4.fontFamily};
      font-weight: ${theme.fonts.deco4.fontWeight};
      line-height: ${theme.fonts.deco4.lineHeight};
      color: ${theme.colors.gray700};
      text-align: center;

      background-size: cover;
      background-position: center;
      background-image: url(/src/assets/images/PresetTemplate/PresetHashtag.svg);

      &::before {
        content: '#';
      }
    `;
  }}
`;

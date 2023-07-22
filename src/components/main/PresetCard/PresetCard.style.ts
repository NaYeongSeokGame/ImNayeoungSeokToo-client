import { css, styled } from 'styled-components';

export const PresetWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;

      width: 9.75rem;
      height: 14.5rem;

      background-image: url(/src/assets/images/PresetCard.svg);
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
      margin-top: 1.45rem;
      color: ${theme.colors.white};
      text-align: center;
      font-family: ${theme.fonts.deco5.fontFamily};
      font-size: ${theme.fonts.deco5.fontSize}rem;
      font-weight: ${theme.fonts.deco5.fontWeight};
    `;
  }}
`;

export const HashtagWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      margin-top: 0.66rem;
      justify-content: space-evenly;
    `;
  }}
`;

export const HashtagText = styled.p`
  ${({ theme }) => {
    return css`
      min-width: 4rem;
      height: 1rem;
      // padding: 0.1rem 0.75rem;

      color: ${theme.colors.gray700};
      text-align: center;
      font-size: ${theme.fonts.deco4.fontSize}rem;
      font-family: ${theme.fonts.deco4.fontFamily};
      font-weight: ${theme.fonts.deco4.fontWeight};
      line-height: ${theme.fonts.deco4.lineHeight};
      background-size: cover;
      background-position: center;
      background-image: url(/src/assets/images/PresetHashtag.svg);

      &::before {
        content: '#';
      }
    `;
  }}
`;

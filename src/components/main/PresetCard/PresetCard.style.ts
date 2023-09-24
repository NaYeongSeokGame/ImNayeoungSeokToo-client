import { css, styled } from 'styled-components';

import PresetCardUrl from '@/assets/images/PresetCard.svg';
import PresetHashtagUrl from '@/assets/images/PresetHashtag.svg';

export const PresetWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 9.75rem;
  height: 14.5rem;

  background-image: url(${PresetCardUrl});
`;

export const Image = styled.div<{ $imageUrl: string }>`
  ${({ $imageUrl }) => {
    return css`
      width: 7.25rem;
      height: 8.75rem;

      margin-top: 1.2rem;
      margin-left: 1.25rem;
      background-image: url(${$imageUrl});
      background-size: cover;
      background-position: center;
    `;
  }}
`;

export const TitleText = styled.div`
  ${({ theme }) => {
    return css`
      margin-top: 1.43rem;

      color: ${theme.colors.white};
      text-align: center;
      font-family: ${theme.fonts.deco3.fontFamily};
      font-size: ${theme.fonts.deco3.fontSize}rem;
      font-weight: ${theme.fonts.deco3.fontWeight};
    `;
  }}
`;

export const HashtagWrapper = styled.div`
  display: flex;
  padding-top: 0.66rem;
`;

export const HashtagText = styled.p`
  ${({ theme }) => {
    return css`
      min-width: 4rem;
      min-height: 1rem;
      margin: auto auto;
      padding: 0 0.75rem;

      color: ${theme.colors.gray700};
      text-align: center;
      font-size: ${theme.fonts.deco4.fontSize}rem;
      font-family: ${theme.fonts.deco4.fontFamily};
      font-weight: ${theme.fonts.deco4.fontWeight};
      line-height: 1rem;
      background-size: cover;
      background-position: center;
      background-image: url(${PresetHashtagUrl});

      &::before {
        content: '#';
      }
    `;
  }}
`;

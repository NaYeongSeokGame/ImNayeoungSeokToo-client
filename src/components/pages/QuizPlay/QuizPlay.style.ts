import styled, { css } from 'styled-components';

import { ReactComponent as TitleTextSvg } from '@/assets/images/titleText.svg';

export const Title = styled(TitleTextSvg)`
  margin: 1.875rem auto 1.25rem;
`;

export const QuestionImage = styled.section<{ imageUrl: string }>`
  ${({ theme, imageUrl }) => {
    return css`
      width: 18.75rem;
      height: 23rem;

      margin: 0 auto;
      padding: 0.625rem;
      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};

      background-image: url(${imageUrl});
      background-size: cover;
    `;
  }}
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 0 1.875rem;
  margin: 1.25rem 1.875rem;
`;

export const Countdown = styled.h5<{ currentCount: number }>`
  ${({ theme, currentCount }) => {
    return css`
      font-size: 6rem;
      color: ${currentCount < 2 ? theme.color.red : theme.colors.purple};
      margin: 0 auto auto;
    `;
  }}
`;

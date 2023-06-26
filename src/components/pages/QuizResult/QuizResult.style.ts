import styled, { css } from 'styled-components';

import { ReactComponent as TitleTextSvg } from '@/assets/images/titleText.svg';

export const Title = styled(TitleTextSvg)`
  margin: 1.875rem auto 1.25rem;
`;

export const QuestionResult = styled.section`
  ${({ theme }) => {
    return css`
      width: 18.75rem;
      height: 23rem;

      display: flex;
      flex-direction: column;
      justify-content: center;

      margin: 0 auto;
      padding: 0.625rem;
      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
    `;
  }}
`;

export const Result = styled.h5`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.black};
      text-align: center;
      font-size: 6rem;
      margin: auto;
    `;
  }}
`;
export const ResultCorrect = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.purple};
    `;
  }}
`;

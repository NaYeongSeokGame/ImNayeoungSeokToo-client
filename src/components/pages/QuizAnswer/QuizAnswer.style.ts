import styled, { css } from 'styled-components';

import { ReactComponent as TitleTextSvg } from '@/assets/images/titleText.svg';

export const Title = styled(TitleTextSvg)`
  margin: 1.875rem auto 1.25rem;
`;

export const QuestionAnswer = styled.section`
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

export const Answer = styled.h5`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.black};
      text-align: center;
      font-size: 6rem;
      margin: auto;
    `;
  }}
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 1.875rem;
`;

export const LobbyButton = styled.button`
  ${({ theme }) => {
    return css`
      font-family: 'LOTTERIADDAG';
      font-size: 1.125rem;
      color: ${theme.colors.purple};

      padding: 0.5rem 3rem;
      margin: auto auto 0.875rem auto;

      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;
    `;
  }}
`;

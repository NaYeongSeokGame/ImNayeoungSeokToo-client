import styled, { css } from 'styled-components';

import { ReactComponent as TitleTextSvg } from '@/assets/images/titleText.svg';

export const Title = styled(TitleTextSvg)`
  margin: 0 auto 1.875rem;
`;

export const PresetNameInput = styled.input`
  ${({ theme }) => {
    return css`
      max-width: 14rem;
      margin: 1.875rem auto 0.5rem;
      padding: 0.5rem 0;

      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;

      font-family: 'LOTTERIADDAG';
      font-size: 1.125rem
      color: ${theme.colors.black};
      text-align: center;

      &::placeholder {
        color: ${theme.colors.black};
      }
    `;
  }}
`;

export const QuizAmountCounter = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;

      width: 14rem;
      padding: 0.25rem 1.25rem;
      margin: 0 auto;

      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;

      font-size: 2.625rem;
      font-family: 'Pretendard';
      font-weight: 700;

      & > svg {
        margin: auto 0;
      }
    `;
  }}
`;

export const QuizGridSection = styled.section`
  margin: 0.625rem 1.25rem 0rem;
  height: 24.75rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, fit-content(100%));
  gap: 0.375rem;
`;

export const CreatePresetBtn = styled.button`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;

      margin: 1.75rem auto auto;
      padding: 1rem 2.75rem;

      font-size: 1.125rem;
      font-family: 'LOTTERIADDAG';

      &:active {
        text-decoration: none;
      }
    `;
  }}
`;

export const QuizSlotWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;

      text-align: center;

      & > p {
        margin-top: 0.25rem;
        font-size: 1rem;
        color: ${theme.colors.black};
      }
    `;
  }}
`;

export const QuizSlot = styled.div<{ imageUrl: string }>`
  ${({ theme, imageUrl }) => {
    return css`
      width: 6.375rem;
      height: 6.75rem;

      background-image: url(${imageUrl});
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
    `;
  }}
`;

export const EmptyQuizSlotWrapper = styled.div<{ isFirst: boolean }>`
  ${({ theme, isFirst }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;

      text-align: center;

      & > p {
        margin-top: 0.25rem;
        font-size: 1rem;
        color: ${isFirst ? theme.colors.purple : theme.colors.black};
      }
    `;
  }}
`;

export const EmptyQuizSlot = styled.div<{ isFirst: boolean }>`
  ${({ theme, isFirst }) => {
    return css`
      width: 6.375rem;
      height: 6.75rem;

      background-color: ${theme.colors.white};
      border: 0.25rem solid
        ${isFirst ? theme.colors.purple : theme.colors.black};
      border-radius: 1rem;

      display: flex;
      flex-direction: column;
      justify-content: center;

      & > svg {
        margin: auto;
        fill: ${isFirst ? theme.colors.purple : theme.colors.black};
      }
    `;
  }}
`;

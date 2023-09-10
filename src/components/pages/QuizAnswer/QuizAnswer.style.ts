import styled, { css } from 'styled-components';

export const TitleBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      margin: 4.685rem auto 1.94rem;
      gap: 0.88rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

      color: ${colors.cremewhite};
    `;
  }}
`;

export const Title = styled.h1`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      font-size: 1.875rem;

      > span:first-of-type {
        font-size: 2.625rem;
      }

      > span {
        color: ${colors.darkblue400};
      }
    `;
  }}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      font-size: 1.5rem;

      > span {
        color: ${colors.magenta500};
      }
    `;
  }}
`;

export const AnswerSection = styled.section`
  ${({ theme }) => {
    return css`
      width: 18.75rem;
      height: 28rem;
      margin: 0 auto 1.94rem;
      gap: 0.56rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      background-color: ${theme.colors.white};
      border: 1.125rem solid ${theme.colors.white};
    `;
  }}
`;

export const AnswerImage = styled.img`
  width: 100%;
  height: 20.375rem;

  object-fit: cover;
  object-position: center;
`;

export const Answer = styled.h5`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.magenta500};
      font-size: 3.75rem;
      word-break: keep-all;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `;
  }}
`;

export const ButtonSection = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      margin: 0 auto;
      width: 18.8rem;
      gap: 1.5rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      color: ${colors.white};
      font-size: 1.25rem;
    `;
  }}
`;

export const ButtonBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const AnswerButton = styled.button<{ correct?: boolean }>`
  ${({ theme, correct = false }) => {
    const { colors } = theme;
    return css`
      width: 7.5rem;
      height: 3.125rem;

      color: ${correct ? colors.darkblue600 : colors.red};
      font-size: 1.25rem;

      border: 2px solid ${correct ? colors.darkblue600 : colors.red};
      border-radius: 0.75rem;
      background: ${colors.white};
      box-shadow: 0px 0px 12px ${colors.white};
    `;
  }}
`;

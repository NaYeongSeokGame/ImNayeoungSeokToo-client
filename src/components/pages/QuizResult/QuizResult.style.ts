import styled, { css } from 'styled-components';

export const QuizResultWrapper = styled.section`
  gap: 2.25rem;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const QuestionResult = styled.div`
  ${({ theme }) => {
    return css`
      margin: 0 auto;
      gap: 3.375rem;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `;
  }}
`;

export const Title = styled.h1`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      width: 12.5rem;

      background: linear-gradient(
        180deg,
        #ff5912 16.67%,
        #ffa012 48.96%,
        #ffe812 84.9%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      overflow: hidden;
      text-align: center;
      text-overflow: ellipsis;
      font-size: 5rem;
      font-family: ${fonts.deco1.fontFamily};
      font-weight: ${fonts.deco1.fontWeight};
      line-height: ${fonts.deco1.lineHeight};
    `;
  }}
`;

export const Result = styled.h5`
  ${({ theme }) => {
    return css`
      margin: auto;

      color: ${theme.colors.gray400};
      text-align: center;
      font-size: ${theme.fonts.deco1.fontSize}rem;
      font-weight: ${theme.fonts.deco1.fontWeight};
      line-height: ${theme.fonts.deco1.lineHeight};
    `;
  }}
`;
export const ResultCorrect = styled.span`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      font-size: 7.5rem;

      background: linear-gradient(
        180deg,
        ${colors.magenta500} 0%,
        ${colors.darkblue700} 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `;
  }}
`;

export const QuizCommentBox = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 17.75rem;
      padding: 0.875rem 0.875rem 1.25rem 0.875rem;
      gap: 0.5rem;

      display: flex;
      justify-content: center;
      flex-direction: column;

      font-size: ${fonts.deco3.fontSize}rem;
      font-family: ${fonts.deco3.fontFamily};

      background-color: ${colors.cremewhite};
      border: 2px solid #000;
      border-radius: 0.5rem;

      > span {
        font-size: 1rem;
        font-weight: 400;
        line-height: normal;
      }

      > p {
        text-align: center;

        font-size: ${fonts.deco3.fontSize}rem;
        font-weight: ${fonts.deco3.fontWeight};
        line-height: ${fonts.deco3.lineHeight};
        white-space: pre-wrap;
      }
    `;
  }}
`;

export const ShareBox = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      display: flex;
      width: 17.625rem;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin: 0 auto;

      > p {
        color: #fff;
        font-family: ${fonts.body1B.fontFamily};
        font-size: 0.875rem;
        font-weight: 300;

        > span {
          color: ${colors.darkblue400};
        }
      }

      > div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem;

        > svg {
          width: 2.75rem;
          height: 2.75rem;
        }
      }
    `;
  }}
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.75rem;
`;

export const Button = styled.button`
  ${({ theme }) => {
    return css`
      width: 7.5rem;
      height: 3rem;
      flex-shrink: 0;

      font-size: 0.875rem;
      font-weight: 400;
      font-family: ${theme.fonts.deco1.fontFamily};

      background-color: ${theme.colors.white};
      border: 2px solid ${theme.colors.black};
      border-radius: 0.5rem;
      box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.1);
    `;
  }}
`;
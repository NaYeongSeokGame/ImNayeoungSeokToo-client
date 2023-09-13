import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      margin: 0.25rem;
      padding: 0.75rem;
      gap: 0.5rem;

      display: flex;
      flex-direction: column;
      flex: 1;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${colors.darkblue500};
        border-radius: 20px;
      }
    `;
  }}
`;
export const Title = styled.h1`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
      font-family: ${theme.fonts.title.fontFamily};
      font-size: ${theme.fonts.title.fontSize}rem;
      font-weight: ${theme.fonts.title.fontWeight};
      line-height: ${theme.fonts.title.lineHeight};
      text-align: center;
    `;
  }}
`;

export const PointTitle = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.darkblue400};
    `;
  }}
`;

export const QuizListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.62rem;
  margin: 0 1.06rem;
  justify-content: space-between;
`;

export const AddQuizWrapper = styled.div`
  display: flex;
  width: 8.125rem;
  height: 11.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.62rem;
  border-radius: 1rem;
  border: 1px solid #fff;
`;

export const AddNewQuizButton = styled.button`
  ${({ theme }) => {
    return css`
      width: 10rem;
      height: 2rem;
      margin: 2rem auto;

      border-radius: 1.5rem;
      border: 1px solid ${theme.colors.darkblue400};
      text-align: center;

      font-family: ${theme.fonts.body2B.fontFamily};
      font-size: ${theme.fonts.body2B.fontSize}rem;
      font-weight: ${theme.fonts.body2B.fontWeight};
      color: ${theme.colors.darkblue400};
    `;
  }}
`;

export const CreateQuizWrapper = styled.div<{ image: string }>`
  ${({ image }) => {
    return css`
      position: relative;
      width: 8.125rem;
      height: 11.25rem;
      padding: 0;
      border-radius: 0.75rem;
      border: 1px solid #fff;
      box-shadow: 0px 0px 4px 0px #a1db00;
      background-image: url(${image});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    `;
  }}
`;
export const QuizModifyWrapper = styled.div`
  display: none;
  position: absolute;
  margin: -0.0625rem;
  padding: 0;
  width: 8.125rem;
  height: 11.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.12rem;

  border-radius: 0.75rem;
  background: rgba(20, 21, 20, 0.6);
  ${CreateQuizWrapper}:hover & {
    display: flex;
  }
`;
export const ModifyButton = styled.button`
  ${({ theme }) => {
    return css`
      display: flex;
      padding: 0.625rem 1.25rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;

      color: ${theme.colors.white};
      font-family: ${theme.fonts.caption.fontFamily};
      font-weight: ${theme.fonts.caption.fontWeight};
      font-size: 0.625rem;
      border-radius: 1.5625rem;
      border: 1px solid #fff;
      box-shadow: 0px 0px 8px 0px #fff;
    `;
  }}
`;

export const AnswerText = styled.p`
  ${({ theme }) => {
    return css`
      margin-top: 9rem;
      margin-left: 0.62rem;
      color: ${theme.colors.white};
      font-family: ${theme.fonts.body2R.fontFamily};
      font-size: 0.75rem;
      font-weight: ${theme.fonts.body2R.fontWeight};
    `;
  }}
`;

export const HintText = styled.p`
  ${({ theme }) => {
    return css`
      margin-left: 0.62rem;
      color: ${theme.colors.white};
      font-family: ${theme.fonts.caption.fontFamily};
      font-size: 0.625rem;
      font-weight: ${theme.fonts.caption.fontWeight};
    `;
  }}
`;
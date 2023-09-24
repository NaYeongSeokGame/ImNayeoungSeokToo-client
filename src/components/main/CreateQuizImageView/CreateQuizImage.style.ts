import { css, styled } from 'styled-components';

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

      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${image.startsWith('http') ? `"${image}"` : image});
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
  }}
`;

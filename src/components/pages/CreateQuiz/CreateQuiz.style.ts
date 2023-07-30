import styled, { css } from 'styled-components';

export const CreateQuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 0.5rem;
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

export const GetPresetButton = styled.button`
  ${({ theme }) => {
    return css`
      margin-left: auto;
      margin-top: 1rem;
      padding: 0.6rem 1rem;

      border-radius: 1.5625rem;
      border: 1px solid ${theme.colors.white};

      color: ${theme.colors.white};
      font-family: ${theme.fonts.body2R.fontFamily};
      font-size: ${theme.fonts.body2R.fontSize}rem;
      font-weight: ${theme.fonts.body2R.fontWeight};
    `;
  }}
`;

export const PrivateWrapper = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
  padding: 0.38rem;
`;

export const NameLabelWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.88rem;
`;

export const NameLabel = styled.label`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.darkblue200};
      font-family: ${theme.fonts.subtitle2B.fontFamily};
      font-size: ${theme.fonts.subtitle2B.fontSize}rem;
      font-weight: ${theme.fonts.subtitle2B.fontWeight};
    `;
  }}
`;

export const InfoLabel = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
      font-family: ${theme.fonts.body3.fontFamily};
      font-size: ${theme.fonts.body3.fontSize}rem;
      font-weight: ${theme.fonts.body3.fontWeight};
    `;
  }}
`;

export const CountLabel = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
      font-family: ${theme.fonts.body2B.fontFamily};
      font-size: ${theme.fonts.body2B.fontSize}rem;
      font-weight: ${theme.fonts.body2B.fontWeight};
      line-height: ${theme.fonts.body2B.lineHeight};
    `;
  }}
`;

export const NameInput = styled.input`
  ${({ theme }) => {
    return css`
      height: 2rem;
      padding: 0.5rem;
      border: 1px solid ${theme.colors.white};
      border-radius: 0.5rem;

      font-family: ${theme.fonts.body3.fontFamily};
      font-size: ${theme.fonts.body3.fontSize}rem;
      font-weight: ${theme.fonts.body3.fontWeight};
      line-height: ${theme.fonts.body3.lineHeight};
      color: ${theme.colors.white};
      background-color: transparent;

      &::placeholder {
        color: ${theme.colors.black};
      }
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
export const UploadQuizButton = styled.div`
  ${({ theme }) => {
    return css`
      width: 6.5rem;
      height: 1.5rem;
      justify-content: center;
      align-items: center;

      text-align: center;
      font-family: ${theme.fonts.body2R.fontFamily};
      font-size: ${theme.fonts.body2R.fontSize}rem;
      font-weight: ${theme.fonts.body2R.fontWeight};
      line-height: ${theme.fonts.body2R.lineHeight};
      color: ${theme.colors.white};
      border-radius: 1.5rem;
      border: 1px solid #fff;
    `;
  }}
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
export const UploadText = styled.img``;
export const ArrowIcon = styled.img``;

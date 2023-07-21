import styled, { css } from 'styled-components';

import { ReactComponent as TitleTextSvg } from '@/assets/images/titleText.svg';

export const CreateQuizWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      margin: 1rem;
      gap: 0.5rem;
      `;
  }}
`;
export const Title = styled.h1`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
      font-family: ${theme.fonts.title.fontFamily};
      font-size: ${theme.fonts.title.fontSize}px;
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
      font-family: ${theme.fonts.body3.fontFamily};
      font-size: ${theme.fonts.body3.fontSize}px;
      font-weight: ${theme.fonts.body3.fontWeight};
    `;
  }}
`;


export const NameLabelWrapper = styled.span`
${({ theme }) => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
}}
`;

export const NameLabel = styled.label`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.darkblue200};
      font-family: ${theme.fonts.subtitle2B.fontFamily};
      font-size: ${theme.fonts.subtitle2B.fontSize}px;
      font-weight: ${theme.fonts.subtitle2B.fontWeight};
      line-height: ${theme.fonts.subtitle2B.lineHeight};
    `;
  }}
  `;

  export const InfoLabel = styled.span`
  ${({ theme }) => {
    return css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.caption.fontFamily};
    font-size: ${theme.fonts.caption.fontSize}px;
    font-weight: ${theme.fonts.caption.fontWeight};
    line-height: ${theme.fonts.caption.lineHeight};
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

      font-family: ${theme.fonts.caption.fontFamily};
      font-size: ${theme.fonts.caption.fontSize}px;
      font-weight: ${theme.fonts.caption.fontWeight};
      line-height: ${theme.fonts.caption.lineHeight};
      color: ${theme.colors.black};
      background-color: transparent;

      &::placeholder {
        color: ${theme.colors.black};
      }
    `;
  }}
`;

export const QuizListWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      width: 8.75rem;
      height: 11.25rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-radius: 0.75rem;
      border: 1px solid ${theme.colors.white};
    `;
  }}
`;
export const UploadQuizWrapper = styled.div`
  display: flex;
  width: 8.75rem;
  height: 11.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
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
      border-radius: 1.5rem;
      border: 1px solid #fff;
      text-align: center;
      font-family: ${theme.fonts.caption.fontFamily};
      font-size: ${theme.fonts.caption.fontSize}px;
      font-weight: ${theme.fonts.caption.fontWeight};
      line-height: ${theme.fonts.caption.lineHeight};
      color: ${theme.colors.white};
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
      font-size: ${theme.fonts.body2B.fontSize}px;
      font-weight: ${theme.fonts.body2B.fontWeight};
      color: ${theme.colors.darkblue400};
    `;
  }}
`;
export const UploadText = styled.img``;
export const ArrowIcon = styled.img``;
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

import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => {
    return css`
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 22.5rem;
      height: 50rem;
      margin: auto;

      background-color: ${theme.colors.dark};
    `;
  }}
`;

export const ButtonWrapper = styled.button`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  gap: 0.87rem;
  margin: 0.87rem;
  justify-content: flex-end;
`;

export const SettingButton = styled.button`
  ${({ theme }) => {
    return css`
      padding: 0.625rem 0.91rem;
      border-radius: 1.5625rem;
      border: 1px solid #fff;
      box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 0.25);
      font-family: ${theme.fonts.body2R.fontFamily};
      font-size: ${theme.fonts.body2R.fontSize}rem;
      font-weight: ${theme.fonts.body2R.fontWeight};
      color: ${theme.colors.white};
      cursor: pointer;
    `;
  }}
`;

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.31rem;

  gap: 0.5rem 0.56rem;
`;

export const UploadSection = styled.div`
  ${({ theme }) => {
    return css`
      width: 22.5rem;
      height: 28.13rem;
    `;
  }}
`;

export const UploadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-mask-image: linear-gradient(0deg, #000 70%, rgba(36, 36, 36, 0) 100%);
`;
export const AnswerSection = styled.div`
  display: flex;
  margin: 1.34rem;
  flex-direction: column;
`;

export const NormalText = styled.span`
  ${({ theme }) => {
    return css`
      margin-top: 3rem;
      font-family: ${theme.fonts.body3.fontFamily};
      font-size: ${theme.fonts.body3.fontSize}rem;
      font-weight: ${theme.fonts.body3.fontWeight};
      color: ${theme.colors.white};
    `;
  }}
`;

export const PointText = styled.span`
  ${({ theme }) => {
    return css`
      font-family: ${theme.fonts.body3.fontFamily};
      font-size: ${theme.fonts.body3.fontSize}rem;
      font-weight: ${theme.fonts.body3.fontWeight};
      color: ${theme.colors.magenta500};
    `;
  }}
`;
export const AnswerLabel = styled.label`
  ${({ theme }) => {
    return css`
      font-family: ${theme.fonts.body2B.fontFamily};
      font-size: ${theme.fonts.body2B.fontSize}rem;
      font-weight: ${theme.fonts.body2B.fontWeight};
      color: ${theme.colors.white};
    `;
  }}
`;
export const AnswerInput = styled.input`
  ${({ theme }) => {
    return css`
      width: 16.625rem;
      height: 2.125rem;
      padding: 0.5rem;
      border: 1px solid ${theme.colors.white};
      border-radius: 0.5rem;

      font-family: ${theme.fonts.body3.fontFamily};
      font-size: ${theme.fonts.body3.fontSize}rem;
      font-weight: ${theme.fonts.body3.fontWeight};
      line-height: ${theme.fonts.body3.lineHeight};
      color: ${theme.colors.white};
      background-color: transparent;
      filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
    `;
  }}
`;

export const InfoText = styled.p`
  ${({ theme }) => {
    return css`
      margin-top: 0.19rem;
      margin-left: 2.75rem;
      font-family: ${theme.fonts.caption.fontFamily};
      font-size: ${theme.fonts.caption.fontSize}rem;
      font-weight: ${theme.fonts.caption.fontWeight};
      color: ${theme.colors.white};
    `;
  }}
`;

export const SubmitButton = styled.button`
  ${({ theme }) => {
    return css`
      padding: 0.625rem 3.125rem;
      border-radius: 1.5625rem;
      border: 1px solid ${theme.colors.magenta500};
      color: ${theme.colors.magenta500};
      font-family: ${theme.fonts.body2R.fontFamily};
      font-size: ${theme.fonts.body2R.fontSize};
      font-weight: ${theme.fonts.body2R.fontWeight};
      box-shadow: 0px 0px 4px 0px #fff;
    `;
  }}
`;

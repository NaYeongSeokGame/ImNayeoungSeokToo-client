import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => {
    return css`
      padding: 2rem 1.875rem;

      display: flex;
      flex-direction: column;
      gap: 1.875rem 0;

      background-color: ${theme.colors.white};
      border-radius: 1rem;
    `;
  }}
`;

export const OptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;

  & > p {
    font-size: 1.125rem;
    text-align: center;
  }
`;

export const UploadSection = styled.div`
  ${({ theme }) => {
    return css`
      width: 15rem;
      height: 9rem;

      display: flex;
      flex-direction: column;
      justify-content: center;

      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;

      & > svg {
        margin: 0 auto;
      }

      & > img {
        border-radius: 1rem;
      }
    `;
  }}
`;

export const AnswerInput = styled.input`
  ${({ theme }) => {
    return css`
      max-width: 14rem;
      margin: 0 auto;
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

export const SubmitButton = styled.button`
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

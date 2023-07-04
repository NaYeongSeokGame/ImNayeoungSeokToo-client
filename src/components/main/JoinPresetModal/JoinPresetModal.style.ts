import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      padding: 4rem 1.5rem;

      display: flex;
      flex-direction: column;
      gap: 3.75rem 0;

      border-radius: 0.8rem;
      background-color: ${theme.colors.white};

      background-image: url(/src/assets/images/background.svg);
      background-size: cover;
    `;
  }}
`;

export const SettingBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  font-size: 2rem;

  & > h5 {
    margin-bottom: 0.5rem;
  }
`;

export const PrivatePinInput = styled.input`
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

export const Button = styled.button`
  ${({ theme }) => {
    return css`
      font-family: 'LOTTERIADDAG';
      font-size: 1.125rem;
      padding: 0.5rem 3rem;
      margin: auto auto 0.875rem auto;

      background-color: ${theme.colors.white};
      border: 0.25rem solid ${theme.colors.black};
      border-radius: 1rem;
    `;
  }}
`;
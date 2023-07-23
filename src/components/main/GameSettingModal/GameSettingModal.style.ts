import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      padding: 0.9375rem;

      display: flex;
      flex-direction: column;
      gap: 0.375rem 0;

      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      font-family: 'NeoDunggeunmo Pro';

      h4 {
        font-size: 1.875rem;
      }
    `;
  }}
`;

export const SettingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5625rem;

  padding: 22px 0px;

  h5 {
    font-size: 1.125rem;
  }
`;

export const SoundOptionBox = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      gap: 0.5rem;
      margin: 0.5rem auto 0;

      font-size: 0.875rem;

      h6 {
        font-size: 0.875rem;
      }

      & .selected {
        color: ${theme.colors.purple};
      }
    `;
  }}
`;

export const SoundOptionRow = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      gap: 0.5rem;

      span {
        display: flex;
        gap: 0.5rem;
      }
    `;
  }}
`;

export const QuitOptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 1.875rem auto 0;
`;

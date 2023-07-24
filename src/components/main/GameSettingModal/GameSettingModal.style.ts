import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 0.9375rem;
  gap: 0.375rem 0;

  display: flex;
  flex-direction: column;

  font-family: 'NeoDunggeunmo Pro';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  h4 {
    font-size: 1.875rem;
  }
`;

export const SettingBox = styled.div`
  padding: 22px 0px;
  gap: 0.5625rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h5 {
    font-size: 1.125rem;
  }
`;

export const SoundOptionBox = styled.div`
  ${({ theme }) => {
    return css`
      margin: 0.5rem auto 0;
      gap: 0.5rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

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
  gap: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    display: flex;
    gap: 0.5rem;
  }
`;

export const QuitOptionBox = styled.div`
  margin: 1.875rem auto 0;
  gap: 2rem;

  display: flex;
  justify-content: space-between;
`;

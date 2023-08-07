import styled, { css } from 'styled-components';

import * as styles from '@/styles/modal';

export const Wrapper = styled(styles.Wrapper)``;

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
  ${({ theme }) => css`
    gap: 0.5rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      display: flex;
      gap: 0.5rem;
    }

    input[type='range'] {
      border-radius: 10px;
      height: 2px;

      accent-color: ${theme.colors.darkblue900};

      &::-webkit-slider-thumb {
        border-radius: 10px;
        background: ${theme.colors.darkblue900};
      }
    }
  `}
`;

export const QuitOptionBox = styled.div`
  margin: 1.875rem auto 0;
  gap: 2rem;

  display: flex;
  justify-content: space-between;
`;

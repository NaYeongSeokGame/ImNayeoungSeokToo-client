import styled, { css } from 'styled-components';

import * as styles from '@/styles/modal';

export const Wrapper = styled(styles.Wrapper)``;

export const SettingBox = styled(styles.SettingBox)`
  text-align: left;
`;

export const PrivatePinInput = styled.input`
  ${({ theme }) => {
    return css`
      border: 0px;
      background-color: transparent;

      max-width: 100%;
      margin: 2.5rem auto 0rem;
      padding: 0.5rem 0;

      border-bottom: 0.0625rem solid ${theme.colors.darkblue900};

      font-size: 1rem;
      color: ${theme.colors.darkblue900};
      text-align: center;

      &::placeholder {
        color: ${theme.colors.darkblue900};
      }
    `;
  }}
`;

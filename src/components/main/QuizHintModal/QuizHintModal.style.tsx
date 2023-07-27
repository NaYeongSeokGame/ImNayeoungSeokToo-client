import styled, { css } from 'styled-components';

import * as styles from '@/styles/modal';

export const Wrapper = styled(styles.Wrapper)`
  h5 {
    font-size: 1.125rem;
  }
`;

export const HintSection = styled.section`
  min-width: 8rem;
  padding: 1.8125rem 1.375rem;
  gap: 1.625rem;

  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: flex-start;
`;

export const Hint = styled.p`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.black};
      text-align: center;

      font-size: 1.875rem;
      font-family: ${theme.fonts.deco3.fontFamily};
      font-weight: 700;
      color: ${theme.colors.darkblue800};
    `;
  }}
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 1.875rem;
`;

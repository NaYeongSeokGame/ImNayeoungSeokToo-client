import styled, { css } from 'styled-components';

import getCloudFrontUrl from '@/utils/getCloudFrontUrl';

export const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      min-height: 100vh;
      align-items: center;

      background-color: ${theme.colors.black};
    `;
  }}
`;

export const Background = styled.main`
  width: 22.5rem;
  height: 100vh;

  margin: auto;
  background-image: url(${getCloudFrontUrl('/static/mainBackground.png')});
  background-size: cover;

  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

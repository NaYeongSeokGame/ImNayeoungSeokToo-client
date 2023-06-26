import styled, { css } from 'styled-components';

import { ReactComponent as LandingImageSvg } from '@/assets/images/landingImage.svg';
import { ReactComponent as LandingTextSvg } from '@/assets/images/landingText.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
`;

export const LandingText = styled(LandingTextSvg)`
  margin: auto auto -0.25rem auto;
`;

export const LandingImage = styled(LandingImageSvg)`
  margin: 0 auto auto auto;
`;

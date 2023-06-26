import styled from 'styled-components';

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

export const LandingImage = styled.img`
  margin: 0 auto auto auto;
`;

export const Lottie = styled.div`
  width: 12.5rem;
  height: 3rem;

  object-fit: cover;
`;

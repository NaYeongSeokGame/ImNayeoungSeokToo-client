import React from 'react';
import styled from 'styled-components';

import Banner from './Banner';
import CarouselComponent from './Carousel';
import Customize from './CustomizeButton';
import Navigation from './Navigation';

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

function MainScreen(): JSX.Element {
  return (
    <Main>
      <Navigation />
      <Banner />
      <CarouselComponent />
      <Customize />
    </Main>
  );
}

export default MainScreen;

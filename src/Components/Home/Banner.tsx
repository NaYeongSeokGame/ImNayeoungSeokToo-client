import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 40px;
  color: #333;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MainImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 100%;
`;

function Banner(): JSX.Element {
  return (
    <HomeContainer>
      <MainTitle>Main Title</MainTitle>
      <MainImage
        src="https://i.pinimg.com/474x/9e/1e/20/9e1e20a1744a8abde2b3e51dc392f495.jpg"
        alt="Main"
      />
    </HomeContainer>
  );
}

export default Banner;

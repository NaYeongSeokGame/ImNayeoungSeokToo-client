import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

// 이미지 데이터 배열
const images = [
  'https://i.pinimg.com/474x/fa/a2/dd/faa2ddbd0a444483765422ba65360130.jpg',
  'https://i.pinimg.com/474x/18/77/3a/18773a80fe038822258bffc313e5d21a.jpg',
  'https://i.pinimg.com/474x/c5/a5/b6/c5a5b61428f7e620c4c1777bd1141fa4.jpg',
  'https://i.pinimg.com/474x/d9/b3/5d/d9b35dfac0508bd851edfc72f2e583ab.jpg',
  'https://i.pinimg.com/474x/0f/5a/78/0f5a78ae362d77f9bae883835244c32a.jpg',
];

const CarouselWrapper = styled.div`
  height: 100%;
  max-width: 600px;
  margin: 30px auto;
  position: relative;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
`;

const CarouselComponent: React.FC = () => {
  const carouselRef = React.useRef<Carousel>(null);

  return (
    <CarouselWrapper>
      <Carousel
        autoPlay={true}
        infiniteLoop
        interval={1000}
        showThumbs={false}
        showStatus={false}
        ref={carouselRef}
      >
        {images.map((image, index) => (
          <CarouselContainer key={index}>
            <Image src={image} alt={`Image ${index + 1}`} />
          </CarouselContainer>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default CarouselComponent;

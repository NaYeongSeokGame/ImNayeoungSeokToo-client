import React from 'react';
import img1 from '../assets/icons/나.svg';
import img2 from '../assets/icons/도.svg';
import img3 from '../assets/icons/영.svg';
import img4 from '../assets/icons/석.svg';
import styled from 'styled-components';


const Logo = () => {
  return (
    <LogoLayout>
      <img src={img1}></img>
      <img src={img2}></img>
      <img src={img1}></img>
      <img src={img3}></img>
      <img src={img4}></img>
    </LogoLayout>
  );
};

export default Logo;
const LogoLayout = styled.div`
  margin-top:0.69;
`;
import StartSc from './StartScreen';

import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import logo from '/public/assets/images/item01.png';

const Wrapper = styled.section`
  position:absolute;
  top:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #;
`;

const Img = styled.img`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function CountStart(){
  const [time, setTime] = React.useState(3);

  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time -1), 1000);
  },[time]);
  return (
    <>
    <div>
      {time ? time : <StartSc />}
    </div>
    </>
  )
}

export default function ready() {
  return (
    <>
      <Img src={logo} className="App-logo" alt="React" />
      <Wrapper>
        <Title>준비화면</Title>
        <CountStart />
      </Wrapper>
    </>
  );
}

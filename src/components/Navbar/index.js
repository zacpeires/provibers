import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MidSizedText } from '../Typography';
import { TransparentButton } from '../Button';

export const Navbar = styled.nav`
  height: 90px;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  padding: 0 80px;
  display: flex;
  align-items: center;
  z-index: 10;
  a {
    text-decoration: none;
  }
`;

const BackgroundFill = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: 0.4s background-color;
  ${props => {
    if (props.solidNavbar) {
      return `
        background-color: rgba(255,255,255);
      `
    } else {
      return `
      background-color: rgba(255,255,255, 0.8);
      `
    }
  }}
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  padding-left: 100px;
`;

export default () => {
  const [ solidNavbar, setSolidNavbar ] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5) {
        setSolidNavbar(true)
      } else {
        setSolidNavbar(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
  });



  return (
    <Navbar>
      <BackgroundFill solidNavbar={solidNavbar}/>
      <TextContainer>
        <MidSizedText>Home</MidSizedText>
        <MidSizedText>About</MidSizedText>
        <MidSizedText>Work</MidSizedText>
        <MidSizedText>Clients</MidSizedText>
        <TransparentButton>Contact</TransparentButton>
      </TextContainer>
    </Navbar>
  );
};

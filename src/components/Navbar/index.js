import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MidSizedText } from '../Typography';
import { HamburgerMenu } from '../Icons';

export const Navbar = styled.nav`
  height: 70px;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  padding: 0 80px;
  background-color: white;
  display: flex;
  align-items: center;
  z-index: 10;
  a {
    text-decoration: none;
  }
  @media (max-width: 415px) {
    padding: 0 40px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  @media (max-width: 710px) {
    display: none;
  }
`;

export default () => {
  return (
    <Navbar>
      <TextContainer>
        <Link to='/'>
          <MidSizedText>Home</MidSizedText>
        </Link>
        <a href='#about'>
          <MidSizedText>About</MidSizedText>
        </a>
        <MidSizedText>Work</MidSizedText>
        <MidSizedText>Clients</MidSizedText>
        <MidSizedText>Contact</MidSizedText>
        <MidSizedText>Vibes Blog</MidSizedText>
      </TextContainer>
      <HamburgerMenu />
    </Navbar>
  );
};

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MidSizedText } from '../Typography';

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
`;



const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 10px;
`;

export default () => {
  return (
    <Navbar>
      <TextContainer>
        <MidSizedText>Home</MidSizedText>
        <MidSizedText>About</MidSizedText>
        <MidSizedText>Work</MidSizedText>
        <MidSizedText>Clients</MidSizedText>
        <MidSizedText>Contact</MidSizedText>
        <MidSizedText>Vibes Blog</MidSizedText>
      </TextContainer>
    </Navbar>
  );
};

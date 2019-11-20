import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: #787877;
`;
const HamburgerContainer = styled.div`
  height: 30px;
  width: 35px;
  flex-direction: column;
  justify-content: space-around;
  display: none;
  @media (max-width: 710px) {
    display: flex;
    margin-left: auto;
    cursor: pointer;
  }
`;

export const HamburgerMenu = () => {
  return (
    <HamburgerContainer>
      <Line />
      <Line />
      <Line />
    </HamburgerContainer>
  );
};

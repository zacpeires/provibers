import React from 'react';
import styled from 'styled-components';
import shambalaDanceOff from '../../assets/images/shambala-dance-off.jpeg'

export const BackgroundImage = styled.div`
  width: 100%;
  position: relative;
  height: 750px;
  top: 150px;
  text-align: center;
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateZ(-1.5px) scale(2);
    z-index: -1;
    background-image: url("${props => props.img}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }
`;



export const HomePageBackgroundImage = () => {
  return (
    <>
    <BackgroundImage img={shambalaDanceOff} />
    </>
  );
};

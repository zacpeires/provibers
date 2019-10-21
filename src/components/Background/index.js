import React from 'react';
import styled from 'styled-components';
import shambalaDanceOff from '../../assets/images/shambala-dance-off.jpeg'

export const BackgroundImage = styled.div`
  width: 100%;
  position: relative;
  height: 85vh;
  text-align: center;
  background-image: url("${props => props.img}");
  background-repeat: no-repeat;
  background-size: cover;;
  background-position: center;
  z-index: 5;
`;


export const LightBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 85vh;
  background-color: rgba(255,255,255,0.5);
`;


export const HomePageBackgroundImage = () => {
  return (
    <>
    <BackgroundImage img={shambalaDanceOff}>
      <LightBackground />
    </BackgroundImage>
    </>
  );
};

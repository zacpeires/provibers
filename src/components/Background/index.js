import React from 'react';
import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  position: relative;
  height: 750px;
  text-align: center;
  ${props => {
    if (props.titlePicture) {
      return`
        top: 310px;
      `
    }
  }}
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateZ(-3.5px) scale(3);
    z-index: ${props => props.zIndex}
    background-image: url("${props => props.img}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }
`;


export const HomePageBackgroundImage = ({img, titlePicture, zIndex}) => {
  return (
    <>
    <BackgroundImage zIndex={zIndex} titlePicture={ titlePicture ? titlePicture : null} img={img} />
    </>
  )
};

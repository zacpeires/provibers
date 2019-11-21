import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  height: 310px;
  overflow: hidden;
  @media (max-width: 1050px) {
    width: 750px;
  }
  @media (max-width: 850px) {
    width: 500px;
  }
  @media (max-width: 530px) {
    width: 360px;
    height: 250px;
  }
`;

const Image = styled.div`
  height: 100%;
  min-width: 240px;
  background-color: white;
  margin-right: 5px;
  margin-left: 5px;
  @media (max-width: 530px) {
    min-width: 170px;
  }
`;

const InternalImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transform: ${props => `translateX(-${props.translate}px)`};
  transition: 0.2s transform;
`;

export default () => {
  const [index, setIndex] = useState(0);
  const imagesAndInfo = [0, 0, 0, 0, 0, 0, 0];

  const shiftRight = () => {
    setIndex(index + 1);
  };

  //   setInterval(() =>{
  //       shiftRight();
  //   }, 1000)

  return (
    <Container>
      <InternalImageContainer translate={250 * index}>
        {imagesAndInfo.map((image, index) => {
          console.log(index);
          return <Image />;
        })}
      </InternalImageContainer>
    </Container>
  );
};

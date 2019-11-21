import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  height: 310px;
  overflow: hidden;
  box-sizing: border-box;
  padding-left: 10px;
`;

const Image = styled.div`
  height: 100%;
  min-width: 240px;
  background-color: white;
  margin-right: 10px;
`;

const InternalImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transform: ${props => `translateX(-${props.translate}px)`};
  transition: 0.2s transform;
`;

const PinkImage = styled.div`
  height: 100%;
  min-width: 240px;
  background-color: pink;
  margin-right: 10px;
`;

export default () => {
  const [index, setIndex] = useState(0);

//   setInterval(() =>{
//       setIndex(index + 1);
//   }, 1000)

    const shiftRight = () => {
        setIndex(index + 1)
    }

  return (
    <Container>
      <InternalImageContainer translate={250 * index}>
        <Image />
        <Image />
        <Image />
        <Image />
        <PinkImage />
        <PinkImage />
        <PinkImage />
      </InternalImageContainer>
    </Container>
  );
};

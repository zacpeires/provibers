import React from 'react';
import styled from 'styled-components';
import { HomePageBackgroundImage } from '../components/Background';
import About from './About';
import PastWork from './PastWork';
import Contact from './Contact';
import Footer from '../components/Footer';

const ParallaxContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
`;

export default () => {
  return (
    <>
      <ParallaxContainer>
        <HomePageBackgroundImage />
        <About />
        <PastWork />
        <Contact />
        <Footer />
      </ParallaxContainer>
    </>
  );
};

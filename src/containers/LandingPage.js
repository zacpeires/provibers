import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HomePageBackgroundImage } from '../components/Background';
import About from './About';
import PastWork from './PastWork';
import Contact from './Contact';
import Footer from '../components/Footer';
import fashionShow from '../assets/images/fashion-show.jpeg';
import snowbombing from '../assets/images/snowbombing.jpeg'

const ParallaxContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
`;

export default () => {

  const [ zIndexPrimary, setZIndexPrimary ] = useState(-1)
  const [ zIndexSecondary, setZIndexSecondary ] = useState(-2)

  useEffect(() => {
    const parallaxElement = document.querySelector('.parallax');
    const handleScroll = () => {
      if (parallaxElement.scrollTop >= 800) {
        setZIndexPrimary(-2)
        setZIndexSecondary(-1)
      } else {
        setZIndexPrimary(-1)
        setZIndexSecondary(-2)
      }
    };
    parallaxElement.addEventListener('scroll', handleScroll);
  });


  return (
    <>
      <ParallaxContainer className="parallax">
        <span id="top"/>
        <HomePageBackgroundImage zIndex={zIndexPrimary} titlePicture img={snowbombing} />
        <About />
        <HomePageBackgroundImage zIndex={zIndexSecondary} img={fashionShow} />
        <PastWork />
        <Contact />
        <Footer />
        </ParallaxContainer>
    </>

  );
};

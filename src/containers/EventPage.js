import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Container = styled.div`
  background-color: #38dcc8;
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 60px;
  flex-direction: column;
  text-align: center;
  @media (max-width: 530px) {
    padding-bottom: 35px;
  }
`;

const EventExplanationText = styled.p`
  font-family: arial;
  font-size: 21px;
  width: 950px;
  color: white;
  margin-top: 30px;
  @media (max-width: 1050px) {
    font-size: 18px;
    width: 740px;
  }
  @media (max-width: 850px) {
    width: 450px;
    font-size: 16px;
  }
  @media (max-width: 530px) {
    width: 300px;
    font-size: 14px;
  }
`;

export default () => {
  return (
    <>
      <Container>
        <Carousel />
        <EventExplanationText>
          Fieldview Festival is one of our spiritual homes. For three beautiful
          years we've hosted the Games Arena and Pride Parade - bringing the
          silliest and sassiest vibes with our special brand of games that focus
          not only on contestants but spectators too. We create a safe and
          supportive environment where being extraordinary, extravagant and
          extraverted is both encouraged and celebrated! This is inclusivity,
          positivity and activity at its best!
        </EventExplanationText>
      </Container>
      <Footer />
    </>
  );
};

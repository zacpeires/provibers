import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #c390d4;
  box-sizing: border-box;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
  }
`;

const Title = styled.p`
  margin-top: 0;
  font-weight: bold;
  font-size: 63px;
  text-transform: uppercase;
  color: white;
  margin-bottom: 40px;

  @media (max-width: 670px) {
    font-size: 50px;
  }

  @media (max-width: 530px) {
    font-size: 45px;
  }
  @media (max-width: 4150px) {
    font-size: 33px;
  }
`;

const EventBox = styled.div`
  background-color: white;
  box-sizing: border-box;
  padding: 6px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 40px;
`;

const EventImage = styled.div`
  width: 290px;
  height: 150px;
  background-color: pink;
`;

const EventTitle = styled.p`
  color: #c390d4;
  font-size: 18px;
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 6px;
`;

export default () => {
  return (
    <Container>
      <Title>What We've Done</Title>

      <Row>
        <Link to='/haig-house-party'>
          <EventBox>
            <EventImage></EventImage>
            <EventTitle>Haig House Party</EventTitle>
          </EventBox>
        </Link>
        <Link to='/smirnoff'>
          <EventBox>
            <EventImage></EventImage>
            <EventTitle>Smirnoff House</EventTitle>
          </EventBox>
        </Link>
        <Link to='/durex'>
          <EventBox>
            <EventImage></EventImage>
            <EventTitle>Durex Music</EventTitle>
          </EventBox>
        </Link>
        <Link to='/yach-week'>
          <EventBox>
            <EventImage></EventImage>
            <EventTitle>The Yacht Week</EventTitle>
          </EventBox>
        </Link>
        <Link to='/snowbombing'>
          <EventBox>
            <EventImage></EventImage>
            <EventTitle>Snowbombing</EventTitle>
          </EventBox>
        </Link>
        <Link to='elrow-town'>
          <EventBox>
            <EventImage></EventImage>
            <EventTitle>Elrow Town</EventTitle>
          </EventBox>
        </Link>
        <Link to='/festivals'>
          <EventBox>
            <EventImage></EventImage>
            <EventTitle>Festival Vibes</EventTitle>
          </EventBox>
        </Link>
        <Link to='/gamesys'>
          <EventBox>
            <EventImage></EventImage>
            <EventTitle>Gamesys Party</EventTitle>
          </EventBox>
        </Link>
        <Link to='/ovo-summer-party'>
          <EventBox>
            <EventImage></EventImage>
            <EventTitle>OVO Summer Party</EventTitle>
          </EventBox>
        </Link>
        <Link to='/fieldview-festival'>
          <EventBox>
            <EventImage></EventImage>
            <EventTitle>FieldView Festival</EventTitle>
          </EventBox>
        </Link>
        <Link to='/we-are-festival'>
          <EventBox>
            <EventImage></EventImage>
            <EventTitle>We Are Festival</EventTitle>
          </EventBox>
        </Link>
      </Row>
    </Container>
  );
};

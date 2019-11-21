import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';

const Container = styled.div`
background-color: #38dcc8;
width: 100%;
display: flex;
height: 100%;
align-items: center;
box-sizing: border-box;
justify-content: center;
padding-top: 150px;
padding-bottom: 100px;
flex-direction: column;
text-align: center;
`;

const EventExplanationText = styled.p`
    font-family: arial;
    font-size: 21px;
    width: 950px;
    color: white;
`



export default () => {
    return (
        <Container>
            <Carousel />
            <EventExplanationText>
            Fieldview Festival is one of our spiritual homes. For three beautiful years we've hosted the Games Arena and Pride Parade - bringing the silliest and sassiest vibes with our special brand of games that focus not only on contestants but spectators too. We create a safe and supportive environment where being extraordinary, extravagant and extraverted is both encouraged and celebrated! This is inclusivity, positivity and activity at its best!
            </EventExplanationText>
        </Container>
    )
}
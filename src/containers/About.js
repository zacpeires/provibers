import React from 'react';
import styled from 'styled-components';
import { DashedLine } from '../components/SVG';

const Container = styled.div`
  background-color: #c390d4;
  box-sizing: border-box;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.div`
    height: 340px;
    min-width: 340px;
    margin-right: 25px;
    background-color: white;
`;

const AboutText = styled.p`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  font-family: sans-serif;
  color: white;
  margin: 0;
  text-align: center;
  ${props => {
    if (props.top) {
      return `
        margin-bottom: 40px;
      `
    }
  }}
`;

const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  aign-items: center;
  justify-content: center;
`;

const HalfPageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
`

const SubTitleFont = styled.p`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  color: white;
  margin: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
`

export default () => {
  return (
    <Container>
      <Row>
        <Video />
        <AboutTextContainer>
          <AboutText top>
            The Provibers are a multi-faceted, techni-coloured events and
            entertainment agency who create, innovate and collaborate to produce
            unforgettable experiences.
          </AboutText>
          <AboutText>
            Through genuine connections and a unique approach to events, The
            Provibers give life to all parties, deliver fun to festival fields
            and bring out the very best vibes in brands and brand experiences -
            The Provibers provide the vibe.
          </AboutText>
        </AboutTextContainer>
      </Row>
      <DashedLine />
      <Row>
          <HalfPageContainer> 
              <SubTitleFont>
                  Production
              </SubTitleFont>
              <AboutText>
              With years of experience under their belt, The Provibers offer a bespoke event production service for brands that want to stand out from the crowd — a team of creators with good vibes at the heart of every idea, and every production.
              </AboutText>
          </HalfPageContainer>
          <HalfPageContainer>
              <SubTitleFont>
                  Talent
              </SubTitleFont>
              <AboutText>
              The Provibers bring people in and make them smile; creating shareable moments through a highly talented collective of
                hosts, actors, games teams, character staff, brand ambassadors (aka BrandVibers), dancers, DJs, musicians and more.
              </AboutText>
          </HalfPageContainer>
      </Row>
    </Container>
  );
};

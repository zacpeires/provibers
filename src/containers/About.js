import React from 'react';
import styled from 'styled-components';
import { DashedLine, Diamond } from '../components/SVG';

const Container = styled.div`
  background-color: #c390d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  #dashed-line {
    width: 100%;
    height: 25px;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
  padding: 40px 40px 30px 40px;
  ${props => {
    if (props.spaceAround) {
      return `
        justify-content: space-around;
        padding-top: 0;
        @media (max-width: 780px) {
          padding-left: 0;
          padding-right: 0;
        }
      `;
    }
  }}
  @media (max-width: 710px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Video = styled.div`
  height: 340px;
  min-width: 340px;
  margin-right: 25px;
  background-color: white;
  @media (max-width: 940px) {
    height: 280px;
    min-width: 280px;
  }
  @media (max-width: 710px) {
    width: 400px;
    height: 400px;
    margin-bottom: 30px;
    margin-right: 0;
  }
  @media (max-width: 415px) {
    width: 320px;
    height: 320px;
  }
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
      `;
    }
  }}
  @media (max-width: 940px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 710px) {
    font-size: 18px;
    line-height: 24px;
    ${props => {
      if (props.firstHalf) {
        return `
          width: 77%;
        `;
      }
    }}
  }
  @media (max-width: 450px) {
    ${props => {
      if (props.firstHalf) {
        return `
          width: 100%;
        `;
      }
    }}
  }
`;

const IndividualTextContainer = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
`;

const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HalfPageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  width: 50%;
  @media (max-width: 710px) {
    max-width: unset;
    width: 80%;
    ${props => {
      if (props.top) {
        return `
          margin-bottom: 30px;
        `;
      }
    }}
  }
  @media (max-width: 450px) {
    width: 100%;
    padding: 0;
  }
  svg {
    fill: #ddb8ea;
    width: 65%;
    margin-top: 10px;
  }
`;

const SubTitleFont = styled.p`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  color: white;
  margin: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
  @media (min-width: 710px) and (max-width: 940px) {
    font-size: 25px;
  }
`;

const ShadowText = styled.p`
  text-shadow: #ffffff 0px 0px 6px;
  margin: 0;
  display: inline;
`;

export default () => {
  return (
    <Container>
      <Row>
        <Video />
        <AboutTextContainer>
          <AboutText top firstHalf>
            The Provibers are a multi-faceted, techni-coloured events and
            entertainment agency who create, innovate and collaborate to produce
            unforgettable experiences.
          </AboutText>
          <AboutText firstHalf>
            Through genuine connections and a unique approach to events, The
            Provibers
            <ShadowText>
            {' '}give life to all parties, deliver fun to festival fields and bring
              out the very best vibes in brands and brand experiences
            </ShadowText>
            - The Provibers provide the vibe.
          </AboutText>
        </AboutTextContainer>
      </Row>
      <DashedLine />
      <Row spaceAround>
        <HalfPageContainer top>
          <IndividualTextContainer>
            <SubTitleFont>Production</SubTitleFont>
            <AboutText>
              With years of experience under their belt, The Provibers offer a
              bespoke event production service for brands that want to stand out
              from the crowd — a team of creators with good vibes at the heart
              of every idea, and every production.
            </AboutText>
          </IndividualTextContainer>
          <Diamond />
        </HalfPageContainer>
        <HalfPageContainer>
          <IndividualTextContainer>
            <SubTitleFont>Talent</SubTitleFont>
            <AboutText>
              The Provibers bring people in and make them smile; creating
              shareable moments through a highly talented collective of hosts,
              actors, games teams, character staff, brand ambassadors (aka
              BrandVibers), dancers, DJs, musicians and more.
            </AboutText>
          </IndividualTextContainer>
          <Diamond />
        </HalfPageContainer>
      </Row>
    </Container>
  );
};

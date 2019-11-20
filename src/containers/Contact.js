import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 155px 85px;
  background-color: #38dcc8;
  @media (max-width: 415px) {
    padding 110px 55px 95px;
  }
`;

const LargeTitle = styled.p`
  font-size: 42px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  @media (max-width: 415px) {
    font-size: 33px;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  height: 125px;
  border: 10px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContactBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 90px;
  justify-content: space-between;
  @media (max-width: 710px) {
    flex-direction: column;
  }
  @media (max-width: 415px) {
    margin-top: 65px;
  }
`;

const TextAndContactIcons = styled.div`
  margin-right: 20%;
  @media (max-width: 710px) {
    margin-bottom: 35px;
    margin-right: unset;
  }
`;

const ContactText = styled.p`
  color: white;
  margin: 0;
  margin-bottom: 25px;
  ${props => {
    if (props.title) {
      return `
                font-size: 25px;
                font-weight: bold; 
                text-transform: uppercase;
            `;
    } else {
      return `
                font-size: 15px;
                cursor: pointer;
                font-family: arial;
            `;
    }
  }}
  @media (max-width: 710px) {
    margin-bottom: 15px;
  }
`;

const SocialMediaImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`;

const SocialsBox = styled.div`
  display: flex;
  transform: translateX(-8px);
`;

export default () => {
  return (
    <Container>
      <TitleBox>
        <LargeTitle>Get In Touch</LargeTitle>
      </TitleBox>
      <ContactBox>
        <TextAndContactIcons>
          <ContactText title>Contact</ContactText>
          <ContactText>hey@theprovibers.com</ContactText>
          <SocialsBox>
            <a href='https://www.facebook.com/theprovibers/' target='_blank'>
              <SocialMediaImage src='https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_56,h_56,al_c,q_80,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp' />
            </a>
            <a href='https://www.instagram.com/theprovibers/' target='_blank'>
              <SocialMediaImage src='https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_56,h_56,al_c,q_80,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp' />
            </a>
          </SocialsBox>
        </TextAndContactIcons>
        <Form />
      </ContactBox>
    </Container>
  );
};

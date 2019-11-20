import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 490px;
  @media (max-width: 710px) {
    width: 100%;
    form {
        width: 100%:    
    }
}
`;

const Input = styled.input`
  background-color: white;
  padding: 5px;
  width: 100%;
  color: #38dcc8;
  box-sizing: border-box;
  border: transparent;
  ::placeholder {
    color: #38dcc8;
    font-size: 13px;
    font-family: arial;
  }
  margin-bottom: 5px;
`;

const TextArea = styled.textarea`
  background-color: white;
  padding: 5px;
  box-sizing: border-box;
  min-width: 100%;
  color: #38dcc8;
  height: 130px;
  font-size: 13px;
  resize: none;
  border: transparent;
  font-family: arial;
  margin-top: 1px;
`;

const FormButton = styled.button`
display: flex
  background-color: white;
  border: none;
  margin-left: auto;
  margin-top: 8px;
  color: #38dcc8;
  padding: 5px;
  font-family: arial;
`;

export default () => {
  return (
    <Container>
      <form>
        <Input placeholder='Name *' />
        <Input placeholder='Email *' />
        <Input placeholder='Subject *' />
        <TextArea>Message</TextArea>
      </form>
      <FormButton>Send</FormButton>
    </Container>
  );
};

import React from 'react';
import styled from '@emotion/styled';
import Heading from './Heading';
import ServiceButton from './ServiceButton';

const FormWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  height: 650px;
  width: 100%;
  box-shadow: 0px 10px 35px -5px rgba(0, 0, 0, 0.75);
  background: #232a34;

  @media screen and (min-width: 600px) {
    height: 500px;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 20px 0;
`;

const ContactCredentials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContactInput = styled.input`
  width: 100%;
  height: 20px;
  background: #e0e0e0;
  border: none;
  border-radius: 3px;
  padding: 0.5em;
  margin: 0.5em;

  &::placeholder {
    text-align: center;
  }
`;

const ContactText = styled.p`
  width: 80%;
  text-align: center;
  color: whitesmoke;
`;

const ContactTextArea = styled.textarea`
  width: 80%;
  height: 100px;
  background: #e0e0e0;
  border: none;
  border-radius: 3px;
  padding: 0.5em;
  margin: 0.5em;
  resize: none;
`;

const ContactHeading = styled(Heading)`
  background: #eae8e8;
`;

export default function Contact(props) {
  return (
    <FormWrapper className={'contact'}>
      <ContactHeading
        heading={'Contact'}
        backgroundColor={'#4e5866'}
        textColor={'white'}
      ></ContactHeading>
      <BoxWrapper>
        <ContactText>
          Tempor est tempor aliqua occaecat pariatur aute ullamco non amet sunt.
          Aliquip deserunt irure ipsum ad esse id id esse. Ullamco aliqua ut
          tempor consectetur velit exercitation exercitation ullamco aliqua et.
          Aliqua dolor in occaecat do amet aliquip culpa laboris do Lorem veniam
          cillum culpa. Ut Lorem quis excepteur velit enim aute in cillum
          aliquip cupidatat eiusmod anim occaecat. Aute occaecat fugiat laboris
          exercitation nostrud voluptate excepteur ex excepteur velit. Nostrud
          culpa enim minim exercitation sint ad laborum irure laboris. Laboris
          in dolore officia exercitation dolor eiusmod mollit. Commodo dolor
          veniam esse sint magna ex ea pariatur dolor adipisicing.
        </ContactText>
      </BoxWrapper>
      <ContactCredentials>
        <ContactInput
          placeholder={'eMail Address'}
          type={'email'}
        ></ContactInput>
        <ContactInput placeholder={'Name'}></ContactInput>
      </ContactCredentials>
      <ContactTextArea placeholder={'Your Text'}></ContactTextArea>
      <ServiceButton onSubmit={props.onSubmit}>Submit</ServiceButton>
    </FormWrapper>
  );
}

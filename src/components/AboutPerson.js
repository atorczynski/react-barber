import React from 'react';
import styled from '@emotion/styled';

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: lightgrey;
  height: 180px;
  width: 180px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  object-fit: fill;
`;

const PersonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 250px;
  filter: grayscale(100%);
`;

const PersonText = styled.h3``;

const PersonCaption = styled.p`
  font-style: oblique;
`;

export default function AboutPerson(props) {
  return (
    <PersonContainer>
      <ImageWrapper>
        <Image src={props.img} />
      </ImageWrapper>
      <PersonTextWrapper>
        <PersonText>{props.personName}</PersonText>
        <PersonCaption>{props.personCaption}</PersonCaption>
      </PersonTextWrapper>
    </PersonContainer>
  );
}

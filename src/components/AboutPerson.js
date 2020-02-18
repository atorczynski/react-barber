import React from 'react';
import styled from '@emotion/styled';
import Button from './ServiceButton';
import Collapsible from 'react-collapsible';
import style from '../style.css';

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-top: 25px;
  }
  @media screen and (min-width: 600px) {
    margin-top: 50px;
  }
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

const PersonText = styled.h3`
  all: unset;
  margin-top: 10px;
  color: white;
`;

const PersonCaption = styled.p`
  all: unset;
  font-style: oblique;
  color: white;
`;

const PersonDetailContainer = styled.div`
  display: ${(props) => (props.drawer === true ? 'block' : 'none')};
  height: 500px;
`;

const PersonDetails = styled.p``;

const CollapsibleDrawer = styled(Collapsible)`
  text-align: center;

  &::before {
    text-align: center;
  }
  &::after {
    text-align: center;
  }
`;

const CollapsibleText = styled.p`
  color: white;
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
        <CollapsibleDrawer
          trigger={<Button>More</Button>}
          triggerWhenOpen={<Button>Close</Button>}
          openedClassName={'Collapsible_triggered'}
        >
          <PersonDetails>{props.personDescription}</PersonDetails>
        </CollapsibleDrawer>
      </PersonTextWrapper>
    </PersonContainer>
  );
}

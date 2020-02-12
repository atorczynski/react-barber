import React from 'react';
import styled from '@emotion/styled';
import ServiceButton from './ServiceButton';

const SericeBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 300px;
  border-radius: 5%;
  width: 250px;
  flex-wrap: 0;
  background: #ecebea;
  box-shadow: 0px 10px 35px -30px rgba(0, 0, 0, 0.75);

  @media screen and (min-width: 320px) {
    margin-top: 20px;
  }
`;

const ServiceHeading = styled.h2`
  all: unset;
  font-size: 20px;
  text-align: center;
  border-radius: 5% 5% 0 0;
  font-family: 'Satisfy', cursive;
  width: 100%;
  color: whitesmoke;
  background: #656464;
  opacity: 90%;
`;

const PriceWrapper = styled.div`
  text-align: center;
  height: 25%;
  width: 100%;
  background: #ffdca5;
`;
const ServicePrice = styled.h2`
  font-weight: bold;
`;

const ServiceTextWrapper = styled.div`
  width: 100%;
  text-align: center;
  height: 20%;
  font-size: 12px;

  &:nth-child(even) {
    background: lightgrey;
  }
`;

const ServiceText = styled.h3`
  font-weight: lighter;
  color: #262626;
`;

export default function Service(props) {
  return (
    <SericeBox>
      <ServiceHeading>{props.serviceName}</ServiceHeading>
      <PriceWrapper>
        <ServicePrice>{props.servicePrice}</ServicePrice>
      </PriceWrapper>
      <ServiceTextWrapper>
        <ServiceText>{props.serviceTime}</ServiceText>
      </ServiceTextWrapper>
      <ServiceTextWrapper>
        <ServiceText>{props.serviceExtra1}</ServiceText>
      </ServiceTextWrapper>
      <ServiceTextWrapper>
        <ServiceText>{props.serviceExtra2}</ServiceText>
      </ServiceTextWrapper>
      <ServiceButton onClick={props.onClick}>Book</ServiceButton>
    </SericeBox>
  );
}

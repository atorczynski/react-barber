import React from 'react';
import styled from '@emotion/styled';
import ServiceButton from './ServiceButton';

const SericeBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 450px;
  width: 250px;
  flex-wrap: 0;
  background: #232a34;
  box-shadow: 0px 10px 35px -30px rgba(0, 0, 0, 0.75);
  transition: transform 0.3s ease;
  border-radius: 7px;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 320px) {
    margin: 35px 0 35px 0;
  }
`;

const ServiceHeading = styled.h2`
  all: unset;
  height: 40px;
  font-size: 22px;
  text-align: center;
  border-radius: 5% 5% 0 0;
  font-family: 'Satisfy', cursive;
  width: 100%;
  color: whitesmoke;
  background: #4e5866;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 15%;
  width: 100%;
  background: #232a34;
`;
const ServicePrice = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #f3f3f3;
`;

const ServiceImageWraper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  width: 90%;
  height: 400px;
  object-fit: cover;
  overflow: hidden;
`;

const ServiceImage = styled.img`
  border-radius: 25px;
  min-height: 100%;
  min-width: 100%;
  width: auto;
  height: auto;
`;

export default function Service(props) {
  return (
    <SericeBox>
      <ServiceHeading>{props.serviceName}</ServiceHeading>
      <PriceWrapper>
        <ServicePrice>{props.servicePrice}</ServicePrice>
      </PriceWrapper>
      <ServiceImageWraper>
        <ServiceImage src={props.serviceImage} />
      </ServiceImageWraper>
      <ServiceButton onClick={props.onClick}>Book</ServiceButton>
    </SericeBox>
  );
}

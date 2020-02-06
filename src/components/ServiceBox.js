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

  @media screen and (min-width: 375px) {
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
  background: #efa253;
  opacity: 90%;
`;

const ServicePrice = styled.h3``;

const DescriptionWrapper = styled.div`
  width: 95%;
  height: 50%;
`;

const ServiceDescription = styled.p`
  word-break: break-all;
`;

const Seperator = styled.hr`
  width: 90%;
`;

export default function Service(props) {
  return (
    <SericeBox>
      <ServiceHeading>{props.serviceName}</ServiceHeading>
      <ServicePrice>{props.servicePrice}</ServicePrice>
      <Seperator />
      <DescriptionWrapper>
        <ServiceDescription>{props.serviceDescription}</ServiceDescription>
      </DescriptionWrapper>
      <ServiceButton onClick={props.onClick}>Book</ServiceButton>
    </SericeBox>
  );
}

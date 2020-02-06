import React from 'react';
import ServiceBox from './ServiceBox';
import styled from '@emotion/styled';

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 50px;
  flex-wrap: wrap;
`;

export default function ServiceContainer(props) {
  return (
    <ServiceWrapper>
      <ServiceBox
        serviceName={props.serviceName1}
        servicePrice={props.servicePrice1}
        serviceDescription={props.serviceDescription1}
        onClick={props.onClick}
      ></ServiceBox>
      <ServiceBox
        serviceName={props.serviceName2}
        servicePrice={props.servicePrice2}
        serviceDescription={props.serviceDescription2}
        onClick={props.onClick}
      ></ServiceBox>
      <ServiceBox
        serviceName={props.serviceName3}
        servicePrice={props.servicePrice3}
        serviceDescription={props.serviceDescription3}
        onClick={props.onClick}
      ></ServiceBox>
    </ServiceWrapper>
  );
}

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
    <ServiceWrapper className={'services'}>
      <ServiceBox
        serviceName={'Kids Haircut'}
        servicePrice={'$50'}
        serviceTime={'1 Hour'}
        serviceExtra1={'Premium Haircut'}
        serviceExtra2={'Fulfill Kids Wish'}
        onClick={props.onClick}
      ></ServiceBox>
      <ServiceBox
        serviceName={'Mister B'}
        servicePrice={'$125'}
        serviceTime={'2 Hour'}
        serviceExtra1={'Haircut and Beard'}
        serviceExtra2={'Premium Aftershave'}
        onClick={props.onClick}
      ></ServiceBox>
      <ServiceBox
        serviceName={'Kingsley'}
        servicePrice={'$175'}
        serviceTime={'2 Hour'}
        serviceExtra1={'Full Shave and Trimm'}
        serviceExtra2={'Premium Styling'}
        onClick={props.onClick}
      ></ServiceBox>
    </ServiceWrapper>
  );
}

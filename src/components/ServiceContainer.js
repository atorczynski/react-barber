import React from 'react';
import ServiceBox from './ServiceBox';
import styled from '@emotion/styled';
import Image1 from '../assets/barber-grooming-kid-2204690.jpg';
import Image2 from '../assets/smiling-man-cutting-another-mans-hair-inside-shop-2061820.jpg';
import Image3 from '../assets/a-barber-grooming-a-man-s-beard-2881253.jpg';

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
        serviceImage={Image1}
        onClick={props.onClick}
      ></ServiceBox>
      <ServiceBox
        serviceName={'Mister B'}
        servicePrice={'$125'}
        serviceImage={Image2}
        onClick={props.onClick}
      ></ServiceBox>
      <ServiceBox
        serviceName={'Kingsley'}
        servicePrice={'$175'}
        serviceImage={Image3}
        onClick={props.onClick}
      ></ServiceBox>
    </ServiceWrapper>
  );
}

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
  background: #e0e0e0;
  flex-wrap: wrap;
  transition: all 0.3s ease;
  box-shadow: 0px 10px 35px -5px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background: #eae8e8;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2`
  color: #232a34;
  text-decoration: underline;
`;

export default function ServiceContainer(props) {
  return (
    <ServiceWrapper className={'services'}>
      <HeadingWrapper>
        <Heading>Services</Heading>
      </HeadingWrapper>
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

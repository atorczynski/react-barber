import React from 'react';
import ServiceBox from '../components/ServiceBox';
import ServiceContainer from '../components/ServiceContainer';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ServiceButton from '../components/ServiceButton';
export default {
  title: 'Service',
  decorators: [withKnobs]
};

export const Service = () => (
  <ServiceBox
    serviceName={text('Name', 'Name')}
    onClick={action('fired!')}
  ></ServiceBox>
);
export const ServiceWrapper = () => (
  <ServiceContainer
    serviceName1={text('Service Name 1', 'ServiceName1')}
    onClick={action('Clicked!')}
    onClick={action('fired!')}
    serviceName2={text('Service Name 2', 'ServiceName2')}
    onClick={action('Clicked!')}
    serviceName3={text('Service Name 3', 'ServiceName3')}
    onClick={action('Clicked!')}
  ></ServiceContainer>
);

export const ServiceStory = () => {
  return (
    <ServiceButton onClick={action('Clicked!')}>
      {text('Button Text', 'TEXT')}
    </ServiceButton>
  );
};

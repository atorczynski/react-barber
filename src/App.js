import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import AppBanner from './components/AppBanner';
import ServiceContainer from './components/ServiceContainer';
import styled from '@emotion/styled';

const Services = styled(ServiceContainer)`
  color: blue;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <AppBanner />
      <Services
        serviceName1={'Barber Deluxe'}
        servicePrice1={'$50'}
        serviceDescription1={
          'Do occaecat ipsum nisi cupidatat culpa ex ex nostrud exercitation Lorem reprehenderit anim. Tempor consectetur cupidatat qui ipsum non qui cupidatat culpa non esse do do laborum. Magna elit aliqua do aute magna ipsum do ex elit cupidatat cillum.'
        }
        serviceName2={'Hairdo'}
        servicePrice2={'$50'}
        serviceDescription2={
          'Do occaecat ipsum nisi cupidatat culpa ex ex nostrud exercitation Lorem reprehenderit anim. Tempor consectetur cupidatat qui ipsum non qui cupidatat culpa non esse do do laborum. Magna elit aliqua do aute magna ipsum do ex elit cupidatat cillum.'
        }
        serviceName3={'Makeover'}
        servicePrice3={'$50'}
        serviceDescription3={
          'Do occaecat ipsum nisi cupidatat culpa ex ex nostrud exercitation Lorem reprehenderit anim. Tempor consectetur cupidatat qui ipsum non qui cupidatat culpa non esse do do laborum. Magna elit aliqua do aute magna ipsum do ex elit cupidatat cillum.'
        }
      />
    </Router>
  );
}

export default App;

import React from 'react';
import Header from './components/Nav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import AppBanner from './components/AppBanner';
import ServiceContainer from './components/ServiceContainer';
import styled from '@emotion/styled';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const Services = styled(ServiceContainer)`
  color: blue;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <AppBanner />
      <Services />
      <AboutUs />
      <Gallery />
      <Contact />
    </Router>
  );
}

export default App;

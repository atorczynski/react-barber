import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import AppBanner from './components/AppBanner';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <AppBanner />>
    </Router>
  );
}

export default App;

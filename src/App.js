import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
    </Router>
  );
}

export default App;

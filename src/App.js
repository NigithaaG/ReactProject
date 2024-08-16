import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPageComponent from './components/LandingPageComponent';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/home" element={<HomeContainer />} />
      </Routes>
    </Router>
  );
}

export default App;

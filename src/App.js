import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LandingPageComponent from './components/LandingPageComponent';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';
import DressListComponent from './components/DressListComponent';
import CartComponent from './components/CartComponent';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/dresses">Dresses</Link>
              <Link className="nav-link" to="/cart">Cart</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPageComponent />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/dresses" element={<DressListComponent />} />
          <Route path="/cart" element={<CartComponent />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

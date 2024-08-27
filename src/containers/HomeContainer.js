import React, { Component } from 'react';
import DressListComponent from '../components/DressListComponent';
import { Link } from 'react-router-dom';
class HomeContainer extends Component {
  render() {
    return (
      <div>
        <header className="header">
        <div className="header-right">
          <a href="#about" className="about">About us <i className="fas fa-info-circle"></i></a>
          <a href="#services" className="services">Services <i className="fas fa-cogs"></i></a>
          <a href="#help" className="help">Help <i className="fas fa-question-circle"></i></a>
          <Link className="log_in" to="/login">LOG IN</Link>
          <Link className="sign_up" to="/register">SIGN UP</Link>
        </div>
      </header>
        <DressListComponent />
      </div>
    );
  }
}

export default HomeContainer;

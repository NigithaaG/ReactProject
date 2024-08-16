import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormComponent from '../components/LoginFormComponent';

class LoginContainer extends Component {
  handleLogin = () => {
    this.props.navigate('/home');
  };

  render() {
    return (
      <div>
        <LoginFormComponent onLogin={this.handleLogin} />
      </div>
    );
  }
}

export default function (props) {
  const navigate = useNavigate();
  return <LoginContainer {...props} navigate={navigate} />;
}

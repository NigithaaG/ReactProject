import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loginstyle.css'; 

const LoginFormComponent = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="blur">
      <div className="container d-flex align-items-center justify-content-between login-container">
        <div className="col-md-6 imgclass">
          <img src="/images/login.jpg" className="img-fluid" alt="Login Image" />
        </div>
        <div className="col-md-6 login-cont">
          <i className="fas fa-times close-icon"></i>
          <form onSubmit={handleSubmit}>
            <h2>Log In to Explore more!</h2>
            <hr className="line" />
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Username*" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <input 
                type="password" 
                className="form-control" 
                placeholder="Password*" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <select className="form-select">
                <option value="" disabled selected>Select user type</option>
                <option value="Vendor">Vendor</option>
                <option value="Customer">Customer</option>
              </select>
            </div>
            <button type="submit" className="rounded-button">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;

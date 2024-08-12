import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="heading-container-login">
        <h2>Login</h2>
      </div>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="btn__primary">Login</button>
      </form>
    </div>
  );
};

export default Login;

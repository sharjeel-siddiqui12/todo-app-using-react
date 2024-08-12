import React, { useState } from 'react';
import '../assets/css/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission logic here
    console.log('Login data submitted:', formData);

    // Display success alert
    alert('Login successful!');
    
    // Optionally, you can reset the form
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div className="login-container">
      <div className="heading-container-login">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            placeholder='example@gmail.com'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            placeholder='password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn__primary">Login</button>
      </form>
    </div>
  );
};

export default Login;

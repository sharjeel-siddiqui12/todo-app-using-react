import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToHome = () => {
    navigate('/'); // Navigate to home page
    setMenuOpen(false); // Close the menu when navigating
  };

  return (
    <header className="header">
      <div className="logo" onClick={goToHome}>
        <img src={logo} alt="Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/signup" className="nav-link" onClick={() => setMenuOpen(false)}>Signup</Link>
      </nav>
    </header>
  );
};

export default Header;

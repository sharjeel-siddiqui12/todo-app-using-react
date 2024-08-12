// // Header.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import logo from '../assets/logo.png';


// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//       <img src={logo} alt="Logo" />
//       </div>
//       <nav className="nav">
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/login" className="nav-link">Login</Link>
//         <Link to="/signup" className="nav-link">Signup</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Signup</Link>
      </nav>
    </header>
  );
};

export default Header;

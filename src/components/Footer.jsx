import React from 'react';
import '../assets/css/Footer.css'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
       <a href="https://sharjeel-siddiqui.vercel.app" target="_blank"> <p>Sharjeel Siddiqui</p></a>
      </div>
      <div className="footer-right">
        <a href="https://www.linkedin.com/in/sharjeel-siddiqui-599870248/" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/sharjeel-siddiqui12" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/sharjeel.siddiqui15" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/sharjeel_.siddiqui._/" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

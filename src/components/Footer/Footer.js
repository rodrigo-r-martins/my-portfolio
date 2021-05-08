import React from 'react';
import './Footer.css';

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="footer__container">
      <p>© { currentYear } Rodrigo Martins - Stamford, CT</p>
    </footer>
  )
}

export default Footer;

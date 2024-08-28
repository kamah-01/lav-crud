import React from 'react';
import './header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>VJ HEARTZ</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/music">MUSIC</Link></li>
            <li><Link to="/dj-drops">DJ DROPS</Link></li>
            <li><Link to="/tour">EVENTS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

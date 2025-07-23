import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import logo from '../assets/IMAGES/logo.png';
import logo2 from '../assets/IMAGES/logo2.png';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
     
      <header className="header">
        <div className="container nav">
          <div
            className="logo-area"
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height: '48px',
                objectFit: 'contain',
                filter: 'brightness(1000%)',
              }}
            />
            <img
              src={logo2}
              alt="Logo 2"
              style={{
                height: '40px',
                objectFit: 'contain',
                filter: 'brightness(1000%)',
              }}
            />
          </div>

          <div className="hamburger" onClick={toggleMenu}>☰</div>

          <nav className={`menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
            <div className="close" onClick={toggleMenu}>✖</div>

            {/* ✅ Use <Link> instead of <a> */}
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/who-we-are" onClick={toggleMenu}>Who We Are</Link>
            <Link to="/ourservices" onClick={toggleMenu}>Services</Link>
            <Link to="/#portfolio" onClick={toggleMenu}>Portfolio</Link>
         <Link to="/contactus" className="btn" onClick={toggleMenu}>Contact Us</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

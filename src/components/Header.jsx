import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import logo from '../assets/IMAGES/logo.png';
import logo2 from '../assets/IMAGES/logo2.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <style>{`
        .header {
          background-color: rgb(0, 0, 0);
          padding: 15px 20px;
          border-bottom: 1px solid #eee;
          position: relative;
          z-index: 1000;
        }

        .container.nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .hamburger {
          font-size: 28px;
          cursor: pointer;
          display: none;
          z-index: 1001;
          color: white;
        }

        .menu {
          display: flex;
          gap: 20px;
        }

        .menu a {
          font-size: 18px;
          text-decoration: none;
          color: white;
        }

        .menu a.btn {
          padding: 8px 20px;
          background-color: #ff00cc;
          color: white;
          border-radius: 50px;
        }

        .menu .close {
          display: none;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .menu {
            position: fixed;
            top: 0;
            left: -100%;
            flex-direction: column;
            background-color: rgb(0, 0, 0);
            width: 250px;
            height: 100vh;
            padding: 60px 20px 20px;
            transition: left 0.3s ease-in-out;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
            z-index: 1000;
          }

          .menu.open {
            left: 0;
          }

          .menu .close {
            display: block;
            position: relative;
            top: -75px;
            right: 15px;
            font-size: 34px;
            cursor: pointer;
            color: white;
          }

          .menu a {
            margin: 15px 0;
          }

          .menu {
            gap: 0;
          }
        }
      `}</style>

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

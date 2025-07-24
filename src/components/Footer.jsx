  import React from 'react';
  import logo from '../assets/IMAGES/logo.png';
  import facebook from '../assets/IMAGES/facebook.png';
  import instagram from '../assets/IMAGES/instagram.png';
  import linkedin from '../assets/IMAGES/linkedin.png';
  import './Footer.css'

  export default function Footer() {

    return (
    <section data-aos="fade-up"> 
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="#"><img src={logo} alt="SJM" style={{ height: '37%', width: '30%' }} /></a>
        
          <p>Transforming ideas into digital excellence. Elevate your online presence with strategic digital solutions.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1AiEc98sqA/"><img src={facebook} alt="FB" /></a>
            <a href="https://www.instagram.com/sjm.infotech?igsh=MWF3ZjM1OWo4aWt5dg=="><img src={instagram} alt="Instagram" /></a>
            <a href="https://www.linkedin.com/in/sanju-kumar-b2976a372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkedin} alt="LinkedIn" /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <a href="#">Website Development</a>
          <a href="#">App Development</a>
          <a href="#">Digital Marketing</a>
          <a href="#">Graphic Design</a>
          <a href="#">SEO</a>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">FAQ</a>
          <a href="#">Ticket Support</a>
          <a href="#">Sales Support</a>
          <a href="#">Call Support</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
          <a href="#">News</a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Digimax. All rights reserved. Powered by MicroCreatives. |
        <a href="#">Terms of Use</a> |
        <a href="#">Privacy Policy</a> |
        <a href="#">Cookies Policy</a>
      </div>
    </footer>

  </section>

  );
  }



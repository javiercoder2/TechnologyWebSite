import React from 'react';
import JavierLogo from '../../assets/JAVIER_CODER (1).png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Would you like to know future enhancements for the AI Calculator?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Extra Information</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={JavierLogo} alt="gpt3_logo" />
        <p>Santiago, Chile <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>About Javier</p>
        <p>Social Media</p>
        <p>Examples</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Metropolitan Region, Santiago</p>
        <p>+56988209644</p>
        <p>javier.sepulveda@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 AI Calculator. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
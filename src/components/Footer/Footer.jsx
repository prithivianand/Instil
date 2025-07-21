import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logos.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />

      <div className="address-section">
        <h2 className="address-heading">INSTIL MATHS POINT</h2>
        <p className="address-text">
          <span>📍 </span>Address:
          <br />
          No:10/207,
          <br />
          1st floor, Block 10,
          <br />
          Pari Salai, Mogappair East,
          <br />
          Chennai, Tamil Nadu 600037.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-details">
          <h2>CONTACT INFO</h2>
          <p>
            📞{" "}
            <a href="tel:+918148974524" className="contact-link">
              +91 8148974524
            </a>
          </p>
          <p>
            📧{" "}
            <a href="mailto:vjbparthi@email.com" className="contact-link">
              vjbparthi@email.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;

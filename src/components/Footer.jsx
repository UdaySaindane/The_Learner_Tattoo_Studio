import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,  FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side: Logo / Brand */}
        <div className="footer-brand">
          <h2 className="footer-title">The Learner Tattooz & Arts</h2>
          <p className="footer-tagline">Artist Jayesh Nandkumar Saindane</p>
        </div>

        {/* Middle: Links */}
        {/* <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div> */}

        {/* Right: Contact */}
        <div className="footer-contact">
          <h3>Contact </h3>
          <p><FaMapMarkerAlt /> Sharad Nagar, Collector zone, Malegaon 423203,
(Nashik, Maharashtra) </p>
          <p><FaPhoneAlt /> +91 88306 97782</p>
          <p><FaEnvelope /> saindanejayesh49@gmail.com</p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/share/176BwR9qCu/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/the_learner.tattooz?utm_source=qr&igsh=cTNpejY4dnMybDBn"><FaInstagram /></a>
                      <a
                        href="https://wa.me/8830697787"
                        
                      >
                        <FaWhatsapp />
                      </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Learner Tattooz | All Rights Reserved | Designed & Developed by Uday Saindane</p>
      </div>
    </footer>
  );
};

export default Footer;



import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaUserTie,
  FaBuilding,
} from "react-icons/fa";

// ✅ Import QR Images from public/images
import qr1 from "/images/QR1.jpg";
import qr2 from "/images/QR2.jpg";
import qr3 from "/images/QR3.jpg";

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,   // ✅ Service ID from .env
        import.meta.env.VITE_TEMPLATE_ID,  // ✅ Template ID from .env
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY    // ✅ Public Key from .env
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-wrapper">
        {/* Left side - Contact Info Card */}
        <div className="contact-card">
          <h3 className="card-heading">Studio Info</h3>
          <p>
            <FaBuilding /> The Learner Tattooz
          </p>
          <p>
            <FaUserTie /> Mr. Jayesh Nandkumar Saindane (Owner)
          </p>
          <p>
            <FaPhoneAlt /> +91 8830697782
          </p>
          <p>
            <FaEnvelope /> saindanejayesh49@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt /> Sharad Nagar, Collector zone, Malegaon 423203,
(Nashik, Maharashtra)
          </p>

          <a
            href="https://wa.me/918830697782"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>

        {/* Right side - Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <input
            name="user_name"
            type="text"
            placeholder="Enter your name"
            required
          />
          <input
            name="user_email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>

      {/* 🔳 QR Code Section */}
      <div className="qr-section">
        <div className="qr-card">
          <h4>@the_learner.tattoz</h4>
          <img src={qr1} alt="Instagram QR" className="qr-img" />
        </div>
        <div className="qr-card">
          <h4>WhatsApp</h4>
          <img src={qr2} alt="WhatsApp QR" className="qr-img" />
        </div>
        <div className="qr-card">
          <h4>@the_learner.9</h4>
          <img src={qr3} alt="Instagram Backup QR" className="qr-img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

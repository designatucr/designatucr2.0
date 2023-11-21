import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaSpotify, FaCalendar } from 'react-icons/fa';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

function Contact() {
  return (
    <div>
      <div className="header">
        <div className="header-home">
          <Link to="/">
            <div className="logo">
              <img src="ColorSmallLogo.png" alt="Your Logo" id="imghead" />
            </div>
          </Link>
          <div className="other-content">
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
              <Link
              to="https://airtable.com/appkMhj4uheYOF8LG/shrNK84HAE6F0YSiT"
              target="_blank"
            >
              Resources
            </Link>
            <Link to="/contact">Contact</Link>
            <Link to="/join">Join</Link>{" "}
          </div>
        </div>
      </div>
      <div className="contact-us">
        <p className="get-in-touch">Get in touch with us!</p>
        <div className="social-links">
            <div className="social-link">
              <a
                href="https://www.instagram.com/designatucr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
              <p className="social-link-text">Instagram</p>
            </div>

            <div className="social-link">
              <a
                href="https://www.facebook.com/designatucr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon" />
              </a>
              <p className="social-link-text">Facebook</p>
            </div>

            <div className="social-link">
              <a
                href="https://www.linkedin.com/designatucr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
              <p className="social-link-text">LinkedIn</p>
            </div> 
            <div className="social-link">
              <a
                href="https://www.linkedin.com/designatucr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
              <p className="social-link-text">LinkedIn</p>
            </div> 
            
            

  {/* Add similar structure for other social media */}
          </div>
        {/* <div className="social-links">
          <p className="social-link-text">/designatucr</p>
          <p className="social-link-text">designatucr@gmail.com</p>
        </div> */}


        
        <div className="footnote">
          <div className="left-logo">
            <img src="WhiteLong.png" alt="Footer Logo" className="footer-logo" />
          </div>
          <div className="media-icons">
              <a onClick={() => openInNewTab("https://www.facebook.com/designatucr/")}>
                <FaFacebook />
              </a>
              <a onClick={() => openInNewTab("https://www.instagram.com/designatucr")}>
                <FaInstagram />
              </a>
              <a  onClick={() => openInNewTab("https://www.linkedin.com/designatucr")}>
                <FaLinkedin />
              </a>
              <a  onClick={() => openInNewTab("mailto:designatucr@gmail.com")}>
                <FaEnvelope />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

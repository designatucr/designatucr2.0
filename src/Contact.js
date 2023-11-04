import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faFacebook,
  faGoogle,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div>
      <div class="header">
        <div className="header-home">
          <Link to="/">
            <div className="logo">
              <img src="ColorSmallLogo.png" alt="Your Logo" id="imghead" />
            </div>
          </Link>
          <div className="other-content">
            <Link to="/about">About</Link>
            <Link to="/construction">Events</Link>
            <Link
              to="https://docs.google.com/spreadsheets/d/1lU-l5BQb6h64quC7Qt3crtjQLQ64hpcmxyI35Izxnyo/edit?usp=sharing"
              target="_blank"
            >
              Resources
            </Link>
            <Link to="/construction">Community</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/join">Join</Link>{" "}
          </div>
        </div>
      </div>
      <div class="contact-us">
        <p class="get-in-touch">Get in touch with us!</p>
        <div class="social-links">
          <div class="social-link">
            <a
              href="https://www.instagram.com/designatucr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
          </div>
          <div class="social-link">
            <a
              href="https://www.facebook.com/designatucr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
          </div>
        </div>
        <div class="social-links">
          <p class="social-link-text">@designatucr</p>
          <p class="social-link-text">/designatucr</p>
        </div>
        <div class="social-links">
          <div class="social-link">
            <a
              href="https://www.linkedin.com/designatucr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </a>
          </div>
          <div class="social-link">
            <a
              href="mailto:designatucr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGoogle} className="icon" />
            </a>
          </div>
        </div>
        <div class="social-links">
          <p class="social-link-text">/designatucr</p>
          <p class="social-link-text">designatucr@gmail.com</p>
        </div>
        <div class="social-links">
          <div class="social-link">
            <a
              href="https://open.spotify.com/user/wnei0wjizwwua4h8fkg8627td?si=ee6daa1d90ef4fb0&nd=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSpotify} className="icon" />
            </a>
          </div>
          <div class="social-link">
            <a
              href="/https://calendar.google.com/calendar/u/0/r?cid=ZGVzaWduYXR1Y3JAZ21haWwuY29t&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCalendar} className="icon" />
            </a>
          </div>
        </div>
        <div class="social-links">
          <p class="social-link-text">@designatucr</p>
          <p class="social-link-text">designatucr@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

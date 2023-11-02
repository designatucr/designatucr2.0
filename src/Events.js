import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faInstagram, faTwitter, faLinkedinIn, faGithub, faFacebook, faMailchimp, faGoogle, faSpotify} from '@fortawesome/free-brands-svg-icons';
import { faCalculator, faCalendar } from '@fortawesome/free-solid-svg-icons';

function Events() {
  return (
    <div>
      
      <div class="header">
        <div className="header-home">
          <Link to="/">
            <div className="logo">
              <img src='ColorSmallLogo.png' alt="Your Logo" id="imghead" />
            </div>
          </Link>
          <div className="other-content">
            <Link to="/about">About</Link>
            <Link to="/construction">Events</Link>
            <Link to="https://docs.google.com/spreadsheets/d/1lU-l5BQb6h64quC7Qt3crtjQLQ64hpcmxyI35Izxnyo/edit?usp=sharing" target="_blank">
                    Resources
            </Link>
            <Link to="/construction">Community</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/join">Join</Link>
          </div>
        </div>
      </div>
      <div class="current-events">
        <p class="landing-text-events">Fall 2023 Events</p>
        <p class="landing-text-events-1">Up Next</p>
        <div class="event">
            
        </div>
      </div>
      
    </div>
  );
}

export default Events;

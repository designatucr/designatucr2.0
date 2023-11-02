import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faInstagram, faTwitter, faLinkedinIn, faGithub, faFacebook, faMailchimp, faGoogle, faSpotify} from '@fortawesome/free-brands-svg-icons';
import { faCalculator, faCalendar } from '@fortawesome/free-solid-svg-icons';

function Construction() {
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

      <div className='construction'>
        <img src="construction.jpeg" id="const"></img>
        <p class="text-const">Sorry, the page that you are looking for is under construction right now. 
        </p>
        <p class="text-const-1"> We can’t wait to show you what we are working on!</p>
        <a href="/">
            <button className="landing-button1">Home</button>
        </a>
    </div>
      
    </div>
  );
}

export default Construction;

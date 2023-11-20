import React from "react";
import { Link } from "react-router-dom";

function Events() {
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
              to="https://airtable.com/appkMhj4uheYOF8LG/shrNK84HAE6F0YSiT"
              target="_blank"
            >
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
        <div class="event"></div>
      </div>
    </div>
  );
}

export default Events;

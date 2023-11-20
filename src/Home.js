import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};
function Home() {
  return (
    // LANDING PAGE CONTAINER
    <div>
      <div className="home">
        <div className="header-home">
          <div className="logo">
            <img src="ColorSmallLogo.png" alt="Logo" id="imghead" />
          </div>
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
            <Link to="/join">Join</Link>
          </div>
        </div>
        <div className="center-content">
          <div className="bigLogo">
            <img src="WhiteLong.png" alt="Main Logo" />
          </div>
          <div className="auto-group-ggjj-Ezj">
            <p className="landing-text">
              Empowering students interested in UI/UX design, web design, and
              design thinking at the University of California, Riverside
            </p>
          </div>
          <div className="landing-buttons">
            <div className="landing-button">
              <button
                className="landing-button1"
                onClick={() => openInNewTab("https://forms.gle/6TNxvdXqkmjKKHsu9")}
              >
                Apply
              </button> 
            </div>
            <div className="landing-button">
              <button
                className="landing-button2"
                onClick={() => openInNewTab("https://linktr.ee/designatucr")}
              >
                Learn More
              </button> 
            </div>
          </div>
        </div>

        {/* WHO WE ARE CONTAINER BELOW HERE */}
      </div>
      <div className="container-who-are-we">
        <div className="image">
          <img src="WhoAreWe.gif" alt="Who are we" />
        </div>
        <div className="text-combo">
          <div className="text-who-are-we">
            <h3 class>Who Are We?</h3>
            <p className="whowe">
              Design@UCR is UC Riverside’s first and only design club supporting
              students in UI/UX, web design, and design thinking. Check us out
              here!
            </p>
            <Link to="/about">
              <div className="landing-button">
                <button className="landing-button1">About Us</button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* WHY SHOULD I JOIN CONTAINER BELOW */}
      <div className="container-why-join">
        <div className="text-combo">
          <div className="text-who-are-we">
            <h3>Who Are We?</h3>
            <p class="whowe">
              Design@UCR offer various opportunities to help students learn more
              about design, build their portfolio, meet other designers, and
              prepare for their future careers.
            </p>
            <Link to="/events">
              <div className="landing-button">
                <button className="landing-button1">Our Events</button>
              </div>
            </Link>
          </div>
          <div className="image">
            <img src="WhyJoin.png" alt="Why join Design" />
          </div>
        </div>
      </div>

      {/* how do i get involved container */}
      <div className="get">
        <p class="how-do-i-get-involved-Pxb">How Do I Get Involved?</p>
        <p className="admission" id="1260:68">
          <span
            className="open-admission-to-all-students-at-the-university-of-california-riverside-complete-the-following-4-steps-below-to-become-a-member-EET-sub-0"
            style={{ paddingLeft: "0.8rem", fontSize: "20px" }}
          >
            {" "}
            Open admission to
          </span>
          <span
            className="open-admission-to-all-students-at-the-university-of-california-riverside-complete-the-following-4-steps-below-to-become-a-member-EET-sub-1"
            style={{
              fontWeight: "bold",
              fontFamily: "Work-Sans, sans-serif",
              fontSize: "20px",
            }}
          >
            {" "}
            all students{" "}
          </span>
          <span
            className="open-admission-to-all-students-at-the-university-of-california-riverside-complete-the-following-4-steps-below-to-become-a-member-EET-sub-2"
            style={{ fontFamily: "Work-Sans, sans-serif", fontSize: "20px" }}
          >
            at the University of California, Riverside. Complete the following 4
            steps below to become a member. <br />{" "}
          </span>
        </p>
        <div class="get-img-container" id="Y3ZUEfAUv59CiJ9Wq7uN5m">
          <div class="image-text">
            <img src="apply.png" alt="Apply" />
            <p class="text-img">1. Apply Now</p>
            <p className="text-below" style={{ paddingLeft: "10px" }}>
              All majors can apply to be a general member by filling out our
              application.
            </p>
          </div>
          <div class="image-text">
            <img src="slack.png" alt="Slack" />
            <p class="text-img">2. Join Slack</p>
            <p class="text-below">
              Once you apply, don’t forget to join our slack channel. All events
              and updates will be posted here.
            </p>
          </div>
          <div class="image-text">
            <img src="substack.png" alt="Substack" />
            <p class="text-img">3. Subscribe</p>
            <p class="text-below">
              Subscribe to our Substack to learn more about design and events we
              host throughout the quarter.
            </p>
          </div>
          <div class="image-text">
            <img src="events.png" alt="Events" />
            <p class="text-img">4. Upcoming Events</p>
            <p class="text-below">
              Most importantly, attend events! Check Events for new events
              coming up.{" "}
            </p>
          </div>
        </div>
      </div>
      
      <div class="sponsor">
        <h2 id="sponsor">Interested in parterning with us?</h2>
        <p id="sponsor-bottom">
          Check out our  <span style={{ color: "#64a587" }}><a href="https://drive.google.com/file/d/14EPXS4O_yO0O_sql82-G0_SZbO0aIFST/view?usp=sharing" target="_blank">
            Sponsorship Packet!
          </a></span>
          
        </p>
      </div>

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
  );
}

export default Home;

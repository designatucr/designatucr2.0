import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutPage from './AboutPage';

function Home() {
  return (
    // LANDING PAGE CONTAINER
    <div>
    <div className="home">
      <div className="header-home">
        <div className="logo">
          <img src='ColorSmallLogo.png' alt="Your Logo" id="imghead" />
        </div>
        <div className="other-content">
          <Link to="/">About</Link>
          <Link to="/">Events</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/community">Community</Link>
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
                Empowering students interested in UI/UX design, web design, and design thinking at the University of California, Riverside
            </p>
            </div>
            <div className='landing-buttons'>
                <div className='landing-button'>
                    <button className="landing-button1">Apply</button>
                </div>
                <div className='landing-button'>
                    <button className="landing-button2">Learn More</button>
                </div>
            </div>
      </div>
    
    {/* WHO WE ARE CONTAINER BELOW HERE */}
    </div>
    <div className="container-who-are-we">
        <div className="image">
            <img src="WhoAreWe.gif" alt="Image" />
        </div>
        <div className="text-combo">
            <div className="text-who-are-we">
            <h3 class>Who Are We?</h3>
            <p className="whowe">
                Design@UCR is UC Riverside’s first and only design club supporting students in UI/UX, web design, and design thinking. Check us out here!
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
                    Design@UCR offer various opportunities to help students learn more about design, build their portfolio, meet other designers, and prepare for their future careers.
                </p>
                <Link to="/about">
                    <div className="landing-button">
                        <button className="landing-button1">Our Events</button>
                    </div>
                </Link>
                </div>
                <div className="image">
                    <img src="WhyJoin.png" alt="Image" />
                </div>
            </div>
        </div>

    {/* how do i get involved container */}
        <div className="get">
            <p class="how-do-i-get-involved-Pxb">How Do I Get Involved?</p>
            <p className="admission" id="1260:68">
            <span
                    className="open-admission-to-all-students-at-the-university-of-california-riverside-complete-the-following-4-steps-below-to-become-a-member-EET-sub-0"
                    style={{ paddingLeft: '0.8rem', fontSize:'20px' }} > Open admission to
                    </span>
                <span className="open-admission-to-all-students-at-the-university-of-california-riverside-complete-the-following-4-steps-below-to-become-a-member-EET-sub-1" style={{ fontWeight: 'bold', fontFamily: 'Work-Sans, sans-serif', fontSize:'20px'}}> all students </span>
                <span className="open-admission-to-all-students-at-the-university-of-california-riverside-complete-the-following-4-steps-below-to-become-a-member-EET-sub-2" style={{ fontFamily: 'Work-Sans, sans-serif', fontSize:'20px' }}>
                at the University of California, Riverside. Complete the following 4 steps below to become a member. <br/> </span> 
            </p>
            <div class="get-img-container" id="Y3ZUEfAUv59CiJ9Wq7uN5m">
                <div class="image-text">
                    <img src="apply.png" alt="Apply" />
                    <p class="text-img">1. Apply Now</p>
                    <p className="text-below" style={{ paddingLeft: '10px' }}>All majors can apply to be a general member by filling out our application.</p>
                    
                </div>
                <div class="image-text">
                    <img src="slack.png" alt="Slack" />
                    <p class="text-img">2. Join Slack</p>
                    <p class="text-below">Once you apply, don’t forget to join our slack channel. All events and updates will be posted here.</p>
                </div>
                <div class="image-text">
                    <img src="substack.png" alt="Substack" />
                    <p class="text-img" >3. Subscribe</p>
                    <p class="text-below">Subscribe to our Substack to learn more about design and events we host throughout the quarter.</p>
                </div> 
                <div class="image-text">
                    <img src="events.png" alt="Events" />
                    <p class="text-img">4. Upcoming Events</p>
                    <p class="text-below">Most importantly, attend events! Check Events for new events coming up. </p>
                </div>
            </div>
        </div>
        <div class="instagram">
                <h1 id="ig1"> Follow us on Instagram</h1>
                <h3 id="ig2"> @designatucr</h3>
                <img src="ig2.png" alt="Events" />
        </div>
        <div class="sponsor">
            <h2 id="sponsor">Interested in parterning with us?</h2>
            <p id="sponsor-bottom">Send us a <span style={{ color: '#64a587' }}>message!</span></p>
        </div>
        
        <div className="footnote">
            <div className="left-logo">
                <img
                    src="WhiteLong.png"
                    alt="Footer Logo"
                    className="footer-logo"
                />
            </div>
            <div className="media-icons">
                <a href="https://www.facebook.com/designatucr/">
                    <img src="facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/designatucr">
                    <img src="instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/designatucr">
                    <img src="linkedin.png" alt="LinkedIn" />
                </a>
                <a href="mailto:designatucr@gmail.com">
                    <img src="email.png" alt="Eail" />
                </a>
            </div>

        </div>
    </div>

  );
}

export default Home;

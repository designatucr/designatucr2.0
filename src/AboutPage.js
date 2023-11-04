import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <div class="header">
        <div className="header-home">
          <Link to="/">
            <div className="logo">
              <img src="ColorSmallLogo.png" alt="Logo" id="imghead" />
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
            <Link to="/join">Join</Link>
          </div>
        </div>
      </div>

      <div class="landing">
        <div class="landing-text">
          <div class="content">
            <img src="WhiteLong.png" alt="Design at UCR"></img>
            <p class="landing-text-1">
              {" "}
              We are UC Riverside’s first and only design club supporting
              students in design thinking.
            </p>
            <p class="landing-text-1">
              Our mission is to provide students a community to learn more about
              design. Design@UCR hosts workshops, events, and connects you with
              career growth oportunities.
            </p>
          </div>
          <img src="About.gif" alt="About" class="about-gif"></img>
        </div>
      </div>
      <div class="values">
        <h1 class="our-values">Our Values</h1>
        <div class="each-value">
          <div class="value">
            <img src="community.png" alt="Value 1" />
            <p class="value-name">Community</p>
            <p class="value-text">
              We aim to be a dedicated learning space for students from all
              backgrounds to learn introductory design.
            </p>
          </div>
          <div class="value">
            <img src="creativity.png" alt="Value 2" />
            <p class="value-name">Creativity</p>
            <p class="value-text">
              We aim to be a home for aspiring designers to enhance their design
              skills and discover new ways to create.
            </p>
          </div>
          <div class="value">
            <img src="career.png" alt="Value 3" />
            <p class="value-name">Career</p>
            <p class="value-text">
              We aim to provide students an opportunity to network and the
              necessary resources for a future design career.
            </p>
          </div>
        </div>
      </div>

      <div class="meet-board">
        <h1 class="board-header">Meet the Board</h1>
        <div class="board-members">
          <div class="board-member">
            <img src="ashley.jpeg" alt="Board Member 1" />
            <h2>Ashley Tsai</h2>
            <p>President</p>
          </div>
          <div class="board-member">
            <img src="kia1.jpg" alt="Board Member 2" />
            <h2>Kia Nooshi</h2>
            <p>President</p>
          </div>
          <div class="board-member">
            <img src="rich.jpg" alt="Board Member 3" />
            <h2>Professor Rich</h2>
            <p>Faculty Advisor</p>
          </div>
          <div class="board-member">
            <img src="raina.jpg" alt="Board Member 4" />
            <h2>Raina Saber</h2>
            <p>VP of Special Events</p>
          </div>
          <div class="board-member">
            <img src="tiana.jpg" alt="Board Member 2" />
            <h2>Tiana Nguyen</h2>
            <p>VP of Special Events</p>
          </div>
          <div class="board-member">
            <img src="betty.jpeg" alt="Board Member 2" />
            <h2>Betty Hoang</h2>
            <p>VP of Marketing</p>
          </div>
          <div class="board-member">
            <img src="iman.jpg" alt="Board Member 2" />
            <h2>Iman Zuberi</h2>
            <p>VP of Marketing</p>
          </div>
          <div class="board-member">
            <img src="namit.png" alt="Board Member 2" />
            <h2>Namit Mankad</h2>
            <p>VP of Recruitment</p>
          </div>
          <div class="board-member">
            <img src="sarah.png" alt="Board Member 2" />
            <h2>Sarah Sha</h2>
            <p>VP of Recruitment</p>
          </div>
          <div class="board-member">
            <img src="natalie.jpg" alt="Board Member 2" />
            <h2>Natalie Jung</h2>
            <p>VP of Finance</p>
          </div>
          <div class="board-member">
            <img src="anj.jpeg" alt="Board Member 2" />
            <h2>Anjaline Singh</h2>
            <p>VP of Industry Relations</p>
          </div>
          <div class="board-member">
            <img src="garman.jpg" alt="Board Member 2" />
            <h2>Garman Zhen</h2>
            <p>VP of Professional Development</p>
          </div>
          <div class="board-member">
            <img src="josalyn.jpg" alt="Board Member 2" />
            <h2>Josalyn Chow</h2>
            <p>VP of Professional Development</p>
          </div>
          <div class="board-member">
            <img src="cece.jpg" alt="Board Member 2" />
            <h2>Cece Johnson</h2>
            <p>VP of Operations</p>
          </div>
          <div class="board-member">
            <img src="akanksh.jpg" alt="Board Member 2" />
            <h2>Akanksh Divyananda</h2>
            <p>VP of Web Development</p>
          </div>
        </div>
      </div>
      <div className="footnote">
        <div className="left-logo">
          <img src="WhiteLong.png" alt="Footer Logo" className="footer-logo" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="Home_data">
      <div className="content">
        <div className="intro-text">
          Hello, my name is <br />
          <span>Nikhil Kumar</span> <br />
          And I'm a Frontend Developer
        </div>

        <a
          href="https://www.linkedin.com/in/nikhil-kumar-184a96224/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="Hire_me">
            Hire Me
          </button>
        </a>

        <div className="icon_link">
          <a
            href="https://www.linkedin.com/in/nikhil-kumar-184a96224/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="font-icon linkedin-icon"
            />
          </a>
          <a
            href="https://github.com/Nikhil10012/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="font-icon github-icon"
            />
          </a>
          <a href="mailto:your.nikhil.saini1012002@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="font-icon email-icon"
            />
          </a>
        </div>
      </div>

      {/* GIF Image */}
      {/* <div className="gif-container">
        <img src={codingGif} alt="Coder Doing Coding" className="coding-gif" />
      </div> */}
    </section>
  );
};

export default Home;

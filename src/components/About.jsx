import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <section id="about" className="about-container">
        <h2 className="title">ABOUT ME</h2>
        <div className="about-content">
          <div className="column_left">
            <img src="src/images/ni.png" alt="" />
          </div>
          <div className="column_right">
            <span className="about-text">
              Hi, I'm <strong>Nikhil Kumar</strong>, a passionate Developer and
              a dedicated Software Engineering enthusiast. With a background in
              Computer Science and Engineering, I thrive on solving complex
              problems and building innovative solutions. I have a keen interest
              in cutting-edge technologies and continuously expand my skill set
              to stay ahead in the fast-evolving tech landscape. Whether it's
              developing applications, exploring new frameworks, or tackling
              real-world challenges, I am always eager to learn and grow. My
              goal is to create impactful software that enhances user
              experiences and drives efficiency. Let's connect and collaborate
              on exciting projects!
            </span>

            <a href="resume" target="_blank">
              <button type="button" class="download_resume">
                Download resume
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

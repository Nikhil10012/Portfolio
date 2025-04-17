import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav-container">
      <div className="nav-text">
        <a
          href="#home"
          className="logo-portfolio"
          onClick={(e) => handleScroll(e, "home")}
        >
          Portfo<span>lio</span>
        </a>
      </div>
      <div className="nav_link_container">
        <a
          href="#home"
          className="nav_link"
          onClick={(e) => handleScroll(e, "home")}
        >
          Home
        </a>
        <a
          href="#about"
          className="nav_link"
          onClick={(e) => handleScroll(e, "about")}
        >
          About
        </a>
        <a
          href="#projects"
          className="nav_link"
          onClick={(e) => handleScroll(e, "projects")}
        >
          Projects
        </a>
        <a
          href="#skills"
          className="nav_link"
          onClick={(e) => handleScroll(e, "skills")}
        >
          Skills
        </a>
        <a
          href="#contact"
          className="nav_link"
          onClick={(e) => handleScroll(e, "contact")}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

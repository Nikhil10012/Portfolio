import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <section id="projects" className="project_container">
        <h2 className="project_heading">My Projects</h2>

        <div className="project_img_container">
          {/* todo  App */}
          <div className="project_card">
            <div>
              <img src="src/images/todoapp.png" alt="Todo App" />
            </div>
            <div>
              <h3 className="project_name">Todo Master</h3>
              <div className="project_links">
                <a
                  href="https://weatherappnik.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Nikhil10012/weather-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Weather App */}
          <div className="project_card">
            <div>
              <img src="src/images/weatherapp.png" alt="Weather App" />
            </div>
            <div>
              <h3 className="project_name">Weather App</h3>
              <div className="project_links">
                <a
                  href="https://weatherappnik.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Nikhil10012/weather-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Myntra Clone */}
          <div className="project_card">
            <div>
              <img src="src/images/myntra.jpg" alt="Myntra Clone" />
            </div>
            <div>
              <h3 className="project_name">Myntra Clone</h3>
              <div className="project_links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a
                  href="https://github.com/Nikhil10012/Myntra-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Tic Tac Toe Game */}
          <div className="project_card">
            <div>
              <img src="src/images/tictactoe.png" alt="Tic Tac Toe Game" />
            </div>
            <div>
              <h3 className="project_name">Tic Tac Toe Game</h3>
              <div className="project_links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Calculator App */}
          <div className="project_card">
            <div>
              <img src="src/images/calculater.png" alt="Calculator App" />
            </div>
            <div>
              <h3 className="project_name">Calculator App</h3>
              <div className="project_links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

import React from "react";
import "./Projects.css"; 
import proImg from "../assets/images.jpeg";
import random from "../assets/codewithrandom11.png";
import todo from "../assets/todo.png"
// import movie from  "../assets/movie.png"

import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects">
      <h1 className="h1">MY PROJECTS</h1>
      <div className="project-cards">
        <ProjectCard
          title="Simon Game"
          image={proImg}
          description="This is a game that increases your memory power"
          link="https://virtualsimonsays.netlify.app/"
        />
        
        <ProjectCard
          title="Joke/quote Generator"
          image={random}
          description="This website helps your mental health by giving you random jokes and quotes"
          link="https://jokeorquote.netlify.app/"
        />
        <ProjectCard
          title="A To-do App"
          image={todo}
          description="This is a simple to-do app to keep you updated with daily tasks this project is made using REACT JS "
          link="https://tellurself.netlify.app/"
        />
         {/* <ProjectCard
          title="Top Movies app"
          image={movie}
          description="build a prduction ready application which tell best top films till 2022 "
          link="https://besttopmovies.netlify.app/"
        /> */}
      </div>
      <div className="more">
        <h4 className="highlight-text">More projects are loading.........</h4>
        <p id="p">Meanwhile, check the resume & Github for more Undeployed projects</p>
      </div>
    </div>
  );
}

export default Projects;

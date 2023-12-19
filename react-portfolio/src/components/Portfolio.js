//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Coding-Quiz",
    languages: "js, css, html",
    image: "/img/codingquiz.png",
    description: "Created a timed coding quiz that gives the user questions to answer with multiple choice answers. Time is deducted for incorrect answers. You can view high scores via the 'View High Scores' button.",
    repo: "https://github.com/jlinex/UTA-Challenge-4/tree/main",
    live: "https://jlinex.github.io/UTA-Challenge-4/",
  },
  {
    id: 1,
    title: "Work-Day-Scheduler",
    languages: "html, css, js",
    image: "/img/workday.png",
    description: "Created a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    repo: "https://github.com/jlinex/UTA-Challenge-5",
    live: "https://jlinex.github.io/UTA-Challenge-5/",
  },
  {
    id: 2,
    title: "Weather-Dashboard",
    languages: "html, css, js",
    image: "/img/weatherdashboard.png",
    description: "Created a Weather Dasboard that access a 3rd Party API in order to retrieve data for cities.",
    live: "https://github.com/jlinex/UTA-Challenge-6",
    repo: "https://jlinex.github.io/UTA-Challenge-6/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;

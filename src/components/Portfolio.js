import React from "react";
import Project from "./Project";

const projects = [
    {
        id: 0,
        title: "MediSearch",
        languages: "Javascript, Handlebars, HTML",
        packages: "Argon2, Sequelize, Node.js, nodemon, mySql2, connect-session-sequelize, dotenv, express-handlebars, express-session, heroku",
        image: "img/Screen Capture 020 - MEDiSEARCH - hospital-staff-app.herokuapp.com.jpg",
        description: "An app used for creating and managing hospital data.",
        repo: "https://github.com/ScalexanderB/Medisearch",
        live: "https://med-i-search.herokuapp.com/",
    },
    {
        id: 1,
        title: "Train To The Beat",
        languages: "HTML, CSS, JS",
        packages: "None",
        image: "img/Screen Capture 016 - Train to the beat - scalexanderb.github.io.jpg",
        description: "An app used for generating a playlist based on beats per minute.",
        repo: "https://github.com/ScalexanderB/activity-music",
        live: "https://scalexanderb.github.io/activity-music/",
    },
    {
        id: 2,
        title: "Note Taker",
        languages: "HTML, CSS, JS",
        packages: "express.js",
        image: "img/Screen Capture 018 - Note Taker - mighty-mountain-08810.herokuapp.com.jpg",
        description: "A basic note taking app built with Express.js",
        repo: "https://github.com/ScalexanderB/Your-Note-Taker",
        live: "https://mighty-mountain-08810.herokuapp.com/",
    },
    {
        id: 3,
        title: "Weather Dashboard",
        languages: "HTML, CSS, JS",
        packages: "None",
        image: "img/Screen Capture 017 - Weather Dashboard - scalexanderb.github.io.jpg",
        description: "A basic weather app which allows a user to search up a specific place or a saved place and view the weather.",
        repo: "https://github.com/ScalexanderB/Weather-Dashboard",
        live: "https://scalexanderb.github.io/Weather-Dashboard/",
    },
    {
        id: 4,
        title: "Work Day Scheduler",
        languages: "HTML, CSS, JS",
        packages: "None",
        image: "img/Screen Capture 014 - Work Day Scheduler - scalexanderb.github.io.jpg",
        description: "",
        repo: "",
        live: "",
    },
    {
        id: 5,
        title: "Tech Blog",
        languages: "JS, Handlebars, CSS",
        packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, path, sequelize",
        image: "img/Screen Capture 021 - The Tech Blog - mighty-garden-10876.herokuapp.com.jpg",
        description: "A basic tech blog app that stores posts and information from users.",
        repo: "https://github.com/ScalexanderB/blog-for-tech",
        live: "https://mighty-garden-10876.herokuapp.com/",
    },
];

function Portfolio() {
    return (
        <div>
            <h3 className="content is-medium">Portfolio</h3>
            <hr />

            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;

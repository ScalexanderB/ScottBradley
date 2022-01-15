import React from "react";

function About() {
    return (
        <div>
            <h3 className="content is-medium">Hi, I'm Scott Bradley.</h3>
            <hr />
            <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Scott Bradley"/>
            <p className="content is-italic mt-4">
            I'm an aspiring web developer with a knack for problem solving and a passion for technology.
            </p>
            <p className="content">
            I'm currently studying Web Development at UofT SCS, and I strive to create accessible digital products and scalable solutions.
            </p>
        </div>
    );
}

export default About;

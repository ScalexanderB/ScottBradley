import React from "react";

function Resume() {
    return (
        <div className="columns">
            <div className="column">
                <h3 className="content is-medium ">Resume</h3>
                <hr />

                <a
                  className="button"
                  href={process.env.PUBLIC_URL + "/ScottRes17.pdf"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <i className="fas fa-download"></i>  
                  </span>
                  <span>Download my resume</span>  
                </a>  
            </div>
            <div className="column">
                <h3 className="content is-medium">Front End Skills</h3>
                <hr />
                    <ul className="content">
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>React</li>
                    </ul>
            </div>
            <div className="column">
                <h3 className="content is-medium">Back End Skills</h3>
                <hr />
                <ul className="content">
                        <li>APIs</li>
                        <li>SQL</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>REST</li>
                        <li>MySQL, Sequelize</li>
                        <li>GraphQL</li>
                        <li>MongoDB, Mongoose</li>
                    </ul>
            </div>
        </div>
    );
}

export default Resume;

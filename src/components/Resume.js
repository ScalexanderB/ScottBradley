import React from "react";

function Resume() {
    return (
        <div className="columns">
            <div className="column">
                <p className="content is-medium">Resume</p>
                <hr />

                <a
                  className="button is-primary"
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
                <p className="content is-medium">Skills</p>
                <hr />
                <ul>
                    <li>HTML, CSS, Javascript</li>
                    <li>JSON, APIs</li>
                    <li>Markdown</li>
                    <li>Git</li>
                    <li>Github</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;

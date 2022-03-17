import React from "react";

function About() {
    return (
        <div className="about-box">
            <hr />
            <img src={process.env.PUBLIC_URL + '/img/IMG-9566.JPG'} alt="Scott Bradley"/>
            <div>
            <h2 className="content is-medium">Hi, I'm Scott Bradley.</h2>
            <p className="content mt-4 textBox">
            I’m a full stack web developer with a knack for problem solving and a passion for new technnology. 
            <br/>
            I’m a self-motivated life-long learner who strives to create accessible and responsive digital experiences. 
            <br/>
            I am a strong team player with a collaborative mindset who approaches every challenge with a critical eye 
            <br/>
            to ensure that the solution is both efficient and scalable. 
            </p>
            </div>
        </div>
    );
}

export default About;

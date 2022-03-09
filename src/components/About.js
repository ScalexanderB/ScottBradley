import React from "react";

function About() {
    return (
        <div className="about-box">
            <hr />
            <img src={process.env.PUBLIC_URL + '/img/IMG-9566.JPG'} alt="Scott Bradley"/>
            <div>
            <h2 className="content is-medium">Hi, I'm Scott Bradley.</h2>
            <p className="content mt-4 textBox">
            I'm an aspiring web developer with a knack for problem solving and a passion for technology.
            
            <br></br>
            <br></br>
            I'm currently studying Web Development at UofT SCS, and I strive to create accessible digital products and scalable solutions.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio excepturi nemo. Vel laborum minima, debitis possimus facere quam iste tempora magni temporibus suscipit repellendus exercitationem non sit unde quisquam maxime ratione quibusdam, distinctio corrupti itaque rem quo amet earum necessitatibus? Aliquam, animi? Fuga cupiditate aperiam inventore. Nobis similique, minima quae ullam fuga numquam porro ab amet. Saepe atque ut quibusdam alias assumenda delectus cumque amet quis. Impedit nisi ab ad perferendis dicta quasi delectus perspiciatis asperiores ut tempore voluptatibus explicabo consectetur, iure esse! Nostrum, eveniet porro natus ab quas odio similique facilis est suscipit tempora vel. Alias, id incidunt!
            </p>
            </div>
        </div>
    );
}

export default About;

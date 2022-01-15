import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>
                        Full Stack Web Development Portfolio
                    </strong> - React site by{" "}
                    <a href="https://github.com/ScalexanderB" target="_blank" rel="noreferrer">
                      <img src="../public/img/4747499_github_icon.svg" alt="Github Logo"/>
                    </a>
                    .
                    <hr />
                    <a
                      href="https://www.linkedin.com/in/scottalexanderb/" target="_blank" rel="noreferrer">
                      <img src="../public/img/104493_linkedin_icon.svg" alt="LinkedIn Logo"/>        
                    </a>{" "}
                     {" "}{" "}
                    <a href="https://stackoverflow.com/users/16574013/scottybradley" target="_blank" rel="noreferrer">
                      <img src="" alt="StackOverflow Logo"/>
                    </a>     
                </p>
            </div>
        </footer>
    );
}

export default Footer;

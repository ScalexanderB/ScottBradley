import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p className="footer-p">
                    <strong>
                        Full Stack Web Development Portfolio
                    </strong> - React site by Scott Bradley
                    .
                    <hr />
                    <a href="https://github.com/ScalexanderB" target="_blank" rel="noreferrer">
                      <img className="social-link" src="img/4747499_github_icon.svg" alt="Github Logo"/>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/scottalexanderb/" target="_blank" rel="noreferrer">
                      <img className="social-link" src="img/5282542_linkedin_network_social network_linkedin logo_icon.svg" alt="LinkedIn Logo"/>        
                    </a>{" "}
                     {" "}{" "}
                    <a href="https://stackoverflow.com/users/16574013/scottybradley" target="_blank" rel="noreferrer">
                      <img className="social-link" src="img/764872_media_social_square_stackoverflow_icon.svg" alt="StackOverflow Logo"/>
                    </a>     
                </p>
            </div>
        </footer>
    );
}

export default Footer;

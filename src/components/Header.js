import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    // renderPage method will use a switch statement to render the correct current page
    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Project />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            
            default:
                return <About />;    
        }
    };

    return (
        <header className="flex-row">
            <nav className="navbar flex-row">
                <div className="navbar-brand">
                    <a
                      className="navbar-item"
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/ScalexanderB"
                    >
                        <img className="my-logo" src={process.env.PUBLIC_URL + '/img/image2vector.svg'} alt="Scott Bradley Logo"/>
                        <span className="header content is-large">Scott Bradley</span>
                    </a>                     
                </div>
            </nav>
            {/* Pass state value and the setter as props to the NavTabs */}
            {/* Call renderPage function passing the currentPage in */}
        
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
                <div>
                    {renderPage(currentPage)}
                </div>  
        </header>
    );
}

export default Header;
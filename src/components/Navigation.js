import React, { useState } from "react"
import Hamburger from "./Hamburger";

function Navigation(props) {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    const tabs = ["About", "Portfolio", "Contact", "Resume"];

    return (
        
        <div className="tabs">
            <nav className="navbar flex-row">
            <div className="logo-name">
            <img className="my-logo" src={process.env.PUBLIC_URL + '/img/image2vector.svg'} alt="Scott Bradley Logo"/>
                <span className="content is-large" class="head-name">Scott Bradley</span>
            </div>     
                        
            <ul className="nav">
                
                {tabs.map((tab) => (
                    <li
                    className={
                        props.currentPage === tab ? "nav-item is-active" : "nav-item"
                    }
                    key={tab}
                    >
                        <a
                          href={"#" + tab.toLowerCase()}
                          //Whenever a tab is clicked on,
                          //the current page is set through the handlePageChange props.
                          onClick={() => props.handlePageChange(tab)}
                          className={
                              props.currentPage === tab ? "navActive" : "nav-link"
                          }
                          >
                              
                              {tab}
                              
                          </a>
                          
                    </li>
                ))}
                
            </ul>
            <div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
            
            </nav>

            <style jsx>{`
                
                .hamburger{
                    opacity: 0;
                    z-index: 6;
                }

                @media (max-width: 786px){
                    .hamburger{
                        padding-left: 2px;
                        margin: 1px;
                        opacity: 1;
                        z-index: 6;
                    }
                    .navbar ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                       height: max-content;
                       background-color: #FFFFFF;
                       width: 50vw;
                       margin-top:286px;
                       position: fixed;
                   }
                }
            `}</style>
        </div>
    );
}

export default Navigation;

import React from "react"

function Navigation(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        
        <div className="tabs">
            <nav className="navbar flex-row">
                
                        
            <ul className="nav">
                <img className="my-logo" src={process.env.PUBLIC_URL + '/img/image2vector.svg'} alt="Scott Bradley Logo"/>
                <span className="content is-large" class="head-name">Scott Bradley</span>
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
            </nav>
        </div>
    );
}

export default Navigation;

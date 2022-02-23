import React, { useState } from 'react';
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Resume from "./components/Resume";

function App() {

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
    
    <div>
      
      
      <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <div>{renderPage(currentPage)}</div>
      <Footer></Footer>
      
    </div>
  );
}

export default App;

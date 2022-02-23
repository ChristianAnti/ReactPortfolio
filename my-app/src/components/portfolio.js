import React, { useState } from "react";
import aboutMe from "./pages/AboutMe";
import myWork from "./pages/MyWork";
import contactMe from "./pages/ContactMe";


export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState("aboutMe");


    const renderPage = () => {
        if (currentPage === "aboutMe") {
            return <aboutMe/>;
        }else if (currentPage === "aboutMe") {
            return <aboutMe/>;
        }else if (currentPage === "aboutMe") {
            return <aboutMe/>;
        }else if (currentPage === "aboutMe") {
            return <aboutMe/>;
        }
    };

    return (
        <div>
          <navBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    
          {/* call renderPage to render a component */}
          {renderPage()}
          <Footer />
        </div>
      );

}
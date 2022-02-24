import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import myWork from "./pages/MyWork";
import contactMe from "./pages/ContactMe";
import Footer from "./footer";
// remember to style later 
// import 

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
          {renderPage()}
          <Footer />
        </div>
      );

}
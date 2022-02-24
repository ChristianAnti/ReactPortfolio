import React, { useState } from "react";
import AboutMe from "./pages/AboutMe"
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume"
import Footer from "./Footer";
import NavBar from "./NavBar";
// remember to style later 
// import 

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState("AboutMe");


    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe/>;
        }else if (currentPage === "MyWork") {
            return <MyWork/>;
        }else if (currentPage === "ContactMe") {
            return <ContactMe/>;
        }else if (currentPage === "Resume") {
            return <Resume/>;
        }
    };

    return (
        <div id="flex-container">
          <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          {renderPage()}
          <Footer />
        </div>
      );

}
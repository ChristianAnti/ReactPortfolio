import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import Footer from "../components/Footer";
import Resume from "./pages/Resume"
import NavBar from "../components/NavBar";
// remember to style later 
// import 

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState("AboutMe");


    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <aboutMe/>;
        }else if (currentPage === "MyWork") {
            return <MyWork/>;
        }else if (currentPage === "ContactMe") {
            return <ContactMe/>;
        }else if (currentPage === "Resume") {
            return <Resume/>;
        }
    };

    return (
        <div>
          <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          {renderPage()}
          <Footer />
        </div>
      );

}
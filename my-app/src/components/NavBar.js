import React from "react";
// remember to style later 
// import 

export default function NavBar({ currentPage, setCurrentPage }) {
    return (
        <NavBar>
            <div className="nav-container">
                <h1 className="navName">Christian Gleazson 🐒</h1>
                <div className="line"></div>
                <a
                    href="#1"
                    onClick={() => setCurrentPage("AboutMe")}
                    id={currentPage === "AboutMe" ? "active-page" : "nav-anchor"}
                >
                    About Me
                </a>
                <a
                    href="#1"
                    onClick={() => setCurrentPage("MyWork")}
                    id={currentPage === "MyWork" ? "active-page" : "nav-anchor"}
                >
                    MyWork
                </a>
                <a
                    href="#1"
                    onClick={() => setCurrentPage("Contactme")}
                    id={currentPage === "ContactMe" ? "active-page" : "nav-anchor"}
                >
                    Contact
                </a>
                <a
                    href="#1"
                    onClick={() => setCurrentPage("Resume")}
                    id={currentPage === "Resume" ? "active-page" : "nav-anchor"}
                >
                    Resume
                </a>
            </div>
        </NavBar>
    )
}


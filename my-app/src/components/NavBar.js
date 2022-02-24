import React from "react";
// remember to style later 
// import 



export default function NavBar({ currentPage, setCurrentPage }) {    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">                   
            <a className="navbar-brand" href="#" onClick={() => setCurrentPage("AboutMe")}>Christian Gleazson 🐒</a>                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-dropdown">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-dropdown">
                <div className="navbar-nav">
                    <a
                        className={`nav-link ${currentPage === "AboutMe" ? "active" : ""}`} // using backtick quotation for string literal https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
                        href="#1"
                        onClick={() => setCurrentPage("AboutMe")}
                    >
                        About Me
                    </a>
                    <a
                        className={`nav-link ${currentPage === "MyWork" ? "active" : ""}`}
                        href="#1"
                        onClick={() => setCurrentPage("MyWork")}
                    >
                        MyWork
                    </a>
                    <a
                        className={`nav-link ${currentPage === "ContactMe" ? "active" : ""}`}
                        href="#1"
                        onClick={() => setCurrentPage("ContactMe")}
                    >
                        Contact
                    </a>
                    <a
                        className={`nav-link ${currentPage === "Resume" ? "active" : ""}`}
                        href="#1"
                        onClick={() => setCurrentPage("Resume")}                    
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    )
}


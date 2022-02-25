import React from "react";
// remember to style later 
// import 


export default function Footer() {
  return (
    <footer id="contact">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <a className="nav-link" href="https://github.com/ChristianAnti" target="_blank">
          <div className="icon-text-container">
            <i className="bi bi-github"></i>
            <span id="icon-text">Github</span>
          </div>
        </a>
        <a className="nav-link" href="https://www.linkedin.com/in/christian-gleason-ba973622a/" target="_blank">
          <div className="icon-text-container">
            <i className="bi bi-linkedin"></i>
            <span id="icon-text">LinkedIn</span>
          </div>
        </a>
      </nav>      
    </footer>
  );
}


import React from "react";
// remember to style later 
// import 


export default function Footer() {
  return (
    <section id="contact">
      <div className="footer-container">
        <a href="https://github.com/ChristianAnti" target="_blank">
          <div className="icon-text-container">
            <i className="bi bi-github"></i>
            <p id="icon-text">Github</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/christian-gleason-ba973622a/" target="_blank">
          <div className="icon-text-container">
            <i className="bi bi-linkedin"></i>
            <p id="icon-text">LinkedIn</p>
          </div>
        </a>
      </div>
    </section>
  );
}


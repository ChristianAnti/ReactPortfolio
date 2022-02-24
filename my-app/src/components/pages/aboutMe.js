import React from "react";

export default function AboutMe() {
  return (
    <>
    <section className="info-container" id="info">
      <h1>Christian Gleason</h1>
      <div className="about-me-container">
        <div className="bio-image-container">
          <img
            className="Monkey"
            alt="The Real Me"
            src={require('../../assets/MeInRealLife.jpg')}
          />
        </div>
        <p>
            Hi I'm Christian im a full stack developer. :) I like monkeys 🐒.
        </p>
      </div>
    </section>
    </>
  );
}

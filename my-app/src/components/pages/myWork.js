import React from "react";
// remember to style later 
// import 

const projectCards = [
    {
        title: "Carta",
        description: "Canta was a project done with a group of other students from my coding bootcamp. Canta was an app based around locating medical care for those in need.",
        github: "https://github.com/kennedysam168/Group-Project-1",
        deployedLink: "https://kennedysam168.github.io/Group-Project-1/",
        src: "Canta",
        alt: "Canta screenshot",
        id: 1,
    },
    {
        title: "The Daily Beat",
        description: "Canta was a project done with a group of other students from my coding bootcamp. Canta was an app based around locating medical care for those in need.",
        github: "https://github.com/ChristianAnti/TheDailyBeat",
        deployedLink: "https://sleepy-scrubland-38633.herokuapp.com/signup",
        src: "DailyBeat",
        alt: "The daily beat screenshot",
        id: 2,
    },
    {
        title: "Budget Tracker",
        description: "Canta was a project done with a group of other students from my coding bootcamp. Canta was an app based around locating medical care for those in need.",
        github: "https://github.com/ChristianAnti/BudgetTrackerHW",
        deployedLink: "https://still-journey-94045.herokuapp.com/",
        src: "Tracker",
        alt: "The budget tracker screenshot",
        id: 3,
    }
]

export default function Projects() {
    return (
        <section className="container project-container">
            <h1 id="projects">My work</h1>
            {projectCards.map((project) => (
                <div key={project.id} className="project-card">
                    <div className="outer-image-container small-left">
                        <img
                            src={require(`../../assets/${project.src}.JPG`)}
                            className="card-img-top"
                            alt={project.alt}
                        />
                    </div>
                    <div className="project-info-left">
                        <h2 className="card-title">{project.title}</h2>
                        <p className="card-text">
                            {project.description}
                        </p>
                        <a
                            href={project.deployedLink}
                            className="btn"
                            target="_blank"
                        >Deployed App 🦾</a>
                        <a
                            href={project.github}
                            className="btn"
                            target="_blank"
                        >Project repository 🔧</a
                        >
                    </div>
                </div>
            ))}
        </section>
    );
}

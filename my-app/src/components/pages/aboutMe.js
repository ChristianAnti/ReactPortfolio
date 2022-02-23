import React from "react";

export default function aboutMe() {
    return (
        <>
        <section>
            <h1> Meet Christian Gleason </h1>
            <img
            className="me"
            alt="Monkey at keyboard"
            src={require('../../assets/MeInRealLife.jpg')}
            />
            <p>
                Hi I'm Christian im a full stack developer. :)
            </p>
        </section>
        </>
    );
}
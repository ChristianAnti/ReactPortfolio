import React from "react";
// remember to style later 
// import 

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
            <div>
            <p>
                Hi I'm Christian im a full stack developer. :) I like monkeys 🐒.
            </p>
            </div>
        </section>
        </>
    );
}


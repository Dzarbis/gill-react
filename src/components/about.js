import React from 'react';
import profile from "../assets/images/profile.jpg";

function About() {
    return (
        <div className="my-5">
            <h1 id="about">About Me</h1>
            <img src={profile} className="my-2" style={{ width: "25%" }} alt="profile" />
            <p>Bryan Gill is an Orlando based full stack developer with a background in consumer-facing, communication-heavy roles. He is growth-focused with a strong work ethic, 'never quit' mentality, and experience leading and managing teams.</p>
        </div>
    );
}

export default About;
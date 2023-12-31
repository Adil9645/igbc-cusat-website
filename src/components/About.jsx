import React from "react";
import aboutContent from "./aboutContent";

function About() {
    return (
        <div className="about-container" id="about">
            <div className="heading">
                <h1>ABOUT</h1>
            </div>
            <div className="content">
                <p>{aboutContent}</p>
            </div>
        </div>
    )
}

export default About;
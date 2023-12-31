/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Header(){
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/">
                    <img 
                        src="images/igbc-logo.png" alt=""
                        // onMouseOver={e => {e.currentTarget.src="images/igbc-logo-hover.png"}}
                        // onMouseOut={e => {e.currentTarget.src="images/igbc-logo.png"}}
                    />
                </a>
            </div>
            <div className="nav-link-container">
                <div><a href="#about" className="nav-link">ABOUT</a></div>
                <div><a href="#events" className="nav-link">EVENTS</a></div>
                <div><a href="#team" className="nav-link">TEAM</a></div>
                <div><a href="#contact" className="nav-link">CONTACT</a></div>
            </div>
        </div>
    )
}

export default Header;
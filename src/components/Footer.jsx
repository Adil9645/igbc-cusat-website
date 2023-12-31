/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {FaFacebookSquare, FaInstagram, FaLinkedin} from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <a href="/">
                    <img 
                        src="images/igbc-logo.png" alt=""
                        onMouseOver={e => {e.currentTarget.src="images/igbc-logo-hover.png"}}
                        onMouseOut={e => {e.currentTarget.src="images/igbc-logo.png"}}
                    />
                </a>
                <p>Member ID: #IGBCIST180024</p>
            </div>
            <div className="footer-link-container">
                <div>
                    <a href="https://www.instagram.com/igbc_cusat/?hl=en" className="footer-link">
                        <FaInstagram 
                            className="footer-link"
                        />
                    </a>
                </div>
                <div>
                    <a href="https://www.facebook.com/pages/category/Education/IGBC-SOE-CUSAT-Chapter-153245505390223/" className="footer-link">
                        <FaFacebookSquare 
                            className={"footer-link"}

                        />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/company/igbc-cusat/about/" className="footer-link">
                        <FaLinkedin 
                            className="footer-link"
                        />
                    </a>
                </div>
                {/* <div>
                    <a href="" className="footer-link">
                        <img src="images/logo/twi-logo.svg" alt=""/>
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default Footer;
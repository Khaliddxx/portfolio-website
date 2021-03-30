import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web Development and Creative Services</h1>
            </div>

            <Typed 
                className = "typed-text"
                strings = {["Web Design", "Game Development", "Music Production", "3D Graphics", "Google Ads"]}
                
                typeSpeed = {40}
                backSpeed = {60}
                
                loop
            />
            <div className="btn-div">
                <a href="#" className = "btn-main-offer">Contact Me</a>
            </div>
            
        </div>
    )
}

export default Header

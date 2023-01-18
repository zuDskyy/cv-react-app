import React from "react";
import "./Navigation.css";
import "../Header.css";
import "../../../App.css";
import { Link } from "react-scroll";


const Navigation = () => { 

    return (
        <nav className="navigate">
            <ul className="find-content column">
                <Link to="About" className="about">About</Link>
                <Link to="skills" className="contact" >Skills</Link>
                <Link to="Resume" className="resume" >Resume</Link>
               
            </ul>
        </nav>
    )
}
export default Navigation;
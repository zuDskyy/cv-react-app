import React from 'react';
import "./Header.css";
import "../../App.css";
import linkedin from "../../images/linkedin.png";
import Github from "../../images/github-logo.png";

const SocialLink = () => {
    return (
        <div className="social row">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/zurab-dalakishvili-a7b996220" className="linkedin" target="blank_">
                        <img src={linkedin } alt="linkedin"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/zuDskyy" className="github" target="blank_">
                        <img src={Github } alt="github"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default SocialLink;
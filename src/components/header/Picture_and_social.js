import React from "react";
import './Header.css';
import SocialLink from "./Social_Links";
import MyName from "./MyName";

//   import About from "../main/About/About"
//   import Resume from "../main/Resume/Resume"
//   import Skills from "../main/Skills/Skills"
//   import Portfolio from "../main/Portfolio/Portfolio"

const Picture_and_social = () => {
    return (
        <div className="pic-social column">
            {/* <div className="profile-pic"></div> */}
            <MyName name="Zurab Dalakishvili"/>
            <SocialLink />
            
        </div>
    )
}

export default Picture_and_social;
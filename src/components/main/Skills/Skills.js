import React, {useEffect, useState} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import MySkills from "./MySkills";
import "./skills.css"

const Skills = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    })
    const [skills, unBlur] = useState(false);
    const change_background_color = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 800) {
            unBlur(true);
        } else {
            unBlur(false);
        }
    }
    window.addEventListener("scroll", change_background_color);
    return (
        <div className={skills ? 'skills active' : 'skills'} id="SkillScroll">
            <h1 data-aos="fade-right">Skills</h1>
            <MySkills />
        </div>
    )
}
export default Skills;
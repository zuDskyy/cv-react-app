import React, {useEffect} from "react";
import "../../../App.css";
import TextImg from "./About_text_img";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    })
    return (
        <div data-aos="fade-up" id="About-Scroll" className="About column">
            <h1>About</h1>
            <p>I am Front-end developer with zero experience, but I am not afraid any challenges. I like to learn new things, mostly about programming languages. I am self motivated person and do everything to reach maximum in my life.</p>
            <TextImg />
        </div>
    )
};

export default About;
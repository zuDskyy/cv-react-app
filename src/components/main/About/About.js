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

            <TextImg />
        </div>
    )
};

export default About;
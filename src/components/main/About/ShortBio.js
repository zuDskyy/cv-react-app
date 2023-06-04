import React, { useEffect } from "react";
import "../../../App.css";
import BioList from "./BioList";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";

const Bio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="short-bio column">
      <h2 data-aos="fade-left">Front-end Web Developer</h2>
      <p data-aos="fade-left">
        Hello! I'm Zurab, a Front-end Developer committed to designing
        captivating and user-friendly websites. My expertise lies in HTML, CSS,
        JavaScript, and React, enabling me to transform ideas into visually
        stunning digital experiences. Feel free to explore the projects I've
        worked on below, and don't hesitate to reach out for collaboration or
        any inquiries you may have.
      </p>
      <BioList />
    </div>
  );
};

export default Bio;

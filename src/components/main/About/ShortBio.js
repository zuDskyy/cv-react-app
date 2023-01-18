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
        I am a frontend developer, I have worked on many projects, I am also
        self-motivated and I am ready to face any challenges. Currently, I am
        interested in a job where I will deepen my knowledge and raise my
        qualifi cations .
      </p>
      <BioList />
    </div>
  );
};

export default Bio;

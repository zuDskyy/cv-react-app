import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./resume.css";
import Summary from "./Summary";
import Education from "./Education";
import Profession from "./Professions";
import Social from "./Social";

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="resume-wrap column" id="ResumeScroll">
      <div data-aos="fade-right" className="Resume column">
        <h1>Resume</h1>
        <p>
          As a Front-end Developer, I specialize in utilizing the React library
          to develop efficient single-page applications with a focus on
          delivering exceptional client-side user experiences. With my
          experience collaborating in various professional environments, I bring
          a strong teamwork mindset to every project. Additionally, I am
          proficient in English  and Russian .
        </p>
      </div>
      <div className="long-resume row">
        <div className="column-wrap column">
          <Education />
        </div>
        <Profession />
      </div>
      
    </div>
  );
};
export default Resume;

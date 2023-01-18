import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./resume.css";
import Summary from "./Summary";
import Education from "./Education";
import Profession from "./Professions";

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="resume-wrap column" id="ResumeScroll">
      <div data-aos="fade-right" className="Resume column">
        <h1>Resume</h1>
        <p>
          I use the React library, write single-page applications( on mini
          projects) and try to create the best possible client-side UX. I have a
          lot of experience to work with team, but in different professions. I
          know English(B1) and Russian(A2)
        </p>
      </div>
      <div className="long-resume row">
        <div className="column-wrap column">
          <Summary />
          <Education />
        </div>
        <Profession />
      </div>
    </div>
  );
};
export default Resume;

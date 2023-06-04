import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./resume.css";
import "./education.css"

const Summary = () => {
    useEffect(() => {
        Aos.init({duration:1400})
    })
    return (
        <div className="education column">
            <h2 data-aos="fade-up">Education</h2>
            <div className='list-edu column'>
                <div className="edu-div " data-aos="fade-up">
                <h3 data-aos="fade-up"> Academy Of Digital Industry</h3>
                <p data-aos="fade-up">React JS (2022/AUG-2022/SEP)</p>
                </div>
                <div className="edu-div " data-aos="fade-up">
                <h3 data-aos="fade-up"> SCIENTIFIC CYBER SECURITY ASSOCIATION </h3>
                <p data-aos="fade-up">MYSQL(2022/SEP-2022/OCT)</p>
                </div>
                <div className="edu-div " data-aos="fade-up" > <h3 data-aos="fade-up">GTU - Georgian Technical University</h3>
                <p data-aos="fade-up">Law </p></div>
            </div>
        </div>
    )
}
export default Summary;
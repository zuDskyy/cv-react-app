import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./resume.css";
import "./professions.css"

const Profession = () => {
    useEffect(() => {
        Aos.init({duration:1400})
    })
    return (
        <div className="profession column">
            <h2 data-aos="fade-up">Experience</h2>
            <div className='list-edu column'>
                <div className="prof-div"  data-aos="fade-up">
                <h3 data-aos="fade-up">PAY BOX (2022/NOV-2022/DEC)</h3>
                <p data-aos="fade-up">IT Support/Technician</p>
                </div>
               <div className="prof-div"  data-aos="fade-up">
                <h3 data-aos="fade-up">LTD MAGTICOM (2022/MAR-2022/AUG)</h3>
                <p data-aos="fade-up">Network Engineer</p>
                </div>
                <div className="prof-div"  data-aos="fade-up">
                <h3 data-aos="fade-up">PUBLIC N63 SCHOOL (2021-2022)</h3>
                <p data-aos="fade-up">Head Of Logistics</p>
                </div>
            </div>
        </div>
    )
}
export default Profession;
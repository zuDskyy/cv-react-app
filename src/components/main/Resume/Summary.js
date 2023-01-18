import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./resume.css";
import "./summary.css"

const Summary = () => {
    useEffect(() => {
        Aos.init({duration:1400})
    })
    return (
        <div className="summary column">
            <h2 data-aos="fade-up">Summary</h2>
            <div >
                <ul className='un-sum column'>
                    <h3 data-aos="fade-up">Zurab Dalakishvili</h3>
                    <ul className="small-re">
                        <li data-aos="fade-up">Tbilisi/Georgia</li>
                        <li data-aos="fade-up">+995 579 00 57 10</li>
                        <li data-aos="fade-up">Zu.drake2@gmail.com</li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}
export default Summary;
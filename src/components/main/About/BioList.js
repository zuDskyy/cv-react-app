import React, {useEffect } from "react";
import "../../../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";

const BioList = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    })
    return (
        <div data-aos="fade-left" className="small-res row">
            <ul className="column">
                <li>Birthday: 25 Dec 1998</li>
                <li>Phone: +995 579 005 710</li>
                <li>City: Tbilisi/Geo</li>
            </ul>
            <ul className="column">
                <li>Email: zu.drake2@gmail.com</li>
                
            </ul>
        </div>
    )
};
export default BioList;
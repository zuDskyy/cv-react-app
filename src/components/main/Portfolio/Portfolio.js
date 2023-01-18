import React, { useEffect } from 'react';
import RightSideWebsite from "./BottomWebs"
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./portfolio.css"


const Portfolio = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    })
    return (
        <div className="Portfolio column" id='PortfolioScroll'>
            <h1 data-aos="fade-right">Portfolio</h1>
            <RightSideWebsite />
        </div>
    )
}

export default Portfolio;
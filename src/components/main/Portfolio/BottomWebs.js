import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./leftwebs.css"
import heromovie from "../../../images/hero-movie.PNG";
import eccomerce from "../../../images/eccomerce.PNG";
import nppm from "../../../images/np-pm.PNG";
import hex2048 from "../../../images/hex-2048.PNG";
import marvelskin from "../../../images/marvelskin.PNG";
import craftman from "../../../images/craftman.PNG";


const RightSideWebs = () => {
    useEffect(() => {
        Aos.init({duration:3000})
    })
    return (
        <div className="webs row">
            <a data-aos="fade-right" href="https://movie-hero-stream.netlify.app" target="blank_">
                <img src={heromovie} alt="/"/>
            </a>
            <a data-aos="fade-top" href="https://e-ccomerce.netlify.app" target="blank_">
                <img src={eccomerce} alt="/"/>
            </a>
            <a data-aos="fade-left" href="https://np-pm.netlify.app" target="blank_">
                <img src={nppm} alt="/"/>
            </a>
            <a data-aos="fade-right" href="https://evolution-hex2048.netlify.app" target="blank_">
                <img src={hex2048} alt="/"/>
            </a>
            <a data-aos="fade-top" href="https://marvelskins.netlify.app" target="blank_">
                <img src={marvelskin} alt="/"/>
            </a>
            <a data-aos="fade-left" href="https://craft-man.netlify.app" target="blank_">
                <img src={craftman} alt="/"/>
            </a>
        </div>
    )
}

export default RightSideWebs;
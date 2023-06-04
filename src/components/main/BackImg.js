
import React from 'react';
import "../main/BackImg.css";
import Mainer from "./Main.js";
import MainContent from './maincontent/MainContent';
import Footer from './footer/Footer';

const BackImg = () => { 
    return (
        <div className='background-pic column'>
            {/* <Mainer name="Zurab Dalakishvili" /> */}
            <MainContent />
            <Footer/>
        </div>
    )
}

export default BackImg;
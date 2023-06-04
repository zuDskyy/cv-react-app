import React from 'react';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import "../maincontent/main-content.css"


const MainContent = () => {
    return (
        <div className='full-content-wrap'>
            <About />
            <Skills />
            <Resume />
           
         
        </div>
        
    )
};
export default MainContent;
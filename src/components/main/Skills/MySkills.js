import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./skills.css"

const MySkills = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    })
    return (
        <div data-aos="fade-up" className='my_skills row' >
            <ul className='column'> <h2>Back-End and DB</h2>
               <li><span className='NODE'></span>NODE JS</li>
                <li><span className='SQL'></span>MYSQL</li>
                <li><span className='MONGODB'></span>MONGODB</li>
            </ul>
            <ul className='column'> <h2>Front-End</h2>  
                <li><span className='HTML'></span>HTML</li>
                <li><span className='CSS'></span>CSS</li>
                <li><span className='REACT'></span>REACT</li>
                <li><span className='REACT NATIVE'></span>REACT NATIVE</li>
                <li><span className='ELECTRON'></span>ELECTRONJS</li>
                <li><span className='JAVASCRIPT'></span>JAVASCRIPT</li>
                <li><span className='TYPESCRIPT'></span>TYPESCRIPT</li>
            </ul>
        </div>
    )
}
export default MySkills;
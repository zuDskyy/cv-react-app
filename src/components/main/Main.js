import React from 'react';
import "./BackImg.css";


const Mainer = (props) => { 
    return (
        <div className='texts'>
            <p className='name-text'>{props.name}</p>
            <p className='animation-text'>Junior  Front-end Developer</p>
            
        </div>
    )
}
export default Mainer;
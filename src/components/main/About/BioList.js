import React, { useEffect, useState } from "react";
import "../../../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";

const BioList = () => {
  const [copy, setCopy] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  function copyClipBoard(text) {

    navigator.clipboard.writeText(text.target.outerText);
    setCopy(true)
  setTimeout(() => {
    setCopy(false)
    },1000)
  }


  return (
    <div data-aos="fade-left" className="small-res row">
      <ul className="column">
        <li>Birthday: 25 Dec 1998</li>
        <li>
          Phone:{" "}
          <a href="tel:+995579005710" target="_blank">
            +995 579 005 710
          </a>{" "}
        </li>
        <li>City: Tbilisi/Geo</li>
      </ul>
      <ul className="column" style={{display:'flex' , justifyContent:'space-between'}}>
       
        <li >Email: <span onClick={(e) => copyClipBoard(e)}> zu.drake2@gmail.com</span></li>
         {copy && (
            <>
           
          <h3
            style={{
              position: "absolute",
              marginLeft:100,
              padding:5,
              border: 1,
              borderRadius: 5,
              background: "black",
            }}
          > 
          <img style={{borderRadius: '50%'}} src={require("../../../images/success-icon-11.jpg")} width={20} height={20}/>
            Copied !
          </h3>
          </>
        )}
      </ul>
    </div>
  );
};
export default BioList;

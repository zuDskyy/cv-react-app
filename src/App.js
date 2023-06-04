import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import PictureSoc from "./components/header/Picture_and_social";
import BackImg from "./components/main/BackImg";
import Navigation from "./components/header/HeaderNav/Navigation";
import { __useClickOutside } from "./components/outSideClick/useOutSideClick";
import "./App.css";


function App() {
  const [open, IsOpen] = useState(false);
   const outSideRef = useRef();



   const handleOpen = () => {
    
    IsOpen(prevState => !prevState);
 
  };

   
 __useClickOutside(outSideRef, () => IsOpen(false));



  return (
    <div   className="MainStyle">
      <div className="header">
        <PictureSoc />
        <Navigation />

   
      </div>

     
        <div style={{ zIndex: 31, cursor: "pointer", position: "fixed", top: 0 }} onClick={handleOpen} className={!open ? "header-burger" : "hidden"} >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div> 
    
      <div ref={outSideRef} className={open ? "header-mob" : "hidden"}>
      <span
        className="header-burger"
        style={{ zIndex: 31, cursor: "pointer", position: "fixed", top: 0 }}
        onClick={handleOpen}
      >
        Menu
      </span>
        <PictureSoc />
        <Navigation />
      </div>

      <BackImg className="Backgrounds" />



     
    </div>
  );
}

export default App;

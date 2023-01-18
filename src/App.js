import React from 'react';
import PictureSoc from './components/header/Picture_and_social';
import BackImg from './components/main/BackImg';
import Navigation from "./components/header/HeaderNav/Navigation";
import './App.css';

function App() {
  return (
    <div className='MainStyle'>
      <div className='header'>
        <PictureSoc />
        <Navigation />
      </div>
      <BackImg className="Backgrounds"/>
    </div>
  )
}

export default App;
import React from 'react';
import 'rc-slider/assets/index.css';
import "../css/navbar.css";
import Slider from 'rc-slider';


function Navbar(props) {
  const {slider, changeSlider} = props;
  return (
    <header className='Navbar'>

      <div className='logo'>
        <a href="#" >Azul Colors</a>
       </div>
        <div className="slider-container">
          <span>Level: {slider}</span>

         <div className="slider">
          <Slider
          defaultValue={slider}
          min={100}
          max={900}
          onAfterChange={changeSlider}
          step={100}
          />
         </div>
        </div>
    </header>
  )
}

export default Navbar;

import React, {useState} from 'react';
import ColorBox from './color-box';
import 'rc-slider/assets/index.css';
import "../css/Pallete.css";
import Navbar from './navbar';





function Palette(props){
const [slider, setSlider] = useState(500)

const changeSlider = (newLevel) => {
  setSlider(newLevel)
}

const colorBoxes = props.palette.colors[slider].map(color => {
  return <ColorBox background={color.hex} name={color.name} />
})

return <div className="palette">
         <Navbar slider={slider} changeSlider={changeSlider} />
          <div className="palette-colors">
          {colorBoxes}
          </div>

        </div>

}

export default Palette

import React, {useState} from 'react';
import ColorBox from './color-box';
import 'rc-slider/assets/index.css';
import "./Pallete.css";
import Slider from 'rc-slider';





function Palette(props){
const [slider, setSlider] = useState(500)

const changeSlider = (newLevel) => {
  setSlider(newLevel)
}

const colorBoxes = props.palette.colors[slider].map(color => {
  return <ColorBox background={color.hex} name={color.name} />
})

return <div className="palette">
        <div className="slider">
          <Slider
          defaultValue={slider}
          min={100}
          max={900}
          onAfterChange={changeSlider}
          step={100}
          />
        </div>
          <div className="palette-colors">
          {colorBoxes}
          </div>

        </div>

}

export default Palette

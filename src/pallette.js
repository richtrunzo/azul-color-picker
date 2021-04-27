import React from 'react';
import ColorBox from './color-box';
import "./Pallete.css";


function Palette(props){

const colorBoxes = props.colors.map(color => {
  return <ColorBox background={color.color} name={color.name} />
})

return <div className="palette">
          <div className="palette-colors">
          {colorBoxes}
          </div>

        </div>

}

export default Palette

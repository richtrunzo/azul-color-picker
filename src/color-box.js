import React, {useState} from 'react';
import "./colorbox.css";

function ColorBox(props) {
  console.log(props)
  const {name, background} = props;
  return (
    <div style={{ background }} className="ColorBox">
      <div className="copy-container">
      <div className="box-content">
        <span>{name}</span>
      </div>
      <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">More</span>
    </div>
  )
}

export default ColorBox

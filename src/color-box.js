import React, {useState} from 'react';
import "./colorbox.css";

function ColorBox(props) {
  return (
    <div style={{ background: props.background }} className="ColorBox">
      <span>MORE</span>
      <span>{props.name}</span>
    </div>
  )
}

export default ColorBox

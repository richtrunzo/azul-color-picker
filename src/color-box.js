import React, {useState} from 'react';
import "./colorbox.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';

function ColorBox(props) {
  console.log(props)
  const {name, background} = props;
  return (
    <CopyToClipboard text={background}>
    <div style={{ background }} className="ColorBox">
      <div className="copy-container">
      <div className="box-content">
        <span>{name}</span>
      </div>
      <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">More</span>
    </div>
    </CopyToClipboard>
  )
}

export default ColorBox

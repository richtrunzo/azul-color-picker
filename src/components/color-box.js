import React, {useState} from 'react';
import "../css/colorbox.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';

function ColorBox(props) {
  const [copy, setCopy] = useState(false);

  const changeCopy = () => {
    setCopy(true)
    setTimeout(() =>  {
    setCopy(false); }, 1500);
  }


  const {name, background} = props;

  return (
    <CopyToClipboard text={background} onCopy={changeCopy}>
    <div style={{ background }} className="ColorBox">
      <div style={{ background }} className={`copy-overlay ${copy && "show"}`}></div>
      <div className={`copy-msg ${copy && "show"}`}>
        <h1>copied!</h1>
        <p>{background}</p>
      </div>
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

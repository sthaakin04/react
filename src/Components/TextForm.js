import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked"+text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
  }

  const [text, setText] = useState("");
  // text="new text" //wrong way to change text //error aucha
  // setText("newtext");
  // setText("sdfsdfsdf"); /// you can only change the text by using settext function
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#505050'}}>
        {/* two curly braces are used above because the first one denotes its a javascript and the second one denotes u will be using an object */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#505050'}}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Delete Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#505050'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something above to preview it here"}</p>
      </div>
    </>
  );
}

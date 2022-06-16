import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    //  console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","Success")
  }

  const firstCap = () => {
    let newText = text.toLowerCase()
    let newText2 = newText.charAt(0).toUpperCase() + newText.slice(1);
    setText(newText2)
  }
  const handleDownClick = () => {
    //  console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","Success")
  }
  const handleOnChange = (event) => {
    //  console.log("On change");
    setText(event.target.value)
  }
  const capitalFirstLetter = () => {
    let tempText = text.split(/[  ]+/);
    let newText = "";
    tempText.forEach((e) => {
      e = e.charAt(0).toUpperCase() + e.slice(1);
      newText = newText + e + " ";
    })
    setText(newText);

  }
  const handleEmail = () => {
    let newText = text.split("@");
    let later = newText[1].split(".");
    setText("Your account is on " + later[0] + " And your username could be" + newText[0]);
  }
  const [text, setText] = useState("Enter text here");
  // text ="new text"; Wrong way to change the state
  // setText("new text"); Correct way to change the state
  return (<>


    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'light' }} value={text} rows="8" ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upercase</button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={firstCap}>Fist Letter Capital</button>
    </div>
    {/* <button className="btn btn-primary my-1 mx-3" onClick={handleEmail}>Handle Email</button>   */}

    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>YOUR TEXT SUMMARY</h1>
      <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter Something in the above TextBox to Preview"}</p>
    </div>
  </>
  )
}

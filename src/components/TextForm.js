import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleDownClick =() =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  }
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleCapitle=()=>{
    var splitStr = text.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    
    let hello = splitStr.join(' '); 
    setText(hello)
    props.showAlert("First Letter Capitilized", "success");
  }
  
  return (
    <>
      <div className="mb-3" style={{color:props.mode==='light'||props.custom==='danger'|| props.custom==='success'|| props.custom==='warning'?'black':'white'}}>
        <h1>{props.title}</h1>
        <textarea
          value={text}
          onChange={handleChange}
          className="form-control"
          id="myBox"
          rows="8"
          style={{backgroundColor:props.mode==='light'?'white':'grey'}}
        />
        <button className={`btn btn-${props.custom?props.custom:"primary"} mx-1`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.custom?props.custom:"primary"} mx-1`} onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.custom?props.custom:"primary"} mx-1`} onClick={handleCapitle}>
          Capitilize every first letter
        </button>
      </div>
      <div className="container my-4" style={{color:props.mode==='light'||props.custom==='danger'|| props.custom==='success'|| props.custom==='warning'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length-1} words ,{text.length} characters and {text.split(/[.!?]+\s/).filter(Boolean).length} sentences</p>
        <p>{text.split(" ").length-1<0 ? 0 :0.008*(text.split(" ").length-1)} minutes to read</p>
        <p></p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview It"}</p>
      </div>

    </>
  );
}

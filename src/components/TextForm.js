import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.displayAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    
    props.displayAlert("Converted to lowercase", "success");
  };

  const handleClearText = () => {
    setText("");
    props.displayAlert("Cleared the Text", "success");
  };

  const handleReverseText = () => {
    setText(text.split("").reverse().join(""));
    
    props.displayAlert("Reversed the text", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  const handleExtraSpaces = () => {
    setText(text.split(/\s+/).join(" "));
    props.displayAlert("Removed Extra Spaces", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleFindChange = (event) => {
    findWord(event.target.value);
  };

  const handleReplaceChange = (event) => {
    replaceWord(event.target.value);
  };

  const handleReplaceClick = () => {
    setText(text.replaceAll(fWord, rWord));
    props.displayAlert("Replaced the text", "success");
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
            id="textBox"
            rows="8"
            placeholder="Enter your text here"
          ></textarea>
          <input
            className="form-control my-2"
            value={fWord}
            onChange={handleFindChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
            id="findBox"
            placeholder="Word to find"
          />
          <input
            className="form-control my-2"
            value={rWord}
            onChange={handleReplaceChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
            id="replaceBox"
            placeholder="Word to replace"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleReverseText}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReplaceClick}>
          Replace Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">
          Speak
        </button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>Minutes Needed To Read: {0.008 * text.split(" ").filter((element) => element.length !== 0).length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

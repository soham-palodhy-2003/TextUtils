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
  const handleTitleCase = () => {
    setText(text.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase())));
    props.displayAlert("Converted to Title Case", "success");
  };
  const handleSentenceCase = () => {
    setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase()));
    props.displayAlert("Converted to Sentence Case", "success");
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.displayAlert("Text copied to clipboard", "success");
  };
  const handleDownloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
    props.displayAlert("Text downloaded as file", "success");
  };
  const countVowelsAndConsonants = () => {
    const vowels = text.match(/[aeiouAEIOU]/g)?.length || 0;
    const consonants = text.match(/[^aeiouAEIOU\s]/g)?.length || 0;
    return { vowels, consonants };
  };
  const { vowels, consonants } = countVowelsAndConsonants();
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
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
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={handleReverseText}>
          Reverse Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleReplaceClick}>
          Replace Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleTitleCase}>
          Title Case
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleSentenceCase}>
          Sentence Case
        </button>
        <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">
          Speak
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleDownloadText}>
          Download Text
        </button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>Your Text Summary</h1>
        <p>{
          text.split(/\s+/).filter((element) => element.trim().length > 0).length} words and {text.split('').filter((char) => !/\s/.test(char)).length} characters
        </p>
        <p>Minutes Needed To Read: {0.008 * text.split(/\s+/).filter((element) => element.trim().length > 0).length}
        </p>
        <p>Vowels: {vowels}, Consonants: {consonants}</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}

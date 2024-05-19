import React from "react";

export default function About(props) {
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'black' : 'white',
    border: props.mode === 'dark' ? '1px solid white' : '1px solid black'
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">About TextUtils</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Our Mission:</strong> At TextUtils, our mission is to provide a powerful and user-friendly text utility application that empowers users to manipulate and analyze their text efficiently. We aim to simplify the process of working with text data, offering a range of features that cater to various needs from formatting to analysis.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Our Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Our Features:</strong> TextUtils offers a variety of features to enhance your text processing experience. Our tools include text transformation, word count, character count, and more. We strive to add new features based on user feedback and emerging needs to ensure that TextUtils remains an essential tool for everyone from students to professionals.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Our Vision
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Our Vision:</strong> We envision a world where handling text data is no longer a tedious task but an intuitive and seamless experience. By continuously improving and expanding our platform, we aspire to become the go-to solution for text manipulation, catering to a global audience and fostering a community of engaged users who contribute to the growth and improvement of TextUtils.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

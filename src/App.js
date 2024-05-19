import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
//import About from './components/About';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
/*
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
*/

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const displayAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      displayAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      displayAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      {/*<Router>*/}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/*<Routes>*/}
            <TextForm displayAlert={displayAlert} heading="Enter the text" mode={mode} />
          {/*</Routes>*/}
        </div>
      {/*</Router>*/}
    </>
  );
}

export default App;

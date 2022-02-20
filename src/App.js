import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [custom, setCustom] = useState(null);
  const setRed = () => {
    document.body.style.backgroundColor = "rgb(255,0,0,0.1)";
    document.body.style.color = "#000000";
    setCustom("danger");
    showAlert("Red mode has been Enabled", "success");
  };
  const setGreen = () => {
    document.body.style.backgroundColor = "rgb(0,128,0,0.1)";
    document.body.style.color = "#000000";
    setCustom("success");
    showAlert("Green mode has been Enabled", "success");
  };
  const setYellow = () => {
    document.body.style.backgroundColor = "rgb(255,255,0,0.1)";
    document.body.style.color = "#000000";
    setCustom("warning");
    showAlert("Yellow mode has been Enabled", "success");
  };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enabled", "success");
      setCustom(null);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      setCustom(null);
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtil"
          mode={mode}
          toggleMode={toggleMode}
          setGreen={setGreen}
          setYellow={setYellow}
          setRed={setRed}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} exact/>

            <Route
              path="/"
              element={
                <TextForm
                  title="Enter text below to analyze"
                  custom={custom}
                  mode={mode}
                  showAlert={showAlert}
                exact />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

import React, { Component, Fragment,useEffect } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import "./css/desktopStyleCom.css";
import "./css/mobileStyleCom.css";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {  
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div>
    <HomePage />



</div>
  );
}

export default App;

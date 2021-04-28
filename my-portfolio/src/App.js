import React, { useState } from "react";
import './App.css';
import NavBar from "./Components/NavBar";
import Intro from "./Components/Intro";
import MyProjects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import ScrollUpButton from "react-scroll-up-button";


function App() {

  return (
    <>
      <ScrollUpButton showAtposition={50} />
      <NavBar />
      <Intro />
      <MyProjects />
      <ContactMe />
    </>
      
  );
}


export default App;


import React from 'react';
import "./App.css";

import {BrowserRouter, Route} from "react-router-dom";

import Home from "./../Home/Home.jsx";
import About from "./../About/About.jsx";
import Projects from "./../Projects/Projects.jsx";
import Skills from "./../Skills/Skills.jsx";
import Contact from "./../Contact/Contact.jsx";

function App() {
  return (
    <div className="App">
      <h1>I'm Landing page</h1>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/projects" exact component={Projects}></Route>
          <Route path="/skills" exact component={Skills}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

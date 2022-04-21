import React from 'react';

import {HashRouter, Route} from "react-router-dom";

import Home from "./../Home/Home.jsx";
import About from "./../About/About.jsx";
import Projects from "./../Projects/Projects.jsx";
import Skills from "./../Skills/Skills.jsx";
import Contact from "./../Contact/Contact.jsx";

function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/skills" exact component={Skills}/>
          <Route path="/contact" exact component={Contact}/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

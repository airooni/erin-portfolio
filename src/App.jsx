import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="App">
     <Router>
        <>
          <div >
           
              <Link to="/">Home</Link>
          
           
              <Link to="/about">About</Link>
            
           
              <Link to="/gif-maker">GIF Maker</Link>
            
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/grayscale" component={About} />
        </>
      </Router>

    </div>
  );
}
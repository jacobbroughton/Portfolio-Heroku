import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Work from "./components/Work/Work"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <Router>
      <div className="App"></div> 
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </Switch>
      
    </Router>
  );
}

export default App;

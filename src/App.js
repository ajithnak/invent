import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from "./Home";
import Cooking from "./Cooking";
import Food from "./Food";
import Nuts from "./Nuts";
import Beverages from "./Beverages";
import Checkout from "./Checkout";


function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Header/>
          <Home/>
          </Route>
          <Route path="/cooking" exact>
          <Header/>
           <Cooking/>
        </Route>
        <Route path="/food" exact>
        <Header/>
        <Food/>
        </Route>
        <Route path="/nuts" exact>
        <Header/>
        <Nuts/>
        </Route>
        <Route path="/beverages" exact>
        <Header/>
        <Beverages/>
        </Route>
        <Route path="/checkout" exact>
        <Header/>
        <Checkout/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

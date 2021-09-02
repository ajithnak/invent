import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Cooking from './Cooking';
import Food from './Food';
import Nuts from './Nuts';
import Beverages from './Beverages';
import Checkout from './Checkout';
import SearchProduct from './SearchProduct';

function App() {
  return (
    <Router>
      <div className='app'>
          <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/cooking' exact>
            <Cooking />
          </Route>
          <Route path='/food' exact>
            <Food />
          </Route>
          <Route path='/nuts' exact>
            <Nuts />
          </Route>
          <Route path='/beverages' exact>
            <Beverages />
          </Route>
          <Route path='/checkout' exact>
            <Checkout />
          </Route>
          <Route path='/search/:id' exact>
            <SearchProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

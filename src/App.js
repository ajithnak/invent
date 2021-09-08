import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../src/Header/Header';
import Home from './Home';
import Cooking from '../src/Product/Cooking';
import Food from '../src/Product/Food';
import Nuts from '../src/Product/Nuts';
import Beverages from '../src/Product/Beverages';
import Checkout from '../src/Cart/Checkout';
import SearchProduct from '../src/Header/SearchProduct';
import AddProduct from '../src/Edit/AddProduct';
import EditProduct from '../src/Edit/EditProduct';
import EditData from "../src/Edit/EditData";

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
          <Route path='/add' exact>
            <AddProduct/>
          </Route>
          <Route path='/detail/:id' exact>
             <EditProduct/>
          </Route>
          <Route path='/detail/edit/:id' exact>
            <EditData/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

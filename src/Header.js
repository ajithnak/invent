import React from 'react';
import ars from"../src/images/ARS-logos1.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";
import { useStateValue } from './StateProvider';
import {Link} from "react-router-dom";



    function Header(){
      const [{basket}]=useStateValue();
      return (
       
        <div className="head">
        <nav class="navbar navbar-light bg-primary">
            <div class="container-fluid">
            <button class="btn btn-primary " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
              <div class="offcanvas-header">
               <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Shop by Category</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                   </div>
              <div class="offcanvas-body">
                <Link to="/cooking">
                 <span class="list-group-item list-group-item-action active "  data-bs-dismiss="offcanvas" aria-label="Close">Cooking Essentials</span>
                 </Link>
                 <Link to = "/food">
                 <span  class="list-group-item list-group-item-action active" data-bs-dismiss="offcanvas" aria-label="Close">Packaged Foods</span>
                 </Link>
                 <Link to ="/nuts">
                 <span  class="list-group-item list-group-item-action active" data-bs-dismiss="offcanvas" aria-label="Close">Spices & Nuts</span>
                 </Link>
                 <Link to ="/beverages">
                 <span class="list-group-item list-group-item-action active" data-bs-dismiss="offcanvas" aria-label="Close">Snacks & Beverages </span>
                 </Link>
              </div>
               </div>
        
        <span class="navbar-brand me-auto" >
        <Link to="/">
      <img src={ars}  width="40" height="30" class="d-inline-block align-text-top" alt=" "/>
      </Link>
    </span>
    
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-danger" type="submit">Search</button>
          </form>

            <Link to="/checkout">
          <div className="basket">
          <form class="d-flex">
          <span class="bi bi-cart3 btn btn-primary" > {basket?.length} </span>
        </form>
        </div>
        </Link>
        </div>
      </nav>
      </div>
      
     )
    }
 
export default Header


import React from 'react';
import ars from '../images/ARS-logos1.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';
import { useStateValue } from '../Product/StateProvider';
import { Link } from 'react-router-dom';
import Searchbox from './Searchbox';

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className='head'>
      <nav className='navbar navbar-light bg-primary'>
        <div className='container-fluid'>
          <button
            className='btn btn-primary '
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasWithBackdrop'
            aria-controls='offcanvasWithBackdrop'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-start'
            tabIndex='-1'
            id='offcanvasWithBackdrop'
            aria-labelledby='offcanvasWithBackdropLabel'
          >
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasWithBackdropLabel'>
                Shop by Category
              </h5>
              <button
                type='button'
                className='btn-close text-reset'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <Link to='/cooking'>
                <span
                  className='list-group-item list-group-item-action active '
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                >
                  Cooking Essentials
                </span>
              </Link>
              <Link to='/food'>
                <span
                  className='list-group-item list-group-item-action active'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                >
                  Packaged Foods
                </span>
              </Link>
              <Link to='/nuts'>
                <span
                  className='list-group-item list-group-item-action active'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                >
                  Spices & Nuts
                </span>
              </Link>
              <Link to='/beverages'>
                <span
                  className='list-group-item list-group-item-action active'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                >
                  Snacks & Beverages{' '}
                </span>
              </Link>
            </div>
          </div>

          <span className='navbar-brand me-auto'>
            <Link to='/'>
              <img
                src={ars}
                width='40'
                height='30'
                className='d-inline-block align-text-top'
                alt=' '
              />
            </Link>
          </span>
          <Link to="/add">
          <div>
          <button type="button" class="btn btn-secondary btn-group me-2">AddProduct</button>
          </div>
          </Link>
         <div className="data">
          <Searchbox />
          </div>

          <Link to='/checkout'>
            <div className='basket'>
              <form className='d-flex'>
                <span className='bi bi-cart3 btn btn-primary'>
                  {' '}
                  {basket?.length}{' '}
                </span>
              </form>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;

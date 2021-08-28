import React from 'react';
import ars from '../src/images/ARS-logos1.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

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
         
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-danger' type='submit'>
              Search
            </button>
          </form>

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

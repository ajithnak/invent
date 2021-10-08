import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Product/StateProvider';

function Edit(props) {
  const { id, title, image, price, rating, stock, addToBasket } = props;
  const [stockNum, setStockNum] = useState(stock);
  const [dummy, dispatch] = useStateValue();
  return (
    <div className='col'>
      <div className='card'>
        <img
          style={{ width: '50%', height: 'auto', marginTop: '4%' }}
          src={image}
          className='card-img-top rounded mx-auto d-block'
          alt={`food_${id}`}
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>Price: {price}</p>
          <p className='card-text1'>Rating: {
            Array(rating)
            .fill()
            .map((_) => (
            <p>⭐</p>
            ))
          }</p>
          <p className='card-text'>Stock: {stockNum}</p>
          {stockNum === 0 ? (
            <div className='d-grid gap-2 col-6 mx-auto'>
              <button className='btn btn-danger' type='button' disabled>
                Out of stock
              </button>
            </div>
          ) : (
            <>
            <div className='d-grid gap-2 col-6 mx-auto'>
              <button
                onClick={() => {
                  addToBasket(dispatch, {
                    id,
                    title,
                    image,
                    rating,
                    stock: stockNum,
                    price,
                  });
                  setStockNum(parseInt(stockNum) - 1);
                }}
                className='btn btn-primary'
                type='button'
              >
                Add to Cart
              </button>
              </div>
              <div className='d-grid gap-2 col-6 mx-auto'>
              <Link className="btn btn-primary" to ={{pathname:"/detail/edit/"+id,
                     state:{fromDashboard : true}}}>
              Edit
            </Link>
            </div>
              <div className='d-grid gap-2 col-6 mx-auto'>
              <button onClick={() => {
                fetch(`http://localhost:3001/Product/${id}`, {method: 'DELETE', headers: { 'Content-Type': 'application/json' } 
                }).then(() => window.location.href="/")
              }} className="btn btn-primary" type='button'>Delete</button>
            </div> 
          </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Edit;

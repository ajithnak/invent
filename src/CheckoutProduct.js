import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();
  console.log(id, title, image, price, rating);
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='' />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <div className='d-grid gap-2 d-md-block'>
          <button
            onClick={removeFromBasket}
            className='btn btn-primary'
            type='button'
          >
            Remove From cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
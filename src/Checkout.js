import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const[{basket}]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            
    {basket?.length ===0 ?(
        <div>
            <h2>Your Shopping cart is empty</h2>
            <p>
                You have no items in your cart. To buy one or more items, click "Add to cart" next to the item
            </p>
        </div>
    ): (
        <div>
            <h2 className="checkout__title"> Your Shopping Basket</h2>
            {basket?.map((item) => {
                console.log(item);
                return(
           <CheckoutProduct
            id= {item.id}
           title={item.title}
            image={item.image}
            price={item.price}
           rating={item.rating}
            stock={item.stock}
            />
            )
        })}
        </div>
    )}
    </div>
    {basket.length > 0 &&(
        <div className="checkout__right">
            <Subtotal/>
            </div>
    )}
 </div>
    );
}

export default Checkout;

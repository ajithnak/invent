import React from "react";
import "./Product.css";
import{useStateValue} from "./StateProvider"

function Product(props){
    const {id,title,image,price,rating,stock,addToBasket}= props;
    const [{basket}, dispatch,]= useStateValue();
    return (
        <div className="product">
              <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                    <p>⭐</p>
                    ))
                }
                </div>
            </div>
            <img src={image} alt=""/>
            <div className="remain">
            <small> Available Stock : {stock}</small>
            </div>
            {stock === 0 ?(
               <div>
               <button class="btn btn-danger" type="button" disabled >Out of stock</button>
               </div>
            ): (
                <div class="d-grid gap-2 d-md-block">
               <button onClick={() => addToBasket(dispatch, {id, title, image, rating, stock, price})} class="btn btn-primary" type="button" >Add to Cart</button>
               </div>
                
            )
            }
        </div>
    )
    }
    


export default Product

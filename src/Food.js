import React from 'react';
import "./Food.css";
import Product from './Product';
import { useStateValue } from './StateProvider';

function Food() {
    const data = useStateValue();
    const addToBasket=(dispatch, item) =>{
        dispatch({
        type: 'ADD_TO_BASKET',
        item,
        id: item.id
    })
};
console.log(data)
    return (
        <div className="home2">
           <div className="row2">
            <Product
                id="5"
                title="MTR Dosa Breakfast Mix, 500g"
                price={94}
                rating={4}
                stock={5}
                addToBasket={addToBasket}
                image="https://m.media-amazon.com/images/I/71KWPtZxk9L._AC_UL480_FMwebp_QL65_.jpg"
            />
            <Product
                id="6"
                title="Maggi Pazzta Masala Penne, 65g"
                price={21}
                rating={4}
                stock={5}
                addToBasket={addToBasket}
                image="https://m.media-amazon.com/images/I/81xadE2ZfXL._AC_UL480_FMwebp_QL65_.jpg"
            />
            </div>
            <div className="row2">
            <Product
                id="7"
                title="Dabur Honey 100%, Squeezy Pack - 400g"
                price={247}
                rating={4}
                stock={5}
                addToBasket={addToBasket}
                image="https://m.media-amazon.com/images/I/815Eav5ouyS._AC_UL480_FMwebp_QL65_.jpg"
            />
            <Product
                id="8"
                title="Kellogg's Corn Flakes Original,1.2 kg Pack"
                price={375}
                rating={4}
                stock={5}
                addToBasket={addToBasket}
                image="https://m.media-amazon.com/images/I/71cqU2ZyPNL._AC_UL480_FMwebp_QL65_.jpg"
            />
            </div>
            </div> 
        
    )
}

export default Food

import React from 'react';
import "./Cooking.css";
import Product from './Product';

function Cooking() {
    return (
        <div className="home2">
           <div className="row2">
            <Product
                id="1"
                title="Daawat Rozana Super Basmati Rice, 5kg"
                price={299}
                rating={4}
                stock={5}
                image="https://m.media-amazon.com/images/I/810jp1zceeL._AC_UL480_FMwebp_QL65_.jpg"
            />
            <Product
                id="2"
                title="Saffola Active Refined Cooking oil | 5 Litre jar"
                price={948}
                rating={5}
                stock={5}
                image="https://m.media-amazon.com/images/I/615itlClo5L._AC_UL480_FMwebp_QL65_.jpg"
            />
            </div>
            <div className="row2">
            <Product
                id="3"
                title="Pillsbury Atta Wheat Grains,5 kgg"
                price={219}
                rating={5}
                stock={5}
                image="https://m.media-amazon.com/images/I/71VE6FoP-nL._AC_UL480_FMwebp_QL65_.jpg"
            />
            <Product
                id="4"
                title="Tata Sampann Moong Dal Split |, 1kg"
                price={152}
                rating={4}
                stock={5}
                image="https://m.media-amazon.com/images/I/71AdhVOWfXL._AC_UL480_FMwebp_QL65_.jpg"
            />
            </div>
            </div> 
    )
}


export default Cooking

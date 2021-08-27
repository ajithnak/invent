import React from 'react';
import "./Nuts.css";
import Product from './Product';

function Nuts() {
    return (
      <div className="home3">
      <div className="row3">
       <Product
           id="9"
           title="Tata Sampann Chilli Powder, 200g"
           price={42}
           rating={4}
           stock={5}
           image="https://m.media-amazon.com/images/I/61Rpon5gKEL._AC_UL480_FMwebp_QL65_.jpg"
       />
       <Product
           id="10"
           title="Tata Sampann Coriander Powder Masala, 200g"
           price={52}
           rating={4}
           stock={5}
           image="https://m.media-amazon.com/images/I/613XDdQferL._AC_UL480_FMwebp_QL65_.jpg"
       />
       </div>
       <div className="row3">
       <Product
           id="11"
           title="Amazon Brand - Solimo Premium Almonds, 500g"
           price={141}
           rating={4}
           stock={5}
           image="https://m.media-amazon.com/images/I/81-8rQFKVsL._AC_UL480_FMwebp_QL65_.jpg"
       />
       <Product
           id="12"
           title="Amazon Brand - Solimo Premium Cashews, 250g"
           price={270}
           rating={4}
           stock={5}
           image="https://m.media-amazon.com/images/I/41XmsWyYlOL._AC_UL480_FMwebp_QL65_.jpg"
       />
       </div>
       </div> 
    )
}






export default Nuts

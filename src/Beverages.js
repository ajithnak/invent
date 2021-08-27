import React from 'react';
import "./Beverages.css";
import Product from './Product';

function Beverages() {
    return (
      <div className="home4">
      <div className="row4">
       <Product
           id="13"
           title="Tata Tea Gold Care, 500 g"
           price={240}
           rating={4}
           stock={5}
           image="https://m.media-amazon.com/images/I/61c0SDhMlVL._AC_UL480_FMwebp_QL65_.jpg"
       />
       <Product
           id="14"
           title="BRU Instant Coffee, 100g"
           price={170}
           rating={4}
           stock={5}
           image="https://m.media-amazon.com/images/I/61ArPyMg16L._AC_UL480_FMwebp_QL65_.jpg"
       />
       </div>
       <div className="row4">
       <Product
           id="15"
           title="B Natural Guava Juice, 1L (Pack of 2)"
           price={176}
           rating={4}
           stock={5}
           image="https://m.media-amazon.com/images/I/715h2FpT5VL._AC_UL480_FMwebp_QL65_.jpg"
       />
       <Product
           id="16"
           title="B Natural Orange+ Juice, 1L (Pack of 2)"
           price={208}
           rating={4}
           stock={5}
           image="https://m.media-amazon.com/images/I/71P63uq2DZL._AC_UL480_FMwebp_QL65_.jpg"
       />
       </div>
       </div> 
    )
}





export default Beverages

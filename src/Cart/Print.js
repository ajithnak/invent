import React from 'react';
import {useStateValue} from "../Product/StateProvider";
import CurrencyFormat from 'react-currency-format';
import Printpdf from "./Printpdf";
import {getBasketTotal} from "../Product/Reducer";

function Print( ) {
    const[{basket}]= useStateValue();
    return (
        <div className="printbill">
           <div className="d-grid gap-2 col-6 mx-auto">
<button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
 Print Bill
</button>
</div>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Invoice Bill</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="products">
    {basket?.map ((item) =>{
        return(
      <table className="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  
  <tbody>
        <tr>
        <th scope="row">{item.id}</th>
        <td> {item.title}</td>
        <td>{item.price}</td>
        </tr>
      <tr>
      <td colspan="2">Total</td>
      <td><div className="total"><CurrencyFormat
           renderText={(value) =>(
               <strong>{value}</strong>
           )
            }
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            /> </div></td>
      </tr>
  </tbody>   
</table>
 )})}
 </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <div><Printpdf/></div>
      </div>
    </div>
  </div>
</div>
</div>
        
    )
}

export default Print;

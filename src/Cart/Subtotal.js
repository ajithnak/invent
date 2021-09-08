import React from 'react';
import "./Subtotal.css";
import {useStateValue} from "../Product/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../Product/Reducer';
import Print from './Print';
function Subtotal() {
    const[{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <p>
                    Subtotal ({basket.length} item): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <div className="generate">
            <Print/>
            </div>
        </div>
    );
    
}

export default Subtotal

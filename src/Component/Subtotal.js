import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { useHistory } from 'react-router';

const Subtotal = () => {
    const history = useHistory();
    const [{ basket },dispatch] = useStateValue();

    let totalPrice = 0;
    basket.forEach(element => {
        totalPrice = totalPrice + element.price;
    });

    return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
            <>
                <p>
                    Subtotal ({basket?.length} items): <strong>$ {totalPrice}</strong>
                </p>
                <small className="subtotal_gift" >
                    <input type="checkbox" /> This order
                    contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"} 
        thousandSeparator={true}
        prefix={"Rs."}
        />
        <button onClick={ e => history.push("/payment")}>Proceed to checkout</button>
    </div>
    );
}

export default Subtotal;

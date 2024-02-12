import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, reducer] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length}items):
              <strong>{`${value}`}</strong>
            </p>
            <div className="subtotal__gift">
              <small>
                <input type="checkbox" />
                This order contains a gift
              </small>
              <button>Proceed to Checkout</button>
            </div>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;

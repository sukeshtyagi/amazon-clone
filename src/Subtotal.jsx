import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [{ basket }, reducer] = useStateValue();
  function getBasketTotal(basket) {
    let result = basket.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
    return result;
  }
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

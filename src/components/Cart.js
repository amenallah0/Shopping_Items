import React, { useEffect, useState } from "react";
import "../style/Cart.css";

function Cart({ cart = [], updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  useEffect(() => {
    alert(`Your Total purchase is ${total} €`);
  }, [total]);

  return isOpen ? (
    <div className="jh-cart">
      <button
        className="jh-cart-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide" : "Show"} close
      </button>

      {cart.length > 0 ? (
        <>
          <h2>Cart</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <li key={`${name}-${index}`}>
                {name} {price} € x {amount}
              </li>
            ))}
          </ul>
          <h3>Total: {total} €</h3>{" "}
          <button onClick={() => updateCart([])}>Clear bucket</button>
        </>
      ) : (
        <div> Your bucket still empty </div>
      )}
    </div>
  ) : (
    <div className="jh-cart-closed">
      <button className="jht-cart-toggle-button" onClick={()=>setIsOpen(true)}>Open</button>
    </div>
  );
}

export default Cart;
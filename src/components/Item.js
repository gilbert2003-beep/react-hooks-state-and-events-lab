import React, { useState } from "react";

const Item = ({ name, category }) => {
  const [inCart, setInCart] = useState(false);
  const cartClass = inCart ? "inCart" : "";

  const manageCart=(e)=> {
    e.preventDefault();
    setInCart((inCart) => !inCart);
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={manageCart}>
        {inCart ? "Remove from cart!" : "Add to cart!"}
      </button>
    </li>
  );
};

export default Item;

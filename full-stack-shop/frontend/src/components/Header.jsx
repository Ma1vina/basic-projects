import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "./logo.png";


export function Header() {
  const count = useSelector((state) => state.count.count);

  let summ = count.reduce((acc, elem) => {
    if (elem !== undefined) {
      return acc + elem;
    } else {
      return acc;
    }
  }, 0);

  return (
    <div className="containerHeader">
      <div className="BoxLogo">
        <img
          className="logoStyle"
          src={logo}
          width="70px"
          height="70px"
        ></img>
      </div>
      <div className="BoxText">
        <span>
          <Link to="/">
            <h1>Shop</h1>
          </Link>
          The market for recreation, leisure and tourism products
        </span>
      </div>
      <div className="BoxBasket">
        <Link to="/basket">
          <div
            className="basket"
            onClick={() => localStorage.setItem("count", JSON.stringify(count))}
          >
            Корзинa({summ})
          </div>
        </Link>
      </div>
    </div>
  );
}

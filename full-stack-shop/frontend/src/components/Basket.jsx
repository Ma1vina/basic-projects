import React from "react";
import { BasketProd } from "./BasketProd";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../data";

export function Basket() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);

  const setCountforElems = (i, count) => {
    dispatch({ type: "SETCOUNTFORINDEX", payload: { index: i, count: count } });
  };

  const summ = count.reduce((acc, elem) => {
    if (elem !== undefined) {
      return acc + elem;
    } else {
      return acc;
    }
  }, 0);
  let res = 0;
  return (
    <div className="listBasket">
      {data.map((elem, i) => {
        if (count[i] !== undefined) {
          if (count[i] !== null) {
            let resElem = elem.price * count[i];
            res = res + resElem;
            return (
              <BasketProd
                key={i}
                image={elem.img}
                description={elem.description}
                price={elem.price}
                count={count[i]}
                setCount={(count) => setCountforElems(i, count)}
              />
            );
          }
        }
      })}
      <div className="result-basket">
        <div className="res-prod"> Выбрано товаров: {summ} шт.</div>
        <div className="res-summ">Итого: {res} ₽</div>
      </div>
    </div>
  );
}

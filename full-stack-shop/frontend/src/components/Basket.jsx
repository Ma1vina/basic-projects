import React from "react";
import { BasketProd } from "./BasketProd";
import { useSelector } from "react-redux";

export function Basket() {
  const products = useSelector((state) => state.products.products);
  const count = useSelector((state) => state.count.count);

  const summ = count.reduce((acc, elem) => {
    if (elem !== undefined) {
      return acc + elem.count;
    } else {
      return acc;
    }
  }, 0);

  const prodFilter = products.filter((elem) => {
    return count.some((countEl) => countEl.id === elem.id); // сравниваю product и count
  });

  let res = 0;
  const cost = () => {
    for (let i = 0; i < prodFilter.length; i++) {
      for (let j = 0; j < count.length; j++) {
        if (prodFilter[i].id === count[j].id) {
          let evenProduct = prodFilter[i].price * count[j].count;
          res = res + evenProduct;
        }
      }
    }
    return res;
  };

  return (
    <div className="listBasket">
      {prodFilter.map((elem) => {
        return (
          <BasketProd
            id={elem.id}
            key={elem.id}
            image={elem.img}
            description={elem.description}
            price={elem.price}
          />
        );
      })}
      <div className="result-basket">
        <div className="res-prod"> Выбрано товаров: {summ} шт.</div>
        <div className="res-summ">Итого: {cost()} ₽</div>
      </div>
    </div>
  );
}

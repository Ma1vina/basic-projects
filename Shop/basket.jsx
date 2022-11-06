import React from "react";
import { BasketProd } from "./components/BasketProd";
import { data } from "./data";




export function Basket(props) {
  let res = 0;
  return (
    <div className="listBasket">
      {
        (data.map((elem, i) => {
          if (props.countAll[i] !==undefined) {
            if(props.countAll[i] !== null){  
            let resElem = elem.price * props.countAll[i]; 
            res = res + resElem;
            return (
              <BasketProd
                key={i}
                image={elem.img}
                description={elem.description}
                price={elem.price}
                count={props.countAll[i]}
                setCount={(count) => props.watchState(i, count)}
              />
            );
          }
          }
        }))
      }
      <div className="result-basket">
        <div className="res-prod"> Выбрано товаров: {props.value}  шт.</div>
        <div className="res-summ">Итого:  {res} ₽</div>
      </div>
    </div>
  );
}


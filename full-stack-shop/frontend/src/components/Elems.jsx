import React from "react";
import { Prod } from "./Prod";
import { useDispatch, useSelector } from "react-redux";
// import { data } from "../data";


export function Elems() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);
  const products = useSelector((state) => state.products.products)

  const setCountforElems = (i, count) => {
    dispatch({ type: "SETCOUNTFORINDEX", payload: { index: i, count: count } });
  };


  return (
    <div className="BodyBox">
      {products.map((elem, i) => {
        const summ = elem.price * count[i]
        return (
          <Prod
          summ ={summ || 0}
            text={elem.text}
            key={elem.id}
            id= {elem.id}
            image={elem.img}
            description={elem.description}
            price={elem.price}
            count={count[i] || 0}
            setCount={(count) => setCountforElems(i, count)}
          />
        );
      })}
    </div>
  );
}

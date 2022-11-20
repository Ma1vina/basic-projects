import React from "react";
import { data } from "../data";
import { Prod } from "./Prod";
import { useDispatch, useSelector } from "react-redux";


export function Elems() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);

  const setCountforElems = (i, count) => {
    dispatch({ type: "SETCOUNTFORINDEX", payload: { index: i, count: count } });
  };


  return (
    <div className="BodyBox">
      {data.map((elem, i) => {
        const summ = elem.price * count[i]
        return (
          <Prod
          summ ={summ || 0}
            text={elem.text}
            key={i}
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

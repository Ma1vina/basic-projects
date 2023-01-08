import React, { useState } from "react";
import { About } from "./About";
import { useDispatch, useSelector } from "react-redux";

export function Prod(props) {
  const [isOpen, setisOpen] = useState(false);
  const dispatch = useDispatch();

  function inc() {
    dispatch({ type: "INCREMENT", payload: props.id });
  }
  function dec() {
    dispatch({ type: "DECREMENT", payload: props.id });
  }

  const counter = useSelector((state) => {
    let findCount = state.count.count.find((elem) => elem.id === props.id);
    if (!findCount) {
      return 0;
    }
    return findCount.count;
  });

  return (
    <div className="Box">
      <img src={props.image} width="170" height="170" />
      <br />
      {props.description}
      <br />
      <br />
      {props.price} ₽
      <br /> <br />
      <br />
      В корзину:
      <br /> <br />
      <button className="btn-about" onClick={() => setisOpen(true)}>
        Подробнее
      </button>
      <button onClick={dec}>-</button>
      {counter}
      <button onClick={inc}>+</button>
      <About
        summ={props.summ}
        counter={counter}
        elem={props.elem}
        description={props.description}
        setisOpen={setisOpen}
        isOpen={isOpen}
        dec={dec}
        inc={inc}
        text={props.text}
        img={props.image}
        price={props.price}
      />
    </div>
  );
}

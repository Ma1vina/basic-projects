import React from "react";
import { useState } from "react";
import { About } from './About';

export function Prod(props) {
  const [isOpen, setisOpen] = useState(false);


  function inc() {
    props.setCount(props.count + 1);
  }
  function dec() {
    if (props.count > 0) {
      props.setCount(props.count - 1);
    } else {
      props.setCount(0);
    }
  }
  return (
    <div className="Box">
     <img src={props.image} width="170" height="170"/>
      <br />
      {props.description}
      <br />
      <br />
      {props.price} ₽
      <br /> <br />
      <br />
      В корзину:
      <br /> <br />
      <button className="btn-about" onClick={() =>setisOpen(true)}>Подробнее</button>
      <button onClick={dec}>-</button>
      {props.count}
      <button onClick={inc}>+</button>
      <About summ={props.summ} elem={props.elem} description ={props.description} setisOpen ={setisOpen} isOpen={isOpen} dec={dec} inc={inc} text={props.text} count={props.count} img={props.image} price={props.price}/>
    </div>
  );
}

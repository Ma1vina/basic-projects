import React from "react";

export function About(props) {
  let cost = props.price * props.counter;
  if (props.isOpen === true) {
    return (
      <div className="window">
        <div className="modal">
          <button className="inPageBtn" onClick={() => props.setisOpen(false)}>
            x
          </button>
          <div>
            <div className="open-prod">
              <div className="open-prod-img">
                <img src={props.img} width="300" height="300" />
              </div>
              <div className="box-open-prod">
                <div className="open-prod-desc">{props.description}</div>
                <div className="open-prod-text">Описание: {props.text}</div>
                <div className="open-prod-bask">
                  В корзине: <button onClick={props.dec}>-</button>
                  {props.counter}
                  <button onClick={props.inc}>+</button>
                </div>
                <div className="open-prod-price">Цена: {cost} ₽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div> </div>;
  }
}

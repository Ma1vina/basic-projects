import React from "react"

export function Prod(props){
function inc(){
   let x = props.count+1
   props.setCount(x)
}
function dec(){
    if (props.count > 1) {
  let y = props.count - 1;
            props.setCount(y)
      } else {
        props.setCount(0);
      }
 }
    return(
        <div className="Box">
            <img src={props.image} width="150px" height="150px" />
            <br/>
            {props.description}
            
            <br/> <br/>
            {props.price}
            <br/> <br/>
            <br/> <br/>
            <br/> <br/>
            В корзину:
             <button onClick={dec}>-</button>
            {props.count}
            <button onClick={inc}>+</button>

        </div>
    )
}

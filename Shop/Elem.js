import React from "react";
export function Elem(props){

    if(props.counter<0){
     console.log(props.counter)
    }else{

    return(
        <div className="box">

<img src= {props.src} alt={props.alt} width={props.width} height={props.height}></img>

     <p>{props.description}</p>
     <p className="classNameSale">{props.sale}</p>
     <p>В корзину:</p>
     <button onClick={()=>props.decrease(props.counter, props.funcSt)}>-</button>
     <span> {props.counter} </span>
     <button onClick={()=>props.increase(props.counter, props.funcSt)}>+</button>
     </div>
    )
}
}


import React from "react";

 export function Header(props){

 return(
    <div className={props.className}>
        <img className={props.classNameLog} src={props.src} alt={props.alt} width={props.width} height={props.height}></img>
    <span><h1>Shop</h1>The market for recreation, leisure and tourism products</span>
    <div className={props.classNameBasket}>Корзинa ({props.value})
    </div>
    </div>
 )
 }
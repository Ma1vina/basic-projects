import React from "react";

 export function Header(props){


 return(
    <div className={props.className}>
        <img className={props.classNameLog} src={props.src} alt={props.alt} width={props.width} height={props.height}></img>
    <h1>Shop</h1>
    <span>The market for recreation, leisure and tourism products</span>
    <div className={props.classNameBasket}>Корзина
    <span> ({props.stateAll})</span>
    </div>
    </div>
 )
 }
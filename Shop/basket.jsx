import React from "react";
import { BasketProd } from "./components/BasketProd";
import { data } from "./data";

export function Basket(props){


    return(
        <div className="BodyBox">
            {data.map((elem, i) => {
                if(props.countAll[i]>0){
     return(
        <BasketProd key={i} image={elem.img} description={elem.description}  price = {elem.price} 
        count={props.countAll[i]}
        setCount ={(count) =>props.watchState(i,count)} />
     )
                }
            })}
        </div>
    )
        }
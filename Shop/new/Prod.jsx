import React from "react"
export function Prod(props){
    return(
        <div className="Box">
     <img src={props.image} width="170" height="170" />

            <br/>
            {props.description}
            <br/>
            {props.price}
            <br/> <br/>
            <br/> <br/>
            В корзину:
            <br/> <br/>
            <button>-</button>
            c
            <button>+</button>
        </div>
    )
}

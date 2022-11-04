import React from 'react'

export function Prod(props){


function inc(){
props.setCount(props.count+1)
}
function dec(){
    if(props.count !== undefined){
        props.setCount(props.count -1)  
    }else{
        props.setCount(0)
    }
    
}
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
            <button onClick={dec}>-</button>
            {props.count}
            <button onClick={inc}>+</button>
        </div>
    )
}

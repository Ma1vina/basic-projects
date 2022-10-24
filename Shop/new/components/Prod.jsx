import React from "react"

export function Prod(props){
    return(
        <div>
            {props.img}

            <br/>
            {props.description}
            <br/>
            {props.price}
            
            <br/> <br/>

        </div>
    )
}

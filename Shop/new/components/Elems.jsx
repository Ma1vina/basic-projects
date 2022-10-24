import React from "react"
import { data } from "../data"
import { Prod } from "../Prod"


export function Elems(){
return(
    <div className="BodyBox">
        {data.map((elem, i) => {
 return(
    <Prod key={i} image={elem.img} description={elem.description}  price = {elem.price}/>
 )
        })}
    </div>
)
}
import React from "react";

export function Catalogue(props) {
    console.log(props.list);

    let result = props.list.map((elem, index)=>{
        return(
    <div className={props.classNameP} > 
    <p key={elem.id} onClick={()=>props.getList(index)} className="p">{elem.text}</p>
    <button onClick={() => props.removeList(index)} className="btn" >x</button>
    </div>
        )
    })

    return ( 
       <div className={props.className}> {props.status} {result}</div>
     );
}


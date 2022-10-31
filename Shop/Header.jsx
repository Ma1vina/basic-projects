import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"

 export function Header(props){


 return(
    <div className="containerHeader">
        <img className='logoStyle' src={logo} alt={logo} width="70px" height="70px"></img>
    <span>    
    <Link to="/"><h1>Shop</h1></Link>
    The market for recreation, leisure and tourism products</span>
 
    <Link to='/basket'>
    <div className='basket'> Корзинa({props.value})
    </div>
    </Link>

    </div>
 )
 }
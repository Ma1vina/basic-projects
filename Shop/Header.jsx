import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"

 export function Header(props){


 return(
    <div className="containerHeader">
        <div className="BoxLogo"><img className='logoStyle' src={logo} alt={logo} width="70px" height="70px"></img></div>
        <div className="BoxText"><span>      
    <Link to="/"><h1>Shop</h1></Link>
    The market for recreation, leisure and tourism products</span></div>
    <div className="BoxBasket">
    <Link to='/basket'>
    <div className='basket' onClick={() => localStorage.setItem("prod", JSON.stringify(props.countAll))}> Корзинa({props.value})
    </div>
    </Link>
    </div>

    </div>
 )
 }
import React from "react";
import { PostItem } from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";


export function PostList({posts,title,remove}){
  

    if(!posts.length){
        return(
            <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
        )
    }
    
    return(
        <div><h1 style={{textAlign: "center"}}>{title}</h1>
        <TransitionGroup>{posts.map((elem,index)=>
         <CSSTransition
         key = {elem.id}
         timeout={500}
         classNames="post"
       >
        <PostItem remove={remove} number={index+1} post= {elem} />
        </CSSTransition>
         )}
        </TransitionGroup>
        </div>
        
    )
}
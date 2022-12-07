import React from "react";
import { PostItem } from "./PostItem";

export function PostList({posts,title,remove}){
    return(
        <div><h1 style={{textAlign: "center"}}>{title}</h1>
        {posts.map((elem,index)=>
         <PostItem remove={remove} number={index+1} post= {elem} key = {elem.id}/>
         )}</div>
        
    )
}
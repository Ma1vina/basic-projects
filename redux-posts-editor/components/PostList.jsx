import React from "react";
import { PostItem } from "./PostItem";

export function PostList(props){
    return(
        <div><h1 style={{textAlign: "center"}}>{props.title}</h1>
        {props.posts.map(elem=>
         <PostItem post= {elem} key = {elem.id}/>
         )}</div>
        
    )
}
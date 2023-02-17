import React from "react";
import { MyButton } from "./MyButton";

export function PostItem(props){

    return(
<div className="post">
    <div className="post_content">

      <strong>{props.post.id}. {props.post.title}</strong>
      <div> {props.post.body}

      </div>
    </div>

    <div className="post_btns">
      <MyButton onClick={() => props.remove(props.post)}>удалить</MyButton>
    </div>
  </div>
    )
    
}
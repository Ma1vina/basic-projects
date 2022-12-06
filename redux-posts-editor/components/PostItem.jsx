import React from "react";

export function PostItem(props){

    return(
<div className="post">
    <div className="post_content">

      <strong>{props.post.id}. {props.post.title}</strong>
      <div> {props.post.body}

      </div>
    </div>

    <div className="post_btns">
      <button>удалить</button>
    </div>
  </div>
    )
    
}
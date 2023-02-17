import React from "react";
import { MyButton } from "./MyButton";
import { MyInput } from "./MyInput";
import { useState } from "react";

export function PostForm({create}){

    const [post, setPost] = useState({title:"",body: ""})

    function addNewPost(event){
        event.preventDefault()
      const newPost = {
        ...post, id: Date.now()
      }
      create(newPost)
        setPost({title:"",body: ""})
      }
    return(
        <form>
        <MyInput value={post.title} type ="text" onChange={event => setPost({...post, title: event.target.value})} placeholder="Название поста"></MyInput>
        <MyInput value={post.body} type ="text" onChange ={event => setPost({...post, body: event.target.value})} placeholder="Описание поста"></MyInput>
        <MyButton onClick ={addNewPost} >Создать пост</MyButton>
      </form>
    )
}

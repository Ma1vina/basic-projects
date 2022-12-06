import { useState } from "react";
import "./style/App.css"
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";


function App() {
const [posts, setPosts] = useState([
  {id:1, title:"JavaScript1", body: "description1"},
  {id:2, title:"JavaScript2", body: "description2"}
])

const [title, setTitle] = useState('123')

function addNewPost(event){
event.preventDefault()
console.log(title);
}


  return (
    <div className="App">
      <form>
        <MyInput  value={title} onChange={event => setTitle(event.target.value)} placeholder="Название поста"></MyInput>
        <MyInput placeholder="Описание поста"></MyInput>
        <MyButton onClick ={addNewPost} >Создать пост</MyButton>
      </form>
    <PostList posts ={posts} title = {"Cписок постов 1"}/>

    </div>
  );
}

export default App;
import { useState } from "react";
import "./style/App.css"
import { PostList } from "./components/PostList";
import {PostForm} from "./components/PostForm";


function App() {
const [posts, setPosts] = useState([
  {id:1, title:"JavaScript1", body: "description1"},
  {id:2, title:"JavaScript2", body: "description2"}
])

const createPost = (newPost) =>{
  setPosts([...posts, newPost])

}

const removePost = (post) => {
setPosts(posts.filter(elem => elem.id !== post.id))
}

  return (
    <div className="App">
    <PostForm create={createPost} />
    <hr style={{margin: "15px 0"}}/>

     <div>
     <select>
        <option value="value">По названию</option>
        <option value="value">По описанию</option>
      </select>
     </div>

    {posts.length !== 0 
    ? <PostList remove ={removePost} posts ={posts} title = {"Cписок постов 1"}/>
    :
 <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
}
   

    </div>
  );
}

export default App;
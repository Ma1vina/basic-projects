import { useState } from "react";
import "./style/App.css"
import { PostList } from "./components/PostList";
import {PostForm} from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import {axios} from "axios";



function App() {
const [posts, setPosts] = useState([])
const [filter, setFilter] = useState({sort: "", query: ""});
const [modal,setModal] = useState(false);
const sortAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

const createPost = (newPost) =>{
  setPosts([...posts, newPost])
  setModal(false)

}

// async function fetchPosts(){
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//   console.log(response.data);
// }

async function fetchPosts(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dat = await response.json()
  const result = await dat.data
  console.log(result);
}

const removePost = (post) => {
setPosts(posts.filter(elem => elem.id !== post.id))
}
 

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{marginTop:30}} onClick={() => setModal(true)}> Создать пользователя</MyButton>
      <MyModal visible={modal} setVisible= {setModal}><PostForm create={createPost} /></MyModal>
    
    <hr style={{margin: "15px 0"}}/>
    
    <PostFilter filter={filter} setFilter={setFilter}/>

    <PostList remove ={removePost} posts ={sortAndSearchedPosts} title = {"Cписок постов 1"}/>

    </div>
  );
}

export default App;
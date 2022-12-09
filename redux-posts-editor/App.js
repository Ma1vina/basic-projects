import { useMemo, useState } from "react";
import "./style/App.css"
import { PostList } from "./components/PostList";
import {PostForm} from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";


function App() {
const [posts, setPosts] = useState([
  {id:1, title:"аа", body: "бб"},
  {id:2, title:"гг", body: "вв"},
  {id:3, title:"мм", body: "аа"}
])
// const [searchQuery, setSearchQuery] = useState("");
// const [selectedSort, setSelectedSort] = useState("");

const [filter, setFilter] = useState({sort: "", query: ""});

const sortedPosts =useMemo(() =>{
console.log("worked getSortedPosts")
if(filter.sort){
  return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
}
return posts
},[filter.sort,posts])



const sortAndSearchedPosts =useMemo(() => {
return sortedPosts.filter(post=> post.title.toLowerCase().includes(filter.query.toLowerCase()))
}, [filter.query,sortedPosts])

const createPost = (newPost) =>{
  setPosts([...posts, newPost])

}

const removePost = (post) => {
setPosts(posts.filter(elem => elem.id !== post.id))
}
 
const sortPosts = (sort)=>{
  setSelectedSort(sort)
}


  return (
    <div className="App">
    <PostForm create={createPost} />
    <hr style={{margin: "15px 0"}}/>
    
    <PostFilter filter={filter} setFilter={setFilter}/>

    {sortAndSearchedPosts.length !== 0 
    ? <PostList remove ={removePost} posts ={sortAndSearchedPosts} title = {"Cписок постов 1"}/>
    :
 <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
}
   

    </div>
  );
}

export default App;
import { useMemo, useState } from "react";
import "./style/App.css"
import { PostList } from "./components/PostList";
import {PostForm} from "./components/PostForm";
import { MySelect } from "./components/MySelect";
import { MyInput } from "./components/UI/input/MyInput";


function App() {
const [posts, setPosts] = useState([
  {id:1, title:"аа", body: "бб"},
  {id:2, title:"гг", body: "вв"},
  {id:3, title:"мм", body: "аа"}
])
const [searchQuery, setSearchQuery] = useState("");
const [selectedSort, setSelectedSort] = useState("");


const sortedPosts =useMemo(() =>{
console.log("worked getSortedPosts")
if(selectedSort){
  return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]));
}
return posts
},[selectedSort,posts])



const sortAndSearchedPosts =useMemo(() => {
return sortedPosts.filter(post=> post.title.toLowerCase().includes(searchQuery.toLowerCase()))
}, [searchQuery,sortedPosts])

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
     <div>

      <MyInput 
      value={searchQuery}
      onChange ={event => setSearchQuery(event.target.value)}
      placeholder="Поиск..."/>


    <MySelect
     value={selectedSort} 
     onChange={sortPosts}
     defaultValue="Cортировка по" 
     options={[
      {value: 'title', name: "По названию"},
      {value: 'body', name: "По описанию"}
    ]}/>
     </div>

    {sortAndSearchedPosts.length !== 0 
    ? <PostList remove ={removePost} posts ={sortAndSearchedPosts} title = {"Cписок постов 1"}/>
    :
 <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
}
   

    </div>
  );
}

export default App;
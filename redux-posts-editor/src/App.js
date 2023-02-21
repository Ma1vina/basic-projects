import { useEffect, useState } from "react";
import "./App.css"
import { PostList } from "./PostList";
import {PostForm} from "./PostForm";
import { PostFilter } from "./PostFilter";
import { MyModal } from "./MyModal";
import { MyButton } from "./MyButton";
import { usePosts } from "./usePosts";
import PostService from "./PostService";
import { Loader } from "./Loader";
import { useFetching } from "./useFetching";
import { getPagesArray, getPagesCount } from "./pages";
import { Pagination } from "./Pagination";

function App() {
const [posts, setPosts] = useState([])
const [filter, setFilter] = useState({sort: "", query: ""});
const [modal,setModal] = useState(false);
const sortAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
const [totalPages,setTotalPages] = useState(0);
const [limit,setLimit] = useState(10);
const [page,setPage] = useState(1)

const [fetchPosts,isPostsLoading, postError] = useFetching(async() =>{
  const response = await PostService.getAll(limit,page)
    setPosts(response.data);

    const totalCount =  response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount,limit))
})

useEffect(() =>{
  fetchPosts();
},[page]);

const createPost = (newPost) =>{
  setPosts([...posts, newPost])
  setModal(false)

}

const changePage = (page)=>{
setPage(page)
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
    {postError &&
    <h1 style={{display:"flex", justifyContent:"center"}}>Произошла ошибка...</h1>}
     {isPostsLoading
     ? <div style={{display:"flex", justifyContent:"center", marginTop: "50px" }}><Loader/></div>
    :<PostList remove ={removePost} posts ={sortAndSearchedPosts} title = {"Cписок постов 1"}/>
}
<Pagination page={page} changePage={changePage} totalPages={totalPages}/>

    </div>
  );
}

export default App;
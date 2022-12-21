import { useEffect, useState } from "react";
import "./style/App.css"
import { PostList } from "./components/PostList";
import {PostForm} from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import { Loader } from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPagesArray, getPagesCount } from "./utils/pages";
import { Pagination } from "./components/UI/pagination/Pagination";


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
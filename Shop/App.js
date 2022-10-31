import React, {useEffect, useState} from 'react';
import './App.css';
import { Elems } from './components/Elems';
import { data } from './data';
import { Route, Routes, Link} from 'react-router-dom';
import { Layout } from './Layout';
import { Basket } from './basket';



function App() {
 const [countAll, setCountAll] = useState([]);

useEffect(() =>{
  const startCountInit = data.map(() =>0)
  // console.log(startCountInit )
    setCountAll(startCountInit)
  },[])
  
console.log(countAll)

 const setCountforElems = (i, count) =>{
  countAll[i] = count
  setCountAll([...countAll])
 }

 let summ = countAll.reduce((acc,elem)=>{
  return acc + elem
 }, 0)


  return (
    <Routes>

       <Route path="/" element={<Layout value ={summ}/> }>

        <Route index element ={<Elems watchState = {setCountforElems} countAll={countAll} />}></Route>
        <Route path='/basket' element ={<Basket watchState = {setCountforElems} countAll={countAll} />}></Route>

       </Route>
       
    </Routes>
  );
}

export default App;

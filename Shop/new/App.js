import React, {useEffect, useState} from 'react';
import './App.css';
import logo from "./logo.png"
import { Header } from './Header';
import { Elems } from './components/Elems';
import { data } from './data';



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
    <div className="App">
       <Header classNameBasket={'basket'} className={"containerHeader"} classNameLog={'logoStyle'} src={logo} alt={"logo"} width={"70px"} height={"70px"} value = {summ}/>
     <div>
      <Elems watchState = {setCountforElems} countAll={countAll} />
     </div>
    </div>
  );
}

export default App;

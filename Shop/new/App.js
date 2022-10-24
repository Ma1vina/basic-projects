import React, {useState} from 'react';
import './App.css';
import logo from "./logo.png"
import { Header } from './Header';
import { Elems } from './components/Elems';



function App() {
  return (
    <div className="App">
       <Header classNameBasket={'basket'} className={"containerHeader"} classNameLog={'logoStyle'} src={logo} alt={"logo"} width={"70px"} height={"70px"}/>
     <div>
      <Elems/>
     </div>
    </div>
  );
}

export default App;

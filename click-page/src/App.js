import React, {useState} from "react"
import './App.css';
import { Page } from './Page';

function App() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="App">

     <div className="btn">
     <button onClick={() =>setisOpen(true)}>Боковая панель</button>
     </div>

     <Page use={isOpen} classNameB='inPageBtn' page={setisOpen} classNameW="window"/>
  
    </div>
  );
}

export default App; 
import React, {useState} from "react"
import { lists } from "./List";
import { Catalogue } from "./Catalogue";
import "./App.css"

function App() {
  const [notes1, setNotes1] = useState([...lists]);
  const[notes2, setNotes2] = useState([]);

  const copy1 = [...notes1];
  const copy2 = [...notes2];

function replaceElem1(index){
  const x = copy1.splice(index,1);
  setNotes1(copy1);
  copy2.push(...x);
  setNotes2(copy2);
}

function replaceElem2(index){
  const y = copy2.splice(index,1);
  setNotes2(copy2);
  copy1.push(...y)
  setNotes1(copy1);
}

function removeElem1(index){
  copy1.splice(index,1);
  setNotes1(copy1);
}

function removeElem2(index){
  copy2.splice(index,1);
  setNotes2(copy2);
}

  return (
    <div className="App">

    <Catalogue list={notes1} removeList={removeElem1}  getList={replaceElem1} classNameP="styleP"  className = "left" status='Нужно сделать:'/>
    <Catalogue list={notes2}  removeList={removeElem2} getList={replaceElem2} classNameP="styleP"  className = "right" status='Выполнено:'/>
    </div>
  );
}

export default App;
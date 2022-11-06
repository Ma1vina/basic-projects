import React, { useEffect, useState } from "react";
import "./App.css";
import { Elems } from "./components/Elems";
import { data } from "./data";
import { Route, Routes, Link } from "react-router-dom";
import { Layout } from "./Layout";
import { Basket } from "./basket";
import { OpenProduct } from "./components/OpenProduct";

function App() {
  const [countAll, setCountAll] = useState([]);

  useEffect(() => {
    const startCountInit = data.map(() => undefined);

    const newStorage = localStorage.getItem("prod");
    if(newStorage){
    setCountAll(JSON.parse(newStorage))}
    else{
      setCountAll(startCountInit);
    };
  }, []);

  console.log(countAll);

  const setCountforElems = (i, count) => {
    countAll[i] = count;
    setCountAll([...countAll]);
  };

  let summ = countAll.reduce((acc, elem) => {
    if (elem !== undefined) {
      return acc + elem;
    } else {
      return acc;
    }
  }, 0);

  // const get = (elem) =>{
  //   data.filter(p => p.id == elem.id)

  return (
    <Routes>
      <Route path="/" element={<Layout value={summ} countAll={countAll} />}>
        <Route
          index
          element={<Elems watchState={setCountforElems} countAll={countAll} />}
        ></Route>
        <Route
          path="/basket"
          element={
            <Basket
              result={summ}
              value={summ}
              watchState={setCountforElems}
              countAll={countAll}
            />
          }
        ></Route>



<Route
          path="/openProd"
          element={
            <OpenProduct
            watchState={setCountforElems} countAll={countAll}
            />
          }
        ></Route>





      </Route>
    </Routes>
  );
}

export default App;
